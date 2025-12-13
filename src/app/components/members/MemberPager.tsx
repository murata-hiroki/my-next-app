import Link from "next/link";
import Image from "next/image";

type PagerItem = {
  href: string;
  label?: string;
  name: string;
  imageSrc?: string;
};

export default function MemberPager({
  prev,
  next,
  allHref,
}: {
  prev: PagerItem | null;
  next: PagerItem | null;
  allHref: string;
}) {
  return (
    <section className="pt-2">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <li className="md:col-span-1">
          {prev ? (
            <Link href={prev.href} className="block rounded-2xl border bg-white p-4">
              <div className="flex gap-4">
                <div className="relative h-16 w-24 overflow-hidden rounded-xl bg-gray-200">
                  {prev.imageSrc ? (
                    <Image src={prev.imageSrc} alt="" fill className="object-cover" />
                  ) : null}
                </div>
                <div>
                  <p className="text-sm text-gray-600">前の記事</p>
                  {prev.label ? <p className="text-sm font-semibold">{prev.label}</p> : null}
                  <p className="font-semibold">{prev.name}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="rounded-2xl border bg-white p-4 text-sm text-gray-500">
              前の記事はありません
            </div>
          )}
        </li>

        <li className="md:col-span-1 flex items-stretch">
          <Link
            href={allHref}
            className="flex w-full items-center justify-center rounded-2xl border bg-white px-4 py-6 font-semibold"
          >
            一覧へ戻る
          </Link>
        </li>

        <li className="md:col-span-1">
          {next ? (
            <Link href={next.href} className="block rounded-2xl border bg-white p-4">
              <div className="flex gap-4">
                <div className="relative h-16 w-24 overflow-hidden rounded-xl bg-gray-200">
                  {next.imageSrc ? (
                    <Image src={next.imageSrc} alt="" fill className="object-cover" />
                  ) : null}
                </div>
                <div>
                  <p className="text-sm text-gray-600">次の記事</p>
                  {next.label ? <p className="text-sm font-semibold">{next.label}</p> : null}
                  <p className="font-semibold">{next.name}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="rounded-2xl border bg-white p-4 text-sm text-gray-500">
              次の記事はありません
            </div>
          )}
        </li>
      </ul>
    </section>
  );
}