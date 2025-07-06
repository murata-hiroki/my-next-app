// ブラウザ側で動作する機能（フック）を使うため、"use client"を宣言します
"use client";

// 必要なフックをReactと自作のContextからインポートします
import React, { useEffect } from "react";
import { useLoading } from "../../contexts/LoadingProvider"; // パスはご自身の環境に合わせてください

// ページを構成する各コンポーネントをインポートします
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Services from "./components/Services";
import News from "./components/News";
import History from "./components/History";
import Joining from "./components/Joining";

// コンポーネント名をHomePageとします（Appでも動作しますが、こちらが一般的です）
function HomePage() {
  // LoadingProviderから、ローディング状態を更新する関数を取得します
  const { setIsLoading } = useLoading();

  // useEffectフックを使って、このコンポーネントが画面に表示された後に一度だけ処理を実行します
  useEffect(() => {
    // このページの準備が完了したことを、アプリケーション全体に通知します
    // これがローディング画面を終了させるための「合図」となります
    setIsLoading(false);
  }, [setIsLoading]); // このeffectは最初に一度だけ実行されます

  // ページの表示内容は元のままです
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <News />
        <Services />
        <About />
        <History />
        <ChairmanMessage />
        <Sponsors />
        <Joining />
      </main>
    </div>
  );
}

export default HomePage;
