import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Clock3,
  Eye,
  FileClock,
  FileText,
  Globe2,
  Inbox,
  Info,
  KeyRound,
  Mail,
  MonitorCheck,
  Phone,
  RefreshCcw,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { Button, EmptyState, PageHeading, SafeguardStrip, SiteContext, StatusPill, WorkCard, WorkSection } from '../components/Ui'
import { usePrototype, type Agreement } from '../state/PrototypeContext'

const MM = '/ai-agents/maintenance-manager'

function Breadcrumb({ current }: { current?: string }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/ai-agents">AI Agents</Link>
      <ChevronRight aria-hidden="true" />
      {current ? <><Link to={MM}>Maintenance Manager</Link><ChevronRight aria-hidden="true" /><span aria-current="page">{current}</span></> : <span aria-current="page">Maintenance Manager</span>}
    </nav>
  )
}

function ActionRow({ children }: { children: ReactNode }) {
  return <div className="action-row">{children}</div>
}

function SetupHeader({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <>
      <Breadcrumb current="Setup" />
      <div className="setup-progress" aria-label={`Setup progress: ${step}`}>
        <span>{step}</span>
        <div className="setup-progress__track"><span style={{ width: step.startsWith('1') ? '33%' : step.startsWith('2') ? '66%' : '100%' }} /></div>
      </div>
      <PageHeading title={title} description={description} />
      <SiteContext />
    </>
  )
}

export function PortalPage() {
  const { state, dispatch } = usePrototype()
  const navigate = useNavigate()

  return (
    <div className="page page--portal-home">
      <PageHeading eyebrow="Monday, August 3" title="Good morning, Harbor & Pine" description="Here’s what’s happening with your Bluehost account." />

      <div className="home-grid">
        <section className="portal-card portal-card--website">
          <div className="portal-card__header">
            <div><p className="eyebrow">Your website</p><h2>harborandpinelandscaping.com</h2></div>
            <StatusPill tone="success">Available now</StatusPill>
          </div>
          <div className="site-preview" aria-hidden="true">
            <span className="site-preview__sun" />
            <div className="site-preview__mountains"><span /><span /></div>
            <strong>Harbor &amp; Pine</strong>
            <small>Thoughtful landscapes, built to last.</small>
          </div>
          <div className="quick-actions"><span>WordPress</span><span>Manage site</span><span>View performance</span></div>
        </section>

        <section className="portal-card portal-card--summary">
          <p className="eyebrow">Account at a glance</p>
          <h2>Everything important, in one place</h2>
          <ul className="summary-list">
            <li><span className="summary-icon summary-icon--success"><Check /></span><div><strong>Website available</strong><span>Checked just now</span></div></li>
            <li><span className="summary-icon"><Mail /></span><div><strong>Business email active</strong><span>3 mailboxes</span></div></li>
            <li><span className="summary-icon"><ShieldCheck /></span><div><strong>Backups ready</strong><span>Latest backup: today</span></div></li>
          </ul>
        </section>
      </div>

      {!state.discoveryDismissed ? (
        <section className="attention-card" aria-labelledby="attention-title">
          <div className="attention-card__icon"><Sparkles aria-hidden="true" /></div>
          <div className="attention-card__content">
            <div className="attention-card__source"><span>Found by Bluehost</span><span>Checked 9:48 AM</span></div>
            <h2 id="attention-title">Harbor &amp; Pine Landscaping has one item that needs attention</h2>
            <ul className="finding-list">
              <li><CircleAlert aria-hidden="true" /><span><strong>One routine website update is waiting.</strong><small>Your contact-form software has a small update ready.</small></span></li>
            </ul>
            <p>Maintenance Manager can watch your site, handle approved routine fixes, and bring you only the decisions that need your judgment.</p>
            <ActionRow>
              <Button onClick={() => navigate(MM)}>See how Maintenance Manager can help <ArrowRight aria-hidden="true" /></Button>
              <Button variant="quiet" onClick={() => dispatch({ type: 'dismiss-discovery' })}>Not now</Button>
            </ActionRow>
          </div>
        </section>
      ) : (
        <section className="dismissed-card" role="status">
          <CheckCircle2 aria-hidden="true" />
          <div><strong>Recommendation dismissed for now</strong><span>No changes were made. You can bring it back whenever you’re ready.</span></div>
          <Button variant="secondary" onClick={() => dispatch({ type: 'restore-discovery' })}>Show recommendation</Button>
        </section>
      )}
    </div>
  )
}

export function AgentsHomePage() {
  const { state } = usePrototype()
  const navigate = useNavigate()
  const active = state.activated
  const recoveryDecision = state.scenario === 'rollback' && ['restored', 'reminded'].includes(state.recoveryStep)
  const quotePending = active && state.scenario === 'happy' && state.quoteStatus !== 'resolved'
  const decisionCount = active ? (state.agreement === 'approval' ? 1 : 0) + (quotePending || recoveryDecision ? 1 : 0) : 0

  return (
    <div className="page">
      <PageHeading eyebrow="Bluehost AI Agents" title="Help that keeps working after you log out" description="See what needs your attention, what’s working for you, and what else is available." />

      <WorkSection title="Needs your attention" count={decisionCount} tone={decisionCount ? 'warning' : 'neutral'} icon={<CircleAlert aria-hidden="true" />}>
        {!decisionCount && <EmptyState>{active ? 'You’re all caught up. No decisions are waiting.' : 'No decisions yet. Active agents will bring important choices here.'}</EmptyState>}
        {state.agreement === 'approval' && active && <WorkCard title="Approve the waiting contact-form update" description="Maintenance Manager is watching your site and waiting before making this change." meta="Maintenance Manager · Harbor & Pine" onClick={() => navigate(`${MM}/overview`)} />}
        {quotePending && <WorkCard title="Where should new quote requests go?" description="Delivery to the current address could not be confirmed." meta={state.quoteStatus === 'deferred' ? 'Reminder due today' : 'Decision requested'} onClick={() => navigate(`${MM}/decisions/quote-delivery`)} />}
        {recoveryDecision && <WorkCard title="Contact-form update needs review" description="Your site was restored. The update is still waiting." meta="Recovery completed" onClick={() => navigate(`${MM}/recovery`)} />}
      </WorkSection>

      <WorkSection title="Working for you" count={active ? 1 : 0} tone="info" icon={<Bot aria-hidden="true" />}>
        {!active ? <EmptyState>Agents you turn on will appear here with their latest verified result.</EmptyState> : (
          <WorkCard
            title="Maintenance Manager"
            description="Watching harborandpinelandscaping.com"
            meta={state.recoveryStep === 'ticket' ? 'Bluehost support is reviewing an update' : state.quoteStatus === 'resolved' ? 'Latest: quote delivery updated and verified' : state.agreement === 'approval' ? 'Monitoring active · waiting for approval' : 'Latest: contact-form update completed and verified'}
            status={<StatusPill tone={state.recoveryStep === 'ticket' ? 'info' : 'success'}>{state.recoveryStep === 'ticket' ? 'Support in progress' : 'Active'}</StatusPill>}
            onClick={() => navigate(`${MM}/overview`)}
          />
        )}
      </WorkSection>

      <WorkSection title="Available to help" tone="neutral" icon={<Sparkles aria-hidden="true" />}>
        <div className="agent-grid">
          {!active && <WorkCard title="Maintenance Manager" description="Watch your site, handle approved maintenance, and verify the result." status={<StatusPill tone="info">Included</StatusPill>} onClick={() => navigate(MM)} />}
          <WorkCard title="AI Front Desk Agent" description="Answer customer questions and capture leads." status={<StatusPill tone="neutral">Available</StatusPill>} />
          <WorkCard title="AI Store" description="Help manage products, inventory, and orders." status={<StatusPill tone="neutral">Available</StatusPill>} />
        </div>
      </WorkSection>
    </div>
  )
}

