# Fable adversarial review packet

> Pre-implementation review instructions for the Maintenance Manager clickable prototype

## Purpose

Use an independent model as an adversarial reviewer before prototype development begins. The review should test whether the proposed experience answers the Bluehost assignment, remains internally consistent, and earns the trust of a nontechnical business owner.

This is a critique exercise, not a request to redesign the product or expand its scope.

## Files to provide

Provide these four files from this folder:

1. `bluehost-project-assignment.md`
2. `bluehost-value-prop.md`
3. `bluehost-storymap.md`
4. `bluehost-prototype-spec.md`

Do not provide credentials, real customer data, private Bluehost materials, generated prototype artifacts, or any other sensitive information.

## Review prompt

Copy the following prompt into Fable after attaching the four files:

> Act as an adversarial principal product designer reviewing a take-home assignment. Treat `bluehost-project-assignment.md` as the source of truth for the assignment requirements. Treat the value proposition, story map, and prototype specification as proposals that may be incomplete or wrong.
>
> Evaluate the proposed Maintenance Manager experience strictly against the assignment. Identify fatal gaps, internal contradictions, unsupported claims, trust failures, confusing terminology, scope bloat, and missing clickable states. Challenge the product direction where the evidence does not support it.
>
> Score Discovery, Setup, and Ongoing value separately from 1–5. For every deduction, cite the exact document and passage responsible. Test whether a nontechnical existing Bluehost customer can understand what is happening, what the system may do, what requires owner judgment, what happens when work fails, and how completed work benefits the business.
>
> Separate findings into:
>
> 1. Must fix before prototyping
> 2. Should consider before prototyping
> 3. Optional improvements
>
> For each finding, explain the assignment requirement or customer-risk it affects and recommend the smallest correction. Do not redesign the product, introduce new agents, propose technical architecture, or expand the prototype beyond website monitoring and maintenance.
>
> Finish with a release recommendation: Ready to prototype, Ready with specified corrections, or Not ready. List the exact corrections required for that recommendation.

## Expected output

The review should contain:

- A concise overall assessment.
- Separate 1–5 scores for Discovery, Setup, and Ongoing value.
- Findings grouped by severity.
- A source citation for every material finding.
- The smallest recommended correction for each finding.
- A final readiness recommendation.

Reject or discount findings that depend on capabilities outside the assignment, invent Bluehost facts, or expand the focused prototype into unrelated agent experiences.

## How to evaluate the response

Do not accept every model suggestion automatically. For each must-fix or should-consider finding:

- Confirm that it is supported by the assignment or exposes a credible customer trust problem.
- Check whether the issue is already answered elsewhere in the supplied documents.
- Prefer a clarification or narrow interaction change over added scope.
- Record accepted decisions in the story map, value proposition, or prototype specification as appropriate.
- Leave unsupported stylistic preferences and speculative feature requests out of the prototype.

Prototype development can begin when no substantiated must-fix findings remain.
