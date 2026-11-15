/*!
 * rawiyyah-fetch-guard.js
 * يمنع ظهور خطأ: Unexpected token '<', "<html><bod"... is not valid JSON
 *
 * السبب: نظام الحماية في استضافة InfinityFree يرجّع صفحة تحقق (aes.js)
 * بدل JSON إذا انتهت كوكي الحماية (__test).
 *
 * الحل: هذا الملف يراقب كل طلبات fetch داخل الموقع. إذا رجعت صفحة التحقق،
 * يجدّد الكوكي في الخلفية (iframe مخفي) ثم يعيد نفس الطلب تلقائيًا،
 * فالمستخدم ما يشوف أي خطأ ولا تنمسح بياناته.
 *
 * الاستخدام: ارفعي الملف بجانب index، وأضيفي هذا السطر داخل <head>
 * قبل أي سكربت ثاني:
 *   <script src="rawiyyah-fetch-guard.js"></script>
 */
(function () {
  'use strict';
  if (!window.fetch || window.__rawiyyahFetchGuard) return;
  window.__rawiyyahFetchGuard = true;

  var originalFetch = window.fetch.bind(window);
  var refreshing = null; // طلب تجديد واحد فقط في نفس الوقت

  // هل الرد هو صفحة التحقق حقت الاستضافة؟
  function isChallenge(res) {
    var type = (res.headers.get('content-type') || '').toLowerCase();
    if (type.indexOf('text/html') === -1) return Promise.resolve(false);
    return res.clone().text().then(function (body) {
      return body.indexOf('/aes.js') !== -1 && body.indexOf('__test') !== -1;
    }).catch(function () { return false; });
  }

  // يفتح الموقع في iframe مخفي عشان سكربت الحماية يضبط الكوكي من جديد
  function refreshCookie() {
    if (refreshing) return refreshing;
    refreshing = new Promise(function (resolve) {
      var frame = document.createElement('iframe');
      var loads = 0;
      var finished = false;
      function done() {
        if (finished) return;
        finished = true;
        setTimeout(function () {
          if (frame.parentNode) frame.parentNode.removeChild(frame);
          refreshing = null;
          resolve();
        }, 300);
      }
      frame.style.display = 'none';
      frame.setAttribute('aria-hidden', 'true');
      frame.onload = function () {
        loads += 1;
        // التحميل الأول = صفحة التحقق، الثاني = بعد ضبط الكوكي والتحويل
        if (loads >= 2) done();
      };
      frame.src = '/?_r=' + Date.now();
      (document.body || document.documentElement).appendChild(frame);
      setTimeout(done, 5000); // حد أقصى للانتظار
    });
    return refreshing;
  }

  function sameOrigin(url) {
    try { return new URL(url, location.href).origin === location.origin; }
    catch (e) { return true; }
  }

  window.fetch = function (input, init) {
    var request;
    try { request = new Request(input, init); }
    catch (e) { return originalFetch(input, init); }

    if (!sameOrigin(request.url)) return originalFetch(request);

    var retryCopy = request.clone(); // نسخة للإعادة (تحفظ بيانات الفورم)

    return originalFetch(request).then(function (res) {
      return isChallenge(res).then(function (blocked) {
        if (!blocked) return res;

        return refreshCookie()
          .then(function () { return originalFetch(retryCopy); })
          .then(function (res2) {
            return isChallenge(res2).then(function (stillBlocked) {
              if (!stillBlocked) return res2;
              // آخر حل: تحديث الصفحة بالكامل
              location.reload();
              return new Promise(function () {});
            });
          });
      });
    });
  };
})();
