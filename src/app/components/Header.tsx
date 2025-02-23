"use client";
import React from "react";
import Image from "next/image";
import { Mail, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="relative bg-white border-b shadow-md h-20 ">
      <div className="flex justify-between items-center px-8 h-full border-b border-black">
        <nav className="flex space-x-6 ml-24">
          <a href="#" className="text-gray-700 text-base">
            青年会議所とは
          </a>
          <a href="#" className="text-gray-700 text-base">
            活動内容
          </a>
          <a href="#" className="text-gray-700 text-base">
            理事長所信
          </a>
          <a href="#" className="text-gray-700 text-base">
            新着情報
          </a>
        </nav>
        <div className="relative flex items-center">
          <Image
            src="/jc_logo.png"
            alt="JCI"
            className="h-10"
            width={297}
            height={39}
          />
        </div>
        <nav className="flex space-x-6 mr-24">
          <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 text-lg flex items-center gap-3 rounded-full min-w-[150px] justify-center h-10">
            <UserPlus size={20} className="shrink-0" />
            <span className="whitespace-nowrap">入会案内</span>
          </button>

          <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 text-lg flex items-center gap-3 rounded-full min-w-[150px] justify-center h-10">
            <Mail size={20} className="shrink-0" />
            <span className="whitespace-nowrap">お問い合わせ</span>
          </button>
        </nav>
      </div>
      <div className="absolute left-96 bottom-0 transform w-20 h-4 border-t border-r border-black border-b-2 border-b-white"></div>
      <div className="absolute left-[19rem] bottom-0 transform w-20 h-4 border-t border-l border-black border-b-2 border-b-white"></div>
    </header>
  );
};

export default Header;
