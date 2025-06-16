"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// 表示するお客様の声を配列として定義（将来的な拡張性を考慮）
const testimonialsData = [
  {
    quote: "松原青年会議所の活動は、地域の絆を深めました。",
    name: "田中 太郎",
    title: "地域住民, 松原市",
    avatar: "/avatars/tanaka.png", // アバター画像のパス（例）
  },
  {
    quote: "この団体に参加することで、多くの学びがありました。",
    name: "佐藤 花子",
    title: "学生, 松原高校",
    avatar: "/avatars/sato.png", // アバター画像のパス（例）
  },
  // 3つ目の声などを追加する場合は、ここに追加します
  // {
  //   quote: "イベントの企画・運営を通じて、リーダーシップが身につきました。",
  //   name: "鈴木 一郎",
  //   title: "市内事業経営者",
  //   avatar: "/avatars/suzuki.png",
  // },
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          地域の方々からの声
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 lg:mb-16">
          私たちの活動が地域に与えた影響
        </p>
      </div>
      <div className="max-w-7xl w-full px-4 md:px-8">
        {/* レスポンシブなグリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            // お客様の声カード
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                    strokeWidth={0} // fillを使うので線は不要に
                  />
                ))}
              </div>
              <p className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex-grow">
                「{testimonial.quote}」
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={testimonial.avatar} // アバター画像
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div className="flex-grow">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
                {/* ロゴ画像 */}
                <Image
                  src="/matubara_logo.png"
                  alt="松原青年会議所 ロゴ"
                  width={32}
                  height={32}
                  className="w-8 h-8 opacity-60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
