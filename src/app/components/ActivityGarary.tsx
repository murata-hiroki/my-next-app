"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/history-image.jpg", width: "w-[300px]", height: "h-[400px]" },
  { src: "/about_03.png", width: "w-[250px]", height: "h-[300px]" },
  { src: "/about_04.png", width: "w-[350px]", height: "h-[450px]" },
  { src: "/about_05.png", width: "w-[280px]", height: "h-[350px]" },
  { src: "/about_06.png", width: "w-[320px]", height: "h-[400px]" },
  { src: "/about_07.png", width: "w-[270px]", height: "h-[320px]" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">活動ギャラリー</h2>
      <p className="text-gray-600 mb-10">私たちの活動を写真でご覧ください。</p>

      {/* グリッドレイアウト（Masonry 風） */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative ${img.width} ${img.height} cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105`}
            onClick={() => setSelectedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* モーダル表示 */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[80%] h-[80%] max-w-4xl">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
