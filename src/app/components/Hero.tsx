"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center bg-white md:mt-4 md:py-8 lg:py-12">
      {/* 親コンテナ: モバイルではボーダーと角丸なし、lg以上で適用 */}
      <div className="max-w-7xl w-full shadow-md flex flex-col lg:flex-row items-stretch min-h-[75vh] lg:border lg:rounded-3xl lg:border-black lg:overflow-hidden">
        {/* 左側のコンテンツ (モバイルでは下に表示) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-12 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            地域を変える未来を変える
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            松原青年会議所は松原の発展に貢献するため、様々な活動を行っています。
            青年を力を集結し、明るい豊かな社会を実現します。
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-black text-white px-8 py-3 rounded-md text-lg sm:text-xl w-full sm:w-auto hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              詳細
            </button>
            <button className="border border-black text-black px-8 py-3 rounded-md text-lg sm:text-xl w-full sm:w-auto hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              参加
            </button>
          </div>
        </div>

        {/* 右側の画像 (モバイルでは上に表示) */}
        <div
          className="
            w-full lg:w-1/2 relative order-1 lg:order-2
            lg:min-h-0
            aspect-video
            lg:aspect-auto
          "
        >
          <Image
            src="/hero.jpg" // publicフォルダに画像ファイルを配置してください
            alt="地域の風景"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
