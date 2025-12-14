import type { InterviewBlock } from "@/app/data/members";

function nl2br(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export default function InterviewChat({
  blocks,
  interviewerName = "インタビュアー",
  memberName = "メンバー",
}: {
  blocks: Extract<InterviewBlock, { type: "qa" }>[];
  interviewerName?: string;
  memberName?: string;
}) {
  return (
    <section className="rounded-2xl border bg-slate-50 p-4 md:p-6">
      <div className="space-y-6">
        {blocks.map((b) => (
          <div key={b.qNo} className="space-y-3">
            {/* 質問（左） */}
            <div className="flex items-start gap-2">
              {/* アイコン：しっぽ位置に合わせて少し下げる */}
              <div
                className="mt-6 h-8 w-8 shrink-0 rounded-full bg-slate-300"
                aria-hidden="true"
              />

              <div className="max-w-[92%] sm:max-w-[80%] lg:max-w-[68%]">
                <div className="mb-1 text-xs text-slate-500">
                  {interviewerName} ・Q{String(b.qNo).padStart(2, "0")}
                </div>

                <div className="relative rounded-2xl bg-white px-4 py-3 text-slate-900 shadow-sm">
                  {/* 吹き出しの“しっぽ”：中央基準でズレにくくする */}
                  <span
                    className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-white"
                    aria-hidden="true"
                  />
                  <p className="leading-7">{b.question}</p>
                </div>
              </div>
            </div>

            {/* 回答（右） */}
            <div className="flex items-start justify-end gap-2">
              <div className="max-w-[92%] sm:max-w-[82%] lg:max-w-[72%]">
                <div className="mb-1 text-right text-xs text-slate-500">
                  {memberName}
                </div>

                <div className="relative ml-auto rounded-2xl bg-[#0097D7] px-4 py-3 text-white shadow-sm">
                  {/* しっぽ：中央基準 */}
                  <span
                    className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#0097D7]"
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-left">{nl2br(b.answer)}</p>
                </div>
              </div>

              {/* アイコン：しっぽ位置に合わせて少し下げる */}
              <div
                className="mt-6 h-8 w-8 shrink-0 rounded-full bg-[#0097D7]/30"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}