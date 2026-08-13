import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { App } from '../App'
import { PrototypeProvider } from '../state/PrototypeContext'

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <PrototypeProvider>
        <App />
      </PrototypeProvider>
    </MemoryRouter>,
  )
}

describe('Maintenance Manager prototype', () => {
  it('explains the complete maintenance loop in plain language', () => {
    renderRoute('/ai-agents/maintenance-manager')

    expect(screen.getByText(/Maintenance Manager watches your website/)).toBeInTheDocument()
    expect(screen.getByText('Handle approved work')).toBeInTheDocument()
    expect(screen.getByText('Ask you to decide')).toBeInTheDocument()
    expect(screen.getByText('Follows the permissions you choose')).toBeInTheDocument()
    expect(screen.getByText('Backs up before changes')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /asks you to decide when approval is needed/i })).toBeInTheDocument()
    expect(screen.queryByText('One clear working agreement')).not.toBeInTheDocument()
  })

  it('starts with attributed Bluehost findings and supports reversible dismissal', async () => {
    const user = userEvent.setup()
    renderRoute('/portal')

    expect(screen.getByRole('heading', { name: /has one item that needs attention/i })).toBeInTheDocument()
    expect(screen.getByText('Found by Bluehost')).toBeInTheDocument()
    expect(screen.queryByText(/missed.*availability checks/i)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Not now' }))
    expect(screen.getByText('No changes were made. You can bring it back whenever you’re ready.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Show recommendation' }))
    expect(screen.getByRole('button', { name: /See how Maintenance Manager can help/i })).toBeInTheDocument()
  })

  it('makes the selected working agreement outcome explicit', async () => {
    const user = userEvent.setup()
    renderRoute('/ai-agents/maintenance-manager/setup/agreement')

    expect(screen.getByRole('heading', { name: 'Routine maintenance will happen automatically' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Authorized without asking' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Protection and notifications stay the same' })).toBeInTheDocument()

    await user.click(screen.getByRole('radio', { name: /Watch and ask before every change/i }))

    expect(screen.getByRole('heading', { name: 'Every website change waits for you' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Keeps watching' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Asks before every change' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Authorized without asking' })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Protection and notifications stay the same' })).toBeInTheDocument()
  })

  it('activates monitoring-only mode without claiming the plugin update was handled', async () => {
    const user = userEvent.setup()
    renderRoute('/ai-agents/maintenance-manager/setup/agreement')

    await user.click(screen.getByRole('radio', { name: /Watch and ask before every change/i }))
    await user.click(screen.getByRole('link', { name: /Continue/i }))
    expect(screen.getByText(/Put the waiting contact-form update under/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Turn on Maintenance Manager' }))
    await user.click(await screen.findByRole('button', { name: /View Maintenance Manager/i }, { timeout: 5000 }))

    expect(screen.getByRole('heading', { name: 'Approve the waiting contact-form update' })).toBeInTheDocument()
    expect(screen.getByText('Maintenance Manager is waiting for approval before making changes.')).toBeInTheDocument()
    expect(screen.getByText('The latest availability check completed successfully.')).toBeInTheDocument()
    expect(screen.queryByText(/missed.*check/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Contact-form software updated' })).not.toBeInTheDocument()
  })

  it('defers quote delivery without changing the destination and derives Results truthfully', async () => {
    const user = userEvent.setup()
    renderRoute('/ai-agents/maintenance-manager/decisions/quote-delivery')

    await user.click(screen.getByRole('button', { name: 'Remind me in 7 days' }))
    expect(screen.getByText('Reminder set · Due August 10')).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Results' }))
    expect(screen.getByText(/Current destination remains harborandpine@gmail.com/)).toBeInTheDocument()
    expect(screen.getByText('Reminder set · Due today')).toBeInTheDocument()
    expect(screen.queryByText(/pre-activation missed/i)).not.toBeInTheDocument()
    expect(screen.queryByText('New requests go to the verified business mailbox.')).not.toBeInTheDocument()
  })

  it('restores the current destination when an alternate email cannot be verified', async () => {
    const user = userEvent.setup()
    renderRoute('/ai-agents/maintenance-manager/decisions/quote-delivery')

    await user.click(screen.getByRole('button', { name: 'Choose another email' }))
    await user.type(screen.getByLabelText('Another email address'), 'owner@example.com')
    await user.click(screen.getByRole('button', { name: 'Test this email' }))
    expect(await screen.findByRole('heading', { name: /Email delivery to owner@example.com could not be confirmed/i }, { timeout: 3000 })).toBeInTheDocument()
    expect(screen.getByText('No destination change was kept')).toBeInTheDocument()
    expect(screen.getByText(/restored the current destination/i)).toBeInTheDocument()
  })

  it('completes the rollback and pre-populated support handoff branch', async () => {
    const user = userEvent.setup()
    renderRoute('/portal')

    await user.selectOptions(screen.getByLabelText('Scenario'), 'rollback')
    await user.click(screen.getByRole('button', { name: 'Turn on Maintenance Manager' }))
    await user.click(await screen.findByRole('button', { name: 'View recovery status' }, { timeout: 5000 }))
    expect(screen.getByRole('heading', { name: 'Verification failed. Restoring the backup.' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Finish restoring backup' }))
    expect(screen.getByRole('heading', { name: 'Your site is working normally again' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Ask Bluehost support to review' }))

    expect(screen.getByText('#BH-10482')).toBeInTheDocument()
    const ticket = screen.getByRole('heading', { name: 'Context sent to Bluehost support' }).parentElement!
    expect(within(ticket).getByText('Failed request-a-quote test')).toBeInTheDocument()
    expect(screen.getByText('No action is required from you right now.')).toBeInTheDocument()
  })

  it('completes progress quickly when reduced motion is preferred', async () => {
    vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    const user = userEvent.setup()
    renderRoute('/ai-agents/maintenance-manager/setup/review')

    await user.click(screen.getByRole('button', { name: 'Turn on Maintenance Manager' }))
    expect(await screen.findByRole('button', { name: /View Maintenance Manager/i }, { timeout: 1500 })).toBeInTheDocument()
  })
})
