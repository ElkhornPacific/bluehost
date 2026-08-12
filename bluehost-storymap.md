# Website Manager user story map

This map treats the [assignment](docs/bluehost-project-assignment.md) as the source of truth and the
[current pitch](bluehost-value-prop.md) as a hypothesis to test.

## Framing assumptions

- The prototype customer is a nontechnical owner of a service business with an existing Bluehost-hosted WordPress site.
- Their website's most important customer path is submitting an inquiry through the contact form.
- Website Manager is presented as one bounded agent for monitoring and maintaining the website, not as a catalog or orchestration layer for other agents.
- The Portal may use Bluehost signals to identify potential problems before activation, but Website Manager does not change or actively test the site until the customer grants permission.
- "Time saved" is explicitly an estimate with a visible basis, not a proven financial outcome.

## Journey backbone

1. **Discovery:** Encounter a relevant website problem in the Portal.
2. **Discovery:** Understand how Website Manager would help.
3. **Setup:** Confirm what matters on the website.
4. **Setup:** Establish permissions, safeguards, and notifications.
5. **Setup:** Activate Website Manager and complete its first check.
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
  - **Primary:** I want to learn what Website Manager could do about it.
  - **Supporting:** I want to see when and how the issue was detected.
  - **Supporting:** I want to dismiss the message or ask to be reminded later.
  - **Later:** I want Portal recommendations coordinated across several sites or businesses.

- **Important system response:**

  - The Portal displays the established trigger:

    > “Your website has two items that need attention. Website Manager watches your site, handles routine fixes, and brings you only the decisions that need your judgment.”

  - It supplements that message with specific, defensible signals such as:

    - “Your homepage failed one availability check this week.”
    - “Three website software updates are waiting.”

  - It does not imply that Website Manager has already taken action.

- **What the customer sees:**

  - A Portal card tied to their named website.
  - Two concise findings, their recency, and why they could matter.
  - A clear `See how Website Manager can help` action.
  - A secondary `Not now` action.

- **Trust or confidence requirement:**

  - The trigger must not use vague fear or manufactured urgency.
  - Every claimed issue needs a source, timestamp, and understandable consequence.
  - The customer must be able to distinguish Bluehost's existing observations from agent actions.

- **Assignment requirement addressed:**

  - **Discovery:** Shows how an existing customer learns that an agent is available.
  - Makes the agent relevant through a current customer problem rather than an explanation of AI.

- **Slice placement:** Primary, with dismissal and evidence details as supporting states.

### 2. Decide whether Website Manager is relevant and safe enough to try

- **Customer goal:** Understand what Website Manager will do, what remains under their control, and why it is worth activating.

- **Customer stories or tasks:**

  - **Primary:** I want to understand Website Manager's job in one sentence.
  - **Primary:** I want to see how it would address the two current findings.
  - **Primary:** I want to know what it can handle automatically.
  - **Primary:** I want reassurance that sensitive changes still require me.
  - **Primary:** I want to begin setup without committing to unspecified actions.
  - **Supporting:** I want examples of recently handled work.
  - **Supporting:** I want to know whether it is included in my plan or costs extra.
  - **Later:** I want to explore other Bluehost agents and capabilities.

- **Important system response:**

  - Website Manager explains its bounded role:

    - Watches site availability and important customer paths.
    - Handles explicitly permitted, reversible maintenance.
    - Backs up, tests, and verifies changes.
    - Requests approval for customer-visible or business-sensitive decisions.

  - The system states: “Nothing will be changed until you review and turn on your working agreement.”

- **What the customer sees:**

  - The two findings from the Portal, now with clearer explanations.
  - A compact “What it watches / What it can handle / What always needs you” preview.
  - The safeguards: backup, test, verify, and restore if verification fails.
  - A `Set up Website Manager` action.

- **Trust or confidence requirement:**

  - Avoid promises such as “runs your website” without explaining boundaries.
  - Do not make customers infer what “routine fixes” means.
  - Keep AI implementation details secondary to the customer's work and control.

- **Assignment requirement addressed:**

  - **Discovery:** Makes the chosen agent obviously relevant.
  - Begins addressing the assignment's trust and nontechnical-language challenges.
  - Demonstrates why Website Manager was chosen: website availability and maintenance are common, recognizable problems.

