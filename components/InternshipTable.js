import { ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/formatters";

const statusStyles = {
  Saved: "bg-skywash text-ink-700",
  Applied: "bg-meadow-100 text-meadow-600",
  Interview: "bg-[#fff1c7] text-[#7b5b00]",
  Offer: "bg-[#e7f8d5] text-[#3f7a20]",
  Rejected: "bg-coral-100 text-coral-500",
};

export function InternshipTable({ internships }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[840px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink-950/10 bg-paper text-xs uppercase tracking-[0.1em] text-ink-500">
            <th className="px-5 py-3 font-semibold">Company</th>
            <th className="px-5 py-3 font-semibold">Role</th>
            <th className="px-5 py-3 font-semibold">Location</th>
            <th className="px-5 py-3 font-semibold">Source</th>
            <th className="px-5 py-3 font-semibold">Score</th>
            <th className="px-5 py-3 font-semibold">Status</th>
            <th className="px-5 py-3 font-semibold">Created</th>
            <th className="px-5 py-3 font-semibold">Link</th>
          </tr>
        </thead>
        <tbody>
          {internships.map((internship) => (
            <tr
              key={internship.id}
              className="border-b border-ink-950/10 text-sm text-ink-700 last:border-0 hover:bg-skywash/45"
            >
              <td className="px-5 py-4 font-semibold text-ink-950">{internship.company}</td>
              <td className="px-5 py-4">{internship.role}</td>
              <td className="px-5 py-4">{internship.location || "Remote / TBD"}</td>
              <td className="px-5 py-4">{internship.source || "Manual"}</td>
              <td className="px-5 py-4">{internship.score ?? "Pending"}</td>
              <td className="px-5 py-4">
                <span
                  className={`inline-flex min-w-[82px] justify-center rounded-full px-3 py-1 text-xs font-semibold ${
                    statusStyles[internship.status] || "bg-skywash text-ink-700"
                  }`}
                >
                  {internship.status}
                </span>
              </td>
              <td className="px-5 py-4">{formatDate(internship.created_at)}</td>
              <td className="px-5 py-4">
                {internship.link ? (
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-950/10 text-ink-700 transition hover:border-meadow-500 hover:text-meadow-600"
                    aria-label={`Open ${internship.company} internship link`}
                    title="Open internship link"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-ink-500">None</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
