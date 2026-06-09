import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Database, ListChecks } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Track opportunities",
    description: "Store company, role, location, source, application link, score, and status.",
  },
  {
    icon: ListChecks,
    title: "Manage pipeline",
    description: "Keep saved, applied, interview, offer, and rejected internships in one table.",
  },
  {
    icon: Database,
    title: "Built on Supabase",
    description: "A simple data layer now, ready for agents and ranking workflows later.",
  },
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="mx-auto flex min-h-[calc(100vh-92px)] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-meadow-600">
              MVP foundation
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl lg:text-6xl">
              AI Internship Hunter
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              A focused dashboard for collecting internship leads before AI ranking,
              automation, or authentication enter the picture.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink-950 px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-ink-900 focus:outline-none focus:ring-2 focus:ring-meadow-500 focus:ring-offset-2"
              >
                Open dashboard
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-ink-950/10 bg-white/82 p-4 shadow-soft backdrop-blur">
            <div className="overflow-hidden rounded-md border border-ink-950/10">
              <div className="grid grid-cols-[1.25fr_1fr_0.7fr] bg-ink-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                <span>Company</span>
                <span>Role</span>
                <span>Status</span>
              </div>
              {[
                ["OpenAI", "Research Intern", "Saved"],
                ["Vercel", "Frontend Intern", "Applied"],
                ["Supabase", "Developer Advocate Intern", "Interview"],
              ].map(([company, role, status]) => (
                <div
                  key={company}
                  className="grid grid-cols-[1.25fr_1fr_0.7fr] items-center border-t border-ink-950/10 px-4 py-4 text-sm text-ink-700"
                >
                  <span className="font-semibold text-ink-950">{company}</span>
                  <span>{role}</span>
                  <span className="rounded-full bg-meadow-100 px-3 py-1 text-center text-xs font-semibold text-meadow-600">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-ink-950/10 bg-white/72 p-5 shadow-sm"
            >
              <feature.icon className="mb-4 text-meadow-600" size={24} aria-hidden="true" />
              <h2 className="text-base font-semibold text-ink-950">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