export function IntroPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div className="page">
      <Breadcrumb />
      <div className="intro-hero">
        <div className="intro-hero__copy">
          <StatusPill tone="info">AI agent · Included with Bluehost</StatusPill>
          <h1>Take routine website maintenance off your to-do list.</h1>
          <p>Maintenance Manager watches your website, handles the routine work you approve, tests its work, and asks when a decision needs your judgment.</p>
          <ActionRow>
            <Link className="button button--primary" to={`${MM}/setup/coverage`}>Set up Maintenance Manager <ArrowRight aria-hidden="true" /></Link>
            <Button variant="secondary" onClick={() => setDrawerOpen(true)}>How it works</Button>
          </ActionRow>
          <small className="included-note"><BadgeCheck aria-hidden="true" /> Included at no additional charge. Automatic actions depend on capabilities already included with this site’s plan.</small>
        </div>
        <div className="intro-hero__visual" role="img" aria-label="Maintenance Manager watches your website, handles approved work, verifies the result, asks you to decide when approval is needed, and backs up before changes.">
          <div className="hero-process__core"><Bot aria-hidden="true" /><div><strong>Maintenance Manager</strong><span>Follows the permissions you choose</span></div></div>
          <div className="hero-process__steps" aria-hidden="true">
            <div className="hero-process__step"><Eye /><span>Watch</span></div>
            <div className="hero-process__step"><Wrench /><span>Handle approved work</span></div>
            <div className="hero-process__step"><MonitorCheck /><span>Verify the result</span></div>
            <div className="hero-process__step hero-process__step--decision"><BellRing /><span>Ask you to decide</span></div>
          </div>
          <div className="hero-process__safeguard" aria-hidden="true"><ShieldCheck /><span>Backs up before changes</span></div>
        </div>
      </div>

      <section className="current-findings">
        <div><p className="eyebrow">Why you’re seeing this</p><h2>One current Bluehost finding</h2><p>Maintenance Manager has not changed or actively tested your site yet.</p></div>
        <div className="finding-mini"><Wrench /><span><strong>Routine update waiting</strong><small>Contact-form software</small></span></div>
      </section>

      <section className="promise-grid" aria-label="Maintenance Manager boundaries">
        <article><span><Eye /></span><h2>What it watches</h2><p>Availability, important pages, software maintenance, forms, and phone links.</p></article>
        <article><span><Wrench /></span><h2>What it can handle</h2><p>Small updates to software your site already uses—only with your chosen permission.</p></article>
        <article><span><KeyRound /></span><h2>What always needs you</h2><p>Customer-facing changes, business settings, new software, purchases, and irreversible work.</p></article>
        <article><span><ShieldCheck /></span><h2>How it keeps work safe</h2><p>Back up, make the change, verify the result, restore if needed, and involve Bluehost support.</p></article>
      </section>

      {drawerOpen && (
        <div className="drawer-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setDrawerOpen(false)}>
          <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
            <button className="drawer__close" aria-label="Close How it works" onClick={() => setDrawerOpen(false)}>×</button>
            <p className="eyebrow">Plain-language safeguards</p>
            <h2 id="drawer-title">You set the working agreement</h2>
            <ol className="drawer-steps">
              <li><span>1</span><div><strong>You choose what it can do</strong><p>Permissions apply only to harborandpinelandscaping.com.</p></div></li>
              <li><span>2</span><div><strong>Every change leaves a record</strong><p>See what authorized it, what changed, and how long the work took.</p></div></li>
              <li><span>3</span><div><strong>Verification comes before “handled”</strong><p>Failed work is restored and stays visible.</p></div></li>
              <li><span>4</span><div><strong>Bluehost support receives the context</strong><p>If recovery cannot finish safely, Maintenance Manager opens a ticket with the diagnostic details.</p></div></li>
            </ol>
            <Button onClick={() => setDrawerOpen(false)}>Got it</Button>
          </aside>
        </div>
      )}
    </div>
  )
}

const coverageItems = [
  { icon: Globe2, title: 'Website availability', detail: 'Checked every 5 minutes' },
  { icon: FileText, title: 'Important pages', detail: 'Home, Services, and Contact · Checked hourly' },
  { icon: Wrench, title: 'Software maintenance', detail: 'Checked daily' },
]

const contactPaths = [
  { icon: Send, title: 'Request a quote', path: 'Homepage → Request a Quote → Submit request', label: 'Submission, recording, and delivery tested' },
  { icon: Mail, title: 'General contact', path: 'Homepage → Contact → Send message', label: 'Submission, recording, and delivery tested' },
  { icon: Phone, title: 'Call the business', path: 'Header and Contact page phone links', label: 'Link and phone number checked' },
]

