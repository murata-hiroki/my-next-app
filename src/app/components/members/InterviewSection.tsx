// src/components/members/InterviewSection.tsx
import Image from "next/image";
import type { InterviewBlock } from "@/app/data/members";

function nl2br(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
}

export default function InterviewSection({
  block,
}: {
  block: Extract<InterviewBlock, { type: "qa" }>;
}) {
  const hasImg = !!block.imageSrc;

  return (
    <section
      className={[
        "grid gap-6",
        hasImg ? "md:grid-cols-2 md:items-start" : "grid-cols-1",
        block.reverse ? "md:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      {hasImg ? (
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
          <Image src={block.imageSrc!} alt="" fill className="object-cover" />
        </div>
      ) : null}

      <div>
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-500">
            Question <span className="ml-1">{String(block.qNo).padStart(2, "0")}</span>
          </p>
          <h2 className="text-xl font-bold">{block.question}</h2>
        </div>

        <p className="leading-7 text-gray-800">{nl2br(block.answer)}</p>
      </div>
    </section>
  );
}