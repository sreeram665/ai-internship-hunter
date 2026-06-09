# AI Internship Hunter

AI Internship Hunter is a web application that helps users discover, track, and manage internship opportunities from real-time job listings.

The platform automatically fetches internships using the Adzuna Jobs API, stores them in Supabase, prevents duplicate entries, and displays opportunities through an interactive dashboard built with Next.js.

---

## Features

* Real-time internship discovery using Adzuna API
* Search internships by role (Backend, AI, Software Engineering, etc.)
* Automated internship ingestion into Supabase
* Duplicate internship detection and prevention
* Internship tracking dashboard
* Responsive modern UI built with Next.js
* REST API-based backend workflows

---

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Next.js API Routes
* REST APIs

### Database

* Supabase

### External APIs

* Adzuna Jobs API

---

## How It Works

```text
User Search
      ↓
Next.js API
      ↓
Adzuna API
      ↓
Internship Results
      ↓
Supabase Database
      ↓
Dashboard
```

---

## Project Structure

```text
ai-internship-hunter/
│
├── app/
│   ├── api/
│   │   ├── internships/
│   │   └── search/
│   └── dashboard/
│
├── components/
│
├── lib/
│   ├── supabase/
│   └── validators/
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

ADZUNA_APP_ID=your_app_id
ADZUNA_APP_KEY=your_app_key
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ai-internship-hunter.git
```

Move into the project directory:

```bash
cd ai-internship-hunter
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Current Capabilities

* Fetches real internship opportunities from external job APIs
* Stores internships in Supabase
* Prevents duplicate records
* Tracks internship opportunities through a centralized dashboard
* Supports custom role-based searches

---

## Planned Features

* AI-powered internship ranking using Claude API
* Personalized internship recommendations
* Automated internship discovery agents
* Daily internship notifications
* Resume-job match scoring
* OpenClaw workflow automation

---

## Author

Sreeram A
