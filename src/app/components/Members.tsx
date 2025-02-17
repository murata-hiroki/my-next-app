"use client";

import React from "react";
import Image from "next/image";

const members = [
  {
    name: "青木 陽平",
    company: "株式会社全日本警備保障",
    job: "常務取締役",
    role: "理事長",
    joined: "2020年入会",
    image: "/aoki.jpg",
  },
  {
    name: "加藤 満久",
    company: "株式会社大豊システム",
    job: "課長",
    role: "専務",
    joined: "2018年入会",
    image: "/no_image.png",
  },
  {
    name: "岸 航平",
    company: "岸空調設備",
    job: "代表",
    role: "副理事長",
    joined: "2015年入会",
    image: "/no_image.png",
  },
  {
    name: "伴 俊秀",
    company: "株式会社テクニカルプラス",
    job: "代表取締役社長",
    role: "副理事長",
    joined: "2022年入会",
    image: "/no_image.png",
  },
  {
    name: "西田",
    company: "松原市役所",
    job: "公務員",
    role: "副理事長",
    joined: "2019年入会",
    image: "/no_image.png",
  },
  {
    name: "村田 拓輝",
    company: "パズルテック",
    job: "代表",
    role: "副専務理事",
    joined: "2021年入会",
    image: "/no_image.png",
  },
];

const Members = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full text-center">
        {/* セクションタイトル */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 mt-10">
          メンバー紹介
        </h2>

        {/* メンバーカード一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg  transition-all duration-300 hover:scale-105"
            >
              {/* 画像部分（ホバー時にズーム） */}
              <div className="w-[220px] h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={220}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* メンバー情報 */}
              <h3 className="text-lg font-bold mt-4">{member.name}</h3>
              <p className="text-gray-700 text-sm">
                {member.company} / {member.job}
              </p>
              <p className="text-blue-600 text-sm font-semibold">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm">{member.joined}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
