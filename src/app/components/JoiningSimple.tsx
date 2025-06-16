"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const JoiningStrip = () => {
  return (
    <section className="w-full bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* 左側：テキストコンテンツに flex-1 を追加 */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-1.4rem md:text-3xl font-bold text-white">
              松原の未来を共に創りませんか？
            </h2>
            <p className="text-base md:text-lg text-white mt-2">
              熱意あるあなたの参加をお待ちしています。
            </p>
          </div>

          {/* 右側：ボタン */}
          <div className="flex-shrink-0">
            <Link href="/join" passHref>
              <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300 shadow-lg transform hover:scale-105">
                <span>入会案内へ</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoiningStrip;
