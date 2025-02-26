"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-32 ">
      <div className="max-w-7xl mx-auto px-8 border border-black">
        <div className="flex justify-between items-center mb-8 mt-8">
          {/* 左側のロゴと説明 */}
          <div className="w-1/2">
            <Image src="/jc_logo.png" alt="JCI" width={360} height={100} />
            <h2 className="text-3xl font-bold mt-4">松原青年会議所のご案内</h2>
            <p className="text-gray-700 mt-2">
              地域社会と共に成長し、未来を創造します。
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="/details" passHref>
                <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-bold">
                  詳細
                </button>
              </Link>
              <Link href="/join" passHref>
                <button className="border border-black text-black px-6 py-3 rounded-md text-lg font-bold">
                  参加
                </button>
              </Link>
            </div>
          </div>

          {/* 右側のリンク */}
          <div className="w-1/2 grid grid-cols-2 gap-4 text-right">
            <div>
              <Link
                href="/activities"
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
                href="/news"
                className="block text-gray-700 hover:text-black"
              >
                新着情報
              </Link>
              <Link
                href="/supporters"
                className="block text-gray-700 hover:text-black"
              >
                賛助会員
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
                href="/sns"
                className="block text-gray-700 hover:text-black"
              >
                SNS連携
              </Link>
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
              <Link
                href="/companies"
                className="block text-gray-700 hover:text-black"
              >
                企業一覧
              </Link>
              <Link
                href="/community"
                className="block text-gray-700 hover:text-black"
              >
                地域貢献
              </Link>
            </div>
          </div>
        </div>

        {/* ソーシャルメディアリンク */}
        <div className="flex justify-end space-x-4 mb-4">
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

        {/* フッター下部の著作権表示とリンク */}
      </div>
      <div className="flex justify-between text-sm text-gray-600 border-t border-gray-300 pt-4 max-w-7xl mx-auto px-8">
        <p>© 2024 松原青年会議所. 全著作権所有。</p>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:underline">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="hover:underline">
            利用規約
          </Link>
          <Link href="/cookies" className="hover:underline">
            クッキー設定
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
