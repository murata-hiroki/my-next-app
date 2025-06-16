"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Linkコンポーネントをインポート

const blogPosts = [
  // ... (データは変更なし)
  {
    id: 1,
    category: "活動記録",
    year: "2025",
    title: "未来を担う子どもたちのための育成事業を開催しました",
    description:
      "地域の小学生を対象に、リーダーシップとチームワークを育むためのプログラムを実施し、多くの笑顔が生まれました。",
    author: "山田太郎",
    date: "2025年6月15日",
    readTime: "5分で読める",
    image: "/post_1.png", // 画像パスは具体的に
    href: "/blog/post-1", // 記事へのリンク
  },
  {
    id: 2,
    category: "お知らせ",
    year: "2025",
    title: "創立55周年記念式典のご案内",
    description:
      "松原青年会議所の創立55周年を記念し、記念式典を開催いたします。皆様のご参加を心よりお待ちしております。",
    author: "佐藤花子",
    date: "2025年5月20日",
    readTime: "4分で読める",
    image: "/post_2.png",
    href: "/blog/post-2",
  },
  {
    id: 3,
    category: "活動記録",
    year: "2024",
    title: "市民マラソン大会の運営協力を行いました",
    description:
      "地域の健康増進とコミュニティの活性化のため、ボランティアとして運営をサポートしました。",
    author: "鈴木一郎",
    date: "2024年11月10日",
    readTime: "3分で読める",
    image: "/post_3.png",
    href: "/blog/post-3",
  },
  {
    id: 4,
    category: "お知らせ",
    year: "2024",
    title: "新規会員の募集を開始しました",
    description:
      "私たちと一緒に松原市を盛り上げる新しい仲間を募集しています。詳細はリンク先をご覧ください。",
    author: "田中次郎",
    date: "2024年9月1日",
    readTime: "6分で読める",
    image: "/post_4.png",
    href: "/blog/post-4",
  },
];

const categories = [
  "すべて",
  "活動記録",
  "お知らせ",
  "プレスリリース",
  "受賞・認定",
];
const years = ["すべて", "2025", "2024", "2023"];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [selectedYear, setSelectedYear] = useState("すべて");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "すべて" || post.category === selectedCategory) &&
      (selectedYear === "すべて" || post.year === selectedYear)
  );

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 flex flex-col items-center">
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          活動ブログ
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
          私たちの活動やお知らせをお届けします
        </p>

        {/* フィルターエリア */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-16">
          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-primary-100 hover:border-primary-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* 年フィルター */}
          <div className="flex flex-wrap justify-center gap-2">
            {years.map((year) => (
              <button
                key={year}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors duration-200 ${
                  selectedYear === year
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-primary-100 hover:border-primary-100"
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ブログ記事リスト */}
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={post.href} passHref>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* 画像エリア */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* テキストエリア */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-primary-600 font-semibold">
                    {post.category}
                  </p>
                  <h3 className="text-lg font-bold mt-2 flex-grow">
                    {post.title}
                  </h3>
                  {/* <p className="text-gray-600 mt-2 text-sm">{post.description}</p> */}
                  <div className="mt-4 flex items-center text-xs text-gray-500 pt-4 border-t">
                    <p>{post.author}</p>
                    <span className="mx-2">•</span>
                    <p>{post.date}</p>
                    <span className="mx-2">•</span>
                    <p>{post.readTime}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
