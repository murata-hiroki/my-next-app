import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { User, Calendar, Clock } from "lucide-react";
import { newsData, getNewsById, getRelatedNews } from "../../data/news";

// 静的エクスポート用：全てのニュースIDを事前生成
export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: String(news.id),
  }));
}

// サムネイルと同じ画像を本文先頭から取り除く（重複表示の防止）
const stripThumbnailFigure = (html: string, thumbnailSrc: string) => {
  const escaped = thumbnailSrc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const figurePattern = new RegExp(
    `<figure[^>]*>\\s*<img[^>]*src=["']${escaped}["'][^>]*\\/?>\\s*</figure>\\s*`,
    "gi"
  );
  return html.replace(figurePattern, "");
};

// メタデータ生成
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = getNewsById(Number(id));
  if (!news) return { title: "記事が見つかりません" };
  return {
    title: `${news.title} | 新着情報`,
    description: news.description,
  };
}

const NewsDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const news = getNewsById(Number(id));

  if (!news) {
    notFound();
  }

  // 関連記事（同じカテゴリの他の記事を取得）
  const relatedNews = getRelatedNews(news.id, news.category, 2);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 md:px-8">
        {/* パンくずリスト */}
        <nav className="mb-6">
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
            <li className="text-gray-800 truncate max-w-[200px] md:max-w-none">{news.title}</li>
          </ol>
        </nav>

        {/* 記事カード */}
        <article className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 overflow-hidden mb-12">
          {/* 記事ヘッダー */}
          <header className="px-6 md:px-10 lg:px-14 pt-10 md:pt-12 pb-6">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 shadow-sm shadow-primary-600/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              {news.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-gray-900 mb-5">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary-600" />
                {news.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary-600" />
                {news.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary-600" />
                {news.readTime}
              </span>
            </div>
          </header>

          {/* アイキャッチ画像 */}
          <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
            <Image
              src={news.image}
              alt={news.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 記事本文 */}
          <div className="px-6 md:px-10 lg:px-14 pt-10 pb-10">
            <div
              className="news-content max-w-none"
              dangerouslySetInnerHTML={{
                __html: stripThumbnailFigure(news.content, news.image),
              }}
            />

            {/* 区切りオーナメント */}
            <div className="flex justify-center items-center gap-3 mt-12">
              <span className="w-12 h-px bg-gray-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
              <span className="w-12 h-px bg-gray-300"></span>
            </div>
          </div>
        </article>

        {/* 関連記事 */}
        {relatedNews.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-xl font-bold mb-6">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNews.map((item) => (
                <Link key={item.id} href={`/news/${item.id}/`}>
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/news/"
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
      </div>
    </section>
  );
};

export default NewsDetailPage;
