"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// メンバーのデータを配列として分離（管理しやすくするため）
const memberData = [
  {
    name: "山田 太郎",
    role: "理事長",
    description: "地域社会の発展に尽力しています。",
    avatar: "/avatars/yamada.png", // アバター画像のパス（例）
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "鈴木 次郎",
    role: "副理事長",
    description: "次世代のリーダー育成に情熱を注いでいます。",
    avatar: "/avatars/suzuki.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  // [...8人分のデータをここに追加...]
  // 以下はダミーデータです
  {
    name: "佐藤 花子",
    role: "専務理事",
    description: "地域活性化のためのイベントを企画しています。",
    avatar: "/avatars/sato.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "高橋 三郎",
    role: "委員長",
    description: "子供たちの未来を育む活動を推進中です。",
    avatar: "/avatars/takahashi.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "田中 恵子",
    role: "委員",
    description: "文化振興を通じて地域に貢献します。",
    avatar: "/avatars/tanaka.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "渡辺 健太",
    role: "委員",
    description: "スポーツを通じた青少年育成をサポート。",
    avatar: "/avatars/watanabe.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "伊藤 さくら",
    role: "委員",
    description: "環境問題に取り組み、持続可能な地域を目指します。",
    avatar: "/avatars/ito.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "中村 直樹",
    role: "監事",
    description: "組織の健全な運営を支えています。",
    avatar: "/avatars/nakamura.png",
    social: {
      facebook: "https://facebook.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
    },
  },
];

const Members = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full px-4 md:px-8">
        {/* タイトルエリア */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            青年会議所のメンバー
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            私たちのメンバーをご紹介します。
          </p>
        </div>

        {/* メンバーグリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {memberData.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-primary-600 text-sm font-semibold">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mt-2 flex-grow">
                {member.description}
              </p>
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 w-full justify-center">
                <Link
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Image
                    src="/Facebook_Logo.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href={member.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Image src="/x_logo.png" alt="X" width={20} height={20} />
                </Link>
                <Link
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Image
                    src="/Instagram_Logo.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
