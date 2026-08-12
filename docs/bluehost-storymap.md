# Maintenance Manager user story map

This map treats the [assignment](bluehost-project-assignment.md) as the source of truth and the
[current pitch](bluehost-value-prop.md) as a hypothesis to test.

## Framing assumptions

- The prototype customer is the nontechnical owner of **Harbor & Pine Landscaping**, using the existing Bluehost-hosted WordPress site `harborandpinelandscaping.com`.
- Maintenance Manager activation, permissions, monitoring, activity, and results are specific to one website. The selected site remains visible throughout the experience.
- **AI Agents** is the top-level Portal category for Bluehost’s agent experiences. Maintenance Manager is one bounded monitoring and maintenance agent within that category, not a top-level navigation item.
- A relevant Portal trigger deep-links directly to Maintenance Manager rather than requiring the customer to browse the AI Agents category or understand what an agent is first.
- The Portal may use Bluehost signals to identify potential problems before activation, but Maintenance Manager does not change or actively test the site until the customer grants permission.
- Maintenance Manager is included as the universal customer experience at no additional charge. The automatic actions available for a site depend on the backup, restore, maintenance, security, and support capabilities included with that site's existing plan.
- Maintenance Manager detects and monitors all identifiable customer-contact paths. It reports only the parts of each path it can actually verify.
- Actual task duration is shown as activity evidence. The prototype does not convert agent runtime into an estimated amount of customer time saved.
- The deterministic fixture begins on Monday, August 3, 2026, and returns one week later on Monday, August 10, 2026. Important pages are Home, Services, and Contact.
- The final prototype is a static browser application published at a public HTTPS URL, preferably through GitHub Pages. Reviewers do not install software, download an executable, or run a local server.

## Journey backbone

1. **Discovery:** Encounter a relevant website problem in the Portal.
2. **Discovery:** Understand how Maintenance Manager would help.
3. **Setup:** Confirm what matters on the website.
4. **Setup:** Establish permissions, safeguards, and notifications.
5. **Setup:** Activate Maintenance Manager and complete its first check.
6. **Ongoing value:** Understand what needs attention and what is already handled.
7. **Ongoing value:** Make an informed business decision.
8. **Ongoing value:** See that the work was completed and verified.
9. **Ongoing value:** Connect that work to business-relevant outcomes.

Slice labels:

- **Primary:** Essential to the end-to-end clickable prototype.
- **Supporting:** Useful adjacent state or branch, but not required in the main walkthrough.
- **Later:** Deliberately outside the take-home prototype.

## Phase 1: Discovery

### 1. Encounter a relevant problem in the Bluehost Portal

- **Customer goal:** Understand whether anything important needs attention without having to inspect or diagnose the website.

- **Customer stories or tasks:**

  - **Primary:** As an owner, I want to see that Bluehost detected something relevant to my website.
  - **Primary:** I want to understand the possible business consequence in plain language.
  - **Primary:** I want to learn what Maintenance Manager could do about it.
  - **Supporting:** I want to see when and how the issue was detected.
  - **Supporting:** I want to dismiss the message or ask to be reminded later.
  - **Supporting:** I want to understand where Maintenance Manager lives in the Portal when I return later.
  - **Later:** I want Portal recommendations coordinated across several sites or businesses.

- **Important system response:**

  - Existing Bluehost checks, not an inactive agent, identify one current, actionable finding.
  - Before displaying the card, Bluehost rechecks the update status so stale work is not presented as current.
  - The Portal displays:

    > **Harbor & Pine Landscaping has one item that needs attention**
    >
    > - One routine website update is waiting.
    >
    > Maintenance Manager can watch your site, handle approved routine fixes, and bring you only the decisions that need your judgment.

  - The waiting work is one eligible minor update to the already-installed contact-form plugin.
  - The card does not imply that Maintenance Manager has already monitored, tested, or changed the site.
  - The action deep-links to `AI Agents / Maintenance Manager`; it does not send the customer to a general agent catalog.

- **What the customer sees:**

  - A Portal card tied to their named website.
  - One concise finding, its recency, and why it matters.
  - A clear `See how Maintenance Manager can help` action.
  - A secondary `Not now` action.
  - The global navigation indicates **AI Agents** as the selected category after the customer follows the action.

- **Trust or confidence requirement:**

  - The trigger must not use vague fear or manufactured urgency.
  - Every claimed issue needs a source, timestamp, understandable consequence, and meaningful next step.
  - Inconclusive monitoring telemetry is not presented as a customer-facing problem. Availability warnings require a confirmed condition, current status, and clear ownership of the next action.
  - The customer must be able to distinguish Bluehost's existing observations from agent actions.

- **Assignment requirement addressed:**

  - **Discovery:** Shows how an existing customer learns that an agent is available.
  - Makes the agent relevant through a current customer problem rather than an explanation of AI.

