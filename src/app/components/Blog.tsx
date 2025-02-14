"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "地域の未来を創る",
      excerpt: "松原市の発展に向けた私たちの取り組み",
      image:
        "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=500&h=300&fit=crop",
    },
    {
      title: "リーダーシップの育成",
      excerpt: "次世代リーダー育成プログラムの成果",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop",
    },
    {
      title: "地域活性化プロジェクト",
      excerpt: "松原市の魅力を発信する新しい取り組み",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          活動報告
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700">
                  続きを読む
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
