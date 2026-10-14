# COI Desk SaaS

## Overview
COI Desk is a multi-tenant SaaS platform for managing vendor Certificate of Insurance (COI) compliance. It reads ACORD 25 forms with AI, checks compliance against insurance requirements, and exports clean Excel trackers.

**Built by:** Krish Patel  
**Status:** Early Development  
**MVP Timeline:** 12 weeks

---

## What It Does

1. **Upload** vendor COI PDFs (drag-and-drop)
2. **Extract** vendor name, broker, coverage details with Claude AI
3. **Verify** compliance against your insurance requirements
4. **Flag** expired/underinsured coverage
5. **Export** clean Excel tracker
6. **Draft** renewal emails to brokers

---

## Project Structure

```
coidesk-saas/
├── frontend/          # React SPA (TypeScript)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js API
│   ├── src/
│   └── package.json
├── .gitignore
├── README.md
└── ROADMAP.md
```

---

## Tech Stack

- **Frontend:** React + TypeScript (Vercel)
- **Backend:** Node.js + Express (Railway)
- **Database:** PostgreSQL (Railway)
- **AI:** Claude API (Anthropic)
- **Auth:** Google OAuth

---

## Getting Started

### Prerequisites
- Node.js 18+
- Git
- GitHub account
- Railway account (free)
- Vercel account (free)

### Local Development

1. Clone the repo:
```bash
git clone https://github.com/krispykool/coidesk-saas.git
cd coidesk-saas
```

2. Set up frontend:
```bash
cd frontend
npm install
npm start
```

3. Set up backend (in another terminal):
```bash
cd backend
npm install
npm start
```

The app will be available at `http://localhost:3000`

---

## Deployment

- **Frontend:** Vercel (automatic deployment from GitHub)
- **Backend:** Railway (automatic deployment from GitHub)

Push to main branch to trigger deployments.

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for 12-week development plan.

---

## License

Proprietary (not open source)

---

## Contact

Built with ❤️ by Krish Patel
