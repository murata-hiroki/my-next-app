import { notFound } from "next/navigation";
import { getMember, members } from "@/app/data/members";

import MemberHero from "@/app/components/members/MemberHero";
import MemberProfileSection from "@/app/components/members/MemberProfileSection";
import InterviewSection from "@/app/components/members/InterviewSection";
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

  const index = members.findIndex((x) => x.id === m.id);
  const prev = index > 0 ? members[index - 1] : null;
  const next = index < members.length - 1 ? members[index + 1] : null;

  return (
    <div id="main-contents">
      {/* MV */}
      <MemberHero member={m} />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <main>
          <article className="space-y-12">
            {/* Profile */}
            <MemberProfileSection text={m.profileText} />

            {/* Interview blocks */}
            {m.blocks.map((b, i) => {
              switch (b.type) {
                case "qa":
                  return <InterviewSection key={i} block={b} />;
                case "card":
                  return <MemberCardSection key={i} block={b} />;
                case "message":
                  return <MemberMessageSection key={i} block={b} />;
                case "schedule":
                  return <MemberScheduleSection key={i} block={b} />;
              }
            })}

            {/* Pager */}
            <MemberPager
              prev={
                prev
                  ? {
                      href: `/members/${prev.id}`,
                      label: prev.label,
                      name: prev.name,
                      imageSrc: prev.mvImageSrc,
                    }
                  : null
              }
              next={
                next
                  ? {
                      href: `/members/${next.id}`,
                      label: next.label,
                      name: next.name,
                      imageSrc: next.mvImageSrc,
                    }
                  : null
              }
              allHref="/members"
            />

            {/* Recommend */}
            {m.recommend?.length ? (
              <section className="pt-4">
                <header className="mb-4">
                  <p className="text-sm font-semibold text-gray-500">Recommend</p>
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