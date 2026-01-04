"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 mt-8 gap-8">
          {/* 左側のロゴと説明 */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="/jc_logo.png" alt="JCI" width={240} height={66} />
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">
              松原青年会議所のご案内
            </h2>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">
              地域社会と共に成長し、未来を創造します。
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/details" passHref>
                <button className="bg-primary-600 text-white px-6 py-3 rounded-md text-base sm:text-lg font-bold w-full sm:w-auto">
                  詳細
                </button>
              </Link>
              <Link href="/join" passHref>
                <button className="border border-black text-black px-6 py-3 rounded-md text-base sm:text-lg font-bold w-full sm:w-auto">
                  参加
                </button>
              </Link>
            </div>
          </div>

          {/* 右側のリンク */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 text-left md:text-right">
            <div>
              <Link
                href="/active"
                className="block text-gray-700 hover:text-black"
              >
                活動内容
              </Link>
              <Link
                href="/join"
                className="block text-gray-700 hover:text-black"
              >
                入会案内
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-black"
              >
                新着情報
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-black"
              >
                お問い合わせ
              </Link>
            </div>
            <div>
              <Link
                href="/members"
                className="block text-gray-700 hover:text-black"
              >
                メンバー募集
              </Link>
              <Link
                href="/president"
                className="block text-gray-700 hover:text-black"
              >
                理事長紹介
              </Link>
            </div>
          </div>
        </div>

        {/* ソーシャルメディアリンク */}
        <div className="flex justify-center md:justify-end space-x-4 mb-4">
          <Link href="#">
            <Image
              src="/Facebook_Logo.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image
              src="/Instagram_Logo.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image src="/x_logo.png" alt="X" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image src="/yt_logo.png" alt="YouTube" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 border-t border-gray-300 pt-4 max-w-7xl mx-auto px-4 sm:px-8 gap-2">
        <p className="text-center md:text-left">
          © 2026 松原青年会議所. 全著作権所有。
        </p>
      </div>
    </footer>
  );
};

export default Footer;
