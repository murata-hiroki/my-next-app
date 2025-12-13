import Image from "next/image";
import type { MemberDetail } from "@/app/data/members";

const aspectClassByPreset: Record<
  NonNullable<MemberDetail["mvAspect"]>,
  string
> = {
  landscape: "aspect-[16/10]", // 横長（標準）
  portrait: "aspect-[3/4]", // 縦長（人物向け）
  square: "aspect-square",
};

export default function MemberHero({ member }: { member: MemberDetail }) {
  const aspectClass = aspectClassByPreset[member.mvAspect ?? "landscape"];

  return (
    <section className="border-b bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-5 md:items-center">
        {/* 左：テキスト（2/5） */}
        <div className="md:col-span-3 lg:col-span-3">
          <div className="mb-4">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              People
            </p>
            <p className="text-2xl font-bold">メンバー紹介</p>
          </div>

          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            {member.headline}
          </h1>

          <p className="mt-5 inline-flex rounded-full bg-gray-900 px-3 py-1 text-sm text-white">
            {member.label}
          </p>

          <div className="mt-7 space-y-1">
            <p className="text-lg font-semibold">{member.name}</p>
            {member.joinYear ? (
              <p className="text-sm text-gray-600">{member.joinYear}</p>
            ) : null}

            {member.teamLines?.length ? (
              <div className="text-sm text-gray-700">
                {member.teamLines.map((t) => (
                  <div key={t}>{t}</div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* 右：画像（2/5）※大きすぎないように max幅制限 */}
        <div className="md:col-span-2">
          <div className="md:ml-auto md:max-w-[520px]">
            <div
              className={`relative ${aspectClass} overflow-hidden rounded-2xl bg-gray-200`}
            >
              {member.mvImageSrc ? (
                <Image
                  src={member.mvImageSrc}
                  alt={member.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                  style={{
                    objectPosition: member.mvObjectPosition ?? "50% 18%",
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}