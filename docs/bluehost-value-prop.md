# Maintenance Manager

> Working draft

## Take routine website maintenance off your to-do list.

### Meet Maintenance Manager

Your website is important and your time is limited. Maintenance Manager is an AI agent that watches one selected site, handles approved routine maintenance, and checks that customers can still contact the business. When something needs approval or business judgment, it brings the owner a clear recommendation. If it cannot safely recover from a failed change, it automatically opens a Bluehost support ticket and carries the diagnostic context into that handoff.

Maintenance Manager itself is included as part of the Bluehost customer experience at no additional charge. It does not add or purchase plan entitlements: the monitoring and automatic actions available for a site depend on the backup, restore, maintenance, security, and support capabilities already included with that site's existing plan.

### Product thesis

Bluehost already has many of the tools required to maintain a website. Maintenance Manager turns the capabilities available for a customer's site into one trustworthy, outcome-oriented working relationship for a nontechnical owner.

The product thesis is not that Maintenance Manager introduces novel maintenance technology. Bluehost already offers underlying capabilities through products such as [Managed WordPress](https://www.bluehost.com/help/article/managed-wordpress), [Cloud Hosting](https://www.bluehost.com/hosting/cloud), backup and restore services, malware protection, and expert support. The customer problem is that these capabilities appear across tools, settings, entitlements, and support handoffs.

Maintenance Manager coordinates that fragmented system through:

- Contextual discovery tied to a real website problem.
- A site-specific, plain-language agreement defining permissions and approval boundaries.
- Monitoring of availability, important pages, software maintenance, and every identifiable customer-contact path.
- Plan-aware coordination of backup, eligible maintenance, verification, rollback, and support escalation.
- One decision center showing what needs judgment, what is in progress, what was handled, and what is being watched.
- Activity evidence showing the authority used, checks performed, outcome, timestamps, and actual task duration.
- Weekly results connecting completed work to current availability, successful customer-path tests, and owner effort required.

Maintenance Manager offers two working agreements:

- **Watch and handle routine maintenance — Recommended:** Available only when the site has sufficient backup and restore protection for safe recovery.
- **Watch and ask before every change:** Monitoring remains active, but every website change requires approval.

It never silently purchases or enables a paid service. It does not manage stores, marketing, lead handling, customer-service interactions, or the customer's broader business operations.

The promise is specific: **Maintenance Manager removes routine website troubleshooting and maintenance from your to-do list.**

### Where customers find it

[**AI Agents**](https://www.bluehost.com/help/article/bluehost-account-manager-home-tab-overview) is an existing top-level category in Bluehost's current left-side Portal navigation. Maintenance Manager is one focused agent within that category, not a top-level Portal destination beside Websites, Domains, or Email.

Customers should not have to browse a catalog or understand agent terminology before getting help. When Bluehost detects a relevant website issue, the Portal takes the customer directly to Maintenance Manager. The global navigation still shows **AI Agents** as the selected category, and the destination identifies the path as `AI Agents / Maintenance Manager`.

The AI Agents landing page is a status-first home for customers who visit it directly:

- **Needs your attention:** Decisions waiting across active agents.
- **Working for you:** Active agents, their current state, and their latest meaningful result.
- **Available to help:** Other agents that can be explored or enabled, secondary to active work. The prototype uses shallow cards for AI Front Desk Agent and AI Store without designing their flows.

This structure can scale to multiple focused agents without making Maintenance Manager responsible for the customer’s entire business or asking a customer to learn every agent before receiving value.

Within Maintenance Manager, customers see three stable outcomes and one conditional work state:

- **Handled for you:** The work is done and the result has been checked.
- **Needs your decision:** Maintenance Manager has a recommendation but needs the owner’s approval or judgment.
- **Watching for you:** Maintenance Manager is monitoring something important and has not found a problem.
- **In progress:** Appears only while work, recovery, or Bluehost support handling is active.

### Why it makes sense

The research supports Maintenance Manager as a product direction worth testing, not as a proven demand case among existing Bluehost customers. The general small-business evidence comes from the May 2026 [Bluehost AI Study](BH_AI_Study_Download.pdf), which surveyed 350 U.S. owners of businesses with 1 to 50 employees and gives a full-sample margin of error of ±5.2 percentage points. The report does not say that respondents were Bluehost customers. What matters is the pattern across the findings.

**Owners want a focused job done, not another AI category to manage.** “Managing website” ranked sixth of seven broad areas where owners saw AI as relevant, but making site and search engine optimization updates ranked first among specific agent jobs. That difference supports the way Maintenance Manager is framed. It discloses that it is an AI agent but does not require an AI education flow. It has one understandable job: keep the website maintained and take routine troubleshooting off the owner's list.

**Customer effort and low trust define the experience.** The study says 78% of owners save time with AI each week, while only 16% had put an agent to work and only 6% highly trust AI with their brand voice. Maintenance Manager shows the work it handled, operates within clear permissions, and leaves customer-facing decisions with the owner. The prototype does not invent a time-saved estimate; it shows completed work, verified outcomes, actual task duration, decisions requested, and troubleshooting steps required from the owner.

**The integration is the product value.** The [troubleshooting guide](https://www.bluehost.com/help/article/bh-general-website-troubleshooting), [WordPress support policy](https://www.bluehost.com/help/article/wordpress-scope-of-support), and [email delivery guide](https://www.bluehost.com/help/article/email-deliverability-problems) divide website problems across technical checks, tools, settings, entitlements, and support handoffs. Maintenance Manager gives the owner one agreement and history across that system. Because available backup, malware-remediation, recovery, monitoring, and support capabilities can vary by site and plan, the experience must disclose readiness and never promise an action the site cannot safely support.

### Prototype focus

The prototype follows the owner of Harbor & Pine Landscaping and one selected site, `harborandpinelandscaping.com`. Existing Bluehost checks surface one eligible plugin update and two missed availability checks. The owner confirms all detected customer-contact paths, chooses a site-specific working agreement, and activates Maintenance Manager. The agent performs the disclosed eligible update, tests its work, recommends a business-controlled change to quote-request delivery, and returns one week later with current evidence in a weekly summary and Results view.

The primary exception branch shows a failed customer-path verification followed by successful rollback. Maintenance Manager recommends Bluehost support review and creates a pre-populated ticket when the owner accepts. A failed rollback would open a support ticket automatically.

### How we know it is working

Measure whether customers trust Maintenance Manager, whether it takes work off their plate, and whether that changes the Bluehost business.

1. **Trusted activation**
   Percentage of eligible sites that activate either working agreement and remain active after 90 days. Segment by plan readiness and agreement selected.

2. **Safe delegated work**
   Eligible tasks completed and verified per active site without owner troubleshooting. Track false alarms, failed checks, successful and failed rollbacks, support escalations, and actions attempted outside the working agreement.

3. **Website and customer outcomes**
   Availability and customer-contact-path success, owner decisions and troubleshooting steps required, website-related support contacts, reported troubleshooting effort, retention, and renewal compared with a similar group that does not receive Maintenance Manager.

### Expected business impact

Maintenance Manager is designed to support the business in three ways:

- **Renewals:** Customers can see that Bluehost is actively looking after routine website maintenance. We expect that visibility to give them a stronger reason to renew.
- **Support efficiency:** Maintenance Manager finds and fixes eligible routine problems earlier and passes diagnostic context into support when automation cannot safely finish. We expect that to reduce repeat contacts and make necessary escalations clearer.
- **Subscription value:** Including the Maintenance Manager experience gives customers a visible, ongoing benefit without an added purchase decision, while respecting the capabilities already included with each site's plan.
