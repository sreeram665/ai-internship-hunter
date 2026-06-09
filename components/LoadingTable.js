export function LoadingTable() {
  return (
    <div className="space-y-3 p-5" aria-label="Loading internships">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="grid animate-pulse grid-cols-[1.2fr_1fr_0.8fr] gap-3 rounded-md border border-ink-950/10 p-4"
        >
          <span className="h-4 rounded bg-ink-950/10" />
          <span className="h-4 rounded bg-ink-950/10" />
          <span className="h-4 rounded bg-ink-950/10" />
        </div>
      ))}
    </div>
  );
}