export function CoveragePage() {
  const { state, dispatch } = usePrototype()
  return (
    <div className="page page--narrow">
      <SetupHeader step="1 of 3 · What we'll watch" title="We found the important parts of your site" description="Our recommended coverage is already selected. Review it—there’s no technical setup." />
      <section className="setup-section">
        <div className="setup-section__heading"><h2>Website basics</h2><StatusPill tone="success">3 selected</StatusPill></div>
        <div className="selection-list">
          {coverageItems.map(({ icon: Icon, title, detail }) => <div className="selection-row" key={title}><span className="selection-check"><Check /></span><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{detail}</span></div></div>)}
        </div>
      </section>
      <section className="setup-section">
        <div className="setup-section__heading"><div><h2>Customer contact paths</h2><p>We selected every path we could identify.</p></div><StatusPill tone="success">3 selected</StatusPill></div>
        <div className="path-list">
          {contactPaths.map(({ icon: Icon, title, path, label }, index) => (
            <article className={`path-card ${state.pathReview && index === 2 ? 'path-card--review' : ''}`} key={title}>
              <span className="selection-check"><Check /></span><Icon aria-hidden="true" />
              <div><h3>{title}</h3><p>{path}</p><span className="coverage-label"><MonitorCheck />{label}</span>
                {index === 2 && <button className="text-button" onClick={() => dispatch({ type: 'toggle-path-review' })}>{state.pathReview ? 'Keep as customer contact path' : "This isn't a customer contact path"}</button>}
              </div>
              {state.pathReview && index === 2 && <StatusPill tone="warning">Marked for review</StatusPill>}
            </article>
          ))}
        </div>
        <Button variant="secondary" onClick={() => dispatch({ type: 'toggle-missing-path' })}>+ Add a missing path</Button>
        {state.missingPathOpen && <div className="shallow-panel" role="status"><Info /><div><strong>No other paths detected</strong><p>Bookings and store checkouts need custom setup, which isn’t available in this prototype.</p></div></div>}
      </section>
      <div className="notice"><Info /><p>Form checks create clearly labeled <strong>test submissions</strong>. They’re removed or archived so they don’t mix with customer requests. Submission, website recording, and confirmed email delivery are reported separately.</p></div>
      <ActionRow><Link className="button button--quiet" to={MM}><ArrowLeft /> Back</Link><Link className="button button--primary" to={`${MM}/setup/agreement`}>Continue <ArrowRight /></Link></ActionRow>
    </div>
  )
}

export function AgreementPage() {
  const { state, dispatch } = usePrototype()
  const agreements: Array<{ id: Agreement; title: string; description: string; badge?: string }> = [
    { id: 'automatic', title: 'Watch and handle routine maintenance', description: 'Make eligible reversible changes, then test, verify, and restore automatically if needed.', badge: 'Recommended' },
    { id: 'approval', title: 'Watch and ask before every change', description: 'Run the same monitoring, but make no website change until you approve it.' },
  ]
  return (
    <div className="page page--narrow">
      <SetupHeader step="2 of 3 · Working agreement" title="Choose how we’ll work together" description="You stay in control of business decisions. The only choice is whether small, reversible maintenance can happen automatically." />
      <section className="readiness-card"><ShieldCheck /><div><StatusPill tone="success">Ready</StatusPill><h2>Harbor &amp; Pine’s site is ready for automatic maintenance</h2><p>Included with this site’s Bluehost plan: managed updates for existing WordPress software, backup and restore, website and customer-path monitoring, and Bluehost support escalation.</p></div></section>
      <fieldset className="agreement-fieldset">
        <legend>Choose a working agreement</legend>
        {agreements.map((agreement) => (
          <label className={`agreement-card ${state.agreement === agreement.id ? 'agreement-card--selected' : ''}`} key={agreement.id}>
            <input type="radio" name="agreement" value={agreement.id} checked={state.agreement === agreement.id} onChange={() => dispatch({ type: 'set-agreement', agreement: agreement.id })} />
            <span className="radio-visual" aria-hidden="true" />
            <div><div className="agreement-card__title"><strong>{agreement.title}</strong>{agreement.badge && <StatusPill tone="info">{agreement.badge}</StatusPill>}</div><p>{agreement.description}</p></div>
          </label>
        ))}
      </fieldset>
      <section className="agreement-outcome" aria-live="polite" aria-atomic="true">
        <div className="agreement-outcome__heading">
          <div><p className="eyebrow">What happens with this choice</p><h2>{state.agreement === 'automatic' ? 'Routine maintenance will happen automatically' : 'Every website change waits for you'}</h2></div>
          <StatusPill tone="info">Selected</StatusPill>
        </div>
        {state.agreement === 'automatic' ? (
          <div className="boundary-grid">
            <section><h3><CheckCircle2 /> Will handle automatically</h3><p>Small updates to software your site already uses, like the waiting contact-form update.</p><small>Never new software, a major update, or anything customers can see.</small></section>
            <section><h3><KeyRound /> Always asks you</h3><p>Visible content or design, form destinations, customer data, purchases, hosting settings, new or removed software, and irreversible changes.</p></section>
          </div>
        ) : (
          <div className="boundary-grid">
            <section><h3><Eye /> Keeps watching</h3><p>Availability, important pages, forms, phone links, and software maintenance.</p><small>Monitoring continues without changing your website.</small></section>
            <section><h3><KeyRound /> Asks before every change</h3><p>Even small routine updates, including the waiting contact-form update.</p><small>No website change runs until you approve it.</small></section>
          </div>
        )}
      </section>
      <section className="shared-agreement-rules" aria-labelledby="shared-rules-title">
        <p className="eyebrow">Applies to both choices</p>
        <h2 id="shared-rules-title">Protection and notifications stay the same</h2>
        <SafeguardStrip />
        <section className="notification-note"><BellRing /><div><strong>We’ll contact you right away when you need to decide something.</strong><p>Everything else goes in your weekly summary. Delivery channels follow your existing Bluehost notification preferences.</p></div></section>
      </section>
      <ActionRow><Link className="button button--quiet" to={`${MM}/setup/coverage`}><ArrowLeft /> Back</Link><Link className="button button--primary" to={`${MM}/setup/review`}>Continue <ArrowRight /></Link></ActionRow>
    </div>
  )
}

