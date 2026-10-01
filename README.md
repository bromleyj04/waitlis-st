# waitlis.st

Public website for waitlis.st, the hosted product layer around the open-source ExitOS Waitlist Kit.

The open-source runtime lives at:

https://github.com/bromleyj04/exitos-waitlist

This project is intentionally separate from the runtime so the marketing/onboarding surface, future Notion OAuth flow, and hosted Notify service can evolve without polluting the reusable boilerplate.

## Local Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

This site should deploy as a separate Vercel project from `exitos-waitlist`.

Primary domain:

```text
waitlis.st
```

The owned domain is `waitlis.st`, not `waitli.st`.