- **Slice placement:** Primary. Pricing and example history are supporting unless pricing is essential to activation.

## Phase 2: Setup

### 3. Confirm what Website Manager should protect

- **Customer goal:** Tell Website Manager what “the website is working” means for the business.

- **Customer stories or tasks:**

  - **Primary:** I want Bluehost's recommended monitoring already selected.
  - **Primary:** I want to confirm that the homepage and contact path are important.
  - **Primary:** I want to understand what each check proves.
  - **Supporting:** I want to change the suggested customer path.
  - **Supporting:** I want to send a test inquiry before saving the path.
  - **Later:** I want to configure several paths, stores, bookings, or authenticated workflows.

- **Important system response:**

  - Website Manager proposes:

    - Website availability.
    - Key pages loading successfully.
    - The path from the homepage to submitting the contact form.
    - Routine website software and maintenance status.

  - It explains that a successful form-path test proves the form can be submitted, not that it generated a real customer inquiry.

- **What the customer sees:**

  - A short, recommended checklist rather than a technical monitoring configuration.
  - A visual path such as:
    `Homepage → Contact page → Inquiry submitted`
  - Plain-language descriptions of what will be checked.

- **Trust or confidence requirement:**

  - Recommended defaults must be useful without pretending Bluehost knows every business priority.
  - The system must disclose whether tests create sample submissions or send messages.
  - Test data must be clearly identifiable and safely handled.

- **Assignment requirement addressed:**

  - **Setup:** Makes activation simple for a nontechnical owner.
  - **Ongoing value foundation:** Defines the outcome the agent will later report.

- **Slice placement:** Primary. Custom paths and complex workflows are supporting or later.

### 4. Establish the working agreement

- **Customer goal:** Grant enough authority to save time without surrendering control over consequential decisions.

- **Customer stories or tasks:**

  - **Primary:** I want a recommended permission level explained in business terms.
  - **Primary:** I want to know exactly what can happen automatically.
  - **Primary:** I want to know what will always wait for my approval.
  - **Primary:** I want to know how failed work will be recovered.
  - **Primary:** I want to choose when I am notified.
  - **Supporting:** I want to customize individual permission categories.
  - **Later:** I want roles and approval policies for employees or agencies.

- **Important system response:**

  - The recommended agreement separates actions into:

    - **Can handle automatically:** Create a backup, apply approved routine software updates, run checks, and reverse a change when verification fails.
    - **Always asks first:** Change visible content or design, change where customer inquiries are sent, access or alter customer data, purchase anything, or make an irreversible change.

  - The system explains notification defaults:

    - Immediate notification when a decision is required or recovery fails.
    - Summary notification for successfully handled routine work.

- **What the customer sees:**

  - A short agreement grouped by `Handles automatically` and `Always asks you`.
  - A clear explanation of backup, testing, verification, and rollback.
  - Recommended notification settings.
  - No infrastructure vocabulary or large permissions matrix.

- **Trust or confidence requirement:**

  - Permissions must be specific enough to be meaningful.
  - “Safe” or “routine” cannot be used as a substitute for describing the authorized action.
  - Approval boundaries must apply consistently after setup.

- **Assignment requirement addressed:**

  - **Setup:** Creates the safe activation moment requested by the assignment.
  - Directly addresses fear about what the agent will do without the customer.

- **Slice placement:** Primary. Advanced permission editing is supporting; multi-user governance is later.

### 5. Review, activate, and receive a truthful first status

- **Customer goal:** Turn Website Manager on with confidence and know whether setup actually succeeded.

- **Customer stories or tasks:**

  - **Primary:** I want to review the working agreement before activating it.
  - **Primary:** I want clear confirmation that monitoring is active.
  - **Primary:** I want to see the first check begin and complete.
  - **Supporting:** I want to correct a site connection or test-path problem.
  - **Supporting:** I want to leave setup and return without losing my choices.
  - **Later:** I want scheduled activation or migration from another monitoring service.

- **Important system response:**

  - After `Turn on Website Manager`, the system:

    1. Confirms the agreement.
    2. Runs an initial website and customer-path check.
    3. Creates the first decision-center entries.
    4. Reports any access or test limitation rather than falsely declaring success.

