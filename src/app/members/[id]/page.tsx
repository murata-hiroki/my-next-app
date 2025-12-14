import { notFound } from "next/navigation";
import { getMember, members } from "@/app/data/members";

import MemberHero from "@/app/components/members/MemberHero";
import MemberProfileSection from "@/app/components/members/MemberProfileSection";
import InterviewChat from "@/app/components/members/InterviewSection";
import MemberCardSection from "@/app/components/members/MemberCardSection";
import MemberMessageSection from "@/app/components/members/MemberMessageSection";
import MemberScheduleSection from "@/app/components/members/MemberScheduleSection";
import MemberPager from "@/app/components/members/MemberPager";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return members.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const m = getMember(id);
  if (!m) return { title: "Member not found" };
  return {
    title: `${m.name} | Members`,
    description: m.headline,
  };
}

export default async function MemberDetailPage({ params }: Props) {
  const { id } = await params;
  const m = getMember(id);
  if (!m) notFound();

  // Q&Aだけ抽出（チャット表示用）
  const qaBlocks = m.blocks.filter(
    (b) => b.type === "qa"
  ) as Extract<(typeof m.blocks)[number], { type: "qa" }>[];

  // Q&A以外（従来セクション表示用）
  const otherBlocks = m.blocks.filter((b) => b.type !== "qa");

  return (
    <div id="main-contents">
      {/* MV */}
      <MemberHero member={m} />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <main>
          <article className="space-y-12">
            {/* Profile */}
            <MemberProfileSection text={m.profileText} />

            {/* Interview (Chat UI) */}
            {qaBlocks.length ? (
              <InterviewChat
                blocks={qaBlocks}
                interviewerName="インタビュアー"
                memberName={m.name}
              />
            ) : null}

            {/* Other blocks */}
            {otherBlocks.map((b, i) => {
              switch (b.type) {
                case "card":
                  return <MemberCardSection key={i} block={b} />;
                case "message":
                  return <MemberMessageSection key={i} block={b} />;
                case "schedule":
                  return <MemberScheduleSection key={i} block={b} />;
                default:
                  return null;
              }
            })}

            {/* Pager（一覧へ戻るだけ） */}
            <MemberPager allHref="/members" />

            {/* Recommend */}
            {m.recommend?.length ? (
              <section className="pt-4">
                <header className="mb-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Recommend
                  </p>
                  <h2 className="text-2xl font-bold">おすすめコンテンツ</h2>
                </header>

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {m.recommend.map((r) => (
                    <li key={r.href} className="rounded-2xl border bg-white p-4">
                      <a href={r.href} className="font-semibold underline">
                        {r.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>
        </main>
      </div>
    </div>
  );
}