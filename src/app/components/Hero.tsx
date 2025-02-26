"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center bg-white mt-4">
      <div className="max-w-7xl w-full border rounded-3xl shadow-md border-black  flex items-stretch min-h-[75vh]">
        {/* 左側のコンテンツ */}
        <div className="w-1/2 flex flex-col justify-center m-12">
          <h1 className="text-5xl font-bold mb-8">地域を変える未来を変える</h1>
          <p className="text-gray-700 mb-10 text-1xl leading-relaxed">
            松原青年会議所は松原の発展に貢献するため、様々な活動を行っています。
            青年を力を集結し、明るい豊かな社会を実現します。
          </p>
          <div className="flex space-x-8">
            <button className="bg-black text-white px-10 py-2 rounded-md text-xl">
              詳細
            </button>
            <button className="border border-black text-black px-10 py-5 rounded-md text-xl">
              参加
            </button>
          </div>
        </div>

        {/* 右側の画像 */}
        <div className="w-1/2 relative flex justify-center items-center">
          <div className="rounded-lg overflow-hidden w-full h-full">
            <Image
              src="/hero.jpg"
              alt="地域の風景"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
