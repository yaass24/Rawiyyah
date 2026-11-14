# RAWIYYAH | رَويَّة

**Inclusive Playground Design & Accessibility Assessment**

RAWIYYAH is a web-based workspace for planning inclusive playgrounds, reviewing accessibility considerations, and managing design projects from assignment to reporting.

### Explore the Website

**[Visit RAWIYYAH](https://rawiyyah.free.je/)**

> **Best viewed on a laptop or desktop:** RAWIYYAH's interactive design workspace is optimized for larger screens. For the best experience, please open the website on a computer; mobile use may be limited.

### UI/UX Screen Design | تصميم واجهات النظام

**[Explore RAWIYYAH Screens & User Flow on Figma](https://www.figma.com/design/2GawzgM1IP3HQyRKrVWjN1/RAWIYYAH?node-id=101-2)** — Includes the original screen concepts, a screen-by-screen guide, and proposed manager-workflow extensions. Some designs are exploratory and may differ from the current live website.

### Brand Identity | الهوية البصرية

**[View RAWIYYAH Brand Identity on Figma](https://www.figma.com/design/MYUjlsdpemHDZ4yI7Ly67k/%D8%B1%D9%8E%D9%88%D9%90%D9%8A%D9%91%D8%A9-RAWIYYAH?node-id=0-1)**

### The Meaning Behind RAWIYYAH | معنى رَويَّة

Inspired by **التروّي والتأنّي** — thoughtful consideration before taking action — the name *RAWIYYAH* reflects the project's guiding idea: **review accessibility before building, rather than discovering barriers after implementation.** The goal is to encourage deliberate, inclusive design decisions from the earliest planning stages.

### Design Evolution

RAWIYYAH evolved through iterations from initial UX/UI concepts into a working web application. As a result, early Figma explorations may differ from the current implemented screens in layout, navigation, and workflow details. The linked Figma files separately document the visual identity and evolving UI concepts; the live website is the reference for the latest implemented interface. Any future screen archive should clearly label **initial concepts** and **implemented screens** rather than presenting them as identical.

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
- **Comparison enhancement:** The existing comparison is designed to compare the current layout against a saved version within the same project. A future enhancement would extend this to independently created design alternatives or projects, with consistent accessibility and route-connectivity indicators. Functionality on the live website still requires end-to-end verification.
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

### Research Inspiration & Evidence | البحث والإلهام

**How the idea began.** RAWIYYAH grew from exploratory research into **Universal Design**, children's right to play, and barriers faced by children with disabilities in public playgrounds. The **UNICEF Inclusive Playground Toolkit** was a key source of inspiration: rather than assessing access only after construction, the project explores how engineers can consider inclusive access while designing and reviewing a playground. Saudi inclusive-park guidance provided further local context.

**Why this problem matters — supporting published evidence**

1. **UNICEF Malaysia & Sime Darby Property (2021), _Inclusive Playground: Best Business Practice Circular & Guidance Toolkit_.** Presents inclusive-playground guidance based on universal and human-centred design, informed by children with and without disabilities, families, and specialists. [UNICEF publication](https://www.unicef.org/malaysia/reports/inclusive-playground)
2. **Brown et al. (2021), _A Scoping Review of Evidence-Informed Recommendations for Designing Inclusive Playgrounds_.** Synthesized 35 studies and identified recommendations across entrances, surfaces and paths, inclusive play features, supervision, and the design process. This supports reviewing the **whole play environment**, not only individual equipment. [Open-access research](https://pmc.ncbi.nlm.nih.gov/articles/PMC9397725/)
3. **_Accessibility and usability of playground environments for children under 12: A scoping review_ (2015).** Synthesized 14 articles and identified environmental barriers to access and inclusion, highlighting playground design as an important factor. [PubMed](https://pubmed.ncbi.nlm.nih.gov/26065905/)
4. **_Occupational Injustice and the Right to Play: A Systematic Review of Accessible Playgrounds for Children With Disabilities_ (2023).** Nine studies met the review criteria; eight reported negative effects on aspects of play, social participation, or motor skills despite accessible-playground labels. The findings underline why access should not be reduced to a label alone. [PubMed](https://pubmed.ncbi.nlm.nih.gov/37040103/)
5. **King Salman Center for Disability Research, _Inclusive Parks Guide (دليل حدائق الدمج)_.** Provides Saudi design guidance for inclusive parks, including universal-design principles and the dimensions of park elements. [Official guide](https://kscdr.org.sa/en/node/3776)

**From research to project concept:** The research motivated an early-stage review workflow combining playground layout, modeled path connectivity, accessibility considerations, and documented feedback. These sources **support the importance of the problem and the design approach**, not a claim that RAWIYYAH's software has been scientifically validated.

**Scope of the evidence:** The peer-reviewed studies above are additional supporting literature; listing them does not imply every study was used in the earliest concept phase. Likewise, the project's **13 accessibility checks are not the same as the 13 recommendations reported by Brown et al.**, and no exact equivalence or certification is claimed.

### Reference Frameworks

RAWIYYAH draws inspiration from published inclusive-playground and universal-design guidance. The resources below support the **design rationale**; they do not independently validate RAWIYYAH's software checks or establish official compliance.

**Selected guidance and official sources**
- [King Salman Center for Disability Research — Inclusive Parks Guide (دليل حدائق الدمج)](https://email.kscdr.org.sa/index.php/ar/node/3776) — Saudi guidance on inclusive park design and universal design principles.
- [UNICEF Malaysia & Sime Darby Property — Inclusive Playground Guidance Toolkit (2021)](https://www.unicef.org/malaysia/reports/inclusive-playground) — practical guidance informed by children, families and disability practitioners.
- [Saudi Vision 2030 — Official Website](https://www.vision2030.gov.sa/en) — contextual reference for the Vibrant Society theme and Quality of Life Program; alignment does not imply an official connection.

**Evidence boundary:** The 13 checks in this prototype are project-level review considerations, **not a certified or officially endorsed checklist**. A criterion-by-criterion mapping to the applicable source and current Saudi requirements has not yet been published or independently validated. Engineering measurements and statutory compliance must be confirmed before construction.

Peer-reviewed studies and usability evaluations would strengthen a future academic case study or validation report, but are **not presented here as completed research or proven outcomes**.

### Technology

HTML · CSS · JavaScript · PHP · MySQL

### Project Status

RAWIYYAH is a functional prototype available for exploration and evaluation. The roadmap documents current limitations and future improvements. Some workflows require further testing, and occasional issues may occur during use. The references above inform the design approach; the project is not affiliated with, endorsed by, or certified by either organization. Its accessibility review results are for design support and do not constitute official compliance certification.

---

### RAWIYYAH Team | فريق رَويَّة

A collaborative project by the **RAWIYYAH Team**.

**Concept and Implementation — Yasmin Almomen**
