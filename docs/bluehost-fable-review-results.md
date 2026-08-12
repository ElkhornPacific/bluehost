# Adversarial review — Maintenance Manager clickable prototype

> Fable review results, 2026-08-12. Produced per [bluehost-fable-testing-prompt.md](bluehost-fable-testing-prompt.md).
> Inputs: [assignment](bluehost-project-assignment.md) (source of truth), [value proposition](bluehost-value-prop.md), [story map](bluehost-storymap.md), [prototype specification](bluehost-prototype-spec.md).

> **Historical note:** A subsequent product review removed the inconclusive missed-availability-check fixture from the prototype and current requirements. Finding M2 below documents the earlier reviewed state and is preserved as part of the review record; it no longer describes the implemented discovery experience.

## 1. Overall assessment

The materials define a coherent, credible prototype — unusually disciplined for a take-home. One agent, one site, one bounded promise, explicit exclusions, and trust rules that are testable rather than aspirational. All three assignment phases are present and load-bearing, and the assignment's implicit comprehension tests for a nontechnical owner mostly pass: what is happening (work states with evidence and timestamps), what the system may do (two agreements with an explicit always-ask list), what needs owner judgment (a genuine business decision about quote delivery), and what happens when work fails (rollback branch plus automatic support escalation) are all clear.

The weaknesses are fixture-consistency and specification-completeness problems, not product-direction problems. Two rise to must-fix because they produce customer-visible false or unresolved states inside primary clickable paths — exactly the trust failures the documents themselves prohibit. Nothing found challenges the choice of Maintenance Manager or its scope.

## 2. Phase scores

**Discovery: 4 / 5.** Problem-triggered, evidence-attributed, deep-linked, and no AI-education gate — a strong answer to "how do you make the right one feel obviously relevant." One deduction: `bluehost-value-prop.md` ("Where customers find it") asserts as current fact that "**AI Agents** is an existing top-level category in Bluehost's current left-side Portal navigation," citing a help article about the Account Manager home tab that does not obviously establish this. The assignment — the source of truth — establishes no such navigation item. An unverified factual claim about Bluehost's live product is a credibility risk in the brief and interview (finding S6).

**Setup: 4 / 5.** The three-step flow, plan-readiness disclosure, and two-agreement model directly answer "how do you make a non-technical customer feel confident, not overwhelmed." Two deductions: the monitoring-only agreement is selectable but its post-activation journey is unspecified (finding S1), and customer-facing copy retains jargon the story map's own trust rules forbid (finding S4). A third documents-level deduction: the story map calls a failed-initial-check state "essential" and the spec drops it entirely (finding S3).

**Ongoing value: 3 / 5.** The decision → staged verification → weekly-return arc is the best part of the design. Three deductions: the deferred-decision path leads to a weekly summary whose fixed content is false (finding M1); the discovery finding that motivated the whole journey is never resolved for the owner (finding M2); and the AI Agents home is pinned to one fixture moment while remaining globally reachable, so it can show a resolved decision as pending (finding S2).

## 3. Must fix before prototyping

### M1. `Remind me in 7 days` leads to a weekly summary that reports work as done when it wasn't

- **Citations:** `bluehost-prototype-spec.md`, Screen 7 ("`Remind me in 7 days` returns to Overview with `Reminder set`; it does not make a change"), "Deterministic prototype state" (requires both a "Seven-day reminder state" and a "One-week return state"), and Screen 8's fixed required content ("Two changes completed and verified… One owner decision requested… No troubleshooting steps required").
- **Contradiction:** `bluehost-storymap.md`, "Customer selects `Remind me in 7 days`" requires the deferral to "Include it in the weekly summary" — but the only specified summary claims two completed changes and a resolved decision. If the owner defers, only the plugin update is complete and the decision is still open. The reminder also matures exactly at the one-week return, and no state describes what the owner sees then.
- **Assignment requirement / customer risk:** Ongoing value — "How does the customer know the agent is working?" A summary reporting unperformed work is precisely what the spec's own gates prohibit ("Verify all customer-facing copy and fixture values are consistent"; "Completed work is not labeled handled until verification succeeds"), in a path the acceptance criteria require to be clickable ("`Remind me in 7 days` produces a visible deferred state").
- **Smallest correction:** Specify a deferred-state variant of Screens 8 and 9: one change completed, quote-delivery decision shown as pending with `Reminder set`, now due. Variant fixture content for two existing screens; no new screens.

