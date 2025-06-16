"use client";
import React from "react";
import Image from "next/image";
import { Users, Handshake, ShieldCheck } from "lucide-react"; // アイコンをインポート

// メリットのデータを配列として分離
const benefitsData = [
  {
    icon: <Users size={24} className="text-primary-600" />,
    title: "地域貢献",
    description: "地域の課題解決に向き合う活動を通じて、社会に貢献できます。",
  },
  {
    icon: <Handshake size={24} className="text-primary-600" />,
    title: "人脈形成",
    description:
      "様々なバックグラウンドを持つ仲間と出会い、ネットワークを広げられます。",
  },

  {
    icon: <ShieldCheck size={24} className="text-primary-600" />,
    title: "リーダーシップの向上",
    description:
      "プロジェクトや委員会のリーダーとして、実践的なスキルが身につきます。",
  },
];

const Benefits = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 md:px-8">
        {/* 左側のテキスト */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            松原青年会議所に参加することで得られるメリット
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
            松原青年会議所に参加することで、地域貢献や人脈の拡大が可能です。新しい挑戦を通じて、自身の成長を実感できます。
          </p>

          {/* ネストされたメリットのグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary-100 p-2 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 右側の画像 */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative w-full h-64 sm:h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/benefits-image.jpg"
              alt="メンバーが協力して活動しているメリット画像"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