- **What the customer sees:**

  - A concise final review.
  - Progress described as customer-relevant checks.
  - A success state such as:

    - “Website Manager is watching your site.”
    - “Initial check complete.”
    - “One item handled; one decision needs you.”

  - A direct route to the decision center.

- **Trust or confidence requirement:**

  - Activation and a successful first check are separate events.
  - Partial setup cannot be presented as full protection.
  - The customer needs a recovery path if Website Manager cannot inspect or test something.

- **Assignment requirement addressed:**

  - **Setup:** Completes activation.
  - Bridges setup to **Ongoing value** with immediate, credible feedback.

- **Slice placement:** Primary, with one failed-initial-check state as an essential supporting branch.

## Phase 3: Ongoing value

### 6. Understand what needs a decision, what was handled, and what is being watched

- **Customer goal:** Know the website's current state in a few seconds.

- **Customer stories or tasks:**

  - **Primary:** I want urgent decisions separated from work that is already complete.
  - **Primary:** I want reassurance about important areas that are healthy.
  - **Primary:** I want to understand which item matters most.
  - **Supporting:** I want to filter or search previous activity.
  - **Later:** I want one view across multiple websites or agent categories.

- **Important system response:**

  - The decision center organizes current work into:

    - **Needs your decision**
    - **Handled for you**
    - **Watching for you**

  - It prioritizes by customer consequence, not technical severity.
  - Each item has a status, timestamp, concise reason, and next action.

- **What the customer sees:**

  - **Needs your decision:** “Customer inquiries may be going to an old email address.”
  - **Handled for you:** “Website software updated; pages and contact path passed verification.”
  - **Watching for you:** “Website availability” and “Contact inquiry path,” each with its latest successful check.
  - A visible distinction between healthy, completed, and blocked work.

- **Trust or confidence requirement:**

  - “Watching” must include the last check and coverage; it cannot be an empty reassurance.
  - “Handled” must mean completed and verified, not merely attempted.
  - Failures must not be hidden inside a positive status.

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
  - **Primary:** I want to approve, decline, or defer.
  - **Supporting:** I want to ask for help or nominate a different email address.
  - **Later:** I want delegated approval and configurable approval deadlines.

- **Important system response:**

  - Website Manager reports:

    - Customer inquiries are configured to go to an address that is no longer verified.
    - It recommends the verified business email already associated with the account.
    - Approval changes only the inquiry destination.
    - It will back up the configuration, make the change, submit a test inquiry, and restore the previous configuration if verification fails.

- **What the customer sees:**

  - The likely customer consequence.
  - The current and recommended destination.
  - Why Website Manager cannot decide this automatically.
  - `Approve change`, `Use a different email`, and `Not now`.
  - A concise preview of the post-approval checks.

- **Trust or confidence requirement:**

  - The recommendation must not disguise a decision already made.
  - Scope, reversibility, and verification must be visible before approval.
  - Deferring cannot silently expand Website Manager's authority.

- **Assignment requirement addressed:**

  - **Ongoing value:** Demonstrates the agent bringing only a meaningful decision to the customer.
  - Reinforces trust through explainability and bounded approval.

- **Slice placement:** Primary. Alternate email and help are supporting; delegated approval is later.

### 8. See that approved and automatic work was verified

- **Customer goal:** Know that the issue was actually resolved and that Website Manager did not leave the site worse.

- **Customer stories or tasks:**

  - **Primary:** I want confirmation when approved work finishes.
  - **Primary:** I want to see what was checked afterward.
  - **Primary:** I want to know that the relevant customer path now works.
  - **Supporting:** I want a complete history of detection, approval, work, testing, and notification.
  - **Supporting:** I want to understand a rollback or failed verification.
  - **Later:** I want downloadable compliance or maintenance reports.

- **Important system response:**

  - Website Manager records:

    1. The problem detected.
    2. The permission or approval used.
    3. The backup created.
    4. The change made.
    5. The verification performed.
    6. The final result and notification.

  - The item moves to `Handled for you` only after the verification succeeds.

- **What the customer sees:**

  - “Customer inquiries now go to `hello@…`.”
  - “Test inquiry submitted and received.”
  - “Contact path passed at 10:42 AM.”
  - A human-readable activity trail with technical details hidden behind optional expansion.

- **Trust or confidence requirement:**

  - Verification evidence must be specific and recent.
  - If the test fails, the system must say so, restore the safe state where possible, and explain what happens next.
  - The history must not retroactively obscure unsuccessful attempts.

