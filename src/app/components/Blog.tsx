"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLatestNews } from "../data/news";

const Blog = () => {
  const router = useRouter();
  const posts = getLatestNews(3);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          活動報告
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => router.push(`/news/${post.id}`)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-primary-600 font-semibold mb-2">
                  {post.category}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                <button className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700">
                  続きを読む
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => router.push("/news")}
            className="border border-black text-black px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white transition-colors duration-200"
          >
            すべて見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
