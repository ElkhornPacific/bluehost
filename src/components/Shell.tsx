import { useState, type ReactNode } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Bell,
  Bot,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Globe2,
  HelpCircle,
  Home,
  Mail,
  Menu,
  PackageOpen,
  Server,
  Shield,
  Sparkles,
  X,
} from 'lucide-react'
import { usePrototype, type Scenario } from '../state/PrototypeContext'
import { Button } from './Ui'

const portalLinks = [
  { label: 'Home', to: '/portal', icon: Home },
  { label: 'Websites', to: '/websites', icon: Globe2, disabled: true },
  { label: 'AI Agents', to: '/ai-agents', icon: Sparkles },
  { label: 'Email', to: '/email', icon: Mail, disabled: true },
  { label: 'Domains', to: '/domains', icon: CircleDollarSign, disabled: true },
  { label: 'Hosting', to: '/hosting', icon: Server, disabled: true },
  { label: 'Security', to: '/security', icon: Shield, disabled: true },
  { label: 'Billing', to: '/billing', icon: CreditCard, disabled: true },
  { label: 'Marketplace', to: '/marketplace', icon: PackageOpen, disabled: true },
]

const localLinks = [
  { label: 'Overview', to: '/ai-agents/maintenance-manager/overview' },
  { label: 'Activity', to: '/ai-agents/maintenance-manager/activity' },
  { label: 'Results', to: '/ai-agents/maintenance-manager/results' },
  { label: 'Settings', to: '/ai-agents/maintenance-manager/settings' },
]

function isAgentRoute(pathname: string) {
  return pathname.startsWith('/ai-agents')
}

export function Shell({ children, showLocalNav = false, minimal = false }: { children: ReactNode; showLocalNav?: boolean; minimal?: boolean }) {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  if (minimal) return <>{children}</>

  return (
    <div className="portal-shell">
      <aside className={`portal-sidebar ${navOpen ? 'portal-sidebar--open' : ''}`} aria-label="Portal navigation">
        <div className="brand-lockup">
          <div className="brand-symbol" aria-hidden="true"><span>b</span></div>
          <span>bluehost</span>
          <button className="nav-close" aria-label="Close navigation" onClick={() => setNavOpen(false)}><X /></button>
        </div>
        <nav>
          {portalLinks.map(({ label, to, icon: Icon, disabled }) => {
            const selected = label === 'AI Agents' ? isAgentRoute(location.pathname) : location.pathname === to
            return disabled ? (
              <span key={label} className="portal-nav-link portal-nav-link--disabled" aria-disabled="true">
                <Icon aria-hidden="true" /><span>{label}</span>
              </span>
            ) : (
              <NavLink key={label} to={to} onClick={() => setNavOpen(false)} className={`portal-nav-link ${selected ? 'portal-nav-link--active' : ''}`}>
                <Icon aria-hidden="true" /><span>{label}</span>
              </NavLink>
            )
          })}
        </nav>
        <div className="portal-sidebar__footer">
          <HelpCircle aria-hidden="true" /><span>Help &amp; support</span>
        </div>
      </aside>

      {navOpen && <button className="nav-backdrop" aria-label="Close navigation" onClick={() => setNavOpen(false)} />}

      <div className="portal-main">
        <header className="utility-bar">
          <button className="menu-button" aria-label="Open navigation" aria-expanded={navOpen} onClick={() => setNavOpen(true)}><Menu /></button>
          <div className="utility-bar__spacer" />
          <button className="icon-button" aria-label="Notifications"><Bell /></button>
          <button className="account-button" aria-label="Account menu">
            <span className="avatar">HP</span>
            <span>Harbor &amp; Pine</span>
            <ChevronDown aria-hidden="true" />
          </button>
        </header>
        {showLocalNav && (
          <div className="agent-bar">
            <div className="agent-bar__identity">
              <span className="agent-icon"><Bot aria-hidden="true" /></span>
              <div><strong>Maintenance Manager</strong><span>harborandpinelandscaping.com</span></div>
            </div>
            <nav aria-label="Maintenance Manager navigation">
              {localLinks.map((link) => <NavLink key={link.label} to={link.to}>{link.label}</NavLink>)}
            </nav>
          </div>
        )}
        <main id="main-content" className="portal-content">{children}</main>
      </div>
      <ScenarioControl />
    </div>
  )
}

function ScenarioControl() {
  const { state, dispatch } = usePrototype()
  const navigate = useNavigate()

  function selectScenario(scenario: Scenario) {
    dispatch({ type: 'select-scenario', scenario })
    navigate(scenario === 'rollback' ? '/ai-agents/maintenance-manager/setup/review' : '/portal')
  }

  function restart() {
    dispatch({ type: 'reset' })
    navigate('/portal')
  }

  return (
    <aside className="scenario-control" aria-label="Prototype controls">
      <span className="scenario-control__label">Prototype controls</span>
      <label>
        Scenario
        <select value={state.scenario} onChange={(event) => selectScenario(event.target.value as Scenario)}>
          <option value="happy">Standard journey</option>
          <option value="rollback">Verification failure &amp; rollback</option>
        </select>
      </label>
      <Button variant="quiet" onClick={restart}>Restart prototype</Button>
    </aside>
  )
}