### M2. The two missed availability checks open the story and are never resolved

- **Citations:** `bluehost-prototype-spec.md`, Screen 1 ("Your homepage missed two Bluehost availability checks this week," with timestamps in an expandable evidence area). Afterward: Screen 6 shows availability under `Watching for you` with latest evidence; Screen 8 says "Website currently available"; Screen 9 shows availability with latest check timestamp. No state anywhere gives the two missed checks a disposition — recurred, explained, or closed — while the other finding (the plugin update) gets a complete detect → act → verify → report arc.
- **Contradiction:** `bluehost-storymap.md` itself warns ("Where the current direction needs challenge") that "'Two items need attention' will feel manipulative if Bluehost cannot supply and recheck the stated findings," and its story-6 trust rule says "Failures must not be hidden inside a positive status." A finding presented as needing attention, then silently absorbed into a green state, reads to a worried owner as either a false alarm or an ignored problem.
- **Assignment requirement / customer risk:** Discovery credibility and the Ongoing-value feedback loop — the assignment's stated friction is "there's no feedback loop showing that an agent is doing something valuable." This is the owner's headline worry from Screen 1, and it vanishes.
- **Smallest correction:** One disposition line surfaced in `Watching for you` and echoed in Activity/Results, e.g., "Availability checks have passed since monitoring began — the two missed checks on [timestamps] have not recurred." This invents no diagnostic capability; it reports exactly what the specified monitoring can observe.

## 4. Should consider before prototyping

### S1. The monitoring-only agreement is selectable but its post-activation journey is unspecified

- **Citations:** `bluehost-prototype-spec.md`, Screen 5 trust requirement ("Under monitoring-only mode, omit the backup and update action and create a finding that needs approval instead") is the last thing said about this path. Screens 6, 8, and 9 fixtures all assume the recommended agreement. Acceptance criteria cover only "The working-agreement choice changes the review state."
- **Customer risk:** A builder ships a selectable primary choice that silently converges on happy-path fixtures — violating the spec's own "No primary control is visually active but functionally dead" and misrepresenting the agreement the owner chose.
- **Smallest correction:** Either specify the monitoring-only Screen 6 state (plugin update under `Needs your decision`, nothing under `Handled for you`) and note Screens 8–9 are demonstrated only on the recommended path, or explicitly scope clickability to the recommended agreement with the alternative annotated as a designed state.

### S2. The AI Agents home is pinned to one fixture moment but reachable at any time

- **Citations:** `bluehost-prototype-spec.md`, Supporting screen A ("Fixture represents the period after activation and before the quote-delivery decision is resolved") versus acceptance criteria ("The AI Agents home is reachable from global navigation").
- **Customer risk:** After the owner resolves the decision, the home still shows it under "Needs your attention" — a resolved item presented as pending, failing the spec's own fixture-consistency gate.
- **Smallest correction:** Derive screen A's "Needs your attention" and "Working for you" sections from current prototype state; the deterministic state store the spec already requires makes this cheap.

### S3. The story map calls a failed-initial-check state "essential"; the spec omits it entirely

- **Citations:** `bluehost-storymap.md`, story 5 slice placement ("Primary, with one failed-initial-check state as an essential supporting branch") and exception "Initial check cannot run." `bluehost-prototype-spec.md` contains no such state, clickable or designed — its only branches are the rollback recovery and the non-clickable severe rollback failure.
- **Customer risk / contradiction:** Direct disagreement between governing documents; the story-5 trust requirement that "partial setup cannot be presented as full protection" has no representation.
- **Smallest correction:** Add it to the spec as a designed, non-clickable state (like the severe rollback state), or amend the story map's slice label. Either works; the documents must not disagree.

### S4. Customer-facing copy retains jargon the documents themselves prohibit