- **Slice placement:** Primary, with dismissal and evidence details as supporting states.

### 2. Decide whether Maintenance Manager is relevant and safe enough to try

- **Customer goal:** Understand what Maintenance Manager will do, what remains under their control, and why it is worth activating.

- **Customer stories or tasks:**

  - **Primary:** I want to understand Maintenance Manager's job in one sentence.
  - **Primary:** I want to see how it would address the two current findings.
  - **Primary:** I want to know what it can handle automatically.
  - **Primary:** I want reassurance that sensitive changes still require me.
  - **Primary:** I want to begin setup without committing to unspecified actions.
  - **Supporting:** I want examples of recently handled work.
  - **Primary:** I want to know that Maintenance Manager is included and which actions my site's plan supports.
  - **Supporting:** I want to return to an AI Agents home that shows the status of my active agents.
  - **Later:** I want to explore and activate other Bluehost agents and capabilities.

- **Important system response:**

  - Maintenance Manager explains its bounded role:

    - Watches site availability, important pages, and identifiable customer-contact paths.
    - Handles explicitly permitted, reversible maintenance when the site's plan provides adequate backup and restore.
    - Backs up, tests, and verifies changes.
    - Requests approval for customer-visible or business-sensitive decisions.
    - Opens a Bluehost support ticket if automated recovery cannot restore a safe state.

  - The system states: “Maintenance Manager is an AI agent included with your Bluehost subscription. Nothing will be changed until you review and turn on your working agreement.”
  - A `How it works` disclosure explains permissions, records, verification, approval boundaries, and support escalation without describing models or orchestration.

- **What the customer sees:**

  - The waiting update from the Portal, now with a clearer explanation.
  - A compact “What it watches / What it can handle / What always needs you” preview.
  - The safeguards: backup, test, verify, and restore if verification fails.
  - “Maintenance Manager is included with your Bluehost subscription at no additional charge,” followed by a plain-language summary of the capabilities already available for this site.
  - A `Set up Maintenance Manager` action.

- **Trust or confidence requirement:**

  - Avoid promises such as “runs your website” without explaining boundaries.
  - Do not make customers infer what “routine fixes” means.
  - Keep AI implementation details secondary to the customer's work and control; the selected global category may introduce the term, but the page should lead with the website problem and Maintenance Manager's job.
  - Do not hide plan limitations or turn the introduction into an upgrade pitch.

- **Assignment requirement addressed:**

  - **Discovery:** Makes the chosen agent obviously relevant.
  - Begins addressing the assignment's trust and nontechnical-language challenges.
  - Demonstrates why Maintenance Manager was chosen: website availability and maintenance are common, recognizable problems.

- **Slice placement:** Primary. The AI Agents home is a supporting destination; exploration of other agents is later scope.

## Phase 2: Setup

### 3. Confirm what Maintenance Manager should protect

- **Customer goal:** Confirm that Maintenance Manager found all the ways customers can contact the business and understand what it can verify.

- **Customer stories or tasks:**

  - **Primary:** I want Bluehost's recommended monitoring already selected.
  - **Primary:** I want to see every customer-contact path Maintenance Manager detected.
  - **Primary:** I want to understand what each check proves.
  - **Supporting:** I want to flag a path that is not used for customer contact.
  - **Supporting:** I want to add a contact path Maintenance Manager missed.
  - **Later:** I want to build custom tests for stores, bookings, or authenticated workflows.

- **Important system response:**

  - Maintenance Manager detects and selects all three contact paths for Harbor & Pine:

    - **Request a quote:** `Homepage → Request a Quote → Submit request`
    - **General contact:** `Homepage → Contact → Send message`
    - **Call the business:** Phone links in the header and contact page.

  - For forms, Maintenance Manager can separately verify that the page loads, a clearly labeled test submission succeeds, the site records it, and an email notification is delivered when Bluehost has delivery evidence.
  - For phone links, it verifies that the expected number is present and the link can launch a phone action. It does not place a call or claim the business answered.
  - The underlying synthetic form submissions are identified and removed or archived so they do not pollute customer records.
  - Maintenance Manager also proposes availability, software-maintenance monitoring, and hourly checks of the Home, Services, and Contact pages.

- **What the customer sees:**

  - A short, recommended checklist rather than a technical monitoring configuration.
  - All three detected contact paths selected by default.
  - A plain-language coverage label on each path, such as `Submission and recording tested` or `Link and phone number checked`.
  - `This isn't a customer contact path` and `Add a missing path` correction actions.

- **Trust or confidence requirement:**

  - Maintenance Manager must not ask the owner to choose one contact path and ignore the others.
  - It must disclose whether a check creates a synthetic submission or message.
  - It must distinguish submission, website recording, and confirmed delivery rather than collapsing them into one success claim.

