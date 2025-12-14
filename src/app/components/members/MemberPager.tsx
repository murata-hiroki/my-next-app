import Link from "next/link";

export default function MemberPager({ allHref }: { allHref: string }) {
  return (
    <section className="pt-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href={allHref}
          className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 font-semibold"
        >
          一覧へ戻る
        </Link>
      </div>
    </section>
  );
}