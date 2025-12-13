import type { InterviewBlock } from "@/app/data/members";

export default function MemberMessageSection({
  block,
}: {
  block: Extract<InterviewBlock, { type: "message" }>;
}) {
  return (
    <section
      id="message"
      className="relative overflow-hidden rounded-2xl border border-white/15"
      aria-label={block.title}
    >
      {/* 背景（CSSのみ・全員共通） */}
      <div className="absolute inset-0">
        {/* ベース：指定色 */}
        <div className="absolute inset-0" style={{ backgroundColor: "#0097D7" }} />

        {/* 品よく・読みやすくする暗幕（重要） */}
        <div className="absolute inset-0 bg-[#041226]/60" />

        {/* さりげないハイライト（上品に） */}
        <div
          className="absolute -top-28 -left-28 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55), rgba(255,255,255,0) 60%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[640px] w-[640px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 45% 45%, rgba(0,151,215,0.9), rgba(0,151,215,0) 62%)",
          }}
        />

        {/* 斜線の質感（薄め） */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0 1px, rgba(255,255,255,0) 1px 16px)",
          }}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.22em] text-white/80">
          MESSAGE
        </p>

        <h2 className="mt-2 text-xl font-bold text-white md:text-2xl">
          {block.title}
        </h2>

        <div className="mt-4 h-px w-16 bg-white/70" />

        <p className="mt-5 whitespace-pre-line leading-7 text-white/90">
          {block.text}
        </p>
      </div>
    </section>
  );
}