- **Assignment requirement addressed:**

  - **Setup:** Makes activation simple for a nontechnical owner.
  - **Ongoing value foundation:** Defines the website and contact outcomes the agent will later report.

- **Slice placement:** Primary. Custom paths and complex workflows are supporting or later.

### 4. Establish the working agreement

- **Customer goal:** Grant enough authority to save time without surrendering control over consequential decisions.

- **Customer stories or tasks:**

  - **Primary:** I want a recommended permission level explained in business terms.
  - **Primary:** I want to know exactly what can happen automatically.
  - **Primary:** I want to know what will always wait for my approval.
  - **Primary:** I want to know how failed work will be recovered.
  - **Primary:** I want to know whether my site's plan supports safe automatic maintenance.
  - **Primary:** I want notifications to follow my existing Bluehost preferences.
  - **Supporting:** I want to customize individual permission categories.
  - **Later:** I want roles and approval policies for employees or agencies.

- **Important system response:**

  - Setup first reports site readiness:

    > **Harbor & Pine's site is ready for automatic maintenance**
    >
    > Included with this site's Bluehost plan: managed updates for existing WordPress software, backup and restore, website and customer-path monitoring, and Bluehost support escalation.

  - The owner explicitly chooses one of two agreements:

    - **Watch and handle routine maintenance — Recommended:** Make eligible reversible changes, then test, verify, and roll back automatically.
    - **Watch and ask before every change:** Perform the same monitoring but make no website change without approval.

  - Eligible automatic work is limited to security, patch, and minor-version updates for WordPress and already-installed plugins or themes, plus cache clearing when required afterward.
  - Customer-facing permission copy describes that boundary as “small updates to software your site already uses, like the waiting contact-form update.” Precise version terminology appears only in optional technical detail.
  - Maintenance Manager always asks before major-version updates; installing, replacing, or removing software; changing hosting configuration; changing visible content, design, customer data, or form destinations; purchasing anything; or making an irreversible change.
  - Every change is backed up and verified. Failed verification triggers rollback. If rollback cannot restore a safe state, Maintenance Manager automatically opens a Bluehost support ticket.
  - Immediate notifications are reserved for matters requiring owner judgment or input. Routine work, successful recovery, and support tickets that need no owner action appear in the Portal and weekly summary.
  - Maintenance Manager uses Bluehost's existing notification center and master delivery-channel preferences. Its Settings control event preferences, not separate delivery channels.
  - If adequate backup and restore are unavailable, the recommended automatic mode is unavailable. Monitoring and approval remain available, and no service is silently purchased.

- **What the customer sees:**

  - A short plan-readiness summary for the selected site.
  - The two working agreements, with the recommended choice and its rationale clearly identified.
  - A concise `Can handle automatically / Always asks you` boundary.
  - A clear explanation of backup, testing, verification, and rollback.
  - “We'll contact you right away when you need to decide something. Everything else goes in your weekly summary.”
  - No infrastructure vocabulary or large permissions matrix.

- **Trust or confidence requirement:**

  - Permissions must be specific enough to be meaningful.
  - “Safe” or “routine” cannot be used as a substitute for describing the authorized action.
  - Approval boundaries must apply consistently after setup.
  - Maintenance Manager may offer automatic work only when the site's existing capabilities support the promised recovery.

- **Assignment requirement addressed:**

  - **Setup:** Creates the safe activation moment requested by the assignment.
  - Directly addresses fear about what the agent will do without the customer.

- **Slice placement:** Primary. Advanced permission editing is supporting; multi-user governance is later.

### 5. Review, activate, and receive a truthful first status

- **Customer goal:** Turn Maintenance Manager on with confidence and know whether setup actually succeeded.

- **Customer stories or tasks:**

  - **Primary:** I want to review the working agreement before activating it.
  - **Primary:** I want to know which known work will begin immediately.
  - **Primary:** I want clear confirmation that monitoring is active.
  - **Primary:** I want to see the first check begin and complete.
  - **Supporting:** I want to correct a site connection or test-path problem.
  - **Supporting:** I want to leave setup and return without losing my choices.
  - **Later:** I want scheduled activation or migration from another monitoring service.

- **Important system response:**

  - The final review says that activation will:

    - Check the site and all detected customer-contact paths.
    - Back up the site.
    - Install the one pending minor update to the existing contact-form plugin under the recommended agreement.
    - Test the site and affected customer-contact paths.
    - Restore the backup if verification fails.

  - After `Turn on Maintenance Manager`, the system:

    1. Confirms the site-specific agreement.
    2. Runs the initial website and customer-path checks.
    3. Backs up the site and completes eligible disclosed maintenance immediately when the recommended agreement was chosen.
    4. Verifies the site and affected customer-contact paths.
    5. Creates the first decision-center and Activity entries.
     6. Reports any access or test limitation rather than falsely declaring success.

  - Under `Watch and ask before every change`, the same monitoring and customer-path checks begin, but the plugin update remains under `Needs your decision`; no backup or change runs until approval.
  - If an initial check cannot run, setup remains active but incomplete. The customer sees which coverage is unavailable and can retry, correct the connection, or ask Bluehost support for help.

