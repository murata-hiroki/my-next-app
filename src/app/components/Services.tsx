"use client";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      {/* セクションタイトル */}
      <h2 className="text-3xl font-bold text-center mb-12">
        松原青年会議所の活動を通じて成長の機会
        <br />
        地域への貢献の機会を提供します。
      </h2>

      {/* 活動内容の3つのカード */}
      <div className="max-w-7xl w-full flex justify-center gap-10 flex-wrap">
        {/* 活動1 */}
        <div className="flex flex-col items-center text-center w-72 mr-10 ">
          <div className="w-64 h-64 rounded-full border-4 border-blue-400 overflow-hidden">
            <Image
              src="/about_03.png"
              alt="青少年育成"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-6 text-lg font-bold   break-normal ">
            青少年育成を対象とした様々な事業を立案実行しています。
          </p>
        </div>

        {/* 活動2 */}
        <div className="flex flex-col items-center text-center w-72 mr-10 ml-10">
          <div className="w-64 h-64 rounded-full border-4 border-blue-400 overflow-hidden">
            <Image
              src="/about_04.png"
              alt="地域貢献"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-6 text-lg font-bold break-normal">
            地域への貢献活動を通して自身が成長できる機会を提供します。
          </p>
        </div>

        {/* 活動3 */}
        <div className="flex flex-col items-center text-center w-72">
          <div className="w-64 h-64 rounded-full border-4 border-blue-400 overflow-hidden">
            <Image
              src="/about_02.png"
              alt="交流イベント"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-6 text-lg font-bold break-normal">
            多彩なイベントを通じて地域社会との交流を促進します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
