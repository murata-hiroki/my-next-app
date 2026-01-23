"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  ExternalLink,
  Users,
  Award,
  Briefcase,
  Shield,
} from "lucide-react";

const Members = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 2026年度メンバーデータ
  // hasDetailPage: true のメンバーのみ詳細ページへのリンクが有効
  const allMembers = [
    {
      id: "fukayama",
      name: "深山 大地",
      role: "理事長",
      category: "executives",
      message:
        "2026年度理事長として、「REスタート ～「あれ」がわかる組織へ～」をスローガンに、楽しむ気持ちとコミュニケーションを原動力として活動しています。",
      avatar: "/hukayama.jpg",
      profileUrl: "/greeting",
      hasDetailPage: true,
    },
    {
      id: "aoki",
      name: "青木 陽平",
      role: "直前理事長",
      category: "executives",
      avatar: "/aoki2.jpg",
      profileUrl: "/members/aoki",
      hasDetailPage: false,
    },
    {
      id: "kishi",
      name: "岸 航平",
      role: "専務理事",
      category: "executives",
      avatar: "/no_image.png",
      profileUrl: "/members/kishi",
      hasDetailPage: false,
    },
    {
      id: "katou",
      name: "加藤 満久",
      role: "副理事長（ウェルビーイング推進室）",
      category: "executives",
      avatar: "/no_image.png",
      profileUrl: "/members/katou",
      hasDetailPage: false,
    },
    {
      id: "murata",
      name: "村田 拓輝",
      role: "副理事長（環境改善室）",
      category: "executives",
      avatar: "/murata.jpeg",
      profileUrl: "/members/murata",
      hasDetailPage: true,
    },
    {
      id: "ban",
      name: "伴 俊秀",
      role: "監事",
      category: "auditor",
      avatar: "/no_image.png",
      profileUrl: "/members/ban",
      hasDetailPage: false,
    },
    {
      id: "satou",
      name: "佐藤 將",
      role: "監事",
      category: "auditor",
      avatar: "/no_image.png",
      profileUrl: "/members/satou",
      hasDetailPage: false,
    },
    {
      id: "kawada",
      name: "河田 美弥",
      role: "青少年育成委員会 委員長",
      category: "executives",
      avatar: "/no_image.png",
      profileUrl: "/members/kawada",
      hasDetailPage: false,
    },
    {
      id: "wada",
      name: "和田 貴士",
      role: "市民まつり・会員拡大委員会 委員長",
      category: "executives",
      avatar: "/no_image.png",
      profileUrl: "/members/wada",
      hasDetailPage: false,
    },
    {
      id: "fujimoto",
      name: "藤本 貴一",
      role: "理事",
      category: "executives",
      avatar: "/no_image.png",
      profileUrl: "/members/fujimoto",
      hasDetailPage: false,
    },
    {
      id: "hinoi",
      name: "樋井 香陽",
      role: "理事",
      category: "executives",
      avatar: "/no_image.png",
      profileUrl: "/members/hinoi",
      hasDetailPage: false,
    },
    {
      id: "shibuya",
      name: "渋谷 知世",
      role: "青少年育成委員会 委員",
      category: "committee",
      avatar: "/no_image.png",
      profileUrl: "/members/shibuya",
      hasDetailPage: false,
    },
    {
      id: "hayase",
      name: "早瀬 直哉",
      role: "青少年育成委員会 委員",
      category: "committee",
      avatar: "/no_image.png",
      profileUrl: "/members/hayase",
      hasDetailPage: false,
    },
    {
      id: "ooki",
      name: "大機 良介",
      role: "青少年育成委員会 委員",
      category: "committee",
      avatar: "/no_image.png",
      profileUrl: "/members/ooki",
      hasDetailPage: false,
    },
    {
      id: "otomo",
      name: "大伴 喜信",
      role: "市民まつり・会員拡大委員会 委員",
      category: "committee",
      avatar: "/no_image.png",
      profileUrl: "/members/otomo",
      hasDetailPage: false,
    },
    {
      id: "tsuruno",
      name: "靏野 沙也",
      role: "市民まつり・会員拡大委員会 委員",
      category: "committee",
      avatar: "/no_image.png",
      profileUrl: "/members/tsuruno",
      hasDetailPage: false,
    },
  ];

  // カテゴリー設定
  const categories = [
    { id: "all", label: "全員", icon: Users },
    { id: "executives", label: "理事メンバー", icon: Award },
    { id: "committee", label: "委員会メンバー", icon: Briefcase },
    { id: "auditor", label: "監事", icon: Shield },
  ];

  // フィルタリング
  const filteredMembers =
    selectedCategory === "all"
      ? allMembers.filter((m) => m.id !== "fukayama") // 理事長以外
      : allMembers.filter(
          (m) => m.category === selectedCategory && m.id !== "fukayama"
        );

  // 理事長データ
  const president = allMembers.find((m) => m.id === "fukayama");

  // メンバーカードコンポーネント
  const MemberCard = ({ member }: { member: (typeof allMembers)[0] }) => {
    const cardContent = (
      <div className="bg-white rounded-xl p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
          {member.name}
        </h4>
        <p className="text-xs sm:text-sm text-primary-600 font-medium">
          {member.role}
        </p>

        {/* リンクがあるメンバーのみホバー時に表示 */}
        {member.hasDetailPage && (
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              プロフィールを見る
              <ExternalLink size={12} />
            </span>
          </div>
        )}
      </div>
    );

    if (member.hasDetailPage) {
      return (
        <Link
          href={member.profileUrl}
          className="group cursor-pointer"
        >
          {cardContent}
        </Link>
      );
    }

    return <div className="group">{cardContent}</div>;
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            メンバー紹介
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            総勢{allMembers.length}
            名のメンバーが、地域の発展と未来のために活動しています
          </p>
        </div>

        {/* 理事長の特別枠 - ヒーローカード */}
        {president && (
          <div className="mb-20">
            <Link href={president.profileUrl} className="block group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary-500 to-primary-700 p-8 flex items-center justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
                      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    </div>
                    <div className="relative">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                        <Image
                          src={president.avatar}
                          alt={president.name}
                          fill
                          className="rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4">
                      第56代 {president.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {president.name}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                      {president.message}
                    </p>
                    <div className="flex items-center gap-2 text-primary-600 group-hover:text-primary-700 transition-colors">
                      <span className="text-sm font-medium">
                        理事長所信を見る
                      </span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* その他のメンバー */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              理事メンバー・委員会メンバー
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {filteredMembers.length}名表示中
            </span>
          </div>

          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => {
              const Icon = category.icon;
              const count =
                category.id === "all"
                  ? allMembers.length - 1
                  : allMembers.filter((m) => m.category === category.id).length;

              return (
                <button
                  key={category.id}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon size={16} />
                  <span>{category.label}</span>
                  {count > 0 && (
                    <span
                      className={`text-xs ${
                        selectedCategory === category.id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      ({count})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* メンバーグリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* メンバーが見つからない場合 */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">該当するメンバーが見つかりません</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-50 via-purple-50 to-primary-50 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              一緒に活動しませんか？
            </h3>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              松原青年会議所では、地域の発展に貢献したい仲間を募集しています。
              あなたの力を地域のために活かしてみませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                入会について詳しく見る
                <ChevronRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-all"
              >
                まずは相談する
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
