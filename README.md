# RAWIYYAH | رَويَّة
**Inclusive Playground Planning & Accessibility Review**

## 1. The Problem | المشكلة

Inclusive playground design is supported by published principles and guidance, yet translating those references into practical, repeatable design decisions can still be challenging. A team may need to examine entrances, routes, surfaces, play elements, and connections **together**, rather than as isolated features.

**The opportunity we identified:** make relevant accessibility considerations easier to apply and review *during digital playground planning*, before the design reaches construction. This is an opportunity to support an existing process—not a claim that no digital design or assessment tools exist.

## 2. Research & Design Foundations | الخلفية البحثية

Our starting point was **research, not software development**. We looked for established principles, criteria, and guidance that engineers could draw on when planning inclusive playgrounds. Exploring **Universal Design** and the **UNICEF Inclusive Playground Toolkit** helped shape the direction of the idea. We also examined Saudi guidance for local design context.

The next question was how this knowledge could be translated into a usable digital workflow instead of remaining only as material that a designer reads and interprets separately.

### Why the problem matters

| Source | Relevance to RAWIYYAH |
| --- | --- |
| [UNICEF Malaysia & Sime Darby Property (2021) — *Inclusive Playground Toolkit*](https://www.unicef.org/malaysia/reports/inclusive-playground) | Emphasizes universal design and participation by children, families, and disability practitioners in playground planning. |
| [Brown et al. — *A Scoping Review of Evidence-Informed Recommendations for Designing Inclusive Playgrounds*](https://pmc.ncbi.nlm.nih.gov/articles/PMC9397725/) | Reviews playground design recommendations, including the wider environment rather than equipment alone. |
| [*Accessibility and usability of playground environments for children under 12: A scoping review* (2015)](https://pubmed.ncbi.nlm.nih.gov/26065905/) | Examines environmental accessibility and usability challenges in children's playgrounds. |
| [*Occupational Injustice and the Right to Play: A Systematic Review of Accessible Playgrounds for Children With Disabilities* (2023)](https://pubmed.ncbi.nlm.nih.gov/37040103/) | Examines accessibility and participation in play for children with disabilities. |
| [King Salman Center for Disability Research — *Inclusive Parks Guide* (دليل حدائق الدمج)](https://kscdr.org.sa/en/node/3776) | Saudi-context guidance for considering inclusive park environments. |

**Research note:** UNICEF and universal-design guidance informed the early concept. The peer-reviewed reviews above are supporting literature for the problem statement; they are not presented as studies that tested or validated RAWIYYAH itself.

## 3. From Research to RAWIYYAH | من البحث إلى الفكرة

After identifying useful guidance, we explored how design teams might apply it in practice. That led to RAWIYYAH: a prototype that brings **playground layout, rule-based review, simplified route-connectivity checks, and documented feedback** into one workspace.

The goal is **to help move from reference material to actionable design-time review**—not to replace specialist judgment or claim that existing guidance has been fully automated.

The name **رَويَّة** reflects *التروّي والتأنّي*: taking time to consider a decision carefully **before implementation**.

## 4. The Proposed Solution | الحل

RAWIYYAH is an Arabic-first web application prototype intended to support engineers and project teams through:

- **Playground layout:** An interactive 2D/3D design workspace and saved design versions.
- **Planning checks:** Rule-based review of 13 project-defined accessibility considerations and a simplified path-connectivity model.
- **Design comparison:** Comparison of a current layout with a saved snapshot **within the same project**; this is not full comparison across independent projects.
- **Project workflow:** Assignments, engineer accounts, internal review, and printable reports.

The 13 checks are **not an official checklist**. The connectivity model is a planning aid, not an engineering measurement or proof of regulatory compliance. Capabilities identified in source code still require end-to-end testing on the deployed website.

## 5. Explore the Project | استكشف المشروع

**[Live Website — RAWIYYAH](https://rawiyyah.free.je/)**  
**[UI/UX Screens & User Flow — Figma](https://www.figma.com/design/2GawzgM1IP3HQyRKrVWjN1/RAWIYYAH?node-id=101-2)**  
**[Brand Identity — Figma](https://www.figma.com/design/MYUjlsdpemHDZ4yI7Ly67k/%D8%B1%D9%8E%D9%88%D9%90%D9%8A%D9%91%D8%A9-RAWIYYAH?node-id=0-1)**

> **Best viewed on a laptop or desktop.** The interactive workspace is designed for larger screens; mobile usability may be limited.

**Design note:** Figma includes early UI concepts and proposed extensions. Some screens differ from the current implementation; the live website is the reference for the latest deployed interface. Proposed designs are not evidence of implemented features.

## 6. Current Limitations & Next Steps | حدود النسخة الحالية

- Test the deployed workflow across user roles, especially saved-version comparison, submission, and review.
- Independently validate the 13 rules with accessibility specialists, intended users, and applicable Saudi requirements.
- Extend comparison to separate design alternatives or projects.
- Improve reliability, error feedback, and accessibility of the interface.
- Consider multilingual support beyond the current Arabic interface.
- Explore AI-assisted explanations **in a future phase**; AI suggestions are not claimed as an existing feature.

## 7. Technology & Context

**Stack:** HTML · CSS · JavaScript · PHP · MySQL

The project relates to the inclusive public-space aspirations of [Saudi Vision 2030](https://www.vision2030.gov.sa/en), including *Vibrant Society* and quality of life. This is thematic alignment, **not an official affiliation or endorsement**.

**Status:** Functional prototype for exploration and testing; some workflows may have issues. The resources cited above support the problem and design rationale, **not certification of this application**.

---

## RAWIYYAH Team | فريق رَويَّة

A collaborative project by the **RAWIYYAH Team**.

**Concept and Implementation — Yasmin Almomen**
