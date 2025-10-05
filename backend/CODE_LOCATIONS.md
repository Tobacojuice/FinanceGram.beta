Code Locations for Financegram Backend

Use this guide to quickly find the core API surfaces that developers most often need to modify.
Each section lists the filesystem path alongside a short description of the logic that lives there.

Server bootstrap
- `backend/src/server.ts`: Express application bootstrap, route registration, and scheduled cron
  job that refreshes cached content every five minutes.

Authentication & session management
- `backend/src/routes/auth.ts`: Registration and login endpoints. Handles password hashing,
  JWT generation, and onboarding of default community memberships.
- `backend/src/routes/session.ts`: Lightweight session check endpoint that returns the authenticated
  user profile when a valid JWT is supplied.
- `backend/src/middleware/auth.ts`: JWT verification middleware that attaches the authenticated user
  record to incoming requests.
- `backend/src/models/User.ts`: Mongoose schema backing the authentication flow.

Community content
- `backend/src/routes/communities.ts`: Protected route that fetches community posts scoped to the
  authenticated user’s allowed forums.
- `backend/src/models/CommunityPost.ts`: Schema describing forum posts pulled in by the ingestion
  job.

Market data, news, jobs, and certifications
- `backend/src/routes/market.ts`: Returns cached equity quote data from MongoDB.
- `backend/src/routes/news.ts`: Returns cached news articles.
- `backend/src/routes/jobs.ts`: Returns cached hiring leads.
- `backend/src/routes/certificates.ts`: Returns cached upskilling resources.
- `backend/src/models/MarketQuote.ts`, `NewsItem.ts`, `TalentJob.ts`, `LearningCertification.ts`:
  Schemas powering each respective route.

Data ingestion workflow
- `backend/src/services/ingestion.ts`: Mocked ingestion routines that populate MongoDB with
  placeholder data for quotes, news, jobs, communities, and certifications. Each function is called
  by the cron job configured in `server.ts`.
- `backend/src/utils/formatters.ts`: Utility helpers (currently only ISO date formatting) that can
  be reused by ingestion or route logic.

Configuration
- `backend/src/config/db.ts`: MongoDB connection helper used during server startup.
- `backend/tsconfig.json`: TypeScript compiler options for the backend package.
- `backend/package.json`: npm scripts and dependency manifest.

Consult these locations whenever you plan a change—the path list doubles as a checklist for updating
models, routes, and supporting services together.
