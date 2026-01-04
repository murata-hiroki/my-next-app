"use client";

import Link from "next/link";

const activities = [
  {
    title: "地域健康教室の運営補助",
    detail:
      "食育や生活習慣病予防講座で受付・会場準備・参加者サポートを行います。",
  },
  {
    title: "相談窓口の資料作成",
    detail:
      "専門スタッフの指示のもと、パンフレットやオンライン資料を整備します。",
  },
  {
    title: "イベント記録と広報",
    detail:
      "活動の様子を撮影し、レポート制作やSNS投稿の下書きを担当します。",
  },
  {
    title: "子ども向けワークショップ",
    detail:
      "アニメ調ツールを使い、楽しく学べるレクチャーの補助を行います。",
  },
];

const conditions = [
  { label: "活動頻度", value: "月2回以上（1回あたり2〜3時間）" },
  { label: "活動エリア", value: "大阪府松原市および近郊の公共施設" },
  { label: "対象", value: "18歳以上。職業・経験は問いません" },
  { label: "必要スキル", value: "基本的なPC操作ができれば可" },
  { label: "初心者", value: "歓迎。導入研修とメンター制度あり" },
  { label: "サポート", value: "交通費一部支給、ボランティア保険加入" },
];

const costs = [
  { label: "年会費", value: "3,000円（事務運営費として）" },
  { label: "交通費", value: "1回あたり上限1,000円まで支給" },
  { label: "保険", value: "当法人負担でボランティア保険に加入" },
  { label: "その他", value: "ユニフォーム貸与。追加費用はありません" },
];

const steps = [
  {
    step: "STEP 1",
    title: "相談・説明会予約",
    description:
      "フォームまたはお電話でご予約ください。オンライン説明も対応します。",
  },
  {
    step: "STEP 2",
    title: "個別ヒアリング",
    description:
      "希望する活動分野や参加可能日をお伺いし、不安や疑問を解消します。",
  },
  {
    step: "STEP 3",
    title: "入会手続き",
    description:
      "会費のお支払いと必要書類の提出を行います。事務局が丁寧にサポートします。",
  },
  {
    step: "STEP 4",
    title: "導入研修 → 活動開始",
    description:
      "安全研修・現場同行を経て、担当チームに合流します。初日はスタッフが同行。",
  },
];

const faqs = [
  {
    question: "平日しか参加できません。大丈夫ですか？",
    answer:
      "はい。平日昼間の活動が中心ですが、月数回の夜間・土曜プログラムもございます。ご都合に合わせて調整します。",
  },
  {
    question: "専門資格がなくても参加できますか？",
    answer:
      "医療・福祉の専門資格がなくても大丈夫です。専門領域が必要な場面はスタッフが担当しますのでご安心ください。",
  },
  {
    question: "仕事や子育てと両立できますか？",
    answer:
      "1回あたり2〜3時間、月2回から参加できます。予定は1か月前に共有し、急な変更にも柔軟に対応します。",
  },
  {
    question: "オンラインでの活動はありますか？",
    answer:
      "資料作成・広報・事務作業の一部はオンラインで参加できます。説明会もオンライン対応可能です。",
  },
  {
    question: "家族や友人と一緒に参加できますか？",
    answer:
      "はい。同時にお申し込みいただければ、同じチームに配属することも可能です。年齢条件のみご確認ください。",
  },
  {
    question: "長期的に続けられるか不安です。",
    answer:
      "無理なく続けられるよう、3か月ごとに面談を実施し、役割を調整します。短期参加やお試し参加も歓迎です。",
  },
];

const OutlineIllustration = () => (
  <svg
    viewBox="0 0 320 220"
    role="img"
    aria-label="やさしいアニメ調のイラスト"
    className="h-48 w-full max-w-md text-primary-300"
  >
    <rect
      x="10"
      y="30"
      width="300"
      height="160"
      rx="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeDasharray="8 6"
    />
    <circle cx="90" cy="110" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="200" cy="110" r="36" fill="none" stroke="currentColor" strokeWidth="2" />
    <path
      d="M70 150 Q90 170 110 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M170 150 Q200 175 230 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="140"
      y="60"
      width="40"
      height="20"
      rx="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="60"
      y="60"
      width="50"
      height="20"
      rx="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="210"
      y="60"
      width="50"
      height="20"
      rx="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default function VolunteerPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:w-3/5">
            <p className="text-sm font-semibold text-primary-600 tracking-[0.3em] uppercase">
              Volunteer Recruitment
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
              一般社団法人〇〇協議会
              <br />
              ボランティア会員募集
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              私たちは、地域の健康支援と暮らしの相談を行う非営利団体です。
              初めての方でも安心して参加できるよう、丁寧な研修と伴走体制を整えています。
              「まずは話を聞きたい」「一度見学したい」という方も歓迎です。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                説明会・相談を申し込む
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-primary-600 px-6 py-3 text-sm font-semibold text-primary-600"
              >
                入会申込フォームへ
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <OutlineIllustration />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">団体概要</h2>
            <p className="text-base leading-relaxed text-gray-700">
              一般社団法人〇〇協議会は、行政・医療機関・市民団体と連携し、
              生活支援や健康づくりを推進しています。年間100件以上の相談対応と、
              住民参加型の講座・イベントを展開しています。
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-primary-600">•</span>
                地域ケアの情報共有と相談支援
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600">•</span>
                健康づくり教室・子ども向けワークショップの実施
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600">•</span>
                災害時の生活サポートネットワーク整備
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">ボランティア会員でできること</h3>
            <p className="mt-2 text-sm text-gray-600">
              活動例を一部ご紹介します。得意分野やライフスタイルに合わせて調整可能です。
            </p>
            <ul className="mt-6 space-y-4">
              {activities.map((activity) => (
                <li key={activity.title} className="border-b border-dashed border-gray-200 pb-4 last:border-b-0">
                  <p className="text-sm font-semibold text-primary-700">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">参加条件</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {conditions.map((item) => (
              <div key={item.label} className="space-y-1 border-l-2 border-primary-200 pl-4">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-600">{item.label}</p>
                <p className="text-base text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">費用について</h2>
            <p className="mt-3 text-gray-600">
              ボランティア活動に必要な費用は、できる限り法人が負担します。
              不明点は申込時にご案内いたします。
            </p>
            <dl className="mt-8 space-y-4">
              {costs.map((cost) => (
                <div key={cost.label} className="flex flex-col border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-sm font-semibold text-gray-700">{cost.label}</dt>
                  <dd className="text-base text-gray-900">{cost.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">入会までの流れ</h3>
            <ol className="mt-6 space-y-5">
              {steps.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                    {step.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">よくある質問</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <p className="text-base font-semibold text-primary-700">{faq.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Contact &amp; Entry
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">申込・お問い合わせ</h2>
            <p className="text-gray-700">
              少しでも興味をお持ちいただけたら、まずはお気軽にご相談ください。
              オンライン・対面どちらも対応しております。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                説明会を予約する
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-primary-600 px-6 py-3 text-sm font-semibold text-primary-600"
              >
                そのまま入会申込
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <p>電話：072-000-0000（平日10:00〜17:00）</p>
              <p>メール：info@example.or.jp</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary-200 bg-primary-50 p-6 text-center text-sm text-gray-600">
            <p className="font-semibold text-primary-700">アニメ調イラスト差し替え枠</p>
            <p>公式キャラクターや活動写真を掲載予定です。</p>
            <OutlineIllustration />
          </div>
        </div>
      </section>
    </div>
  );
}
