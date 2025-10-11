"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16 px-4 sm:px-8">
        {/* === 左側：テキストエリア === */}
        {/* モバイルでは画像の上に表示されるように順序を指定 */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            松原青年会議所の歴史と背景
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            松原青年会議所は、地域社会の発展を目指し、1965年に設立されました。
            以来、青少年育成や地域貢献活動を通じて、多くの人々に影響を与えてきました。
          </p>
          <ul className="list-inside list-disc space-y-2 text-base sm:text-lg text-gray-700 marker:text-primary-500 mb-8">
            <li>地域との連携を大切にしています。</li>
            <li>活動を通してメンバーの自己成長ができる環境を提供します。</li>
            <li>未来を見据えた取り組みを行っています。</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-primary-700 transition-colors shadow-sm w-full">
              詳細はこちら
            </button>
            <button className="border border-gray-400 text-gray-800 px-8 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors">
              参加する
            </button>
          </div>
        </div>

        {/* === 右側：画像エリア === */}
        {/* モバイルではテキストエリアより先に表示 */}
        <div className="order-1 md:order-2 w-full">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/history-image.jpg"
              alt="歴史のイメージ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center" }} // 中央や右など、画像に合わせて調整
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
