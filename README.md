# Bluehost Maintenance Manager prototype

A polished, stateful clickable prototype for the approved Bluehost Maintenance Manager concept. It follows Harbor & Pine Landscaping from a contextual Bluehost Portal finding through setup, verified maintenance, an owner decision, weekly results, and a recovery/support handoff.

## Live prototype

[https://elkhornpacific.github.io/bluehost/](https://elkhornpacific.github.io/bluehost/)

The site is a static React application published through GitHub Pages. It uses deterministic fictional fixtures and does not connect to Bluehost systems.

## Walkthroughs

- **Standard journey:** Start on the Portal home, open the Maintenance Manager recommendation, complete the three setup steps, choose either working agreement, and turn it on.
- **Quote-delivery choices:** Accept the verified business mailbox, test another address, or defer the decision for seven days.
- **One-week return:** After the recommended email succeeds, choose `Jump ahead one week` to open the weekly summary and Results.
- **Recovery branch:** In the separate prototype controls, choose `Verification failure & rollback`, turn on Maintenance Manager, finish the rollback, and open the pre-populated support ticket.
- **Reset:** `Restart prototype` always restores the Monday, August 3, 2026 fixture.

## Local development

Requires Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Vite prints the local URL. The app uses hash-based routes, including `/#/portal`, `/#/ai-agents`, and `/#/ai-agents/maintenance-manager/overview`.

## Verification and production build

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
```

The production build is written to `dist/` with Vite base path `/bluehost/`. The GitHub Pages workflow installs from `package-lock.json`, runs `npm run verify`, builds the production assets, uploads `dist`, and deploys it.

## Prototype boundaries

The prototype has no backend, database, authentication, runtime secrets, or live Bluehost integrations. It simulates pre-activation findings, plan readiness, monitoring, backup and restore, WordPress maintenance, customer-path testing, delivery confirmation, support-ticket creation, and a weekly email notification. The experience does not represent those integrations as confirmed production capabilities.

The approved requirements remain in `docs/`. The submission brief is in [`docs/bluehost-prototype-brief.md`](docs/bluehost-prototype-brief.md).
