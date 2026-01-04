"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getLatestNews } from "../data/news";

const News = () => {
  const router = useRouter();
  const articles = getLatestNews(3);

  return (
    <section className="w-full flex flex-col items-center bg-white py-10 sm:py-16 md:py-20">
      <div className="w-full max-w-7xl px-4 sm:px-10">
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold text-left mb-4 sm:mb-6">
          新着情報
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12">
          青年会議所の活動やイベント情報をお知らせします
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col cursor-pointer"
              onClick={() => router.push(`/news/${article.id}`)}
            >
              <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-500">
                  {article.category}
                </p>
                <h3 className="text-lg sm:text-xl font-bold mt-1">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
                  {article.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  {article.author} ・ {article.date} ・ {article.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={() => router.push("/news")}
            className="border border-black text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg hover:bg-black hover:text-white transition-colors duration-200"
          >
            すべて見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