- **Citations:** `bluehost-prototype-spec.md`, Screen 3 ("clearly labeled **synthetic submissions**") and the working agreement ("eligible **security, patch, and minor-version updates**"). The assignment: "The customer is not technical. They understand their business, not software." `bluehost-storymap.md` story 4 requires that "'safe' or 'routine' cannot be used as a substitute for describing the authorized action" — but the precise alternative offered is version-management vocabulary a nontechnical owner doesn't have.
- **Smallest correction:** Add a copy rule to the spec: customer surfaces say "test submission," and update eligibility is described by example — "small updates to software your site already uses, like the waiting contact-form update; never new software, major version changes, or anything customers can see." Keep the precise taxonomy in Activity's expandable detail.

### S5. `Choose another email` has no defined outcome

- **Citations:** `bluehost-prototype-spec.md`, Screen 7 ("`Choose another email` opens a shallow email-entry state") — and stops. The decision's premise is that one address is unverified; nothing says what happens when the owner enters a third, unverified address.
- **Customer risk:** The most likely real divergence from the recommendation is undefined, so a builder improvises the trust-sensitive part.
- **Smallest correction:** One sentence: the entered address runs the same staged verification, and if delivery cannot be confirmed the result uses the story map's story-8 language — "submitted and recorded; email delivery could not be confirmed."

### S6. "AI Agents is an existing top-level category" is asserted as fact, not proposed

- **Citations:** `bluehost-value-prop.md`, "Where customers find it"; echoed as fact in `bluehost-prototype-spec.md` ("Use the current documented Bluehost Portal structure" listing AI Agents). The assignment establishes no such item; `bluehost-storymap.md` more carefully frames it as a "Framing assumption."
- **Customer risk:** If wrong, the brief opens with an invented Bluehost fact — the failure mode an evaluator will notice first.
- **Smallest correction:** Verify against the current Portal before writing the brief; if unverifiable, change the value-prop sentence to "The prototype places **AI Agents** as a top-level category in the current left-side navigation" — a proposal, which the assignment fully permits ("You are free to define the scope further").

## 5. Optional improvements

- **Terminology drift:** the value proposition and story map say "decision center"; the spec calls the same surface "Overview" (Screen 6). Align before copy is written.
- **"Important pages" are never enumerated** in any fixture, yet the owner confirms them in setup (Screen 3) and sees their status in Results (Screen 9). Name them (e.g., homepage, services, contact) in the fixture data.
- **Explore cards** on the AI Agents home "may show `Explore`" with no destination, brushing against "No primary control is visually active but functionally dead." Make them visibly non-interactive or land on a one-line placeholder state.
- **Rollback-branch fixture ambiguity:** the recovery states never say whether the quote-delivery decision also appears in that scenario's Overview. One sentence settles it.
- **The May 2026 Bluehost AI Study** (`bluehost-value-prop.md`, "Why it makes sense") cites a PDF outside the review set, so its figures (78%, 16%, 6%, rankings) are unverifiable here. The document already hedges correctly ("worth testing, not a proven demand case") — keep that hedge verbatim in the brief.
- **Metrics for the brief:** the assignment asks for "2–3 metrics"; the value proposition's three items are metric bundles. Distill one headline metric per bundle (90-day retained activation; verified tasks completed per active site without owner troubleshooting; website-related support contacts vs. a holdout group).

**Concerns considered and set aside** (already resolved in the inputs): discovery for customers without a current problem is covered by the shallow status-first AI Agents home; simulated capabilities are honestly declared and confined to the brief ("Prototype assumptions and simulated capabilities"); the weekly email living outside the Portal is anticipated and treated as a notification preview that returns the owner to the Portal; no business-outcome claims exceed the proposed evidence — the documents explicitly refuse time-saved and revenue attribution.

## Readiness recommendation

`Ready with specified corrections`

Exact corrections required to change this to `Ready to prototype`:

1. Specify deferred-state variants of the weekly summary (Screen 8) and Results (Screen 9) so that choosing `Remind me in 7 days` never leads to a summary claiming the deferred work was completed (M1).
2. Add an availability-finding disposition line to `Watching for you`, Activity, and Results so the second discovery finding is explicitly closed rather than silently absorbed (M2).

Findings S1–S6 are specification edits, not design changes; resolving S1, S2, and S5 before build is strongly advised because each sits inside a clickable path a builder must otherwise improvise. No finding challenges the product direction: Maintenance Manager, as scoped, answers the assignment.
