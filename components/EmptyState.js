import { Inbox } from "lucide-react";

export function EmptyState() {
  return (
    <div className="grid min-h-[360px] place-items-center px-5 py-10 text-center">
      <div>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-md bg-skywash text-ink-700">
          <Inbox size={22} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-ink-950">No internships yet</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-ink-700">
          Add your first opportunity and it will appear in this dashboard.
        </p>
      </div>
    </div>
  );
}
