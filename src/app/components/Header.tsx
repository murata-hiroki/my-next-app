"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, UserPlus, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-white border-b shadow-md h-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-center lg:justify-between h-full relative">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-3 xl:space-x-5">
            <Link
              href="/about"
              className="text-gray-700 text-sm hover:text-primary-600 transition-colors"
            >
              青年会議所とは
            </Link>
            <Link
              href="/active"
              className="text-gray-700 text-sm hover:text-primary-600 transition-colors"
            >
              活動内容
            </Link>
            <Link
              href="/greeting"
              className="text-gray-700 text-sm hover:text-primary-600 transition-colors"
            >
              理事長所信
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 text-sm hover:text-primary-600 transition-colors"
            >
              新着情報
            </Link>
          </nav>

          {/* Center Logo - 絶対配置で完全に中央に */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/jci-nagoya_logo02.webp"
                alt="JCI Logo"
                width={250}
                height={33}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation - ボタンのみ */}
          <div className="flex items-center space-x-3 xl:space-x-4">
            <Link
              href="/join"
              className="bg-primary-600 text-white px-4 py-1.5 text-sm flex items-center gap-1 rounded-full hover:opacity-90 transition-opacity"
            >
              <UserPlus size={14} className="shrink-0" />
              <span>入会案内</span>
            </Link>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-4 py-1.5 text-sm flex items-center gap-1 rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail size={14} className="shrink-0" />
              <span>お問い合せ</span>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden justify-between items-center h-full">
          {/* Logo - モバイルでも中央に配置 */}
          <div className="flex-1 flex justify-center">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/jci-nagoya_logo02.webp"
                alt="JCI Logo"
                width={250}
                height={33}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="メニューを開閉する"
            className="absolute right-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600 p-2 rounded-md"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl z-50 border-t">
          <nav className="flex flex-col space-y-1 px-4 py-6">
            <Link
              href="/about"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600 transition-colors"
              onClick={closeMenu}
            >
              青年会議所とは
            </Link>
            <Link
              href="/active"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600 transition-colors"
              onClick={closeMenu}
            >
              活動内容
            </Link>
            <Link
              href="/greeting"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600 transition-colors"
              onClick={closeMenu}
            >
              理事長所信
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600 transition-colors"
              onClick={closeMenu}
            >
              新着情報
            </Link>
            <hr className="my-4" />
            <div className="flex flex-col space-y-3 px-3 pt-4">
              <Link
                href="/join"
                className="bg-primary-600 text-white px-5 py-2 text-base flex items-center gap-2 rounded-full justify-center hover:opacity-90 transition-opacity"
                onClick={closeMenu}
              >
                <UserPlus size={18} className="shrink-0" />
                <span>入会案内</span>
              </Link>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-5 py-2 text-base flex items-center gap-2 rounded-full justify-center hover:opacity-90 transition-opacity"
                onClick={closeMenu}
              >
                <Mail size={18} className="shrink-0" />
                <span>お問い合わせ</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
