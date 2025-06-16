"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // クローズボタン用のアイコン

// データ構造を変更：固定サイズを削除し、レイアウト用の情報を追加
const images = [
  {
    src: "/history-image.jpg",
    alt: "総会の様子",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "/about_03.png",
    alt: "地域イベントでの記念撮影",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "/about_04.png",
    alt: "青少年育成プログラムの一環",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "/about_05.png",
    alt: "メンバー同士の交流会",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "/about_06.png",
    alt: "ボランティア活動",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "/about_07.png",
    alt: "リーダーシップ研修",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white flex flex-col items-center">
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          活動ギャラリー
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 lg:mb-16">
          私たちの活動を写真でご覧ください。
        </p>
      </div>

      {/* レスポンシブなタイル型グリッドレイアウト */}
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`${img.colSpan} ${img.rowSpan} relative cursor-pointer group overflow-hidden rounded-lg shadow-md`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              {/* ホバー時に表示されるオーバーレイ */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* モーダル表示（改善版） */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 画像の外側をクリックしても閉じるが、画像自体をクリックしても閉じないようにする */}
          <div
            className="relative w-full h-full max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="拡大画像"
              fill
              className="object-contain"
            />
          </div>
          {/* クローズボタン */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