- **Assignment requirement addressed:**

  - **Ongoing value:** Proves that work happened and provides a trustworthy feedback loop.
  - Directly addresses customer anxiety about autonomous action.

- **Slice placement:** The successful result is primary. Full Activity view and the failed-verification branch are supporting but important.

### 9. See that Website Manager is working for the business

- **Customer goal:** Understand whether Website Manager is protecting something valuable and removing work from the owner's plate.

- **Customer stories or tasks:**

  - **Primary:** I want to see whether the website and inquiry path are currently healthy.
  - **Primary:** I want to see what work Website Manager completed.
  - **Primary:** I want a reasonable estimate of the work it saved me.
  - **Supporting:** I want trends across weeks or months.
  - **Supporting:** I want to inspect how a time estimate was calculated.
  - **Later:** I want attribution to leads, revenue, renewals, or support-cost savings.

- **Important system response:**

  - Results summarize observable outcomes:

    - Website availability checks passed.
    - Important customer path passed its latest test.
    - Maintenance items completed and verified.
    - Decisions resolved.
    - Estimated owner troubleshooting time avoided.

  - It labels estimates and distinguishes monitoring evidence from business attribution.

- **What the customer sees:**

  - “Your website is available.”
  - “Customers can complete your inquiry path.”
  - “Two maintenance items completed and checked.”
  - “Estimated 45 minutes of troubleshooting avoided,” with an explanation of the estimate.
  - The time period and latest-check timestamps.

- **Trust or confidence requirement:**

  - A successful test is not evidence that leads or revenue increased.
  - “Time saved” must have a transparent methodology.
  - Results should report coverage gaps and failed checks, not only successes.

- **Assignment requirement addressed:**

  - **Ongoing value:** Connects agent activity to outcomes a business owner cares about.
  - Supplies the evidence needed for the written brief's success metrics.

- **Slice placement:** Primary for current results; historical trends and financial attribution are later.

## Recommended primary prototype slice

The smallest credible prototype is one continuous journey of approximately eight views:

1. **Existing Bluehost Portal**

   - Relevant two-item Website Manager discovery trigger.

2. **Website Manager introduction**

   - Current findings, bounded promise, safeguards, and setup CTA.

3. **What to watch**

   - Recommended availability, key pages, and contact-inquiry path.

4. **Working agreement**

   - Automatic actions, always-ask actions, recovery behavior, and notifications.

5. **Review and activation**

   - Turn on Website Manager and show the completed initial check.

6. **Decision center**

   - One item in each of the three work states.

7. **Decision and resolution**

   - Approve the inquiry-routing change, followed by verified completion.

8. **Results**

   - Current website health, successful inquiry-path test, handled work, and estimated time saved.

The decision detail and successful resolution can be successive states of one view if prototype size needs to remain tight.

Activity and Settings need only enough representation to establish the broader navigation model. They do not require deep prototype flows.

## Proposed happy-path scenario

A service-business owner signs into the Bluehost Portal and learns that their website has two items needing attention.

They open Website Manager and see that Bluehost observed an availability failure and waiting software maintenance. Website Manager explains that it can watch the website and inquiry path, handle reversible maintenance within a clear agreement, and request approval for business-sensitive changes.

The owner accepts recommended monitoring for:

- Website availability.
- Important pages.
- The homepage-to-contact-form path.
- Routine software maintenance.

They accept the recommended working agreement and turn Website Manager on.

During its first check, Website Manager:

- Creates a backup.
- Applies a routine software update.
- Verifies the website and contact path.
- Places that work under `Handled for you`.
- Detects that inquiries may be routed to an old, unverified email address.
- Places that issue under `Needs your decision`.
- Shows availability and the contact path under `Watching for you`.

The owner opens the decision, understands the consequence, and approves changing the destination to the verified business email.

Website Manager makes the change, submits and confirms a test inquiry, and moves the item to `Handled for you`.

The Results view then shows that the website is available, the customer inquiry path passed, two maintenance items were completed and verified, and an estimated amount of troubleshooting time was avoided.

## Essential exception or recovery states

At least one recovery branch should be clickable; the rest can be represented as designed states.

