# Maintenance Manager clickable prototype specification

> Build-ready working draft

This specification translates the [Bluehost assignment](bluehost-project-assignment.md),
[Maintenance Manager story map](bluehost-storymap.md), and
[value proposition](bluehost-value-prop.md) into a focused clickable prototype. It is an interaction contract, not a production PRD.

## Prototype objective

Demonstrate how an existing, nontechnical Bluehost customer moves from a relevant website problem to a trustworthy working agreement and, one week later, can see that Maintenance Manager is working for the business.

The prototype must prove all three assignment phases:

- **Discovery:** Bluehost connects a real website finding to one obviously relevant agent.
- **Setup:** The owner understands coverage, plan readiness, permissions, approval boundaries, recovery, and notifications without configuring technical systems.
- **Ongoing value:** The owner sees active work, makes one business decision, sees verified results, and returns through a weekly summary.

## Implementation and delivery direction

- Build a responsive, client-side web prototype using React, TypeScript, and Vite.
- Use deterministic fixture data and in-memory state. No Bluehost account, website, email, support, or monitoring integration is required.
- Deliver the final prototype as a static website on a publicly accessible HTTPS URL. GitHub Pages is the primary publishing target.
- Do not package the prototype as an executable, desktop application, browser extension, downloadable archive, or experience that requires the reviewer to install dependencies or run a local server.
- Optimize the primary experience for a desktop Portal viewport around 1440 × 900.
- Keep the experience usable without horizontal scrolling at 1024 pixels wide.
- Provide a reasonable collapsed-navigation treatment on smaller screens, but do not design a separate mobile journey.
- Use a small prototype-only scenario control that can restart the happy path or open the rollback branch. Keep it visually separate from the simulated Bluehost product.

### GitHub Pages architecture

- Keep the runtime entirely browser-based: compiled HTML, CSS, JavaScript, and static assets in Vite's `dist` output. Do not introduce server-side rendering, a backend, secrets, or runtime APIs.
- Publish as a GitHub project site at the equivalent of `https://<owner>.github.io/bluehost/`. The repository currently has no Git remote, so publishing includes connecting it to an appropriate GitHub repository and enabling Pages.
- Configure Vite's production `base` for the repository subpath, normally `/bluehost/`. Do not assume the site is hosted at the domain root.
- Use hash-based client routing for the prototype so GitHub Pages can load and refresh every view without server rewrite support. The routes specified below remain the logical routes; their deployed form may be `/#/portal`, `/#/ai-agents`, and so on.
- Add a GitHub Actions Pages workflow that installs locked dependencies, runs the verification and production-build commands, uploads `dist`, and deploys the Pages artifact. Support both pushes to the publishing branch and manual dispatch.
- Keep standard local scripts for development, production build, tests, and static preview; local preview is verification tooling, not the delivery mechanism.
- Prefer a public GitHub repository when appropriate. If the repository must remain private, confirm that the selected GitHub plan permits Pages while keeping the published site publicly reachable.
- Keep all prototype fixtures fictional and include no credentials, private Bluehost information, or sensitive data in the built artifact or repository.
- If GitHub Pages proves unavailable because of repository ownership, plan, or organization policy, use another static HTTPS host without changing the client-only architecture. A public URL remains mandatory.

