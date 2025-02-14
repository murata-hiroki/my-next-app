"use client";

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          地域と共に成長する
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          松原青年会議所は、地域社会の発展と会員の成長を目指して活動しています。
        </p>
        <button
          onClick={() => alert("入会ありがとうございます！")}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          入会する
        </button>
      </div>
    </section>
  );
};

export default About;
