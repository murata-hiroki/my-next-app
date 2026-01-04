"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData, newsCategories, newsYears } from "../data/news";

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [selectedYear, setSelectedYear] = useState("すべて");

  const filteredNews = newsData.filter(
    (news) =>
      (selectedCategory === "すべて" || news.category === selectedCategory) &&
      (selectedYear === "すべて" || news.year === selectedYear)
  );

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 flex flex-col items-center min-h-screen">
      <div className="text-center px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          新着情報
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
          青年会議所の活動やイベント情報をお知らせします
        </p>

        {/* フィルターエリア */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-16">
          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap justify-center gap-2">
            {newsCategories.map((category) => (
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
            {newsYears.map((year) => (
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

      {/* 新着情報リスト */}
      <div className="w-full max-w-7xl px-4 md:px-8">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} passHref>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
                  {/* 画像エリア */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* テキストエリア */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-primary-600 font-semibold">
                      {news.category}
                    </p>
                    <h3 className="text-lg font-bold mt-2 flex-grow">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                      {news.description}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500 pt-4 border-t">
                      <p>{news.author}</p>
                      <span className="mx-2">•</span>
                      <p>{news.date}</p>
                      <span className="mx-2">•</span>
                      <p>{news.readTime}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              該当する新着情報がありません
            </p>
          </div>
        )}
      </div>

      {/* トップに戻るリンク */}
      <div className="mt-12">
        <Link
          href="/"
          className="border border-black text-black px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white transition-colors duration-200"
        >
          トップページに戻る
        </Link>
      </div>
    </section>
  );
};

export default NewsPage;
