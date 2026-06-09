# AI Internship Hunter

A clean MVP foundation for storing, viewing, and managing internship opportunities.

## Stack

- Next.js 15 App Router
- JavaScript
- Tailwind CSS
- Supabase
- Vercel-ready deployment

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Create the Supabase table:

```sql
create table internships (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  role text not null,
  location text,
  link text,
  source text,
  score integer,
  status text not null default 'Saved',
  created_at timestamptz not null default now()
);
```

4. Run locally:

```bash
npm run dev
```

## API

- `GET /api/internships` lists internships, newest first.
- `POST /api/internships` creates an internship.

Authentication, AI scoring, and OpenClaw are intentionally not implemented yet.