- **What the customer sees:**

  - A concise final review.
  - The selected site, `harborandpinelandscaping.com`, remains visible.
  - Progress described as customer-relevant checks.
  - A success state such as:

    - “Maintenance Manager is watching your site.”
    - “Initial check complete.”
    - “One item handled; one decision needs you.”

  - A direct route to the decision center.

- **Trust or confidence requirement:**

  - Activation and a successful first check are separate events.
  - Partial setup cannot be presented as full protection.
  - The customer needs a recovery path if Maintenance Manager cannot inspect or test something.
  - Automatic work must not begin unless it was covered by the selected agreement and disclosed on the final review.

- **Assignment requirement addressed:**

  - **Setup:** Completes activation.
  - Bridges setup to **Ongoing value** with immediate, credible feedback.

- **Slice placement:** Primary, with one failed-initial-check state as an essential supporting branch.

## Phase 3: Ongoing value

### 6. Understand what needs a decision, what was handled, and what is being watched

- **Customer goal:** Know the website's current state in a few seconds.

- **Customer stories or tasks:**

  - **Primary:** I want urgent decisions separated from work that is already complete.
  - **Primary:** I want active work and support escalation distinguished from completed work.
  - **Primary:** I want reassurance about important areas that are healthy.
  - **Primary:** I want to understand which item matters most.
  - **Supporting:** I want to filter or search previous activity.
  - **Later:** I want one view across multiple websites or agent categories.

- **Important system response:**

  - The decision center retains three stable customer outcomes:

    - **Needs your decision**
    - **Handled for you**
    - **Watching for you**

  - A conditional **In progress** area appears above them only while work is active, restoring, or being handled by Bluehost support.
  - It prioritizes by customer consequence, not technical severity.
  - Each item has a status, timestamp, concise reason, and next action.
  - Items leave `In progress` only when work is verified, a customer decision becomes necessary, monitoring resumes, or support completes and verifies the resolution.

- **What the customer sees:**

  - **In progress, when applicable:** “Verifying the result,” “Restoring backup,” or “Bluehost support is handling this · Ticket #BH-10482.”
  - **Needs your decision:** “Where should new quote requests go?”
  - **Handled for you:** “Contact-form plugin updated; site and affected paths passed verification.”
  - **Watching for you:** Availability, Home, Services, Contact, both forms, and phone links, each with its latest successful check.
  - Availability is a proactive monitoring benefit activated through the working agreement: “Your website is available · Last checked 10:50 AM · Every five minutes.”
  - Under `Watch and ask before every change`, the plugin update appears under `Needs your decision`, `Handled for you` is empty, and the same monitoring evidence appears under `Watching for you`.
  - A visible distinction between healthy, completed, and blocked work.

- **Trust or confidence requirement:**

  - “Watching” must include the last check and coverage; it cannot be an empty reassurance.
  - “Handled” must mean completed and verified, not merely attempted.
  - Failures must not be hidden inside a positive status.
  - A successful rollback restores safety but does not mean the original maintenance issue was handled.

- **Assignment requirement addressed:**

  - **Ongoing value:** Creates the feedback loop showing that the agent is active.
  - Shows both autonomous work and retained customer control.

- **Slice placement:** Primary. Filtering and multi-site aggregation are later.

### 7. Make an informed business decision

- **Customer goal:** Resolve an issue requiring business knowledge without diagnosing the underlying software.

- **Customer stories or tasks:**

  - **Primary:** I want the decision expressed as a business question.
  - **Primary:** I want a recommended choice and the reason for it.
  - **Primary:** I want to know exactly what will change if I approve.
  - **Primary:** I want to accept the recommendation, choose another address, or set an explicit reminder.
  - **Supporting:** I want to ask for help or nominate a different email address.
  - **Later:** I want delegated approval and configurable approval deadlines.

- **Important system response:**

  - A synthetic quote request is accepted and recorded by the website, but delivery to `harborandpine@gmail.com` cannot be confirmed because the address is no longer verified for the account.
  - Maintenance Manager finds `hello@harborandpinelandscaping.com`, a verified business mailbox associated with the site.
  - Maintenance Manager reports:

    - **Question:** “Where should new quote requests go?”
    - **Recommended:** Send requests to `hello@harborandpinelandscaping.com` because it is verified and belongs to the business domain.
    - Approval changes only the quote-form destination.
    - It will back up the configuration, make the change, submit a test inquiry, and restore the previous configuration if verification fails.
  - If the owner selects `Remind me in 7 days`, the current destination remains unchanged, the limitation remains visible under `Needs your decision`, and no repeated immediate notification is sent unless evidence shows that requests are failing or being lost.
  - If the owner chooses another address, Maintenance Manager runs the same backup, change, submission, recording, and delivery checks. If delivery cannot be confirmed, it restores the current destination and reports “submitted and recorded; email delivery could not be confirmed.”

