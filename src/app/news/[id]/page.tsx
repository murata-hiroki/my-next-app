"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getNewsById, getRelatedNews } from "../../data/news";

const NewsDetailPage = () => {
  const params = useParams();
  const id = Number(params.id);

  const news = getNewsById(id);

  if (!news) {
    return (
      <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 flex flex-col items-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            お探しの記事が見つかりません
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            指定されたニュースは存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/news"
            className="border border-black text-black px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white transition-colors duration-200"
          >
            新着情報一覧に戻る
          </Link>
        </div>
      </section>
    );
  }

  // 関連記事（同じカテゴリの他の記事を取得）
  const relatedNews = getRelatedNews(news.id, news.category, 2);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 flex flex-col items-center">
      <article className="w-full max-w-4xl px-4 md:px-8">
        {/* パンくずリスト */}
        <nav className="mb-8">
          <ol className="flex items-center text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary-600">
                トップ
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/news" className="hover:text-primary-600">
                新着情報
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-800">{news.title}</li>
          </ol>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-8">
          <span className="inline-block bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {news.category}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {news.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <p>{news.author}</p>
            <span className="mx-2">•</span>
            <p>{news.date}</p>
            <span className="mx-2">•</span>
            <p>{news.readTime}</p>
          </div>
        </header>

        {/* アイキャッチ画像 */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={news.image}
            alt={news.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 記事本文 */}
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: news.content }}
          style={{
            lineHeight: "1.8",
          }}
        />

        {/* 関連記事 */}
        {relatedNews.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-xl font-bold mb-6">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNews.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-primary-600 font-semibold">
                        {item.category}
                      </p>
                      <h3 className="text-base font-bold mt-1">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-2">{item.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ナビゲーションリンク */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 pt-8 border-t">
          <Link
            href="/news"
            className="border border-black text-black px-6 py-3 rounded-md text-center hover:bg-black hover:text-white transition-colors duration-200"
          >
            新着情報一覧に戻る
          </Link>
          <Link
            href="/"
            className="border border-gray-400 text-gray-600 px-6 py-3 rounded-md text-center hover:bg-gray-100 transition-colors duration-200"
          >
            トップページに戻る
          </Link>
        </div>
      </article>
    </section>
  );
};

export default NewsDetailPage;
