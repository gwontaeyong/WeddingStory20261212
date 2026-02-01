export function Timeline({
  items,
}: {
  items: { time: string; title: string; desc?: string }[];
}) {
  return (
    <ol className="space-y-3">
      {items.map((it, idx) => (
        <li
          key={idx}
          className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100"
        >
          <div className="text-xs font-medium text-neutral-500">{it.time}</div>
          <div className="mt-1 text-[15px] font-semibold">{it.title}</div>
          {it.desc ? <div className="mt-1 text-sm text-neutral-600">{it.desc}</div> : null}
        </li>
      ))}
    </ol>
  );
}