- **What the customer sees:**

  - The likely customer consequence.
  - The current and recommended destination.
  - Why Maintenance Manager cannot decide this automatically.
  - `Use recommended email`, `Choose another email`, and `Remind me in 7 days`.
  - A concise preview of the post-approval checks.

- **Trust or confidence requirement:**

  - The recommendation must not disguise a decision already made.
  - Scope, reversibility, and verification must be visible before approval.
  - Deferring cannot silently expand Maintenance Manager's authority.
  - Silence is never treated as approval, and the unresolved delivery limitation remains visible.

- **Assignment requirement addressed:**

  - **Ongoing value:** Demonstrates the agent bringing only a meaningful decision to the customer.
  - Reinforces trust through explainability and bounded approval.

- **Slice placement:** Primary. Alternate email and help are supporting; delegated approval is later.

### 8. See that approved and automatic work was verified

- **Customer goal:** Know that the issue was actually resolved and that Maintenance Manager did not leave the site worse.

- **Customer stories or tasks:**

  - **Primary:** I want confirmation when approved work finishes.
  - **Primary:** I want to see what was checked afterward.
  - **Primary:** I want to know which parts of the affected customer-contact paths were actually verified.
  - **Primary:** I want to see when the work ran and how long it took.
  - **Supporting:** I want a complete history of detection, approval, work, testing, and notification.
  - **Supporting:** I want to understand a rollback or failed verification.
  - **Later:** I want downloadable compliance or maintenance reports.

- **Important system response:**

  - Maintenance Manager records:

    1. The problem detected.
    2. The permission or approval used.
    3. The backup created.
    4. The change made.
    5. The verification performed.
    6. Start time, completion time, and actual task duration.
    7. The final result and notification.

  - The item moves to `Handled for you` only after the verification succeeds.
  - Form verification is staged: page loaded, synthetic request submitted, website record confirmed, and notification delivery confirmed only when Bluehost has delivery evidence.

- **What the customer sees:**

  - “New quote requests now go to `hello@harborandpinelandscaping.com`.”
  - “Test request submitted, recorded, and delivered.”
  - “Completed in 6 minutes · 10:14–10:20 AM.”
  - A human-readable activity trail with technical details hidden behind optional expansion.

- **Trust or confidence requirement:**

  - Verification evidence must be specific and recent.
  - If delivery cannot be confirmed, the result must say “submitted and recorded; email delivery could not be confirmed.”
  - If the test fails, the system must say so, restore the safe state where possible, and explain what happens next.
  - The history must not retroactively obscure unsuccessful attempts.

- **Assignment requirement addressed:**

  - **Ongoing value:** Proves that work happened and provides a trustworthy feedback loop.
  - Directly addresses customer anxiety about autonomous action.

- **Slice placement:** The successful result is primary. Full Activity view and the failed-verification branch are supporting but important.

### 9. See that Maintenance Manager is working for the business

- **Customer goal:** Understand whether Maintenance Manager is protecting something valuable and removing work from the owner's plate.

- **Customer stories or tasks:**

  - **Primary:** I want to see whether the website and all detected customer-contact paths are currently healthy.
  - **Primary:** I want to see what work Maintenance Manager completed.
  - **Primary:** I want to see how much effort was required from me.
  - **Primary:** I want a weekly summary that brings me back to current evidence in the Portal.
  - **Supporting:** I want trends across weeks or months.
  - **Supporting:** I want to inspect the actual duration of each completed maintenance task.
  - **Later:** I want attribution to leads, revenue, renewals, or support-cost savings.

- **Important system response:**

  - Results summarize observable outcomes:

    - Website availability checks passed.
    - All detected customer-contact paths and their latest verifiable results.
    - Maintenance items completed and verified.
    - Decisions resolved.
     - Owner decisions and troubleshooting steps required.

  - The happy-path summary reports two completed changes and one resolved owner decision.
  - If the owner selected `Remind me in 7 days`, the one-week summary and Results show one completed change and the quote-delivery decision as `Reminder set · Due today`; they never imply that the destination changed.
  - If the owner activated `Watch and ask before every change` and approved nothing, Results show no completed changes and two pending decisions: the plugin update and the quote-delivery destination.
  - Availability evidence states when the latest check completed and how often Maintenance Manager checks the site.

  - One week after activation, the existing Bluehost notification system sends a weekly email summary that deep-links to the Results view.
  - Monitoring follows these customer-facing frequencies for Harbor & Pine's plan:

    - Website availability every five minutes.
    - Home, Services, and Contact hourly.
    - Form submission and recording daily and after relevant maintenance.
    - Email delivery after setup, after relevant changes, and periodically.
    - Software maintenance status daily.

  - Healthy states expire when expected evidence becomes stale.

