"use client";
import React from "react";
import Image from "next/image";

const OrganizationIntro = () => {
  return (
    <section className="w-full py-32 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full flex items-center gap-12">
        {/* 左側のテキスト */}
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            青年会議所は、地域社会の発展を目指す若者の団体です
          </h2>
          <p className="text-gray-600 text-lg">
            私たちは、リーダーシップや社会貢献を通じて、地域の問題解決に取り組んでいます。メンバーは多様なバックグラウンドを持ち、共に成長し合うことを大切にしています。
          </p>
        </div>

        {/* 右側の画像 */}
        <div className="w-1/2 flex justify-end">
          <div className="relative w-full h-[500px]">
            <Image
              src="/OrganizationIntro.jpg"
              alt="歴史のイメージ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "right" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationIntro;
