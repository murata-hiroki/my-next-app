"use client";
import React from "react";
import Link from "next/link";

const JoiningSimple = () => {
  return (
    <section className="w-full pt-32 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold mb-4">入会案内</h2>
        <p className="text- text-gray-700 mb-6">
          私たちと一緒に松原で地域貢献活動をしませんか？
        </p>
        <Link href="/join" passHref>
          <button className="border border-black text-black px-6 py-3 rounded-md">
            入会する
          </button>
        </Link>
      </div>
    </section>
  );
};

export default JoiningSimple;
