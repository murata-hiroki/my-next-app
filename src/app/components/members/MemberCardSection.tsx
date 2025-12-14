import type { InterviewBlock } from "@/app/data/members";

function toBullets(text: string) {
  // 文章を「。」でざっくり分割して箇条書きっぽく（雑でも効く）
  // きれいにしたいなら data を bullets: string[] にするのが理想
  const parts = text
    .split("。")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => (s.endsWith("。") ? s : s + "。"));
  return parts.length >= 2 ? parts : null;
}

export default function MemberCardSection({
  block,
}: {
  block: Extract<InterviewBlock, { type: "card" }>;
}) {
  const bullets = toBullets(block.text);

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-white/15"
      aria-label={block.title}
    >
      {/* 背景（TOPICは少し明るめ＝主役） */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundColor: "#0097D7" }} />
        {/* MESSAGEより暗幕を薄くして明るく見せる */}
        <div className="absolute inset-0 bg-[#041226]/45" />

        {/* 斜線：角度/密度でMESSAGEと差別化 */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.24) 0 1px, rgba(255,255,255,0) 1px 18px)",
          }}
        />

        {/* ほんの少しハイライト */}
        <div
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.60), rgba(255,255,255,0) 60%)",
          }}
        />
      </div>

      {/* 左の縦帯（主役感） */}
      <div className="absolute inset-y-0 left-0 w-1 bg-white/60" />

      {/* 内容 */}
      <div className="relative px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-wrap items-baseline gap-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/85">
            TOPIC
          </p>
          <p className="text-xs text-white/75">目標</p>
        </div>

        <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          {block.title}
        </h2>

        {/* 主役は下線を少し強めに */}
        <div className="mt-4 h-[2px] w-20 bg-white/75" />

        {/* 本文：箇条書きにできれば箇条書きで */}
        {bullets ? (
          <ul className="mt-6 space-y-2 text-white/95">
            {bullets.map((t, idx) => (
              <li key={idx} className="flex gap-3 leading-7">
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 whitespace-pre-line leading-7 text-white/90">
            {block.text}
          </p>
        )}
      </div>
    </section>
  );
}