- **What the customer sees:**

  - “Your website is available.”
  - “Your request-a-quote and general contact forms passed their latest tests.”
  - “Your phone links point to the expected business number.”
  - Happy path: “Two changes completed and checked.”
  - Happy path: “One owner decision resolved · No troubleshooting steps required from you.”
  - Deferred path: “One change completed and checked · One decision is due today.”
  - Actual duration appears on completed tasks, not as an aggregate business outcome.
  - The time period and latest-check timestamps.

- **Trust or confidence requirement:**

  - A successful test is not evidence that leads or revenue increased.
  - Agent runtime must not be mislabeled as customer time saved.
  - Results should report coverage gaps and failed checks, not only successes.
  - When checks are overdue, the interface shows `Monitoring interrupted` and the last successful timestamp instead of a healthy state.

- **Assignment requirement addressed:**

  - **Ongoing value:** Connects agent activity to outcomes a business owner cares about.
  - Supplies the evidence needed for the written brief's success metrics without inventing financial attribution or a time-saved estimate.

- **Slice placement:** Primary for current results; historical trends and financial attribution are later.

## Recommended primary prototype slice

The smallest credible prototype is one continuous journey of approximately nine views:

1. **Existing Bluehost Portal**

   - Harbor & Pine's one waiting update, attributed to Bluehost.

2. **Maintenance Manager introduction**

   - Current findings, lightweight AI disclosure, bounded promise, plan-aware safeguards, and setup CTA.

3. **What Maintenance Manager will watch**

   - Selected site, availability, Home, Services, Contact, maintenance status, and all three detected customer-contact paths.

4. **Working agreement**

   - Site readiness, recommended automatic mode, monitoring-only mode, approval boundaries, recovery behavior, and notification summary.

5. **Review and activation**

   - Preview immediate eligible work, turn on Maintenance Manager, and show the initial check and plugin update.

6. **Decision center**

   - Conditional `In progress` plus one item in each of the three stable work states.

7. **Decision and resolution**

   - Accept the recommended quote-request destination, followed by staged verification and actual task duration.

8. **Weekly email summary**

   - One-week return showing verified work and a direct route to Results.

9. **Results**

   - Current site health, latest contact-path evidence, completed work, owner decisions, and customer effort required.

The decision detail and successful resolution can be successive states of one view if prototype size needs to remain tight. The weekly email can be a transition state rather than a fully functional email client.

Activity and Settings need only enough representation to establish the broader navigation model. They do not require deep prototype flows.

The prototype should use Bluehost's current documented left-side Portal navigation and show **AI Agents** as the existing selected category. A single supporting AI Agents home screen may establish the scalable hierarchy:

- **Needs your attention:** The Maintenance Manager quote-delivery decision.
- **Working for you:** Maintenance Manager for `harborandpinelandscaping.com`, with current state, latest result, and decision count.
- **Available to help:** Descriptive, non-interactive cards for AI Front Desk Agent and AI Store.

The main journey does not enter the other agent cards. Before activation, Maintenance Manager appears under `Available to help` and links to its introduction. After activation, `Needs your attention` and `Working for you` derive from current prototype state so resolved decisions do not reappear as pending.

## Proposed happy-path scenario

The owner of Harbor & Pine Landscaping signs into the Bluehost Portal. Existing Bluehost checks report one eligible contact-form plugin update for `harborandpinelandscaping.com`.

The owner follows the contextual trigger directly to `AI Agents / Maintenance Manager`. Maintenance Manager discloses that it is an included AI agent, explains its bounded job, and shows that this site's plan supports managed updates, backup and restore, monitoring, and support escalation.

Setup has three steps:

1. The owner confirms coverage of availability, important pages, software maintenance, the request-a-quote form, general contact form, and click-to-call links.
2. The owner selects `Watch and handle routine maintenance — Recommended` after reviewing automatic-action and always-ask boundaries.
3. The owner reviews the known work that will begin, then turns Maintenance Manager on.

Maintenance Manager creates a backup, installs the disclosed minor plugin update, and verifies the website and affected customer-contact paths. The completed task records its actual duration under `Handled for you`.

The initial authorized test also finds that quote requests are recorded by the site but delivery to `harborandpine@gmail.com` cannot be confirmed. Maintenance Manager recommends the verified business mailbox `hello@harborandpinelandscaping.com`. The owner accepts the recommendation.

Maintenance Manager backs up the configuration, changes only the quote-request destination, and verifies that a synthetic request is submitted, recorded, and delivered. It moves the result to `Handled for you`; ongoing checks remain under `Watching for you`.

