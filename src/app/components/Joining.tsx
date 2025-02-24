"use client";
import React from "react";
import Link from "next/link";

const Joining = () => {
  return (
    <section
      className="w-full py-32 bg-cover bg-center flex justify-center items-center min-h-[600px] px-8"
      style={{ backgroundImage: "url('/iStock-2183919251.jpg')" }}
    >
      <div className="max-w-4xl w-full text-left bg-white bg-opacity-80 p-10 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">新しい松原を、共に描こう。</h2>
        <p className="text-lg text-gray-700 mb-6">
          私たちと一緒に地域貢献の活動を始めませんか？入会案内をご覧ください。
        </p>
        <div className="flex space-x-4">
          <Link href="/details" passHref>
            <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-bold">
              詳細
            </button>
          </Link>
          <Link href="/join" passHref>
            <button className="border border-black text-black px-6 py-3 rounded-md text-lg font-bold">
              参加
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Joining;
