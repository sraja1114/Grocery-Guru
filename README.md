# Grocery Guru
A grocery store recommender based on the items you shop for.

## Overview
Grocery Guru helps users find the best grocery store near them based on their shopping list. Input the items you need, and the app identifies which nearby stores carry them — so you can choose the most convenient and cost-effective option.

## Tech Stack
- **Frontend** — Next.js 15 (App Router, TypeScript), port `3000`
- **Backend** — Node.js + Express (TypeScript), port `3001`
- **Monorepo** — npm workspaces

## Project Structure
```
Grocery-Guru/
├── frontend/     # Next.js frontend
├── backend/      # Express API
├── CLAUDE.md     # Dev guide for AI-assisted work
└── README.md
```

## Prerequisites
- Node.js 20+
- npm 10+

## Getting Started

```bash
# 1. Install all dependencies
npm install

# 2. Copy env files
cp frontend/.env.local.example frontend/.env.local
cp backend/.env.example backend/.env

# 3. Start the backend
npm run dev:backend

# 4. Start the frontend (new terminal)
npm run dev:frontend
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev:frontend` | Start Next.js dev server |
| `npm run dev:backend` | Start Express dev server (tsx watch) |
| `npm run typecheck` | Type-check both workspaces |
| `npm run lint` | Lint the frontend |
