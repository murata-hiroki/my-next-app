"use client";
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="w-full pt-32 bg-white flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold mb-4">地域の方々からの声</h2>
        <p className="text-gray-600 text-lg mb-12">
          私たちの活動が地域に与えた影響
        </p>
      </div>
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 声1 */}
          <div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#ffb906" stroke="#ffb906" />
              ))}
            </div>
            <p className="text-lg font-semibold mb-4">
              「松原青年会議所の活動は、地域の絆を深めました。」
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-semibold">田中 太郎</p>
                <p className="text-gray-500 text-sm">地域住民, 松原市</p>
              </div>
              <span className="font-bold">Webflow</span>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#ffb906" stroke="#ffb906" />
              ))}
            </div>
            <p className="text-lg font-semibold mb-4">
              「この団体に参加することで、多くの学びがありました。」
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-semibold">佐藤 花子</p>
                <p className="text-gray-500 text-sm">学生, 松原高校</p>
              </div>
              <span className="font-bold">Webflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
