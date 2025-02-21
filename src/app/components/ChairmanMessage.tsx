"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ChairmanSection = () => {
  return (
    <section className="w-full py-24 bg-gray-100 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        {/* タイトルと余白調整 */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 mt-10 leading-normal">
          代表ご挨拶
        </h2>

        {/* 代表ご挨拶のカード */}
        <Link href="/chairman-message" passHref>
          <div className="relative group w-[700px] h-[350px] mx-auto cursor-pointer rounded-xl overflow-hidden shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-white mb-10">
            {/* 背景カード */}
            <div className="absolute inset-0 bg-white bg-opacity-95 rounded-xl border border-gray-200"></div>

            {/* 画像 */}
            <Image
              src="/chairman_thamnail.png"
              alt="理事長の挨拶"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />

            {/* クリック時のオーバーレイ */}
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-semibold">
                詳しく見る
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ChairmanSection;
