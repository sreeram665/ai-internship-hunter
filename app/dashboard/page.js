"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { AddInternshipForm } from "@/components/AddInternshipForm";
import { EmptyState } from "@/components/EmptyState";
import { InternshipTable } from "@/components/InternshipTable";
import { LoadingTable } from "@/components/LoadingTable";

export default function DashboardPage() {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const stats = useMemo(() => {
    const total = internships.length;
    const applied = internships.filter((item) => item.status === "Applied").length;
    const interviews = internships.filter((item) => item.status === "Interview").length;

    return { total, applied, interviews };
  }, [internships]);

  const loadInternships = useCallback(async ({ refresh = false } = {}) => {
    if (refresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    setError("");

    try {
      const response = await fetch("/api/internships", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to load internships.");
      }

      setInternships(payload.data || []);
    } catch (caughtError) {
      setError(caughtError.message || "Unable to load internships.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadInternships();
  }, [loadInternships]);

  async function handleCreated(internship) {
    setInternships((current) => [internship, ...current]);
  }
  async function findInternships() {
  try {
    setIsSearching(true);

    const response = await fetch("/api/search", {
      method: "POST",
    });

    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Unable to find internships.");
    }

    for (const job of payload.jobs) {
      await fetch("/api/internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: job.company?.display_name || "Unknown Company",
          role: job.title || "Unknown Role",
          location: job.location?.display_name || "Unknown Location",
          link: job.redirect_url || "",
          source: "Adzuna",
          score: 0,
          status: "Saved",
        }),
      });
    }

    await loadInternships({ refresh: true });

    alert(`Successfully added ${payload.jobs.length} internships`);

  } catch (error) {
    alert(error.message);
  } finally {
    setIsSearching(false);
  }
}

  return (  
    <AppShell>
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-meadow-600">
              Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
              Internship pipeline
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-700">
              Store every role you find, keep the pipeline tidy, and leave room for ranking agents later.
            </p>
          </div>
        <div className="flex gap-3">
  <button
    type="button"
    onClick={findInternships}
    disabled={isSearching}
    className="inline-flex h-11 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {isSearching ? "Searching..." : "Find Internships"}
  </button>

  <button
    type="button"
    onClick={() => loadInternships({ refresh: true })}
    disabled={isRefreshing}
    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-ink-950/15 bg-white px-4 text-sm font-semibold text-ink-950 shadow-sm transition hover:border-meadow-500 hover:text-meadow-600 disabled:cursor-not-allowed disabled:opacity-60"
  >
    <RefreshCcw
      size={17}
      className={isRefreshing ? "animate-spin" : ""}
      aria-hidden="true"
    />
    Refresh
  </button>
</div>
        </div>

        <section className="mt-7 grid gap-4 md:grid-cols-3">
          <StatCard label="Tracked" value={stats.total} />
          <StatCard label="Applied" value={stats.applied} />
          <StatCard label="Interviews" value={stats.interviews} />
        </section>

        <section className="mt-7 grid gap-6 xl:grid-cols-[390px_1fr]">
          <AddInternshipForm onCreated={handleCreated} />

          <div className="min-w-0 rounded-lg border border-ink-950/10 bg-white shadow-soft">
            <div className="flex flex-col gap-2 border-b border-ink-950/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-base font-semibold text-ink-950">Internships</h2>
                <p className="text-sm text-ink-500">Newest opportunities appear first.</p>
              </div>
            </div>

            {error ? (
              <div className="m-5 flex items-start gap-3 rounded-md border border-coral-500/25 bg-coral-100 p-4 text-sm text-ink-900">
                <AlertCircle className="mt-0.5 shrink-0 text-coral-500" size={18} aria-hidden="true" />
                <div>
                  <p className="font-semibold">Could not load internships</p>
                  <p className="mt-1 text-ink-700">{error}</p>
                </div>
              </div>
            ) : isLoading ? (
              <LoadingTable />
            ) : internships.length === 0 ? (
              <EmptyState />
            ) : (
              <InternshipTable internships={internships} />
            )}
          </div>
        </section>
      </main>
    </AppShell>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-lg border border-ink-950/10 bg-white/84 p-5 shadow-sm">
      <p className="text-sm font-medium text-ink-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-ink-950">{value}</p>
    </div>
  );
}
