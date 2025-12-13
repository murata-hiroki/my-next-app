import Image from "next/image";
import type { InterviewBlock } from "@/app/data/members";

export default function MemberCardSection({
  block,
}: {
  block: Extract<InterviewBlock, { type: "card" }>;
}) {
  return (
    <section className="grid gap-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="text-xl font-bold">{block.title}</h2>
        <p className="mt-3 whitespace-pre-line leading-7 text-gray-800">
          {block.text}
        </p>
      </div>

      {block.imageSrc ? (
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
          <Image
            src={block.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      ) : null}
    </section>
  );
}