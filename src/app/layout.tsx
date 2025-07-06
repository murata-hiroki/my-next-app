"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { LoadingProvider, useLoading } from "../../contexts/LoadingProvider"; // パスはご自身の環境に合わせてください
import "./globals.css";

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  // ▼▼▼ ここを修正 ▼▼▼
  // useStateの初期値設定時に、sessionStorageを確認する
  const [isMinimumTimePassed, setIsMinimumTimePassed] = useState(() => {
    // ブラウザ環境でのみsessionStorageにアクセス
    if (typeof window !== "undefined") {
      // すでに初回ロードが完了していれば、最初からtrueにしてタイマーを不要にする
      return sessionStorage.getItem("initialLoadComplete") === "true";
    }
    // サーバーサイドレンダリング時や初回アクセス時はfalse
    return false;
  });

  useEffect(() => {
    // isMinimumTimePassedがfalseの場合（=初回アクセス時）のみタイマーを作動させる
    if (!isMinimumTimePassed) {
      const timer = setTimeout(() => {
        setIsMinimumTimePassed(true);
      }, 2500); // 最低表示時間

      return () => clearTimeout(timer);
    }
  }, [isMinimumTimePassed]);
  // ▲▲▲ ▲▲▲ ▲▲▲

  const showContent = !isLoading && isMinimumTimePassed;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-700 ease-in-out ${
          showContent ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <LoadingScreen startAnimations={!showContent} />
      </div>

      <div
        className={`transition-opacity duration-700 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

// RootLayoutの定義は変更なし
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <LoadingProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </LoadingProvider>
      </body>
    </html>
  );
}