export function ReviewPage() {
  const { state, dispatch } = usePrototype()
  const navigate = useNavigate()
  const [running, setRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState('')
  const [complete, setComplete] = useState(false)

  const sequence = useMemo(() => {
    if (state.agreement === 'approval') return ['Checking your site', 'Testing your customer paths', 'Adding the waiting update to your decisions', 'Initial check complete']
    if (state.scenario === 'rollback') return ['Checking your site', 'Creating a backup', 'Installing the approved update', 'Testing your site and customer paths', 'Verification failed. Restoring the backup.']
    return ['Checking your site', 'Creating a backup', 'Installing the approved update', 'Testing your site and customer paths', 'Initial check complete']
  }, [state.agreement, state.scenario])

  useEffect(() => {
    if (!running) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      if (index >= sequence.length) {
        window.clearInterval(interval)
        dispatch({ type: 'activate' })
        setComplete(true)
        return
      }
      setCurrentStep(sequence[index])
    }, reduced ? 100 : 520)
    return () => window.clearInterval(interval)
  }, [dispatch, running, sequence])

  const isRollback = state.scenario === 'rollback'
  return (
    <div className="page page--narrow">
      <SetupHeader step="3 of 3 · Review and turn on" title="Review before Maintenance Manager starts" description="Nothing changes until you turn on this site-specific working agreement." />
      <section className="review-card">
        <div className="review-row"><span>Working agreement</span><strong>{state.agreement === 'automatic' ? 'Watch and handle routine maintenance' : 'Watch and ask before every change'}</strong><Link to={`${MM}/setup/agreement`}>Change</Link></div>
        <div className="review-row"><span>Coverage</span><strong>Availability, 3 pages, software, and 3 contact paths</strong><Link to={`${MM}/setup/coverage`}>Change</Link></div>
        <div className="review-row"><span>Notifications</span><strong>Decisions now · everything else weekly</strong></div>
      </section>
      <section className="immediate-work">
        <p className="eyebrow">What starts now</p>
        <h2>{state.agreement === 'automatic' ? 'First check and disclosed maintenance' : 'Monitoring and current-site checks'}</h2>
        <ol>
          <li><span>1</span><p>Check your site, Home, Services, Contact, and every detected customer-contact path.</p></li>
          {state.agreement === 'automatic' ? <>
            <li><span>2</span><p>Back up the site.</p></li>
            <li><span>3</span><p>Install the waiting small contact-form update.</p></li>
            <li><span>4</span><p>Test the site and affected paths, then restore the backup if verification fails.</p></li>
          </> : <>
            <li><span>2</span><p>Test the current site without changing it.</p></li>
            <li><span>3</span><p>Put the waiting contact-form update under <strong>Needs your decision</strong>.</p></li>
          </>}
        </ol>
      </section>

      {running && (
        <section className={`activation-panel ${complete ? 'activation-panel--complete' : ''}`} aria-live="polite" aria-atomic="true">
          {!complete ? <><span className="progress-spinner" aria-hidden="true" /><div><p className="eyebrow">Turning on Maintenance Manager</p><h2>{currentStep}</h2><p>Please keep this page open while the first checks finish.</p></div></> : isRollback ? <><CircleAlert /><div><p className="eyebrow">Verification needs attention</p><h2>The site is available, but the quote-request test failed</h2><p>Maintenance Manager has started restoring the backup. The work is not marked handled.</p></div></> : <><CircleCheck /><div><p className="eyebrow">Initial check complete</p><h2>Maintenance Manager is watching your site</h2><p>{state.agreement === 'automatic' ? 'One item handled; one decision needs you.' : 'Two decisions need you; no website changes were made.'}</p></div></>}
        </section>
      )}

      <ActionRow>
        {!running && <><Link className="button button--quiet" to={`${MM}/setup/agreement`}><ArrowLeft /> Back</Link><Button onClick={() => { setCurrentStep(sequence[0]); setRunning(true) }}>Turn on Maintenance Manager</Button></>}
        {complete && <Button onClick={() => navigate(isRollback ? `${MM}/recovery` : `${MM}/overview`)}>{isRollback ? 'View recovery status' : 'View Maintenance Manager'} <ArrowRight /></Button>}
      </ActionRow>

      <details className="supporting-state">
        <summary>Designed state: if the first check can’t run</summary>
        <div><StatusPill tone="warning">Monitoring incomplete</StatusPill><h3>Quote-form check unavailable</h3><p>Maintenance Manager is on, but it cannot test quote requests until the WordPress connection is restored. The rest of the site is not presented as fully protected.</p><div className="mini-actions"><Button variant="secondary">Try again</Button><Button variant="quiet">Fix connection</Button><Button variant="quiet">Ask Bluehost support</Button></div></div>
      </details>
    </div>
  )
}

const watchingCards = [
  { title: 'Home, Services, and Contact', description: 'All three important pages loaded successfully.', meta: 'Last checked 10:45 AM · Every hour' },
  { title: 'Request-a-quote form', description: 'Test request submitted and recorded. Delivery needs your decision.', meta: 'Last checked 10:12 AM · Daily and after changes' },
  { title: 'General contact form', description: 'Test message submitted, recorded, and delivered.', meta: 'Last checked 10:11 AM · Daily and after changes' },
  { title: 'Phone links', description: 'Links point to the expected business number.', meta: 'Last checked 10:11 AM · Daily' },
  { title: 'Software maintenance', description: 'Existing software checked for eligible maintenance.', meta: 'Last checked 10:10 AM · Daily' },
]

