import { useId, useState, type ReactNode } from 'react'
import { Check, ChevronDown, ChevronRight, CircleAlert, Clock3, Eye, ShieldCheck } from 'lucide-react'

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger'
}) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function StatusPill({ tone, children }: { tone: 'success' | 'warning' | 'info' | 'neutral'; children: ReactNode }) {
  const Icon = tone === 'success' ? Check : tone === 'warning' ? CircleAlert : tone === 'info' ? Eye : Clock3
  return (
    <span className={`status-pill status-pill--${tone}`}>
      <Icon aria-hidden="true" size={14} />
      {children}
    </span>
  )
}

export function PageHeading({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <header className="page-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="page-heading__description">{description}</p>}
      </div>
      {actions && <div className="page-heading__actions">{actions}</div>}
    </header>
  )
}

export function SiteContext() {
  return (
    <div className="site-context" aria-label="Selected website">
      <div className="site-mark" aria-hidden="true">H</div>
      <div>
        <strong>Harbor &amp; Pine Landscaping</strong>
        <span>harborandpinelandscaping.com</span>
      </div>
    </div>
  )
}

export function WorkSection({ icon, title, count, children, tone = 'neutral', status, collapsible = false, expanded, onExpandedChange, sectionId }: {
  icon?: ReactNode
  title: string
  count?: number
  children: ReactNode
  tone?: 'neutral' | 'warning' | 'success' | 'info'
  status?: ReactNode
  collapsible?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  sectionId?: string
}) {
  const generatedId = useId()
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = collapsible ? (expanded ?? internalExpanded) : true
  const baseId = sectionId ?? `work-section-${generatedId.replace(/:/g, '')}`
  const headingId = `${baseId}-heading`
  const contentId = `${baseId}-content`

  function toggleExpanded() {
    const next = !isExpanded
    if (expanded === undefined) setInternalExpanded(next)
    onExpandedChange?.(next)
  }

  return (
    <section id={baseId} className={`work-section work-section--${tone} ${collapsible && !isExpanded ? 'work-section--collapsed' : ''}`} aria-labelledby={headingId}>
      <header className="work-section__header">
        <span className="work-section__icon">{icon}</span>
        <h2 id={headingId}>{title}</h2>
        {typeof count === 'number' && <span className="count-badge" aria-label={`${count} items`}>{count}</span>}
        {status && <span className="work-section__status">{status}</span>}
        {collapsible && (
          <button className="work-section__toggle" type="button" aria-expanded={isExpanded} aria-controls={contentId} onClick={toggleExpanded} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleExpanded() } }}>
            <span className="sr-only">{isExpanded ? 'Collapse' : 'Expand'} {title}</span>
            <ChevronDown aria-hidden="true" />
          </button>
        )}
      </header>
      <div id={contentId} className="work-section__body" hidden={collapsible && !isExpanded}>{children}</div>
    </section>
  )
}

export function WorkCard({ title, description, meta, status, onClick, children }: {
  title: string
  description: string
  meta?: string
  status?: ReactNode
  onClick?: () => void
  children?: ReactNode
}) {
  const content = (
    <>
      <div className="work-card__content">
        <div className="work-card__topline">{status}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        {meta && <span className="work-card__meta">{meta}</span>}
        {children}
      </div>
      {onClick && <ChevronRight className="work-card__chevron" aria-hidden="true" />}
    </>
  )
  return onClick ? (
    <button className="work-card work-card--button" onClick={onClick}>{content}</button>
  ) : (
    <article className="work-card">{content}</article>
  )
}

export function SafeguardStrip() {
  return (
    <div className="safeguard-strip">
      <ShieldCheck aria-hidden="true" />
      <div>
        <strong>Backed up, tested, and reversible</strong>
        <span>Maintenance Manager restores the previous version if verification fails.</span>
      </div>
    </div>
  )
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <div className="empty-state">{children}</div>
}
