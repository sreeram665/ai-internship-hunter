import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export function AppShell({ children }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-ink-950/10 bg-paper/86 backdrop-blur">
        <nav className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-ink-950 text-white">
              <BriefcaseBusiness size={20} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-ink-950 sm:text-base">
              AI Internship Hunter
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-white hover:text-ink-950"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-ink-950 shadow-sm ring-1 ring-ink-950/10 transition hover:ring-meadow-500"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}
