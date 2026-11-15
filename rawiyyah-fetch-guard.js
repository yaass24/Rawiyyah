/*!
 * RAWIYYAH fetch response guard
 *
 * Handles hosting security pages returned instead of JSON.
 * - Never retries POST / PUT / PATCH / DELETE requests.
 * - Never silently reloads the page or uses hidden iframes.
 * - Keeps normal JSON and intentional HTML responses unchanged.
 * - Converts unexpected HTML from JSON/API requests into a readable JSON error.
 *
 * IMPORTANT:
 * Include BEFORE the application's scripts:
 *   <script src="rawiyyah-fetch-guard.js"></script>
 *
 * This does not fix expired hosting cookies or server-side errors. It prevents
 * JSON parsing exceptions and gives the application a consistent error response.
 */
(function () {
  'use strict';

  if (typeof window === 'undefined' || !window.fetch || window.__rawiyyahFetchGuard) {
    return;
  }

  window.__rawiyyahFetchGuard = true;
  var nativeFetch = window.fetch.bind(window);

  function sameOrigin(url) {
    try {
      return new URL(url, window.location.href).origin === window.location.origin;
    } catch (_) {
      return false;
    }
  }

  function looksLikeJsonRequest(request) {
    var accept = (request.headers.get('accept') || '').toLowerCase();
    var requestedWith = (request.headers.get('x-requested-with') || '').toLowerCase();
    var contentType = (request.headers.get('content-type') || '').toLowerCase();
    var pathname = new URL(request.url, window.location.href).pathname.toLowerCase();

    // AJAX requests whose bodies are form data are often posted to PHP endpoints
    // and still expect a JSON response.
    return accept.indexOf('application/json') >= 0 ||
      requestedWith === 'xmlhttprequest' ||
      pathname.indexOf('/api/') >= 0 ||
      /\.php$/.test(pathname) ||
      (request.method !== 'GET' &&
        (contentType.indexOf('application/json') >= 0 ||
         contentType.indexOf('application/x-www-form-urlencoded') >= 0));
  }

  function isHtml(response) {
    var type = (response.headers.get('content-type') || '').toLowerCase();
    return type.indexOf('text/html') >= 0 || type.indexOf('application/xhtml+xml') >= 0;
  }

  function jsonError(status, code, message) {
    return new Response(JSON.stringify({
      success: false,
      ok: false,
      error: message,
      code: code,
      retryable: true
    }), {
      status: status,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    });
  }

  window.fetch = function (input, init) {
    var request;

    try {
      request = new Request(input, init);
    } catch (_) {
      return nativeFetch(input, init);
    }

    if (!sameOrigin(request.url)) {
      return nativeFetch(request);
    }

    return nativeFetch(request).then(function (response) {
      if (!isHtml(response)) {
        return response;
      }

      // Read only a *clone*; leave the original response stream intact.
      return response.clone().text().then(function (body) {
        var hostChallenge = body.indexOf('aes.js') >= 0 &&
          body.indexOf('__test') >= 0;

        // Allow ordinary HTML fetches, except the known hosting challenge.
        if (!hostChallenge && !looksLikeJsonRequest(request)) {
          return response;
        }

        var message = hostChallenge
          ? 'انتهت جلسة التحقق من الاستضافة. حدّثي الصفحة ثم أعيدي المحاولة.'
          : 'استجاب السيرفر بصفحة HTML بدل بيانات JSON. يرجى المحاولة مجددًا.';

        try {
          window.dispatchEvent(new CustomEvent('rawiyyah:api-response-error', {
            detail: {
              code: hostChallenge ? 'HOSTING_CHALLENGE' : 'UNEXPECTED_HTML',
              url: request.url,
              method: request.method
            }
          }));
        } catch (_) {
          // The event is optional and should never interrupt the request.
        }

        // Do not auto-retry: a POST may already have been processed by PHP.
        // Do not auto-reload: challenge pages can otherwise cause reload loops.
        return jsonError(503, hostChallenge ? 'HOSTING_CHALLENGE' : 'UNEXPECTED_HTML', message);
      }).catch(function () {
        // If inspecting the response fails, preserve the native response.
        return response;
      });
    });
  };
})();
