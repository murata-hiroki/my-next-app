import type { InterviewBlock } from "@/app/data/members";

export default function MemberScheduleSection({
  block,
}: {
  block: Extract<InterviewBlock, { type: "schedule" }>;
}) {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <h2 className="text-xl font-bold">{block.title}</h2>

      <ul className="mt-4 space-y-3">
        {block.items.map((it, idx) => (
          <li key={idx} className="flex gap-4">
            <div className="w-16 shrink-0 font-semibold text-gray-700">
              {it.time}
            </div>
            <div className="text-gray-800">{it.text}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}