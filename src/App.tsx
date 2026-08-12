import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Shell } from './components/Shell'
import {
  ActivityPage,
  AgentsHomePage,
  AgreementPage,
  CoveragePage,
  IntroPage,
  OverviewPage,
  PortalPage,
  QuoteDecisionPage,
  RecoveryPage,
  ResultsPage,
  ReviewPage,
  SettingsPage,
  WeeklySummaryPage,
} from './pages/Pages'

export function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portal" replace />} />
      <Route path="/portal" element={<Shell><PortalPage /></Shell>} />
      <Route path="/ai-agents" element={<Shell><AgentsHomePage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager" element={<Shell><IntroPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/setup/coverage" element={<Shell><CoveragePage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/setup/agreement" element={<Shell><AgreementPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/setup/review" element={<Shell><ReviewPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/overview" element={<Shell showLocalNav><OverviewPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/decisions/quote-delivery" element={<Shell showLocalNav><QuoteDecisionPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/activity" element={<Shell showLocalNav><ActivityPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/results" element={<Shell showLocalNav><ResultsPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/settings" element={<Shell showLocalNav><SettingsPage /></Shell>} />
      <Route path="/ai-agents/maintenance-manager/recovery" element={<Shell showLocalNav><RecoveryPage /></Shell>} />
      <Route path="/prototype/weekly-summary" element={<Shell minimal><WeeklySummaryPage /></Shell>} />
      <Route path="*" element={<Navigate to="/portal" replace />} />
    </Routes>
  )
}
