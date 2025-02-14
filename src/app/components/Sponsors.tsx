"use client";

import React from "react";

const Sponsors = () => {
  const sponsors = [
    "/znkh_logo.png",
    "/miyama_logo.png",
    "/tekunikal-plus_logo.png",
    "/kishi_logo.jpg",
    "/ns_logo.jpg",
    "/taiho_logo.png",
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          賛助企業
        </h2>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* ロゴを2セット繰り返してスムーズなループを実現 */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={sponsor}
                  alt={`スポンサー ${index + 1}`}
                  className="h-20 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