export function OverviewPage() {
  const { state } = usePrototype()
  const navigate = useNavigate()
  const rollback = state.scenario === 'rollback'
  const support = state.recoveryStep === 'ticket'
  const recoveryDecision = rollback && ['restored', 'reminded'].includes(state.recoveryStep)
  const quoteResolved = state.quoteStatus === 'resolved'
  const quoteDeferred = state.quoteStatus === 'deferred'

  return (
    <div className="page">
      <Breadcrumb current="Overview" />
      <PageHeading title="Your site at a glance" description="Current decisions, verified work, and the evidence Maintenance Manager is watching." actions={<StatusPill tone="success">Active</StatusPill>} />
      <div className="agreement-banner"><ShieldCheck /><span><strong>Working agreement:</strong> {state.agreement === 'automatic' ? 'Watch and handle routine maintenance' : 'Watch and ask before every change'}</span><Link to={`${MM}/settings`}>View settings</Link></div>

      {support && <WorkSection title="In progress" count={1} tone="info" icon={<RefreshCcw />}><WorkCard title="Bluehost support is reviewing the update" description="Ticket #BH-10482 · Your site and customer-contact paths are working normally." meta="No action is required from you right now." onClick={() => navigate(`${MM}/recovery`)} /></WorkSection>}

      <WorkSection title="Needs your decision" count={(state.agreement === 'approval' ? 1 : 0) + (!rollback && !quoteResolved ? 1 : 0) + (recoveryDecision ? 1 : 0)} tone="warning" icon={<CircleAlert />}>
        {state.agreement === 'approval' && !rollback && <WorkCard title="Approve the waiting contact-form update" description="The site is being watched. No backup or website change has run." meta="Waiting since August 3 · Small update to existing software" />}
        {!rollback && !quoteResolved && <WorkCard title="Where should new quote requests go?" description="Your site records new requests, but delivery to the current address could not be confirmed." meta={quoteDeferred ? 'Reminder set · Due August 10' : 'Recommended address is ready to review'} status={<StatusPill tone="warning">{quoteDeferred ? 'Reminder set' : 'Decision needed'}</StatusPill>} onClick={() => navigate(`${MM}/decisions/quote-delivery`)} />}
        {recoveryDecision && <WorkCard title="Contact-form update still pending" description="The previous version was restored and the site works normally again. Support review is recommended before another attempt." meta={state.recoveryStep === 'reminded' ? 'Try-again reminder set' : 'Recovered at 10:12 AM'} onClick={() => navigate(`${MM}/recovery`)} />}
        {quoteResolved && state.agreement === 'automatic' && !recoveryDecision && <EmptyState>No decisions are waiting. You’re all caught up.</EmptyState>}
      </WorkSection>

      <WorkSection title="Handled for you" count={!rollback && state.agreement === 'automatic' ? (quoteResolved ? 2 : 1) : 0} tone="success" icon={<CheckCircle2 />}>
        {!rollback && state.agreement === 'automatic' ? <>
          {quoteResolved && <WorkCard title="Quote-request delivery updated" description="New requests now go to hello@harborandpinelandscaping.com. Submission, recording, and delivery passed." meta="August 3 · 10:14–10:20 AM · 6 minutes" status={<StatusPill tone="success">Verified</StatusPill>} onClick={() => navigate(`${MM}/activity`)} />}
          <WorkCard title="Contact-form software updated" description="The site and affected customer paths passed verification." meta="August 3 · 10:02–10:10 AM · 8 minutes" status={<StatusPill tone="success">Verified</StatusPill>} onClick={() => navigate(`${MM}/activity`)} />
        </> : <EmptyState>{rollback ? 'The failed update was restored, not handled. Its recovery remains in Activity.' : 'Maintenance Manager is waiting for approval before making changes.'}</EmptyState>}
      </WorkSection>

      <WorkSection title="Watching for you" count={6} tone="info" icon={<Eye />}>
        <WorkCard title="Website availability" description="The latest availability check completed successfully." meta="Available · Last checked 10:50 AM · Every 5 minutes" status={<StatusPill tone="success">Current</StatusPill>} />
        <div className="watching-grid">
          {watchingCards.map((card) => <WorkCard key={card.title} {...card} status={<StatusPill tone="success">Current</StatusPill>} />)}
        </div>
      </WorkSection>
    </div>
  )
}

