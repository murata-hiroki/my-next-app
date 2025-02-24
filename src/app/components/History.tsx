"use client";
import React from "react";
import Image from "next/image";

const HistorySection = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center items-center">
      <div className="w-full max-w-7xl flex items-center">
        {/* 左側のコンテンツ */}
        <div className="w-1/2 pr-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            松原青年会議所の歴史と背景
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            松原青年会議所は、地域社会の発展を目指し、1965年に設立されました。
            以来、青少年育成や地域貢献活動を通じて、多くの人々に影響を与えてきました。
          </p>
          <ul className="list-none space-y-3 text-lg text-gray-700">
            <li>✔ 地域との連携を大切にしています。</li>
            <li>✔ 活動を通してメンバーの自己成長ができる環境を提供します。</li>
            <li>✔ 未来を見据えた取り組みを行っています。</li>
          </ul>
          <div className="flex space-x-6 mt-6">
            <button className="bg-black text-white px-10 py-2 rounded-md text-xl">
              詳細
            </button>
            <button className="border border-black text-black px-10 py-5 rounded-md text-xl">
              参加
            </button>
          </div>
        </div>
        {/* 右側の画像 */}
        <div className="w-1/2 flex justify-end">
          <div className="relative w-full h-[500px]">
            <Image
              src="/history-image.jpg"
              alt="歴史のイメージ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "right" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
