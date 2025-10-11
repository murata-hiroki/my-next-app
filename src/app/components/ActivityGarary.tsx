"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Maximize2,
} from "lucide-react";

const images = [
  {
    src: "/history-image.jpg",
    alt: "総会の様子",
    description: "年次総会での集合写真",
  },
  {
    src: "/about_03.png",
    alt: "地域イベントでの記念撮影",
    description: "地域の皆様と共に開催したイベント",
  },
  {
    src: "/about_04.png",
    alt: "青少年育成プログラムの一環",
    description: "次世代リーダーの育成活動",
  },
  {
    src: "/about_05.png",
    alt: "メンバー同士の交流会",
    description: "メンバー間の親睦を深める交流会",
  },
  {
    src: "/about_06.png",
    alt: "ボランティア活動",
    description: "地域貢献のボランティア活動",
  },
  {
    src: "/about_07.png",
    alt: "リーダーシップ研修",
    description: "リーダーシップスキル向上研修",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 自動再生
  useEffect(() => {
    if (isPlaying && !isFullscreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, currentIndex, isFullscreen]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            活動ギャラリー
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            私たちの活動を写真でご覧ください
          </p>
        </div>

        {/* メインスライドショー */}
        <div className="relative bg-black rounded-2xl shadow-xl overflow-hidden">
          {/* 画像表示エリア - アスペクト比を固定 */}
          <div className="relative aspect-[16/9] bg-black">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            ))}

            {/* 画像の説明 - 背景を半透明の黒に */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                {images[currentIndex].alt}
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                {images[currentIndex].description}
              </p>
            </div>

            {/* ナビゲーションボタン */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              aria-label="前の画像"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              aria-label="次の画像"
            >
              <ChevronRight size={24} />
            </button>

            {/* コントロールボタン */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={togglePlayPause}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                aria-label={isPlaying ? "一時停止" : "再生"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                aria-label="フルスクリーン"
              >
                <Maximize2 size={20} />
              </button>
            </div>

            {/* スライド番号 */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* インジケーター */}
          <div className="bg-gray-900 px-4 py-4">
            <div className="flex justify-center items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? "w-8 h-2 bg-primary-600"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                  } rounded-full`}
                  aria-label={`スライド ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* サムネイルギャラリー */}
        <div className="mt-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all bg-gray-100 ${
                  index === currentIndex
                    ? "ring-2 ring-primary-600 shadow-lg scale-105"
                    : "hover:shadow-md hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary-600/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* フルスクリーンモーダル */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black/50 p-2 rounded-full"
            aria-label="閉じる"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* フルスクリーン時のナビゲーション */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
