# COI Desk SaaS - 12 Week Roadmap

## Week 1-2: Project Setup & Architecture
- [x] GitHub repo initialized
- [ ] Frontend scaffold (React + TypeScript)
- [ ] Backend scaffold (Node.js + Express)
- [ ] PostgreSQL setup (local)
- [ ] Deploy skeleton to Vercel + Railway

**Deliverable:** Empty app deployed to production

---

## Week 3-4: Core MVP - Extraction + Approval
- [ ] Migrate extraction prompt from HTML to Node.js
- [ ] Build upload component (drag-drop PDF)
- [ ] Claude API integration (backend calls Claude)
- [ ] Certificate card UI (show extracted data)
- [ ] Approve/reject workflow
- [ ] Database schema (certificates table)

**Deliverable:** Upload PDF → Extract → Show data → Approve

---

## Week 5-6: Authentication & Multi-Tenancy
- [ ] Google OAuth login
- [ ] Workspace model (tenant isolation)
- [ ] User roles (owner, admin, user)
- [ ] API key security (backend only)
- [ ] Tenant-scoped queries

**Deliverable:** Multiple companies can log in separately

---

## Week 7-8: Settings & Compliance Engine
- [ ] Settings panel (edit thresholds)
- [ ] Compliance check logic (reuse HTML version)
- [ ] Verdict badges (Yes, No, EXPIRED)
- [ ] Search + filter certificates
- [ ] Database migrations for settings

**Deliverable:** Configure insurance requirements → Compliance verified

---

## Week 9-10: Excel Export & Refinement
- [ ] Port OOXML engine from HTML to Node.js
- [ ] Generate workbook on backend
- [ ] Style (navy header, banded rows, formatting)
- [ ] Download from frontend
- [ ] Test with real Excel

**Deliverable:** Export approved certificates to styled Excel

---

## Week 11-12: Polish & First Beta Customer
- [ ] Bug fixes from previous weeks
- [ ] Onboarding flow
- [ ] Help documentation
- [ ] End-to-end testing
- [ ] Get first beta customer (free for 3 months)
- [ ] Weekly feedback calls

**Deliverable:** First paying customer signed up

---

## Phase 2 (Months 4-6): Expand Features
- Renewal email templates
- Slack/Teams integrations
- Audit logging
- Fuzzy vendor matching

## Phase 3 (Months 7-12): Enterprise
- SAML/SSO
- Advanced reporting
- API access
- Dedicated support
