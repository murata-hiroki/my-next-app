"use client";
import React from "react";
import Image from "next/image";

const ActivityPoints = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-4">
          松原青年会議所の活動内容を3つのポイントでご紹介します
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          私たちは地域社会の発展に貢献するため、様々な活動を行っています。
          <br />
          特に、青少年育成や地域イベントの開催を通じて、コミュニティの絆を深めています。これにより、地域の活性化を目指しています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-start gap-4 border border-gray-300 p-6 rounded-lg shadow-sm">
            <Image src="/01.svg" alt="01" width={50} height={50} />
            <div>
              <h3 className="text-xl font-bold mb-2">
                地域貢献活動を通じて、未来を創造する
              </h3>
              <p className="text-gray-600 mb-2">
                私たちは地域のニーズに応える活動を展開しています。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border border-gray-300 p-6 rounded-lg shadow-sm">
            <Image src="/02.svg" alt="02" width={50} height={50} />
            <div>
              <h3 className="text-xl font-bold mb-2">
                青少年育成プログラムで次世代のリーダーを育てる
              </h3>
              <p className="text-gray-600 mb-2">
                未来を担う若者たちの成長を支援しています。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border border-gray-300 p-6 rounded-lg shadow-sm">
            <Image src="/03.svg" alt="03" width={50} height={50} />
            <div>
              <h3 className="text-xl font-bold mb-2">
                地域イベントを通じてコミュニティの絆を深める
              </h3>
              <p className="text-gray-600 mb-2">
                私たちは地域のイベントを企画・運営し、参加者を募っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPoints;