One week later, the owner receives the weekly summary and returns to Results. The view shows current availability, fresh evidence for every detected customer-contact path, completed and verified maintenance, one owner decision, actual task durations, and no troubleshooting steps required from the owner.

## Essential exception or recovery states

At least one recovery branch should be clickable; the rest can be represented as designed states.

- **Initial check cannot run**

  - Explain which check is unavailable.
  - Do not claim the site is fully monitored.
  - Offer retry, guided correction, or support.

- **Site lacks adequate backup and restore**

  - Keep `Watch and ask before every change` available.
  - Explain why automatic maintenance is unavailable for this site.
  - Never activate or purchase a paid protection service without explicit approval.
  - Keep upgrade and checkout outside the primary prototype.

- **Finding is stale or no longer reproducible**

  - Recheck before prompting for action.
  - Mark the finding resolved by recheck rather than “handled by Maintenance Manager.”

- **Automatic maintenance fails verification — clickable recovery branch**

  - This scenario isolates the failed plugin update. The separate quote-delivery decision does not appear before the branch ends at the support handoff.
  - The minor plugin update leaves the website available but causes the request-a-quote test to fail.
  - Maintenance Manager restores the backup, reruns the checks, and verifies that the website and customer-contact paths work normally again.
  - The update remains unresolved and moves to `Needs your decision`; Activity records the failed verification and successful rollback.
  - Present a recommendation:

    > **Recommended: Ask Bluehost support to review**
    >
    > Your site is working normally again, but the update is still pending. Bluehost support can review the compatibility problem before another attempt. Maintenance Manager will include the failed test and rollback details in the ticket.

  - Offer `Ask Bluehost support to review` and the secondary `Try again later`.
  - After the owner accepts the recommendation, Maintenance Manager opens a ticket containing the site, plugin and version, backup timestamp, failed test, rollback result, and relevant diagnostics.
  - The item moves to `In progress`: “Bluehost support is reviewing the update · Ticket #BH-10482.” The prototype stops at this handoff state.

- **Approved change fails verification**

  - Roll back where possible.
  - Tell the owner what succeeded, what failed, and whether the site remains safe.
  - Do not move the item to `Handled for you`.
  - If rollback is impossible or fails, automatically open a Bluehost support ticket and notify the owner.

- **Rollback cannot restore a safe state**

  - Automatically open a Bluehost support ticket without asking the owner to diagnose or repeat the problem.
  - Show the ticket number, current site safety, and next step under `In progress`.
  - Move the item to `Needs your decision` only if support later requires owner information.

- **Customer selects `Remind me in 7 days`**

  - Keep monitoring without making the change.
  - Keep the unresolved delivery limitation under `Needs your decision` with `Reminder set`.
  - Include it in the weekly summary but suppress repeated immediate notifications unless the risk changes.
  - Do not repeatedly manufacture urgency.

- **Customer does not respond**

  - Follow the agreed reminder policy.
  - Never interpret silence as approval.

- **Monitoring coverage is interrupted**

  - Show “check unavailable” or “last checked” rather than a green healthy state.

## Resolved product decisions

