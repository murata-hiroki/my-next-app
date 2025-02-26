"use client";
import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="w-full pt-20 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full flex items-center gap-12">
        {/* 左側のテキスト */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            松原青年会議所に参加することで得られるメリットをご紹介します
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            松原青年会議所に参加することで、地域貢献や人脈の拡大が可能です。新しい挑戦を通じて、自身の成長を実感できます。
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">地域貢献</h3>
              <p className="text-gray-600">
                地域の課題解決に向き合う活動を通じて、社会に貢献できます。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">人脈形成</h3>
              <p className="text-gray-600">
                様々なバックグラウンドを持つ仲間と出会い、ネットワークを広げられます。
              </p>
            </div>
          </div>
        </div>

        {/* 右側の画像 */}
        <div className="w-1/2 flex justify-end">
          <div className="relative w-full h-[500px] bg-gray-200 rounded-md">
            <Image
              src="/benefits-image.jpg"
              alt="メリット画像"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