- **Initial check cannot run**

  - Explain which check is unavailable.
  - Do not claim the site is fully monitored.
  - Offer retry, guided correction, or support.

- **Finding is stale or no longer reproducible**

  - Recheck before prompting for action.
  - Mark the finding resolved by recheck rather than “handled by Website Manager.”

- **Automatic maintenance fails verification**

  - Restore the backup.
  - State that the attempted change was reversed.
  - Move the issue to `Needs your decision` or an explicit assistance state.

- **Approved change fails verification**

  - Roll back where possible.
  - Tell the owner what succeeded, what failed, and whether the site remains safe.
  - Do not move the item to `Handled for you`.

- **Customer selects `Not now`**

  - Keep monitoring without making the change.
  - Explain the remaining consequence and notification behavior.
  - Do not repeatedly manufacture urgency.

- **Customer does not respond**

  - Follow the agreed reminder policy.
  - Never interpret silence as approval.

- **Monitoring coverage is interrupted**

  - Show “check unavailable” or “last checked” rather than a green healthy state.

## Open product decisions

- **Pre-activation evidence:** Which Portal signals already exist, and which checks require explicit customer permission?
- **Exact prototype findings:** Are the availability failure and waiting updates defensible Bluehost signals, or should different findings be used?
- **Definition of routine work:** Which specific maintenance actions are safe, reversible, and permitted automatically?
- **Critical-path testing:** How is a successful inquiry verified without creating confusing test messages or mishandling customer data?
- **Approval boundary:** Are form-routing changes always approval-required, and are there other changes the prototype must explicitly mention?
- **Recovery ownership:** When rollback is impossible or fails, does Website Manager escalate to Bluehost support, and what expectation can it safely set?
- **Eligibility and price:** Is Website Manager included, a trial, or a paid feature? The setup CTA cannot be finalized without this.
- **Notification defaults:** Which channels are available, and what deserves an immediate alert versus a digest?
- **Time-saved calculation:** What defensible baseline supports the estimate?
- **Status model:** How do `in progress`, `could not verify`, `rolled back`, and `snoozed` fit without weakening the three primary work states?
- **Naming and promise:** Is “Website Manager” sufficiently specific, and can Bluehost credibly promise the breadth implied by “runs your website”?
- **Data freshness:** How recent must a check be before `Watching for you` can be presented as healthy?

## Where the current direction needs challenge

- **The umbrella-agent framing risks violating “focus on one agent type.”** The prototype should present Website Manager as a bounded website monitoring and maintenance agent. The broader “front door for every Bluehost agent” thesis belongs in the brief as future extensibility, not in the customer journey.
- **“Website Manager runs your website” overpromises.** The demonstrated scope is monitoring, reversible maintenance, verification, and escalation. The customer-facing promise should reflect that boundary.
- **The three work states are insufficient as a complete operational status model.** They work well as customer-facing buckets, but failure, rollback, incomplete coverage, and work in progress still need honest secondary states.
- **The discovery trigger needs evidence.** “Two items need attention” will feel manipulative if the prototype cannot explain where the findings came from and how recent they are.
- **“Watching” is not automatically valuable.** It becomes credible only when paired with what is covered, the latest check, and any coverage gaps.
- **Successful checks are not equivalent to business success.** The prototype can truthfully claim that an inquiry path worked; it cannot claim more leads or revenue without evidence.
- **Setup could easily become configuration-heavy.** The primary flow should use one recommended working agreement with clear boundaries, not a dashboard of granular technical toggles.
- **The value proposition's ecosystem breadth distracts from the assignment.** AI Store, AI Front Desk, marketing, and future agents do not help prove this focused journey.

## Deliberately excluded from the prototype

- Agent marketplace, catalog, or agent-selection flow.
- AI Store, ecommerce, marketing, SEO campaigns, customer support, or lead management.
- Signup, checkout, hosting-plan selection, or a detailed upgrade flow.
- General-purpose chatbot behavior.
- Technical orchestration or descriptions of specialized agents behind Website Manager.
- Multi-site management.
- Multi-user roles and delegated approvals.
- Advanced monitoring-rule configuration.
- Content creation, redesign, pricing, product, or brand-voice decisions.
- Claims about increased leads, revenue, retention, or renewal.
- Long-term analytics and detailed reporting.
- Full support-case management.
- Autonomous irreversible changes.
