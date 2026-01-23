"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";

// ページ内ナビゲーション
const navItems = [
  { id: "about", label: "JCとは？" },
  { id: "benefits", label: "入会メリット" },
  { id: "requirements", label: "入会要項" },
  { id: "flow", label: "入会の流れ" },
  { id: "faq", label: "よくある質問" },
];

// 入会メリット
const benefits = [
  {
    icon: TrendingUp,
    title: "圧倒的な自己成長",
    description:
      "プロジェクトリーダー、イベント企画、組織運営...。普段の仕事では経験できない「挑戦の場」があなたを待っています。ここで培ったスキルは、必ず本業でも活きてきます。",
    color: "bg-blue-500",
    image: "/join_1.jpeg",
  },
  {
    icon: Users,
    title: "一生モノの仲間",
    description:
      "経営者、会社員、士業、クリエイター...。普段なら出会えない多様なメンバーと本気で語り合い、汗を流す。その経験から生まれる絆は、一生の財産になります。",
    color: "bg-green-500",
    image: "/join_2.jpeg",
  },
  {
    icon: Heart,
    title: "「ありがとう」が聞けるまちづくり",
    description:
      "自分たちで企画したイベントで、子どもたちの笑顔が生まれる。地域の人から「ありがとう」と言われる。そんな体験が、あなたの人生に新しい意味を与えてくれます。",
    color: "bg-red-500",
    image: "/join_3.jpeg",
  },
  {
    icon: Sparkles,
    title: "40歳までの「特別な時間」",
    description:
      "JCは40歳で卒業。だからこそ、この期間は特別です。同世代の仲間と全力で駆け抜ける経験は、人生のかけがえのない1ページになります。",
    color: "bg-purple-500",
    image: "/join_4.jpeg",
  },
];

// 入会資格
const requirements = [
  { label: "年齢", value: "20歳以上40歳未満の方" },
  { label: "地域", value: "松原市内または近郊にお住まい、またはお勤めの方" },
  { label: "職業", value: "不問（会社員、経営者、自営業、士業など）" },
  { label: "経験", value: "不問（初めての方も歓迎）" },
];

// 入会の流れ
const steps = [
  {
    step: 1,
    title: "お問い合わせ",
    description: "お電話・メール・フォームからお気軽にご連絡ください",
  },
  {
    step: 2,
    title: "面談",
    description: "入会についてのご説明と面談を行います",
  },
  {
    step: 3,
    title: "入会手続き",
    description: "入会申込書の提出と入会金・年会費のお支払い",
  },
  {
    step: 4,
    title: "活動スタート",
    description: "委員会に配属され、いよいよ活動開始！",
  },
];

// よくある質問
const faqs = [
  {
    question: "仕事が忙しくても参加できますか？",
    answer:
      "はい、大丈夫です。メンバーの多くは仕事をしながら活動しています。例会は月1〜2回、委員会活動も調整可能です。",
  },
  {
    question: "会費はいくらですか？",
    answer:
      "入会金と年会費がかかります。詳細は説明会でご案内しますが、分割払いなども相談可能です。",
  },
  {
    question: "どんな人が参加していますか？",
    answer:
      "会社員、経営者、自営業、専門職など様々な職業の20〜30代が参加しています。",
  },
  {
    question: "家族がいても大丈夫ですか？",
    answer:
      "もちろんです！家族と一緒に参加できるイベントもあり、家族ぐるみの付き合いも生まれています。",
  },
];

export default function JoinPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <section className="relative">
        {/* ヒーロー画像 */}
        <div className="w-full">
          <Image
            src="/mv_join.png"
            alt="松原青年会議所メンバー"
            width={1920}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* ページ内ナビゲーション */}
        <nav className="bg-primary-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ul className="flex overflow-x-auto">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 md:px-6 py-4 text-sm md:text-base font-medium hover:bg-primary-700 transition-colors whitespace-nowrap flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>

      {/* JCとは */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              青年会議所（JC）とは？
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              青年会議所（JC）は、「明るい豊かな社会」の実現を理想とし、
              志を同じくする20歳から40歳までの青年が集う団体です。
              全国に約700の地域青年会議所があり、約3万人のメンバーが活動しています。
              <br />
              <br />
              松原青年会議所は1971年に設立され、50年以上にわたり
              地域の発展のために様々な活動を行ってきました。
            </p>
          </div>
        </div>
      </section>

      {/* 入会メリット */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              入会メリット
            </h2>
            <p className="text-gray-600 text-lg">
              20代・30代の「今」だからこそ得られる、かけがえのない経験がここにあります
            </p>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  {benefit.image ? (
                    <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-full lg:w-1/2 aspect-[4/3] rounded-2xl flex items-center justify-center ${benefit.color}`}>
                      <Icon size={120} className="text-white" />
                    </div>
                  )}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 入会要項 */}
      <section id="requirements" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* セクションタイトル */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-primary-600"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              入会要項
            </h2>
          </div>

          {/* 入会資格 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              入会資格
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>松原市内及びその周辺の地域に居住または勤務し、申込時の年令が満20才以上40才未満の方です。</li>
            </ul>
          </div>

          {/* 入会必要書類 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              入会必要書類
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>入会申込書 1通<br />
                <span className="text-sm text-gray-500 ml-5">※自署の上、捺印（シャチハタ除く）し戸籍上の氏名を記入</span>
              </li>
              <li>写真台帳 1通</li>
              <li>証明写真 2枚<br />
                <span className="text-sm text-gray-500 ml-5">※5cm×5cmで入会申込前3か月以内に撮影された写真</span>
              </li>
            </ul>
          </div>

          {/* 入会要件 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              入会要件
            </h3>
            <p className="text-gray-700">
              入会希望者は当会議所の定める会議・事業に参加し、所定の審査要件を満たすことにより、入会審査を受けることができます。
            </p>
          </div>

          {/* 入会費用 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              入会費用
            </h3>
            <table className="w-full border border-gray-300">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="bg-gray-100 px-4 py-3 text-left font-bold text-gray-900 w-1/3">入会金</th>
                  <td className="px-4 py-3 text-right text-gray-700">30,000円</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 px-4 py-3 text-left font-bold text-gray-900">年会費</th>
                  <td className="px-4 py-3 text-right text-gray-700">120,000円</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-2">※入会金については入会時のみ必要です。</p>
            <p className="text-sm text-gray-500">※年会費は月割りでのお支払いも可能です。詳しくはお問い合わせください。</p>
          </div>

        </div>
      </section>

      {/* 入会の流れ */}
      <section id="flow" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* セクションタイトル */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-primary-600"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              入会の流れ
            </h2>
          </div>

          {/* フローチャート */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index}>
                {/* ステップボックス */}
                <div className="bg-primary-600 text-white p-6 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="text-primary-100 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* 矢印 */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-primary-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-start gap-3 mb-3">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <div className="flex items-start gap-3 pl-11">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            まずはお気軽にご連絡ください
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            「話を聞いてみたい」「見学だけしたい」など、
            どんなことでもお気軽にお問い合わせください。
          </p>

          {/* 連絡先 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 flex items-center gap-3">
              <Phone className="text-white" size={24} />
              <div className="text-left">
                <p className="text-primary-100 text-xs">お電話でのお問い合わせ</p>
                <p className="text-white font-bold text-lg">072-333-0222</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 flex items-center gap-3">
              <Mail className="text-white" size={24} />
              <div className="text-left">
                <p className="text-primary-100 text-xs">メールでのお問い合わせ</p>
                <p className="text-white font-bold text-lg">mjc@mjc.ne.jp</p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Webからお問い合わせ
            <ChevronRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
