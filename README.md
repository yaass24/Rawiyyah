# RAWIYYAH | رَويَّة

**Inclusive Playground Design & Accessibility Assessment**

RAWIYYAH is a web-based workspace for planning inclusive playgrounds, reviewing accessibility considerations, and managing design projects from assignment to reporting.

### Explore the Website

**[Visit RAWIYYAH](https://rawiyyah.free.je/)**

> **Best viewed on a laptop or desktop:** RAWIYYAH's interactive design workspace is optimized for larger screens. For the best experience, please open the website on a computer; mobile use may be limited.

### Brand Identity | الهوية البصرية

**[View RAWIYYAH Brand Identity on Figma](https://www.figma.com/design/MYUjlsdpemHDZ4yI7Ly67k/%D8%B1%D9%8E%D9%88%D9%90%D9%8A%D9%91%D8%A9-RAWIYYAH?node-id=0-1)**

### The Meaning Behind RAWIYYAH | معنى رَويَّة

Inspired by **التروّي والتأنّي** — thoughtful consideration before taking action — the name *RAWIYYAH* reflects the project's guiding idea: **review accessibility before building, rather than discovering barriers after implementation.** The goal is to encourage deliberate, inclusive design decisions from the earliest planning stages.

### Overview

The platform brings the playground design process into one workspace. Interactive design and visualization tools are paired with structured accessibility review, project tracking, and reporting.

### Why RAWIYYAH?

Accessibility barriers can be difficult and expensive to address after a playground has been built. RAWIYYAH aims to help design teams consider inclusive access earlier, bringing playground layout, route connectivity, and review documentation into one workflow.

### Alignment with Saudi Vision 2030

RAWIYYAH aligns with the aspirations of **Saudi Vision 2030**, particularly its **Vibrant Society** pillar and the **Quality of Life Program**, by exploring how digital design tools can support more inclusive public recreation spaces. This is a project-level alignment, not an official affiliation or endorsement.

### Current Scope & Development Roadmap

A review of an available application source file identifies the following scope and opportunities. These describe code-level capabilities; their behavior in the deployed version has not been independently verified.

**Current capabilities in the code**
- Interactive 2D/3D playground layout editing and saved design versions.
- A **limited comparison within one project** is implemented in the available JavaScript source: the button routes to a comparison screen, and there are handlers to save design snapshots, select saved versions, display differences, and restore versions. This does **not** establish that the feature works reliably in the deployed website. It also does not compare independent projects or fully evaluated design alternatives.
- Rule-based assessment of 13 accessibility considerations, plus a **planning-level path connectivity check** based on the modeled entrances, pathways, and play equipment.
- Design assignments, engineering team accounts, internal review workflows, and printable assessment reports.

**Gaps and planned improvements**
- **Comparison testing and expansion:** Test and fix the existing snapshot comparison in the live environment (including button navigation, saving, and version selection), then add comparison of separate alternatives or projects with consistent assessment indicators.
- **Multilingual support:** Extend the current Arabic-only interface to English and potentially other languages for a wider range of engineering teams.
- **Assessment validation:** Review the rules and results with accessibility specialists, end users, and applicable local requirements. The current connectivity model is an indicative planning check, **not an engineering-grade accessibility verification**.
- **AI-supported guidance:** Explore explainable suggestions for detected issues in a later phase; this is **not an implemented AI feature** in the reviewed code.
- **Workflow reliability and user experience:** Expand cross-account end-to-end testing, improve handling of save conflicts and failures, and refine accessible interactions and feedback.

### Language & Local Context | اللغة والهوية المحلية

RAWIYYAH currently offers an Arabic interface, reflecting the project's Saudi origin and local design context. The intended users may come from different linguistic backgrounds; additional language support is therefore included in the future development roadmap.

### Features

- **Interactive playground design** — Create and visualize playground layouts.
- **Accessibility review** — Evaluate 13 accessibility considerations and document findings.
- **Project management** — Assign design requests, track progress, and coordinate reviews.
- **Team management** — Manage designer accounts and assignments through role-based access.
- **Project reports** — Organize design outcomes and assessment observations.

### Reference Frameworks

RAWIYYAH's accessibility review approach is informed by published guidance from **UNICEF** on inclusive playground design and the **King Salman Center for Disability Research** on universal accessibility in the built environment. The project's 13 review considerations are an application-level interpretation, not an official checklist or certification issued by either organization.

**References:** [UNICEF — Inclusive Playground Toolkit](https://www.unicef.org/malaysia/reports/inclusive-playground) · [King Salman Center for Disability Research](https://www.kscdr.org.sa/)

### Technology

HTML · CSS · JavaScript · PHP · MySQL

### Project Status

A software project can be functional and valuable without being feature-complete forever. RAWIYYAH is a functional prototype available for exploration and evaluation; its development roadmap documents known limitations and future enhancements rather than implying that every feature is finished. While its core features are implemented, occasional issues may occur during use. The references above inform the design approach; the project is not affiliated with, endorsed by, or certified by either organization. Its accessibility review results are for design support and do not constitute official compliance certification.

---

### RAWIYYAH Team | فريق رَويَّة

A collaborative project by the **RAWIYYAH Team**.

**Concept and Implementation — Yasmin Almomen**
