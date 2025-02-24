"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChairmanMessage = () => {
  return (
    <section className="w-full pt-32 pb-40 min-h-[800px] bg-white flex justify-center items-center overflow-visible">
      <div className="max-w-7xl w-full flex items-center">
        {/* 左側のコンテンツ */}
        <div className="w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-4xl font-bold mb-6">理事長紹介</h2>
          <p className="text-gray-700 text-lg mb-6">
            松原青年会議所 第55代理事長 青木陽平です。
            <br />
            今年度のスローガンは「心」を磨き人生を彩るです、地域と共に成長し続けることを大切にしています。
            <br />
            計画性をもって時間を活かす大切さを考え、目的や信念を共有し、結束力が高い組織体を作り頑張ってまいります
          </p>
          <div className="mt-6">
            <Link href="/president-message" passHref>
              <button className="bg-black text-white px-8 py-4 rounded-md text-lg font-bold">
                理事長所信を読む
              </button>
            </Link>
          </div>
        </div>
        {/* 右側の画像 */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/president-image.png"
            alt="理事長 青木陽平"
            width={600}
            height={400}
            className="w-auto h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