- **Recovery ownership:** If Maintenance Manager cannot restore a safe state through rollback, it automatically opens a Bluehost support ticket. The customer sees that escalation, its status, and the next step; they do not need to diagnose the failure or open the ticket themselves.
- **Product thesis:** Maintenance Manager does not introduce a new maintenance stack. It turns Bluehost's fragmented monitoring, update, backup, recovery, verification, and support capabilities into one trustworthy working relationship.
- **Eligibility and entitlements:** Maintenance Manager is included as the universal experience at no additional charge. The automatic actions available for a site depend on its existing plan and services. Adequate backup and restore are prerequisites for automatic maintenance.
- **Naming and promise:** The customer-facing experience is **Maintenance Manager**. Its promise is deliberately bounded to routine website monitoring, maintenance, verification, and escalation—not operating the whole website or acting as a general agent hub.
- **Information architecture:** Bluehost's current left-side Portal navigation includes **AI Agents** as the top-level category. Contextual discovery deep-links straight to Maintenance Manager. The supporting AI Agents home is status-first, with active work ahead of optional exploration.
- **AI disclosure:** Explain in one sentence that Maintenance Manager is an AI agent, with optional plain-language safeguard details. Do not require an AI-education flow or use anthropomorphic positioning.
- **Prototype customer:** Harbor & Pine Landscaping uses `harborandpinelandscaping.com`. Activation and authority are site-specific.
- **Discovery evidence:** Existing Bluehost checks find one eligible plugin update. Availability and active customer-path testing begin only after authorization.
- **Contact-path coverage:** Detect and monitor every identifiable customer-contact path. The prototype covers request-a-quote, general contact, and click-to-call, while demonstrating the full staged test for the quote form.
- **Verification language:** Report form submission, website recording, and confirmed delivery separately. Claim delivery only when Bluehost has evidence.
- **Automatic-action boundary:** Automatic work is limited to eligible reversible security, patch, and minor updates for existing software. Major, new, removed, customer-visible, business-sensitive, purchased, configuration-level, or irreversible work always requires approval.
- **Activation modes:** Offer `Watch and handle routine maintenance — Recommended` and `Watch and ask before every change`. Both activate Maintenance Manager.
- **Immediate work:** After explicit final review, eligible disclosed maintenance begins during the initial check under the recommended agreement.
- **Notifications:** Immediate notifications are for owner judgment or input. Routine work and support activity that needs no owner action go to the Portal and weekly summary. Delivery channels follow Bluehost's master notification preferences.
- **Work states:** Keep `Needs your decision`, `Handled for you`, and `Watching for you`, with a conditional `In progress` area for active work, recovery, and support escalation.
- **Primary business decision:** Recommend moving quote-request delivery from unverified `harborandpine@gmail.com` to verified `hello@harborandpinelandscaping.com` while leaving the final choice to the owner.
- **Deferral:** `Remind me in 7 days` leaves the issue visible and never turns silence into approval.
- **Value evidence:** Show actual task duration, completed work, verified outcomes, owner decisions, and customer effort required. Do not estimate customer time saved in the prototype.
- **Monitoring freshness:** Check availability every five minutes, important pages hourly, forms daily and after relevant changes, delivery after relevant events and periodically, and software maintenance daily. Expire healthy states when evidence becomes stale.
- **Primary recovery branch:** Demonstrate failed verification followed by successful rollback, recommend Bluehost support review, and show the pre-populated ticket-created handoff state.
- **Ongoing return:** End the primary journey one week later through the weekly email summary and Portal Results view.

## Validation needs before production

- Confirm which existing Bluehost signals can support the pre-activation findings and timestamps.
- Confirm which monitoring, update, backup, restore, malware, and customer-path actions are exposed programmatically.
- Confirm that the Portal can determine site-level plan entitlements and recovery readiness reliably.
- Confirm synthetic-test data handling, delivery evidence, and safe cleanup behavior.
- Confirm automatic support-ticket creation, diagnostic attachment, routing, and service expectations.
- Validate plan-dependent language, AI disclosure, notification behavior, and upgrade boundaries with Bluehost product, support, privacy, and legal teams.

## Where the current direction needs challenge

- **The hierarchy must not weaken relevance.** AI Agents can organize multiple focused agents, but it should not make customers browse a catalog or learn agent terminology before a relevant problem can take them to Maintenance Manager.
- **The experience cannot imply universal execution entitlements.** Maintenance Manager can be universally included while backup, restore, malware remediation, monitoring, and support capabilities vary by site and plan.
- **The discovery trigger still depends on a real signal.** The waiting update must be current, eligible, and rechecked before Bluehost presents it as needing attention.
- **Monitoring uncertainty belongs to Bluehost, not the owner.** Isolated or inconclusive availability telemetry should be rechecked silently. Surface an availability problem only when Bluehost can describe a confirmed condition, its current status, and who owns the next action.
- **“Watching” is not automatically valuable.** It becomes credible only when paired with what is covered, the latest check, and any coverage gaps.
- **Successful checks are not equivalent to business success.** The prototype can truthfully claim that a customer-contact path worked; it cannot claim more leads or revenue without evidence.
- **Setup could easily become configuration-heavy.** The primary flow should use one recommended working agreement with clear boundaries, not a dashboard of granular technical toggles.
- **The AI Agents category could distract from the assignment.** Its supporting screen should establish scalable organization without turning this prototype into a comparison, setup, or management experience for other agents.
- **Support escalation is part of the promise.** Automatic ticket creation must pass diagnostic context and establish clear ownership; merely linking to support would reproduce the fragmented handoff the concept is meant to solve.

## Deliberately excluded from the prototype

- A full agent marketplace, catalog, or agent-selection flow. A shallow AI Agents home is included only to establish the hierarchy.
- AI Store, ecommerce, marketing, SEO campaigns, customer support, or lead management.
- Signup, checkout, hosting-plan selection, or a detailed upgrade flow.
- General-purpose chatbot behavior.
- Technical orchestration or descriptions of specialized agents behind Maintenance Manager.
- Multi-site management.
- Multi-user roles and delegated approvals.
- Advanced monitoring-rule configuration.
- New notification channels or a separate notification-preference system.
- Content creation, redesign, pricing, product, or brand-voice decisions.
- Estimated customer time saved or claims about increased leads, revenue, retention, or renewal.
- Long-term analytics and detailed reporting.
- Full support-case management after Maintenance Manager automatically opens a ticket.
- Autonomous irreversible changes.
