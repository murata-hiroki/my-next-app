"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChairmanMessage = () => {
  return (
    <section className="w-full pt-16 sm:pt-24 pb-20 sm:pb-32 bg-white flex justify-center items-center overflow-visible">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center px-4 sm:px-8">
        {/* モバイル・タブレット時: タイトル→写真→文章 */}
        <div className="w-full md:hidden flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            理事長紹介
          </h2>
          <div
            className="relative mb-6 rounded-lg overflow-hidden" // 角丸対応済み
            style={{ aspectRatio: "3 / 2", width: "90vw", maxWidth: "28rem" }} // アスペクト比対応済み
          >
            <Image
              src="/hukayama.jpg"
              alt="理事長 深山大地"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 448px"
              priority
            />
          </div>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed text-left">
            松原青年会議所 第56代理事長 深山大地です。
            <br className="hidden md:block" />
            今年度のスローガンは「REスタート ～「あれ」がわかる組織へ～」です。
            <br className="hidden md:block" />
            「楽しむ気持ち」が導く挑戦の熱量と、「コミュニケーション」がもたらす意識の統一を原動力として、明るい豊かな社会の実現に向けて邁進してまいります。
          </p>
          <div className="mt-2">
            <Link href="/greeting" passHref>
              <button className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-bold">
                理事長所信を読む
              </button>
            </Link>
          </div>
        </div>

        {/* PC時: タイトル・文章→写真（横並び） */}
        {/* PC表示は元々 text-left なので変更なし */}
        <div className="hidden md:flex w-full flex-row items-center">
          <div className="w-1/2 flex flex-col justify-center pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
              理事長紹介
            </h2>
            <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed text-left">
              松原青年会議所 第56代理事長 深山大地です。
              <br />
              今年度のスローガンは「REスタート ～「あれ」がわかる組織へ～」です。
              <br />
              「楽しむ気持ち」が導く挑戦の熱量と、「コミュニケーション」がもたらす意識の統一を原動力として、明るい豊かな社会の実現に向けて邁進してまいります。
            </p>
            <div className="mt-2">
              <Link href="/greeting" passHref>
                <button className="bg-primary-600 text-white px-8 py-4 rounded-md text-lg md:text-xl font-bold">
                  理事長所信を読む
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div
              className="relative rounded-lg overflow-hidden" // 角丸対応済み
              style={{ aspectRatio: "3 / 2", width: "32rem", maxWidth: "100%" }} // アスペクト比対応済み
            >
              <Image
                src="/hukayama.jpg"
                alt="理事長 深山大地"
                fill
                className="object-contain"
                sizes="512px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