Follow the official [Vite GitHub Pages deployment guidance](https://vite.dev/guide/static-deploy.html#github-pages) and [GitHub Pages custom-workflow guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) when implementing publication.

## Product contract

### Customer and site

- **Business:** Harbor & Pine Landscaping
- **Site:** `harborandpinelandscaping.com`
- **Owner:** Nontechnical small-business owner
- **Site readiness:** The site's current Bluehost plan includes managed updates, backup and restore, monitoring, and standard support escalation.
- **Scope of authority:** Activation, permissions, activity, decisions, and results apply only to this site.

### Product hierarchy

- The current Bluehost left-side Portal navigation includes **AI Agents**.
- Maintenance Manager is a focused agent within AI Agents, not a separate top-level navigation item.
- The contextual Portal trigger deep-links to `AI Agents / Maintenance Manager`.
- Maintenance Manager uses local navigation after activation: `Overview`, `Activity`, `Results`, and `Settings`.

### Product promise

> Maintenance Manager is an AI agent included with your Bluehost subscription. It watches your site, handles approved routine maintenance, tests its work, and asks when a decision needs your judgment.

Maintenance Manager coordinates capabilities available for the selected site. It does not imply that every Bluehost plan includes the same execution capabilities, and it never purchases or activates a service without approval.

### Working agreements

- **Watch and handle routine maintenance — Recommended**
  - Automatically performs eligible security, patch, and minor-version updates for existing WordPress software.
  - Backs up before changes, verifies afterward, and rolls back failed work.
  - Available only when the site has sufficient backup and restore protection.

- **Watch and ask before every change**
  - Performs the same monitoring.
  - Makes no website changes without explicit approval.

Both agreements activate Maintenance Manager.

### Always requires owner approval

- Major-version updates.
- Installing, replacing, or removing plugins or themes.
- Hosting or runtime configuration changes.
- Visible content or design changes.
- Form destinations or other business-controlled settings.
- Customer-data changes.
- Purchases.
- Irreversible changes.

### Work-state model

- **Needs your decision:** Business judgment or explicit approval is required.
- **Handled for you:** Work is complete and the result has been verified.
- **Watching for you:** Monitoring evidence is current and no problem is present.
- **In progress:** Conditional area shown only during active work, recovery, or Bluehost support handling.

## Scenario timeline and fixture data

### Fixed fixture dates

- Day 1 discovery and activation: `Monday, August 3, 2026`.
- One-week summary and Results return: `Monday, August 10, 2026`.
- Use these dates rather than the viewer's current date so relative labels, task times, reminders, and the reporting period remain deterministic.

### Before activation

Existing Bluehost checks found:

- One eligible minor update to the already-installed contact-form plugin.
- Two missed homepage availability checks at `August 3, 2026 · 8:15 AM` and `August 3, 2026 · 8:20 AM`.
- The two timestamps are visible, but the prototype does not invent a downtime duration.

Maintenance Manager has not yet monitored, tested, or changed the site.

### Important pages

- Home.
- Services.
- Contact.

These pages are selected during setup, checked hourly after activation, and named wherever the prototype reports important-page coverage.

### Detected customer-contact paths

- **Request a quote:** `Homepage → Request a Quote → Submit request`
  - Can verify page load, submission, website recording, and notification delivery when evidence exists.

- **General contact:** `Homepage → Contact → Send message`
  - Can verify page load, submission, website recording, and notification delivery when evidence exists.

- **Call the business:** Header and contact-page phone links.
  - Can verify the expected number and phone-link action.
  - Does not place a call or claim that the business answered.

### Primary owner decision

- A test quote request is submitted and recorded successfully. It is implemented as labeled synthetic fixture data but described to the customer as a test submission.
- Delivery to `harborandpine@gmail.com` cannot be confirmed because that address is no longer verified for the account.
- `hello@harborandpinelandscaping.com` is a verified business mailbox associated with the site.
- Maintenance Manager recommends the verified business-domain mailbox but leaves the destination decision to the owner.

### Example task timing

- Contact-form plugin update: `10:02–10:10 AM · 8 minutes`
- Quote-request destination change: `10:14–10:20 AM · 6 minutes`
- Actual task duration is evidence in Activity. It is not presented as customer time saved.

### One-week return

The weekly summary covers the seven days after activation and deep-links to Results.

## Global Portal shell

### Left navigation

Use the current documented Bluehost Portal structure:

- Home
- Websites
- AI Agents
- Email
- Domains
- Hosting
- Security
- Billing
- Marketplace

`AI Agents` is selected on Maintenance Manager and AI Agents screens. `Home` is selected only on the discovery screen.

### Utility navigation

- Help
- Notifications
- Account avatar

### Shared context

- Keep `Harbor & Pine Landscaping` and `harborandpinelandscaping.com` visible in the content header or site selector.
- Use the breadcrumb `AI Agents / Maintenance Manager` before and after activation.
- Do not use the earlier horizontal Portal mockup as the global shell.

## Primary clickable journey

### Screen 1: Portal discovery

- **Route:** `/portal`
- **Assignment phase:** Discovery
- **Purpose:** Make Maintenance Manager relevant through existing Bluehost evidence.

**Required content**

> **Harbor & Pine Landscaping has two items that need attention**
>
> - One routine website update is waiting.
> - Your homepage missed two Bluehost availability checks this week.
>
> Maintenance Manager can watch your site, handle approved routine fixes, and bring you only the decisions that need your judgment.

- Show both availability-check timestamps in an expandable evidence area.
- Attribute the findings to Bluehost, not Maintenance Manager.

**Interactions**

- Primary: `See how Maintenance Manager can help` → Screen 2.
- Secondary: `Not now` dismisses the card and shows a reversible confirmation state.

**Trust requirement**

- Do not imply that an inactive agent has already watched or tested the site.
- Do not manufacture urgency or claim a measured downtime duration.

### Screen 2: Maintenance Manager introduction

- **Route:** `/ai-agents/maintenance-manager`
- **Assignment phase:** Discovery
- **Purpose:** Explain the bounded job, inclusion, safeguards, and relationship to AI Agents.

**Required content**

- Headline: `Take routine website maintenance off your to-do list.`
- Lightweight disclosure that Maintenance Manager is an AI agent.
- The two findings carried forward from the Portal.
- Four short explanations:
  - What it watches.
  - What it can handle.
  - What always needs the owner.
  - How backup, verification, rollback, and support escalation work.
- State that Maintenance Manager is included at no additional charge.
- Explain that automatic actions depend on capabilities already included with this site's plan.

**Interactions**

- Primary: `Set up Maintenance Manager` → Screen 3.
- Supporting: `How it works` opens a concise safeguard drawer.
- Breadcrumb `AI Agents` → Supporting screen A.

**Trust requirement**

- Do not say that Maintenance Manager runs the entire website.
- Do not introduce models, orchestration, digital employees, or chatbot behavior.

### Screen 3: Setup step 1 — coverage

- **Route:** `/ai-agents/maintenance-manager/setup/coverage`
- **Assignment phase:** Setup
- **Purpose:** Confirm what is watched without asking the owner to configure tests.

**Required content**

- Step indicator: `1 of 3 · What we'll watch`
- Selected site.
- Availability, Home, Services, Contact, and maintenance status selected by default.
- All three detected customer-contact paths selected by default.
- A plain-language verification label for each path.
- Disclosure that form checks create clearly labeled test submissions that are removed or archived.

**Interactions**

- Primary: `Continue` → Screen 4.
- Secondary: `Back` → Screen 2.
- Supporting: `This isn't a customer contact path` changes the path to a review state.
- Supporting: `Add a missing path` opens a shallow detected-path chooser; no workflow builder is required.

**Trust requirement**

- Do not ask the owner to choose one important path while ignoring other valid paths.
- Distinguish submission, website recording, and confirmed delivery.

### Screen 4: Setup step 2 — working agreement

- **Route:** `/ai-agents/maintenance-manager/setup/agreement`
- **Assignment phase:** Setup
- **Purpose:** Establish authority and recovery expectations in business language.

**Required content**

> **Harbor & Pine's site is ready for automatic maintenance**
>
> Included with this site's Bluehost plan: managed updates for existing WordPress software, backup and restore, website and customer-path monitoring, and Bluehost support escalation.

- Show both working-agreement cards.
- Select the recommended agreement by default, but require the owner to continue deliberately.
- Show concise `Can handle automatically` and `Always asks you` lists.
- Describe eligible automatic work as `Small updates to software your site already uses, like the waiting contact-form update.` Explain that Maintenance Manager never installs new software, makes a major update, or changes something customers can see without approval.
- Explain backup, verification, rollback, and automatic support escalation.
- Notification summary:
  > We'll contact you right away when you need to decide something. Everything else goes in your weekly summary.
- Explain that delivery channels follow existing Bluehost notification preferences.

**Interactions**

- Primary: `Continue` → Screen 5.
- Secondary: `Back` → Screen 3.
- Agreement cards are selectable and update the review summary.

**Trust requirement**

- Never hide authority in terms or pre-activation behavior.
- Never offer automatic work without sufficient backup and restore capability.
- Keep `patch`, `minor version`, and similar software terminology out of the default customer-facing permission copy. It may appear in optional technical detail and Activity diagnostics.

### Screen 5: Setup step 3 — review and activation

- **Route:** `/ai-agents/maintenance-manager/setup/review`
- **Assignment phase:** Setup
- **Purpose:** Preview exact immediate work before authority takes effect.

**Required content**

- Step indicator: `3 of 3 · Review and turn on`
- Selected site and agreement.
- Coverage summary.
- Immediate-work preview under the recommended agreement:
  - Check the site and detected customer-contact paths.
  - Back up the site.
  - Install the pending minor contact-form plugin update.
  - Test the site and affected paths.
  - Restore the backup if verification fails.
- Under `Watch and ask before every change`, replace that preview with:
  - Start monitoring the site, Home, Services, Contact, and all detected customer-contact paths.
  - Test the current site without changing it.
  - Put the waiting contact-form update under `Needs your decision`.

**Interactions**

- Primary: `Turn on Maintenance Manager` starts the deterministic initial-check sequence.
- Secondary: `Back` → Screen 4.
- Progress sequence announces:
  - `Checking your site`
  - `Creating a backup`
  - `Installing the approved update`
  - `Testing your site and customer paths`
  - `Initial check complete`
- Under monitoring-only mode, omit `Creating a backup` and `Installing the approved update`; announce `Adding the waiting update to your decisions` instead.
- Completion: `View Maintenance Manager` → Screen 6.

**Trust requirement**

- Activation and successful verification are separate states.
- Under monitoring-only mode, omit the backup and update action and create a finding that needs approval instead.

**Designed supporting state: initial check cannot run**

- Keep activation visible, but label setup `Monitoring incomplete` rather than active or protected.
- Name the unavailable check or connection and the coverage affected.
- Offer `Try again`, a guided correction action, and `Ask Bluehost support`.
- Do not make this a second full clickable exception branch; a designed state is sufficient.

### Screen 6: Maintenance Manager overview

- **Route:** `/ai-agents/maintenance-manager/overview`
- **Assignment phase:** Ongoing value
- **Purpose:** Let the owner understand current work in seconds.

**Required content on the happy path**

- `In progress` is hidden because no work is active.
- **Needs your decision:** Quote-request delivery needs confirmation.
- **Handled for you:** Contact-form plugin updated; site and affected paths passed verification.
- **Watching for you:** Availability, Home, Services, Contact, request-a-quote, general contact, phone links, and software maintenance.
- Every watching item shows latest evidence and expected frequency.
- The availability item includes: `All availability checks have completed since monitoring began. The two missed Bluehost checks at 8:15 AM and 8:20 AM have not recurred; they did not establish downtime.`

**Required monitoring-only variant**

- **Needs your decision:** The waiting contact-form update and quote-request delivery confirmation.
- **Handled for you:** Empty state explaining that Maintenance Manager is waiting for approval before making changes.
- **Watching for you:** The same current monitoring coverage and availability disposition as the recommended path.
- This supporting branch ends on the truthful Overview. Do not build a separate plugin-approval journey for the take-home.

**Interactions**

- Decision card → Screen 7.
- Handled item → human-readable Activity detail.
- Monitoring item → coverage and latest-evidence detail.
- Local navigation:
  - `Activity` shows the combined history.
  - `Results` opens Screen 9.
  - `Settings` shows the selected agreement and event preferences.
- Global `AI Agents` → Supporting screen A.

**Trust requirement**

- `Handled for you` means completed and verified, not merely attempted.
- Healthy states expire when evidence is stale.
- A discovery finding remains in Activity and receives a visible disposition; it never disappears into a generic healthy state.

### Screen 7: Quote-request delivery decision and result

- **Route:** `/ai-agents/maintenance-manager/decisions/quote-delivery`
- **Assignment phase:** Ongoing value
- **Purpose:** Demonstrate a decision that requires business judgment.

**Required decision content**

> **Where should new quote requests go?**
>
> Your website records new requests, but delivery to `harborandpine@gmail.com` could not be confirmed.

> **Recommended: Send requests to `hello@harborandpinelandscaping.com`**
>
> This address is verified and belongs to your business domain. Maintenance Manager will update the form, submit a test request, and restore the current setting if delivery fails.

**Interactions**

- Primary: `Use recommended email` starts backup, change, and verification.
- Secondary: `Choose another email` opens a labeled email-entry state with `Test this email` and `Cancel`.
- Secondary: `Remind me in 7 days` returns to Overview with `Reminder set`; it does not make a change.

**Required alternate-email result**

- Validate the email format before continuing.
- If the entered value is `hello@harborandpinelandscaping.com`, run the same successful recommended flow.
- For any other valid address in this deterministic fixture, back up the setting, test the entered destination, and show `Test request submitted and recorded; email delivery could not be confirmed.`
- Restore the current destination after the failed delivery check and state that no destination change was kept.
- Offer `Try another email` and `Return to decision`.

**Required successful result**

- `New quote requests now go to hello@harborandpinelandscaping.com.`
- `Test request submitted, recorded, and delivered.`
- `Completed in 6 minutes · 10:14–10:20 AM.`
- `View activity` and `Return to overview` actions.

**Trust requirement**

- Claim delivery only in the successful fixture where delivery evidence exists.
- Silence and deferral never become approval.
- An alternate address never becomes the saved destination unless the staged delivery check succeeds.

### Screen 8: Weekly email summary

- **Route:** `/prototype/weekly-summary`
- **Assignment phase:** Ongoing value
- **Purpose:** Establish a genuine return experience one week after activation.

Treat this screen as a compact notification preview, not a separate management surface. All controls, decisions, history, and results remain in the Bluehost Portal.

**Required content on the completed happy path**

- Subject: `Harbor & Pine's weekly Maintenance Manager summary`
- Selected site and seven-day period.
- Website currently available.
- Availability checks have completed since activation; the two pre-activation missed checks have not recurred and did not establish downtime.
- Request-a-quote and general contact forms passed their latest tests.
- Phone links point to the expected business number.
- Two changes completed and verified.
- One owner decision resolved.
- No troubleshooting steps required from the owner.
- Do not aggregate agent runtime or estimate customer time saved.

**Required deferred-decision variant**

If the owner selected `Remind me in 7 days`, show:

- One change completed and verified: the contact-form plugin update.
- `Quote-request delivery · Reminder set · Due today` under decisions needing attention.
- The current destination remains `harborandpine@gmail.com`; do not imply that it changed.
- No troubleshooting steps required from the owner.

**Interactions**

- Primary: `View results` → Screen 9.
- Prototype-only: `Back to Day 1` resets the scenario.

### Screen 9: Results

- **Route:** `/ai-agents/maintenance-manager/results`
- **Assignment phase:** Ongoing value
- **Purpose:** Connect agent work to current website and customer-contact outcomes.

**Required content on the completed happy path**

- Seven-day reporting period.
- Website availability with latest check timestamp.
- Home, Services, and Contact status with latest check timestamps.
- Separate path cards for request-a-quote, general contact, and click-to-call.
- Two completed and verified changes.
- One resolved owner decision.
- No troubleshooting steps required from the owner.
- Links to the two completed Activity records with actual duration.
- Availability disposition: checks completed since activation; the two missed checks at 8:15 AM and 8:20 AM did not recur and did not establish downtime.

**Required state variants**

- After `Remind me in 7 days`: show one completed change, one pending quote-delivery decision labeled `Reminder set · Due today`, the unchanged destination, and one linked completed Activity record.
- Under `Watch and ask before every change`: show no completed changes, two pending decisions—the plugin update and quote-delivery destination—and the current monitoring evidence. This state is reachable from the monitoring-only Overview through `Results`; it does not require a separate weekly-email walkthrough.

**Monitoring freshness shown in the fixture**

- Availability: every five minutes.
- Important pages: hourly.
- Form submission and recording: daily and after relevant maintenance.
- Email delivery: after setup, after relevant changes, and periodically.
- Software maintenance: daily.

**Trust requirement**

- Do not claim increased leads, revenue, renewal, or measured customer time saved.
- If a check is overdue, show `Monitoring interrupted` and the last successful timestamp instead of a healthy state.

## Supporting screen A: AI Agents home

- **Route:** `/ai-agents`
- **Purpose:** Establish scalable agent organization without expanding the primary journey.
- **State behavior:** Derive active-work and decision content from current prototype state rather than pinning this screen to one moment.

**Required sections**

- **Before activation**
  - `Needs your attention` and `Working for you` use empty states.
  - Maintenance Manager appears under `Available to help` and links to Screen 2.

- **Needs your attention**
  - Before resolution: Maintenance Manager quote-delivery decision.
  - After resolution: remove that decision and show an empty state unless another current decision exists.
  - Under monitoring-only mode: show both the waiting plugin update and quote-delivery decision.

- **Working for you**
  - Maintenance Manager.
  - Site: `harborandpinelandscaping.com`.
  - Latest verified result and the current pending-decision count.

- **Available to help**
  - AI Front Desk Agent: `Answer customer questions and capture leads.`
  - AI Store: `Help manage products, inventory, and orders.`

Render the two available-agent cards as descriptive, non-interactive cards without an `Explore` control. Their setup and management flows are not part of this prototype.

## Clickable recovery branch

### Entry

Use the prototype-only scenario control to select `Verification failure and rollback`, then start from Screen 5.

This scenario isolates the plugin-update failure. Do not also show the separate quote-delivery decision before the branch ends at the support handoff.

### Recovery state 1: verification fails

- The minor contact-form plugin update completes.
- Website availability passes.
- The request-a-quote test fails.
- Maintenance Manager moves the task into `In progress` and begins restoring the backup.
- The interface states what remains safe and what is being restored.

### Recovery state 2: rollback succeeds

- The previous version is restored.
- Availability and all customer-contact-path checks pass again.
- Activity records the attempted update, failed verification, rollback, and successful recovery.
- The update remains unresolved under `Needs your decision`.

**Required recommendation**

> **Recommended: Ask Bluehost support to review**
>
> Your site is working normally again, but the update is still pending. Bluehost support can review the compatibility problem before another attempt. Maintenance Manager will include the failed test and rollback details in the ticket.

**Interactions**

- Primary: `Ask Bluehost support to review` → Recovery state 3.
- Secondary: `Try again later` sets a reminder and returns to Overview.

### Recovery state 3: support handoff

- Maintenance Manager opens a ticket containing:
  - Site.
  - Plugin and attempted version.
  - Backup timestamp.
  - Failed customer-path test.
  - Rollback result.
  - Relevant diagnostics.
- The item appears under `In progress`:
  - `Bluehost support is reviewing the update · Ticket #BH-10482`
- Show: `Your site and customer-contact paths are working normally. No action is required from you right now.`
- The clickable recovery branch ends here.

### Designed but non-clickable severe state

If rollback cannot restore a safe state, Maintenance Manager automatically opens a Bluehost support ticket, shows current safety and next steps, and notifies the owner only when judgment or input is required.

## Activity requirements

Activity is one history across findings, authorization, automatic work, owner decisions, verification, recovery, support escalation, and notifications.

The happy-path history includes the original two missed Bluehost availability checks and a later disposition event: `Availability monitoring established · No additional missed checks since activation.` Its detail states that the original missed checks did not establish downtime.

Each event should answer:

- What happened?
- Why did it happen?
- Which agreement or approval authorized it?
- What did Maintenance Manager check afterward?
- What was the result?
- When did it start and finish?
- How long did the active task take?

Technical details—including patch and version terminology—may be expandable, but the default history must remain readable to a nontechnical owner and use `test submission` rather than `synthetic submission`.

## Settings requirements

Settings is shallow supporting scope and should show:

- Selected site.
- Current working agreement.
- Automatic-action and always-ask boundaries.
- Event preferences for immediate notifications and weekly summaries.
- Explanation that delivery channels are controlled by Bluehost's existing account notification preferences.

Do not build a large permission matrix, new notification-channel system, multi-user roles, or multi-site bulk controls.

## Deterministic prototype state

The prototype should maintain enough client-side state to support:

- Selected scenario: happy path or rollback branch.
- Discovery-card dismissal and reset.
- Selected working agreement.
- Setup progress.
- Activation status.
- Initial-check progress and result.
- Initial-check incomplete designed state.
- Quote-delivery decision state.
- Alternate-email entry and delivery-verification result.
- Seven-day reminder state.
- Completed task details and durations.
- Support-ticket handoff state.
- One-week return state.
- State-derived AI Agents home content.

Provide a `Restart prototype` control that reliably restores the initial fixture.

## Visual direction

- Match the current Bluehost Portal's broad visual language without claiming pixel-perfect access to its internal design system.
- Use a dark navy Portal frame, white and light-neutral surfaces, Bluehost blue for primary actions, and restrained status colors.
- Use a system sans-serif or close web-safe equivalent.
- Prefer compact cards, clear headings, and readable evidence over decorative AI imagery.
- Use familiar line icons for Portal navigation and statuses.
- Do not use robot illustrations, glowing AI effects, chat bubbles as the main interface, or anthropomorphic agent avatars.
- Keep customer consequences visually stronger than technical details.
- Identify recommendations with both text and visual treatment; do not rely on color alone.

## Accessibility requirements

- All interactive controls are keyboard reachable with visible focus.
- Use semantic headings, buttons, links, lists, and form controls.
- Associate labels and descriptions with agreement choices and email inputs.
- Do not communicate state through color alone.
- Provide sufficient text contrast.
- Announce progress and completion changes through an accessible live region.
- Respect reduced-motion preferences for deterministic progress sequences.
- Keep primary touch targets at least 44 × 44 pixels where practical.
- Ensure the collapsed navigation is operable and labeled on smaller screens.

## Prototype assumptions and simulated capabilities

The prototype simulates the following and must not present them as confirmed production integrations:

- Pre-activation Bluehost availability evidence.
- Site-level entitlement and recovery-readiness detection.
- WordPress and plugin update execution.
- Backup creation and restore.
- Synthetic form submission and website-record verification.
- External email-delivery confirmation.
- Monitoring schedules.
- Automatic support-ticket creation and diagnostic attachment.
- Weekly email delivery.

These assumptions should appear in the written brief or prototype notes, not as warnings inside every customer screen.

## Deliberately excluded

- Signup, checkout, or hosting-plan selection.
- Upgrade purchase flows.
- A full agent marketplace or other-agent setup.
- Ecommerce, marketing, SEO campaigns, customer-service interactions, or lead management.
- General-purpose chat.
- Multi-site management and bulk permissions.
- Multi-user roles and delegated approvals.
- Custom monitoring workflow construction.
- Full support-case management.
- Production APIs, authentication, persistence, email, monitoring, or ticketing.
- Estimated customer time saved or claims about leads, revenue, retention, or renewal.

## Acceptance criteria

### Assignment coverage

- The primary journey begins in the existing Bluehost Portal and ends with evidence that Maintenance Manager is working for Harbor & Pine's business.
- Discovery, Setup, and Ongoing value are each unmistakable.
- The experience focuses deeply on Maintenance Manager; other agents remain supporting context.
- No signup or checkout flow is present.

### Clickability

- Every primary action in Screens 1–9 leads to the intended next state.
- Both working agreements activate and lead to their specified, truthful Overview state.
- The quote-delivery recommendation produces a verified completion state.
- `Choose another email` produces a deterministic verified or restored result; an unconfirmed address is never saved.
- `Remind me in 7 days` produces a visible deferred state without making a change.
- Weekly Summary and Results content derive from whether the quote-delivery change completed, was deferred, or was never authorized.
- The AI Agents home is reachable from global navigation and reflects current decisions rather than a fixed fixture moment.
- The rollback branch is reachable, completes recovery, and ends with the support-ticket handoff.
- The prototype can be reset reliably.

### Trust and accuracy

- Pre-activation findings are attributed to Bluehost.
- The two missed availability checks receive an explicit later disposition in Overview, Activity, Weekly Summary, and Results.
- Maintenance Manager's authority is site-specific and visible.
- Plan readiness is disclosed before automatic work is offered.
- Automatic and always-ask boundaries are explicit.
- Completed work is not labeled handled until verification succeeds.
- Submission, website recording, and delivery are reported separately.
- Rollback and support escalation remain visible in Activity.
- Recommendations explain why they are preferred and what happens next.
- Actual task duration is not mislabeled as customer time saved.
- Stale monitoring never appears healthy.
- Home, Services, and Contact are named consistently as the important pages.
- Default customer copy uses `test submission` and plain-language update boundaries; technical version terms remain optional detail.

### Presentation quality

- Portal and Maintenance Manager hierarchy remain visually clear.
- Primary content is understandable without technical knowledge.
- No essential information depends on hover.
- No primary control is visually active but functionally dead.
- The prototype works at the primary desktop viewport and does not overflow at 1024 pixels.
- Keyboard navigation, focus treatment, labels, and progress announcements are present.
- The production build contains only static web assets and succeeds without a backend or runtime secret.
- The application works from the GitHub Pages project subpath rather than assuming `/`.
- Every logical route is directly loadable and refreshable at its deployed hash URL.
- A reviewer can open the final public HTTPS URL in a standard browser without signing in, downloading an executable, installing dependencies, or running a local server.
- The GitHub Pages workflow succeeds and the published URL is recorded in the repository README and submission materials.

## Review gates

### Before implementation

- Review this specification against the assignment, story map, and value proposition.
- The independent adversarial model review was completed on August 12, 2026; see [Fable review results](bluehost-fable-review-results.md).
- Address only material findings that are supported by the source documents.
- Use the [Fable adversarial review packet](bluehost-fable-review-packet.md) to run and assess the review consistently.

### Before publishing

- Walk the happy path from a reset state.
- Walk the rollback branch from a reset state.
- Test every primary and secondary click included in scope.
- Verify all customer-facing copy and fixture values are consistent.
- Check desktop and 1024-pixel layouts.
- Complete a keyboard and contrast review.
- Confirm that prototype-only controls are visually separate from the simulated product.
- Confirm that no production capability is represented as already implemented by Bluehost.
- Run the GitHub Pages production build and test the built output under the `/bluehost/` base path.
- Open the deployed URL in a signed-out or private browser session and walk both the happy path and recovery branch.
- Refresh at representative deployed routes and confirm assets and navigation still load.

## Written brief handoff

After the prototype is complete, create the required 1–2 page brief covering:

- The customer problem and why it matters.
- Why Maintenance Manager was chosen.
- What was prioritized and cut.
- How the experience handles trust and simplicity.
- The product and prototype tradeoffs made.
- What would be validated with more time or data.
- Two or three post-launch success metrics.
