"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, UserPlus, Menu, X } from "lucide-react"; // Menu と X アイコンをインポート
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ハンバーガーメニューの開閉状態

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white border-b shadow-md h-20">
      <div className="container mx-auto flex justify-center lg:justify-between items-center px-4 sm:px-6 lg:px-8 h-full">
        {/* Logo */}
        <div className="flex-shrink-0 mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <Link href="/">
            <Image
              src="/jc_logo.png"
              alt="JCI Logo"
              width={297}
              height={39}
              className="h-8 w-auto lg:h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation (Left) - lg以上で表示 */}
        <nav className="hidden lg:flex space-x-6">
          <a
            href="/about"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            青年会議所とは
          </a>
          <a
            href="/active"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            活動内容
          </a>
          <a
            href="/greeting"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            理事長所信
          </a>
          <a
            href="/blog"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            新着情報
          </a>
        </nav>

        {/* Desktop Navigation (Right) - lg以上で表示 */}
        <nav className="hidden lg:flex items-center space-x-4">
          <a
            href="/join"
            className="bg-primary-600 text-white px-5 py-2 text-sm sm:text-base flex items-center gap-2 rounded-full min-w-[140px] justify-center h-10 hover:opacity-90 transition-opacity"
          >
            <UserPlus size={18} className="shrink-0" />
            <span className="whitespace-nowrap">入会案内</span>
          </a>
          <a
            href="/contact"
            className="bg-primary-600 text-white px-5 py-2 text-sm sm:text-base flex items-center gap-2 rounded-full min-w-[140px] justify-center h-10 hover:opacity-90 transition-opacity"
          >
            <Mail size={18} className="shrink-0" />
            <span className="whitespace-nowrap">お問い合わせ</span>
          </a>
        </nav>

        {/* Mobile Menu Button - lg未満で表示 */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="メニューを開閉する"
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 p-2 rounded-md"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - isMenuOpenがtrueの時、lg未満で表示 */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl z-50 border-t">
          <nav className="flex flex-col space-y-1 px-4 py-6">
            <a
              href="/about"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
            >
              青年会議所とは
            </a>
            <a
              href="/active"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
            >
              活動内容
            </a>
            <a
              href="/greeting"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
            >
              理事長所信
            </a>
            <a
              href="/blog"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
            >
              新着情報
            </a>
            <hr className="my-4" />
            <div className="flex flex-col space-y-3 px-3">
              <a
                href="/join"
                className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-2 text-lg flex items-center gap-3 rounded-full justify-center h-11 hover:opacity-90 transition-opacity"
              >
                <UserPlus size={20} className="shrink-0" />
                <span className="whitespace-nowrap">入会案内</span>
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-2 text-lg flex items-center gap-3 rounded-full justify-center h-11 hover:opacity-90 transition-opacity"
              >
                <Mail size={20} className="shrink-0" />
                <span className="whitespace-nowrap">お問い合わせ</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
