"use client";

import React from "react";

const News = () => {
  const news = [
    {
      title: "地域清掃活動を実施しました！",
      date: "2025-02-15",
      summary: "松原市で清掃活動を行い、多くの地域住民が参加しました。",
      image: "/aoki.jpg",
      link: "/news/1",
    },
    {
      title: "次回のボランティア説明会のお知らせ",
      date: "2025-02-20",
      summary: "新規メンバー向けの説明会を開催します。ぜひご参加ください！",
      image: "/aoki.jpg",
      link: "/news/2",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-widest">
            News
          </h2>
          <p className="text-gray-600 text-sl">新着情報</p>
          <div className="w-16 h-1 bg-[#009FE3] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-1/3 rounded-l-lg object-cover"
              />
              <div className="p-4 w-2/3">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-gray-700 text-sm mt-2">{item.summary}</p>
                <p className="text-blue-600 text-sm font-semibold mt-2">
                  続きを読む →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* 2個以上記事がある場合にボタンを表示 */}
        {news.length > 1 && (
          <div className="mt-8 text-center">
            <a
              href="/news"
              className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              そのほかの記事を見る →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
