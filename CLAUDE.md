# Grocery Guru

## Project Goal
Grocery Guru recommends the best grocery store near a user based on their shopping list. Users input the items they want to buy, and the app identifies which nearby stores carry those items — helping them pick the most convenient and cost-effective option.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (App Router, TypeScript) |
| Backend | Node.js + Express (TypeScript) |
| Monorepo | npm workspaces |

## Directory Structure
```
Grocery-Guru/
├── frontend/          # Next.js app (port 3000)
│   └── app/           # App Router pages and layouts
└── backend/           # Express API server (port 3001)
    └── src/
        └── index.ts   # Entry point
```

## Development

```bash
# Install all dependencies (run once from repo root)
npm install

# Start the frontend (http://localhost:3000)
npm run dev:frontend

# Start the backend (http://localhost:3001)
npm run dev:backend

# Type-check both workspaces
npm run typecheck
```

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/hello` | Hello world |

## Future Features
- Shopping list input (items + quantities)
- Geolocation-based store discovery
- Store inventory matching against the shopping list
- Price comparison across stores
- Recommendation scoring (coverage × price × distance)
- User accounts and saved lists
