"use client";
import React, { useState } from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    category: "プレスリリース",
    year: "2025",
    title: "ブログタイトルがここに入ります",
    description: "このブログでは活動の情報をお届けします。",
    author: "山田太郎",
    date: "2025年1月1日",
    readTime: "5分で読める",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    category: "サービスニュース",
    year: "2024",
    title: "ブログタイトルがここに入ります",
    description: "私たちの活動についての詳細をお知らせします。",
    author: "佐藤花子",
    date: "2024年1月2日",
    readTime: "4分で読める",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    category: "お知らせ",
    year: "2023",
    title: "ブログタイトルがここに入ります",
    description: "最新のイベント情報をお届けします。",
    author: "鈴木一郎",
    date: "2023年1月3日",
    readTime: "3分で読める",
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    category: "受賞・認定",
    year: "2022",
    title: "ブログタイトルがここに入ります",
    description: "活動報告や今後もご報告していきます。",
    author: "田中次郎",
    date: "2022年1月4日",
    readTime: "6分で読める",
    image: "/placeholder.jpg",
  },
];

const categories = ["すべて", "活動記録", "お知らせ"];
const years = ["すべて", "2025", "2024", "2023", "2022"];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [selectedYear, setSelectedYear] = useState("すべて");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "すべて" || post.category === selectedCategory) &&
      (selectedYear === "すべて" || post.year === selectedYear)
  );

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">最新のブログ投稿</h2>
      <p className="text-gray-600 mb-8">私たちの活動やお知らせをお届けします</p>

      {/* フィルター */}
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-lg font-bold border ${
              selectedCategory === category
                ? "bg-[#48BDF8] text-white"
                : "border-[#48BDF8] text-black hover:bg-[#48BDF8] hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex space-x-4 mb-10">
        {years.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-md text-lg font-bold border ${
              selectedYear === year
                ? "bg-[#48BDF8] text-white"
                : "border-[#48BDF8] text-black hover:bg-[#48BDF8] hover:text-white"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* ブログ記事リスト */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">{post.category}</p>
              <h3 className="text-xl font-bold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <p>{post.author}</p>
                <span className="mx-2">•</span>
                <p>{post.date}</p>
                <span className="mx-2">•</span>
                <p>{post.readTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
