"use client";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="w-full py-10 sm:py-14 md:py-20 bg-white flex flex-col items-center px-4 sm:px-8">
      {/* セクションタイトル */}
      <h2 className="text-xl sm:text-xl sm:text-left md:text-3xl font-bold text-center mb-8 sm:mb-12 leading-relaxed">
        松原青年会議所の活動を通じて成長の機会
        <br className="hidden md:block" />
        {/* モバイルでは非表示、md以上の画面で表示 */}
        地域の貢献の機会を提供します。
      </h2>

      {/* 活動内容の3つのカード */}
      {/* モバイルでは1列、タブレット以上で3列にするために、md:grid-cols-3 を使用。
          gapはモバイルでも適度な間隔を持たせるため、grid-cols-1でも適用される */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10">
        {/* 活動1 */}
        <div className="flex flex-col items-center text-center w-full">
          {/* 画像のサイズをモバイルでも適切に表示するために、w-48 h-48 など固定値を推奨 */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-400 overflow-hidden flex items-center justify-center">
            <Image
              src="/about_03.png"
              alt="青少年育成"
              width={224} // オリジナルの画像サイズに基づいて設定
              height={224} // オリジナルの画像サイズに基づいて設定
              className="object-cover w-full h-full"
            />
          </div>
          {/* テキストの最大幅を調整し、モバイルでの見栄えを良くする */}
          <p className="mt-6 text-base sm:text-lg md:text-xl font-bold max-w-xs leading-relaxed text-left">
            青少年育成を対象とした様々な事業を立案実行しています。
          </p>
        </div>

        {/* 活動2 */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-400 overflow-hidden flex items-center justify-center">
            <Image
              src="/about_04.png"
              alt="地域貢献"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-bold max-w-xs leading-relaxed text-left">
            地域への貢献活動を通して自身が成長できる機会を提供します。
          </p>
        </div>

        {/* 活動3 */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-400 overflow-hidden flex items-center justify-center">
            <Image
              src="/about_02.png"
              alt="交流イベント"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-bold max-w-xs leading-relaxed text-left">
            多彩なイベントを通じて地域社会との交流を促進します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