export function QuoteDecisionPage() {
  const { state, dispatch } = usePrototype()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'decision' | 'alternate'>('decision')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [verifying, setVerifying] = useState(false)

  function resolveRecommended() {
    setVerifying(true)
    window.setTimeout(() => { dispatch({ type: 'resolve-quote' }); setVerifying(false) }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 80 : 700)
  }

  function testAlternate(event: React.FormEvent) {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a complete email address, like name@example.com.'); return }
    setError('')
    setVerifying(true)
    window.setTimeout(() => {
      if (email.toLowerCase() === 'hello@harborandpinelandscaping.com') dispatch({ type: 'resolve-quote' })
      else dispatch({ type: 'alternate-failed', email })
      setVerifying(false)
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 80 : 700)
  }

  if (state.quoteStatus === 'resolved') return (
    <div className="page page--narrow">
      <Breadcrumb current="Decision result" />
      <section className="result-hero result-hero--success"><span><Check /></span><p className="eyebrow">Completed and verified</p><h1>New quote requests now go to hello@harborandpinelandscaping.com.</h1><p>Maintenance Manager changed only the quote-form destination after your approval.</p></section>
      <section className="verification-card"><h2>What passed</h2><ul><li><CheckCircle2 /><span><strong>Test request submitted</strong><small>The quote form accepted the request.</small></span></li><li><CheckCircle2 /><span><strong>Website record confirmed</strong><small>The request appeared in the site’s records.</small></span></li><li><CheckCircle2 /><span><strong>Email delivered</strong><small>Delivery to the verified business mailbox was confirmed.</small></span></li></ul><div className="duration"><Clock3 /><span><strong>Completed in 6 minutes</strong><small>10:14–10:20 AM</small></span></div></section>
      <ActionRow><Button variant="secondary" onClick={() => navigate(`${MM}/activity`)}>View activity</Button><Button onClick={() => navigate(`${MM}/overview`)}>Return to overview</Button><Button variant="quiet" onClick={() => navigate('/prototype/weekly-summary')}>Jump ahead one week</Button></ActionRow>
    </div>
  )

  if (state.quoteStatus === 'alternate-failed') return (
    <div className="page page--narrow">
      <Breadcrumb current="Email test result" />
      <section className="result-hero result-hero--warning"><span><RotateCcw /></span><p className="eyebrow">Previous setting restored</p><h1>Email delivery to {state.alternateEmail} could not be confirmed.</h1><p>The test request was submitted and recorded, but email delivery could not be confirmed.</p></section>
      <section className="verification-card"><h2>No destination change was kept</h2><p>Maintenance Manager restored the current destination, <strong>harborandpine@gmail.com</strong>. The original delivery limitation is still waiting for your decision.</p><ul><li><CheckCircle2 /><span><strong>Test request submitted</strong><small>The quote form accepted the request.</small></span></li><li><CheckCircle2 /><span><strong>Website record confirmed</strong><small>The request appeared in the site’s records.</small></span></li><li className="failed-check"><CircleAlert /><span><strong>Email delivery not confirmed</strong><small>The entered address was not saved.</small></span></li></ul></section>
      <ActionRow><Button variant="secondary" onClick={() => { dispatch({ type: 'return-to-quote' }); setMode('alternate') }}>Try another email</Button><Button onClick={() => dispatch({ type: 'return-to-quote' })}>Return to decision</Button></ActionRow>
    </div>
  )

  return (
    <div className="page page--narrow">
      <Breadcrumb current="Decision" />
      <PageHeading eyebrow="Needs your decision" title="Where should new quote requests go?" description="Your website records new requests, but delivery to harborandpine@gmail.com could not be confirmed." />
      {state.quoteStatus === 'deferred' && <div className="reminder-banner"><Clock3 /><div><strong>Reminder set for August 10</strong><span>No change has been made. The current destination remains in place.</span></div></div>}
      <section className="decision-evidence"><div><span className="address-state address-state--warning"><CircleAlert /></span><p>Current destination</p><strong>harborandpine@gmail.com</strong><small>No longer verified for this Bluehost account</small></div><ArrowRight aria-hidden="true" /><div><span className="address-state address-state--success"><BadgeCheck /></span><p>Recommended destination</p><strong>hello@harborandpinelandscaping.com</strong><small>Verified business mailbox associated with this site</small></div></section>
      <section className="recommendation-card"><p className="eyebrow">Recommended</p><h2>Send requests to your verified business mailbox</h2><p>This address belongs to your business domain and Bluehost can confirm delivery to it. This choice requires you because it changes where business messages go.</p><h3>If you approve, Maintenance Manager will:</h3><ol><li>Back up the form setting.</li><li>Change only the quote-request destination.</li><li>Submit a test request and confirm the website recorded it.</li><li>Confirm delivery—or restore the current setting if delivery fails.</li></ol></section>

      {mode === 'alternate' ? (
        <form className="email-form" onSubmit={testAlternate} noValidate>
          <label htmlFor="alternate-email">Another email address</label>
          <p id="email-help">We’ll test submission, website recording, and delivery before saving it.</p>
          <input id="alternate-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} aria-describedby={`email-help${error ? ' email-error' : ''}`} aria-invalid={!!error} placeholder="name@example.com" />
          {error && <span id="email-error" className="field-error" role="alert">{error}</span>}
          <ActionRow><Button type="submit" disabled={verifying}>{verifying ? 'Testing email…' : 'Test this email'}</Button><Button type="button" variant="quiet" onClick={() => setMode('decision')}>Cancel</Button></ActionRow>
        </form>
      ) : (
        <ActionRow>
          <Button onClick={resolveRecommended} disabled={verifying}>{verifying ? 'Backing up and testing…' : 'Use recommended email'}</Button>
          <Button variant="secondary" onClick={() => setMode('alternate')}>Choose another email</Button>
          <Button variant="quiet" onClick={() => { dispatch({ type: 'defer-quote' }); navigate(`${MM}/overview`) }}>Remind me in 7 days</Button>
        </ActionRow>
      )}
      <div className="sr-live" aria-live="polite">{verifying ? 'Verification in progress. Backing up the setting, submitting a test request, and checking delivery.' : ''}</div>
    </div>
  )
}

export function ActivityPage() {
  const { state } = usePrototype()
  const rollback = state.scenario === 'rollback'
  const events = [
    ...(state.activated ? [{ icon: Eye, tone: 'success', title: 'Availability monitoring established', description: 'Maintenance Manager is checking the website every five minutes. The latest check completed successfully.', time: 'August 3 · 10:01 AM', detail: 'Agreement: site-specific monitoring · Latest successful check: 10:50 AM' }] : []),
    ...(rollback ? [
      { icon: CircleAlert, tone: 'warning', title: 'Contact-form update failed verification', description: 'The website remained available, but the request-a-quote test failed after the update.', time: 'August 3 · 10:10 AM', detail: 'Authorized by: automatic agreement · Technical detail: plugin 5.8.1 → 5.8.2' },
      { icon: RotateCcw, tone: 'success', title: 'Backup restored and site recovered', description: 'The previous version was restored. Availability and all customer-contact-path checks passed again.', time: 'August 3 · 10:12 AM', detail: 'Active recovery: 2 minutes · Original update remains unresolved' },
      ...(state.recoveryStep === 'ticket' ? [{ icon: Inbox, tone: 'info', title: 'Bluehost support ticket opened', description: 'Ticket #BH-10482 includes the failed test, rollback result, and diagnostic context.', time: 'August 3 · 10:14 AM', detail: 'No owner action required · Support handoff in progress' }] : []),
    ] : state.agreement === 'automatic' && state.activated ? [{ icon: CheckCircle2, tone: 'success', title: 'Contact-form software updated and verified', description: 'A backup was created, the small update was installed, and the site and affected paths passed.', time: 'August 3 · 10:02–10:10 AM · 8 minutes', detail: 'Authorized by: Watch and handle routine maintenance · Technical detail: plugin 5.8.1 → 5.8.2' }] : state.activated ? [{ icon: FileClock, tone: 'warning', title: 'Contact-form update waiting for approval', description: 'Monitoring started. No backup or website change ran.', time: 'August 3 · 10:02 AM', detail: 'Working agreement: Watch and ask before every change' }] : []),
    ...(state.quoteStatus === 'resolved' ? [{ icon: CheckCircle2, tone: 'success', title: 'Quote-request delivery updated and verified', description: 'The approved destination was backed up, changed, submitted, recorded, and delivered.', time: 'August 3 · 10:14–10:20 AM · 6 minutes', detail: 'Authorized by owner approval · Previous destination: harborandpine@gmail.com' }] : []),
    ...(state.quoteStatus === 'deferred' ? [{ icon: Clock3, tone: 'info', title: 'Quote-delivery reminder set', description: 'No destination change was made. The current delivery limitation remains visible.', time: 'August 3 · 10:14 AM', detail: 'Reminder due August 10 · Silence is not approval' }] : []),
    ...(state.quoteStatus === 'alternate-failed' ? [{ icon: RotateCcw, tone: 'warning', title: 'Alternate email test failed; setting restored', description: `Submission and recording passed, but delivery to ${state.alternateEmail} could not be confirmed.`, time: 'August 3 · 10:14–10:18 AM · 4 minutes', detail: 'No destination change was kept' }] : []),
  ]

  return (
    <div className="page">
      <Breadcrumb current="Activity" />
      <PageHeading title="Activity" description="One readable history of findings, permission, work, verification, recovery, and support." />
      <div className="activity-layout">
        <aside className="activity-filter" aria-label="Activity filters"><strong>Show</strong><button className="filter-active">All activity</button><button>Decisions</button><button>Completed work</button><button>Monitoring</button><button>Recovery &amp; support</button></aside>
        <section className="timeline" aria-label="Maintenance Manager activity">
          {events.map(({ icon: Icon, tone, title, description, time, detail }, index) => (
            <article className="timeline-event" key={`${title}-${index}`}>
              <span className={`timeline-event__icon timeline-event__icon--${tone}`}><Icon aria-hidden="true" /></span>
              <div><span className="timeline-event__time">{time}</span><h2>{title}</h2><p>{description}</p><details><summary>See record details</summary><p>{detail}</p></details></div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export function ResultsPage() {
  const { state } = usePrototype()
  const navigate = useNavigate()
  const rollback = state.scenario === 'rollback'
  const pluginComplete = state.agreement === 'automatic' && !rollback
  const quoteComplete = state.quoteStatus === 'resolved' && !rollback
  const completed = Number(pluginComplete) + Number(quoteComplete)
  const pending = Number(state.agreement === 'approval') + Number(!rollback && state.quoteStatus !== 'resolved') + Number(rollback)
  const deferred = state.quoteStatus === 'deferred'

  return (
    <div className="page">
      <Breadcrumb current="Results" />
      <PageHeading eyebrow="August 3–10, 2026" title="Your website is available" description="A seven-day view of current checks, completed work, and the effort required from you." actions={<StatusPill tone="success">Checked 10:50 AM</StatusPill>} />
      <section className="results-hero">
        <div className="results-score"><span><Check /></span><div><strong>Current evidence looks good</strong><p>Availability and every detected customer-contact path have recent checks.</p></div></div>
        <div className="results-metrics"><div><strong>{completed}</strong><span>Changes completed<br />and verified</span></div><div><strong>{pending}</strong><span>Decisions<br />waiting</span></div><div><strong>0</strong><span>Troubleshooting steps<br />required from you</span></div></div>
      </section>
      <section className="results-section"><div className="results-section__heading"><div><p className="eyebrow">Current coverage</p><h2>Website and important pages</h2></div><span>Fresh evidence</span></div><div className="result-status-grid"><article><Globe2 /><h3>Website availability</h3><strong>Available</strong><span>10:50 AM · Every 5 minutes</span></article>{['Home', 'Services', 'Contact'].map((page) => <article key={page}><FileText /><h3>{page}</h3><strong>Loaded successfully</strong><span>10:45 AM · Every hour</span></article>)}</div></section>
      <section className="results-section"><div className="results-section__heading"><div><p className="eyebrow">Customer paths</p><h2>Ways customers reach you</h2></div><span>Latest verifiable result</span></div><div className="contact-result-grid"><article><Send /><h3>Request a quote</h3><ul><li><Check />Submitted</li><li><Check />Recorded</li><li className={quoteComplete ? '' : 'result-warning'}>{quoteComplete ? <Check /> : <CircleAlert />}{quoteComplete ? 'Delivered' : 'Delivery needs decision'}</li></ul><span>Latest test: August 10 · 9:10 AM</span></article><article><Mail /><h3>General contact</h3><ul><li><Check />Submitted</li><li><Check />Recorded</li><li><Check />Delivered</li></ul><span>Latest test: August 10 · 9:05 AM</span></article><article><Phone /><h3>Call the business</h3><ul><li><Check />Expected number present</li><li><Check />Phone action opens</li></ul><span>Latest check: August 10 · 9:05 AM</span></article></div></section>
      <section className="results-section"><div className="results-section__heading"><div><p className="eyebrow">Work and decisions</p><h2>What changed this week</h2></div><Link to={`${MM}/activity`}>View all activity</Link></div>
        <div className="results-work-list">
          {pluginComplete && <WorkCard title="Contact-form software updated" description="Site and affected customer paths passed verification." meta="August 3 · 8 minutes" status={<StatusPill tone="success">Completed</StatusPill>} onClick={() => navigate(`${MM}/activity`)} />}
          {quoteComplete && <WorkCard title="Quote-request delivery updated" description="New requests go to the verified business mailbox." meta="August 3 · 6 minutes" status={<StatusPill tone="success">Completed</StatusPill>} onClick={() => navigate(`${MM}/activity`)} />}
          {state.agreement === 'approval' && <WorkCard title="Contact-form update" description="No change made. Waiting for your approval." meta="Needs your decision" status={<StatusPill tone="warning">Pending</StatusPill>} />}
          {!rollback && !quoteComplete && <WorkCard title="Quote-request delivery" description={`Current destination remains harborandpine@gmail.com.${deferred ? ' Your reminder is due today.' : ''}`} meta={deferred ? 'Reminder set · Due today' : 'Needs your decision'} status={<StatusPill tone="warning">Pending</StatusPill>} onClick={() => navigate(`${MM}/decisions/quote-delivery`)} />}
          {rollback && <WorkCard title="Contact-form update" description="Verification failed and the previous version was restored. The site works normally; support review is recommended." meta={state.recoveryStep === 'ticket' ? 'Ticket #BH-10482 · In progress' : 'Needs your decision'} status={<StatusPill tone="warning">Not completed</StatusPill>} onClick={() => navigate(`${MM}/recovery`)} />}
          {!completed && !pending && <EmptyState>No changes or decisions in this period.</EmptyState>}
        </div>
      </section>
    </div>
  )
}

export function SettingsPage() {
  const { state, dispatch } = usePrototype()
  return (
    <div className="page page--narrow">
      <Breadcrumb current="Settings" />
      <PageHeading title="Settings" description="The working agreement and event preferences for this website." />
      <SiteContext />
      <section className="settings-section"><div className="settings-section__heading"><div><h2>Working agreement</h2><p>Controls what Maintenance Manager may change without asking.</p></div><StatusPill tone="success">Active</StatusPill></div><fieldset className="agreement-fieldset agreement-fieldset--compact"><legend className="sr-only">Working agreement</legend><label className={`agreement-card ${state.agreement === 'automatic' ? 'agreement-card--selected' : ''}`}><input type="radio" checked={state.agreement === 'automatic'} onChange={() => dispatch({ type: 'set-agreement', agreement: 'automatic' })} /><span className="radio-visual" /><div><strong>Watch and handle routine maintenance</strong><p>Small reversible updates to existing software, with backup and verification.</p></div></label><label className={`agreement-card ${state.agreement === 'approval' ? 'agreement-card--selected' : ''}`}><input type="radio" checked={state.agreement === 'approval'} onChange={() => dispatch({ type: 'set-agreement', agreement: 'approval' })} /><span className="radio-visual" /><div><strong>Watch and ask before every change</strong><p>Monitor normally, but wait for approval before any website change.</p></div></label></fieldset></section>
      <section className="settings-section"><h2>Boundaries</h2><div className="boundary-grid"><div><h3>Can handle automatically</h3><p>Small updates to software the site already uses.</p></div><div><h3>Always asks you</h3><p>Visible content, business settings, form destinations, purchases, new software, and irreversible work.</p></div></div></section>
      <section className="settings-section"><h2>Event preferences</h2><div className="preference-row"><div><strong>Decisions that need you</strong><span>Notify right away</span></div><span className="toggle toggle--on" aria-label="Immediate decision notifications on"><span /></span></div><div className="preference-row"><div><strong>Weekly summary</strong><span>Every Monday</span></div><span className="toggle toggle--on" aria-label="Weekly summary on"><span /></span></div><div className="notice"><Info /><p>Where notifications are delivered is controlled by your existing Bluehost account notification preferences.</p></div></section>
    </div>
  )
}

export function RecoveryPage() {
  const { state, dispatch } = usePrototype()
  const navigate = useNavigate()
  const step = state.recoveryStep === 'idle' ? 'failed' : state.recoveryStep

  if (step === 'ticket') return (
    <div className="page page--narrow">
      <Breadcrumb current="Recovery" />
      <section className="result-hero result-hero--info"><span><Inbox /></span><p className="eyebrow">Support handoff complete</p><h1>Bluehost support is reviewing the update</h1><p>Ticket #BH-10482 · Your site and customer-contact paths are working normally.</p></section>
      <section className="ticket-card"><div className="ticket-card__header"><div><span>Ticket</span><strong>#BH-10482</strong></div><StatusPill tone="info">In progress</StatusPill></div><h2>Context sent to Bluehost support</h2><ul><li><Check />Site: harborandpinelandscaping.com</li><li><Check />Contact-form plugin and attempted version</li><li><Check />Backup timestamp: August 3 · 10:02 AM</li><li><Check />Failed request-a-quote test</li><li><Check />Successful rollback and recovery checks</li><li><Check />Relevant diagnostics</li></ul></section>
      <div className="safe-now"><ShieldCheck /><div><strong>No action is required from you right now.</strong><span>Maintenance Manager will keep watching the site and show support progress here.</span></div></div>
      <ActionRow><Button onClick={() => navigate(`${MM}/overview`)}>Return to overview</Button><Button variant="secondary" onClick={() => navigate(`${MM}/activity`)}>View activity</Button></ActionRow>
    </div>
  )

  if (step === 'restored' || step === 'reminded') return (
    <div className="page page--narrow">
      <Breadcrumb current="Recovery" />
      <section className="result-hero result-hero--success"><span><ShieldCheck /></span><p className="eyebrow">Recovery verified</p><h1>Your site is working normally again</h1><p>The previous version was restored. Availability and every customer-contact path passed.</p></section>
      <section className="recovery-summary"><div><CheckCircle2 /><span><strong>Website available</strong><small>Checked after rollback</small></span></div><div><CheckCircle2 /><span><strong>Request-a-quote passed</strong><small>Submitted and recorded</small></span></div><div><CheckCircle2 /><span><strong>General contact and phone links passed</strong><small>Current evidence restored</small></span></div></section>
      <section className="recommendation-card recommendation-card--support"><p className="eyebrow">Recommended</p><h2>Ask Bluehost support to review</h2><p>Your site is working normally again, but the update is still pending. Bluehost support can review the compatibility problem before another attempt. Maintenance Manager will include the failed test and rollback details in the ticket.</p></section>
      {step === 'reminded' && <div className="reminder-banner"><Clock3 /><div><strong>Try-again reminder set</strong><span>The update remains unresolved. No additional change has run.</span></div></div>}
      <ActionRow><Button onClick={() => dispatch({ type: 'set-recovery', step: 'ticket' })}>Ask Bluehost support to review</Button><Button variant="quiet" onClick={() => { dispatch({ type: 'set-recovery', step: 'reminded' }); navigate(`${MM}/overview`) }}>Try again later</Button></ActionRow>
    </div>
  )

  return (
    <div className="page page--narrow">
      <Breadcrumb current="Recovery" />
      <PageHeading eyebrow="In progress" title="Verification failed. Restoring the backup." description="The update finished, but the request-a-quote test failed. Maintenance Manager is returning the site to its previous version." />
      <section className="recovery-live" aria-live="polite"><span className="progress-spinner" /><div><strong>Your website is still available</strong><p>The quote form is the affected path. The task will not be marked handled.</p></div></section>
      <section className="verification-card"><h2>What happened</h2><ul><li><CheckCircle2 /><span><strong>Contact-form update installed</strong><small>Authorized by the automatic working agreement.</small></span></li><li><CheckCircle2 /><span><strong>Website availability passed</strong><small>The public site remained available.</small></span></li><li className="failed-check"><CircleAlert /><span><strong>Request-a-quote test failed</strong><small>The form did not pass after the update.</small></span></li><li><RefreshCcw /><span><strong>Backup restoration started</strong><small>Returning to the last verified version.</small></span></li></ul></section>
      <ActionRow><Button onClick={() => dispatch({ type: 'set-recovery', step: 'restored' })}>Finish restoring backup</Button><Button variant="secondary" onClick={() => navigate(`${MM}/activity`)}>View recovery activity</Button></ActionRow>
    </div>
  )
}

export function WeeklySummaryPage() {
  const { state, dispatch } = usePrototype()
  const navigate = useNavigate()
  const quoteComplete = state.quoteStatus === 'resolved'
  const deferred = state.quoteStatus === 'deferred'
  const pluginComplete = state.agreement === 'automatic' && state.scenario === 'happy'
  const completed = Number(pluginComplete) + Number(quoteComplete)
  return (
    <div className="email-preview">
      <header className="email-preview__prototype"><span>Prototype · Day 8 return experience</span><Button variant="quiet" onClick={() => { dispatch({ type: 'reset' }); navigate('/portal') }}>Back to Day 1</Button></header>
      <main className="email-shell">
        <div className="email-brand"><span className="brand-symbol"><span>b</span></span><strong>bluehost</strong></div>
        <div className="email-subject"><span>Weekly summary</span><h1>Harbor &amp; Pine’s weekly Maintenance Manager summary</h1><p>August 3–10, 2026 · harborandpinelandscaping.com</p></div>
        <section className="email-availability"><span><Check /></span><div><h2>Your website is available</h2><p>The latest availability check passed at 10:50 AM. Maintenance Manager checks every five minutes.</p></div></section>
        <section className="email-section"><h2>Customer paths</h2><div className="email-checks"><div><CheckCircle2 /><span><strong>Request a quote</strong><small>{quoteComplete ? 'Submitted, recorded, and delivered' : 'Submitted and recorded · delivery needs your decision'}</small></span></div><div><CheckCircle2 /><span><strong>General contact</strong><small>Submitted, recorded, and delivered</small></span></div><div><CheckCircle2 /><span><strong>Phone links</strong><small>Expected business number present</small></span></div></div></section>
        <section className="email-section"><h2>This week</h2><div className="email-stats"><div><strong>{completed}</strong><span>{completed === 1 ? 'change' : 'changes'} completed and verified</span></div><div><strong>{quoteComplete ? 1 : deferred ? 1 : state.agreement === 'approval' ? 2 : 1}</strong><span>{quoteComplete ? 'owner decision resolved' : 'decision needs attention'}</span></div><div><strong>0</strong><span>troubleshooting steps required from you</span></div></div>{deferred && <div className="email-decision"><Clock3 /><div><strong>Quote-request delivery · Reminder set · Due today</strong><span>Current destination remains harborandpine@gmail.com.</span></div></div>}</section>
        <Button onClick={() => navigate(`${MM}/results`)}>View results in Bluehost <ArrowRight /></Button>
        <footer>This is a prototype preview of a weekly notification. Controls and history remain in the Bluehost Portal.</footer>
      </main>
    </div>
  )
}
