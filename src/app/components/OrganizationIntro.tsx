"use client";
import React from "react";
import Image from "next/image";

const OrganizationIntro = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
        {/* 左側のテキスト */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            青年会議所は、地域社会の発展を目指す若者の団体です
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            私たちは、リーダーシップや社会貢献を通じて、地域の問題解決に取り組んでいます。メンバーは多様なバックグラウンドを持ち、共に成長し合うことを大切にしています。
          </p>
        </div>

        {/* 右側の画像 */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/OrganizationIntro.jpg"
              alt="会議所の活動風景"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center" }} // 中央寄りに変更
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationIntro;
