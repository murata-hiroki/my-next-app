"use client";

import React from "react";

const Sponsors = () => {
  const sponsors = [
    "/znkh_logo.png",
    "/miyama_logo.png",
    "/tekunikal-plus_logo.png",
    "/kishi_logo.jpg",
    "/ns_logo.jpg",
    "/taiho_logo.png",
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-left sm:text-center text-gray-900 mb-8 sm:mb-12">
          様々な企業様よりご支援いただいております。
        </h2>
        {/* スクロールコンテナ */}
        <div className="relative overflow-x-auto">
          {/* スクロール用のトラック */}
          <div className="flex whitespace-nowrap">
            {/* 3セット分のロゴを用意してよりスムーズなループを実現 */}
            <div className="flex animate-marquee">
              {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`sponsor-${index}`}
                  className="flex-shrink-0 w-40 sm:w-56 md:w-64 mx-4 sm:mx-8"
                >
                  <img
                    src={sponsor}
                    alt={`スポンサー ${index + 1}`}
                    className="h-20 sm:h-28 md:h-32 w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
