"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const News = () => {
  const router = useRouter();

  const articles = [
    {
      id: 1,
      image: "/about-image1.jpg",
      alt: "地域イベント参加者募集中",
      category: "お知らせ",
      title: "地域イベント参加者募集中！",
      description: "地域の皆様と共に楽しむイベントを開催します。",
      author: "青木陽平",
      date: "11月 2023",
      readTime: "3分で読める",
    },
    {
      id: 2,
      image: "/about-image1.jpg",
      alt: "新しいメンバーを募集中",
      category: "お知らせ",
      title: "新しいメンバーを募集中！",
      description: "共に地域を盛り上げる仲間を探しています。",
      author: "佐藤健",
      date: "10月 2023",
      readTime: "4分で読める",
    },
    {
      id: 3,
      image: "/about-image1.jpg",
      alt: "地域貢献活動のご案内",
      category: "イベント",
      title: "地域貢献活動のご案内",
      description: "地域のための活動に参加しませんか？",
      author: "田中美咲",
      date: "9月 2023",
      readTime: "6分で読める",
    },
  ];

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl font-bold text-left w-full max-w-7xl mb-6">
        新着情報
      </h2>
      <p className="text-lg text-gray-600 w-full max-w-7xl mb-12">
        青年会議所の活動やイベント情報をお知らせします
      </p>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col cursor-pointer"
            onClick={() => router.push(`/news/${article.id}`)}
          >
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.alt}
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{article.category}</p>
              <h3 className="text-xl font-bold mt-1">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <p className="text-sm text-gray-500 mt-4">
                {article.author} ・ {article.date} ・ {article.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl w-full flex justify-end mt-12">
        <button className="border border-black text-black px-6 py-3 rounded-md text-lg">
          すべて見る
        </button>
      </div>
    </section>
  );
};

export default News;
