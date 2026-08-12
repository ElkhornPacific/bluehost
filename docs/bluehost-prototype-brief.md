# Bluehost Maintenance Manager

## The customer problem

For a small-business owner, launching a website is only the beginning. Routine updates, unexplained availability warnings, broken contact paths, and support handoffs create ongoing work that is both technical and consequential. Owners usually understand what their business needs, but they should not need to diagnose software or coordinate several Bluehost tools to keep a site dependable.

That gap matters because the website is often the front door to the business. A quote form can appear to work while its email notification is not delivered. An update can complete while leaving an important path broken. Existing hosting, backup, maintenance, monitoring, and support capabilities are useful, but the customer still has to understand what needs attention, decide what is safe, and verify the outcome.

The May 2026 Bluehost AI Study supports this as a product direction worth testing, not as proven demand among existing Bluehost customers. Its broader pattern is useful: owners value focused jobs and saved effort, while trust in autonomous work remains limited. The experience therefore leads with one recognizable job and visible evidence rather than an explanation of AI.

## Why Maintenance Manager

Maintenance Manager is a focused AI agent that watches one selected site, performs only approved routine maintenance, verifies its work, and brings the owner decisions that require business judgment. It was chosen because maintenance and troubleshooting are common, easy to recognize, and well suited to a bounded agreement. The concept does not require the owner to hand over brand voice, customer conversations, pricing, or broader business operations.

The prototype prioritizes the complete trust loop:

- Contextual discovery tied to a waiting contact-form update and two missed Bluehost availability checks.
- A three-step setup that confirms important pages and all detected customer-contact paths, establishes one of two working agreements, and previews exact immediate work.
- Truthful work states separating decisions, active work, completed and verified work, and current monitoring evidence.
- One business-controlled quote-delivery decision with recommendation, deferral, and alternate-address testing.
- A weekly return that connects activity to current website and customer-contact outcomes.
- A failed-verification branch that restores the prior version and carries diagnostic context into Bluehost support.

The prototype deliberately cuts a general agent marketplace, other-agent setup, multi-site management, custom monitoring rules, user roles, checkout, upgrades, live support-case management, and long-term analytics. The two other agent cards establish hierarchy only; they are intentionally non-interactive.

## Trust and simplicity

The experience treats permission as a working agreement, not a technical matrix. `Watch and handle routine maintenance` is recommended only because the fixture site already has sufficient backup and restore protection. `Watch and ask before every change` activates the same monitoring but never changes the website without approval. Both paths produce different, truthful Overview and Results states.

Customer-facing copy defines automatic work by example: small updates to software the site already uses, such as the waiting contact-form update. New software, major updates, visible content, design, form destinations, business settings, purchases, customer data, hosting configuration, and irreversible changes always require approval. Nothing is silently purchased or enabled.

Verification is staged and explicit. A form test reports submission, website recording, and confirmed delivery separately. Work moves to `Handled for you` only after the relevant checks succeed. Deferral never becomes approval. An alternate email is never kept unless delivery is confirmed. A successful rollback restores safety but leaves the original update unresolved. The original missed availability checks remain in Activity and receive a later disposition rather than disappearing into a generic healthy state.

Progress changes use a live region, every control is keyboard reachable, visible focus is preserved, and reduced-motion preferences shorten deterministic progress without removing status communication. Responsive layouts preserve the desktop information hierarchy at 1024 pixels and collapse the Portal navigation on smaller screens.

## Tradeoffs and next validation

This is a static, deterministic prototype. It uses fictional fixture data and session-local state; it has no production Bluehost, WordPress, monitoring, email, entitlement, backup, restore, or support integration. That constraint makes every path repeatable for review, but it cannot prove operational feasibility or real demand.

With more time and data, the first validation would be whether Bluehost can reliably produce and recheck the pre-activation signals, determine site-level protection readiness, and verify delivery without polluting customer records. Product, support, privacy, and legal teams would need to validate plan-dependent language, synthetic-test handling, approval boundaries, notification behavior, and automatic ticket routing. Usability research should test whether nontechnical owners can accurately explain what Maintenance Manager may do, what still needs them, and what the evidence proves.

## Success metrics

- **90-day retained activation:** Percentage of eligible sites that activate either working agreement and remain active after 90 days, segmented by site readiness and agreement.
- **Verified work without owner troubleshooting:** Eligible tasks completed and verified per active site without owner troubleshooting, with failed checks, rollbacks, escalations, false alarms, and out-of-agreement attempts tracked as safety guardrails.
- **Website-related support contacts:** Change in website-related support contacts versus a comparable holdout group, paired with availability and customer-contact-path success so lower contact volume is not mistaken for an unresolved problem.

These metrics test trust, delegated value, and business impact without claiming increased leads, revenue, retention, or customer time saved from prototype evidence alone.
