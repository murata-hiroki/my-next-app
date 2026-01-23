"use client";
import React from "react";
import Link from "next/link";

const Joining = () => {
  return (
    <section
      className="w-full py-20 sm:py-28 bg-cover bg-center flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] px-4 sm:px-8"
      style={{ backgroundImage: "url('/iStock-2183919251.jpg')" }}
    >
      <div className="max-w-2xl w-full bg-white bg-opacity-90 p-6 sm:p-10 rounded-lg text-left sm:text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          新しい松原を、共に描こう。
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          私たちと一緒に地域貢献の活動を始めませんか？入会案内をご覧ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
          <Link href="/about" passHref>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-md text-base sm:text-lg font-bold w-full sm:w-auto">
              詳細
            </button>
          </Link>
          <Link href="/join" passHref>
            <button className="border border-black text-black px-6 py-3 rounded-md text-base sm:text-lg font-bold w-full sm:w-auto">
              参加
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Joining;
