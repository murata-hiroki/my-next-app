"use client";
import React from "react";
import Image from "next/image";

// ポイントのデータを配列として分離
const activityPointsData = [
  {
    imageSrc: "/01.svg",
    title: "地域貢献活動を通じて、未来を創造する",
    description: "私たちは地域のニーズに応える活動を展開しています。",
  },
  {
    imageSrc: "/02.svg",
    title: "青少年育成プログラムで次世代のリーダーを育てる",
    description: "未来を担う若者たちの成長を支援しています。",
  },
  {
    imageSrc: "/03.svg",
    title: "地域イベントを通じてコミュニティの絆を深める",
    description: "私たちは地域のイベントを企画・運営し、参加者を募っています。",
  },
];

const ActivityPoints = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 flex justify-center items-center">
      <div className="max-w-7xl w-full px-4 md:px-8">
        {/* タイトルエリア */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            松原青年会議所の主な活動
          </h2>
          <p className="text-gray-600 text-base text-left md:text-lg max-w-3xl mx-auto">
            私たちは地域社会の発展に貢献するため、様々な活動を行っています。
            特に、青少年育成や地域イベントの開催を通じて、コミュニティの絆を深めています。
          </p>
        </div>

        {/* 3つのポイント（グリッドレイアウト） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activityPointsData.map((point, index) => (
            // ポイントカード
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-6"
            >
              {/* アイコン */}
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <Image
                  src={point.imageSrc}
                  alt={`ポイント${index + 1}`}
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-15 md:h-15"
                />
              </div>
              {/* テキスト */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityPoints;
