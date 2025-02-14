"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#E6F4FA] to-white py-20 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          明るい豊かな社会を目指して
          <span className="block text-[#009FE3]">地域と共に成長する</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          松原青年会議所は、地域社会の発展と会員の成長を通じて、より良い松原市を創造します。
        </p>
        <button
          onClick={() => alert("入会に関する詳細情報をお送りいたします。")}
          className="bg-[#009FE3] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#0082BA] transition-colors"
        >
          入会案内
        </button>
      </div>
    </section>
  );
};

export default Hero;
