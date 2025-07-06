"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, UserPlus, Menu, X } from "lucide-react";
import Link from "next/link"; // Linkコンポーネントはすでにインポートされていますね

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // メニューを閉じる関数を追加
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-white border-b shadow-md h-20">
      <div className="container mx-auto flex justify-center lg:justify-between items-center px-4 sm:px-6 lg:px-8 h-full">
        {/* Logo */}
        <div className="flex-shrink-0 mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/jci-nagoya_logo02.webp"
              alt="JCI Logo"
              width={297}
              height={39}
              className="h-8 w-auto lg:h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation (Left) - <a>を<Link>に修正 */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            href="/about"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            青年会議所とは
          </Link>
          <Link
            href="/active"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            活動内容
          </Link>
          <Link
            href="/greeting"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            理事長所信
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 text-base hover:text-orange-500 transition-colors"
          >
            新着情報
          </Link>
        </nav>

        {/* Desktop Navigation (Right) - <a>を<Link>に修正 */}
        <nav className="hidden lg:flex items-center space-x-4">
          <Link
            href="/join"
            className="bg-primary-600 text-white px-5 py-2 text-sm sm:text-base flex items-center gap-2 rounded-full min-w-[140px] justify-center h-10 hover:opacity-90 transition-opacity"
          >
            <UserPlus size={18} className="shrink-0" />
            <span className="whitespace-nowrap">入会案内</span>
          </Link>
          <Link
            href="/contact"
            className="bg-primary-600 text-white px-5 py-2 text-sm sm:text-base flex items-center gap-2 rounded-full min-w-[140px] justify-center h-10 hover:opacity-90 transition-opacity"
          >
            <Mail size={18} className="shrink-0" />
            <span className="whitespace-nowrap">お問い合わせ</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu - <a>を<Link>に修正 */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl z-50 border-t">
          <nav className="flex flex-col space-y-1 px-4 py-6">
            <Link
              href="/about"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
              onClick={closeMenu} // モバイルメニューでリンククリック時にメニューを閉じる
            >
              青年会議所とは
            </Link>
            <Link
              href="/active"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
              onClick={closeMenu}
            >
              活動内容
            </Link>
            <Link
              href="/greeting"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
              onClick={closeMenu}
            >
              理事長所信
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-orange-500 transition-colors"
              onClick={closeMenu}
            >
              新着情報
            </Link>
            <hr className="my-4" />
            <div className="flex flex-col space-y-3 px-3">
              <Link
                href="/join"
                className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-2 text-lg flex items-center gap-3 rounded-full justify-center h-11 hover:opacity-90 transition-opacity"
                onClick={closeMenu}
              >
                <UserPlus size={20} className="shrink-0" />
                <span className="whitespace-nowrap">入会案内</span>
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-2 text-lg flex items-center gap-3 rounded-full justify-center h-11 hover:opacity-90 transition-opacity"
                onClick={closeMenu}
              >
                <Mail size={20} className="shrink-0" />
                <span className="whitespace-nowrap">お問い合わせ</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
