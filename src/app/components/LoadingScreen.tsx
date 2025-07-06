"use client";
import React from "react";
import Image from "next/image";

const LoadingScreen = ({ startAnimations }: { startAnimations: boolean }) => {
  return (
    <>
      <style jsx global>{`
        @keyframes expand-vertically {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
        @keyframes fade-in-scale-up {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes progress-bar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .animate-expand-vertically {
          animation: expand-vertically 0.7s cubic-bezier(0.76, 0, 0.24, 1)
            forwards;
        }
        .animate-fade-in-scale-up {
          animation: fade-in-scale-up 0.8s cubic-bezier(0.25, 1, 0.5, 1)
            forwards;
        }
        .animate-progress-bar {
          animation: progress-bar 1.5s ease-in-out forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent`}
      >
        <div
          className={`absolute inset-0 bg-white ${
            startAnimations ? "animate-expand-vertically" : ""
          }`}
          style={{ transformOrigin: "center" }}
        ></div>
        <div
          className={`relative w-64 ${
            startAnimations ? "animate-fade-in-scale-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <Image
            src="/jci-nagoya_logo02.webp"
            alt="Logo"
            width={256}
            height={256}
            priority
          />
          <div className="w-full bg-gray-200 bg-opacity-50 h-1 rounded-full mt-6 overflow-hidden">
            {/* ▼▼▼ ここを修正 ▼▼▼ */}
            <div
              // Tailwindのクラス `transform-origin-left` を削除し、
              // 代わりにstyle属性へ直接 transformOrigin を指定します。
              className={`bg-[#007fb4] h-full w-full rounded-full ${
                startAnimations ? "animate-progress-bar" : "scale-x-0"
              }`}
              style={{
                animationDelay: "1.2s",
                transformOrigin: "left", // 伸縮の基点を左に強制指定
              }}
            ></div>
            {/* ▲▲▲ ▲▲▲ ▲▲▲ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
