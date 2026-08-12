/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'

export type Agreement = 'automatic' | 'approval'
export type Scenario = 'happy' | 'rollback'
export type QuoteStatus = 'pending' | 'resolved' | 'deferred' | 'alternate-failed'
export type RecoveryStep = 'idle' | 'failed' | 'restored' | 'ticket' | 'reminded'

export interface PrototypeState {
  scenario: Scenario
  discoveryDismissed: boolean
  agreement: Agreement
  activated: boolean
  quoteStatus: QuoteStatus
  alternateEmail: string
  recoveryStep: RecoveryStep
  pathReview: boolean
  missingPathOpen: boolean
}

type Action =
  | { type: 'dismiss-discovery' }
  | { type: 'restore-discovery' }
  | { type: 'set-agreement'; agreement: Agreement }
  | { type: 'activate' }
  | { type: 'resolve-quote' }
  | { type: 'defer-quote' }
  | { type: 'alternate-failed'; email: string }
  | { type: 'return-to-quote' }
  | { type: 'set-recovery'; step: RecoveryStep }
  | { type: 'toggle-path-review' }
  | { type: 'toggle-missing-path' }
  | { type: 'select-scenario'; scenario: Scenario }
  | { type: 'reset' }

const STORAGE_KEY = 'bluehost-maintenance-manager-prototype'

const initialState: PrototypeState = {
  scenario: 'happy',
  discoveryDismissed: false,
  agreement: 'automatic',
  activated: false,
  quoteStatus: 'pending',
  alternateEmail: '',
  recoveryStep: 'idle',
  pathReview: false,
  missingPathOpen: false,
}

function loadState(): PrototypeState {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState
  } catch {
    return initialState
  }
}

function reducer(state: PrototypeState, action: Action): PrototypeState {
  switch (action.type) {
    case 'dismiss-discovery':
      return { ...state, discoveryDismissed: true }
    case 'restore-discovery':
      return { ...state, discoveryDismissed: false }
    case 'set-agreement':
      return { ...state, agreement: action.agreement }
    case 'activate':
      return { ...state, activated: true, recoveryStep: state.scenario === 'rollback' ? 'failed' : 'idle' }
    case 'resolve-quote':
      return { ...state, quoteStatus: 'resolved', alternateEmail: '' }
    case 'defer-quote':
      return { ...state, quoteStatus: 'deferred', alternateEmail: '' }
    case 'alternate-failed':
      return { ...state, quoteStatus: 'alternate-failed', alternateEmail: action.email }
    case 'return-to-quote':
      return { ...state, quoteStatus: 'pending', alternateEmail: '' }
    case 'set-recovery':
      return { ...state, recoveryStep: action.step }
    case 'toggle-path-review':
      return { ...state, pathReview: !state.pathReview }
    case 'toggle-missing-path':
      return { ...state, missingPathOpen: !state.missingPathOpen }
    case 'select-scenario':
      return { ...initialState, scenario: action.scenario, agreement: 'automatic' }
    case 'reset':
      return initialState
    default:
      return state
  }
}

interface PrototypeContextValue {
  state: PrototypeState
  dispatch: React.Dispatch<Action>
}

const PrototypeContext = createContext<PrototypeContextValue | null>(null)

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo(() => ({ state, dispatch }), [state])
  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>
}

export function usePrototype() {
  const context = useContext(PrototypeContext)
  if (!context) throw new Error('usePrototype must be used inside PrototypeProvider')
  return context
}
