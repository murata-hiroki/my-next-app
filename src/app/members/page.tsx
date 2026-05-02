"use client";

import { useState, useEffect } from "react";
import {
  Lock,
  Calendar,
  ClipboardList,
  FolderOpen,
  Bell,
  ChevronRight,
  ChevronLeft,
  LogOut,
  Clock,
  MapPin,
  FileText,
  Download,
} from "lucide-react";
import Link from "next/link";

// 型定義
interface Meeting {
  title: string;
  date: string;
  time: string;
  place: string;
  agenda: string[];
}

interface SubmissionItem {
  committee: string;
  content: string;
  deadline: string;
}

interface Announcement {
  title: string;
  date: string;
  content: string;
}

interface MembersData {
  nextMeeting: Meeting;
  submissionSchedule: SubmissionItem[];
  announcements: Announcement[];
}

interface DocumentItem {
  name: string;
  file: string;
  date?: string;
  description?: string;
}

interface DocumentsData {
  minutes: DocumentItem[];
  forms: DocumentItem[];
  manuals: DocumentItem[];
  schedule: DocumentItem[];
}

// メニュー項目
const menuItems = [
  { id: "meeting", label: "次回理事会", icon: Calendar, color: "bg-blue-500" },
  { id: "schedule", label: "上程スケジュール", icon: ClipboardList, color: "bg-orange-500" },
  { id: "documents", label: "資料ダウンロード", icon: FolderOpen, color: "bg-green-500" },
  { id: "announcements", label: "お知らせ", icon: Bell, color: "bg-purple-500" },
];

// パスワード
const MEMBER_PASSWORD = "matsubara2026";

export default function MembersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [membersData, setMembersData] = useState<MembersData | null>(null);
  const [documentsData, setDocumentsData] = useState<DocumentsData | null>(null);
  const [currentPage, setCurrentPage] = useState<string>("menu");
  const [activeDocTab, setActiveDocTab] = useState<string>("minutes");

  // 認証状態の確認
  useEffect(() => {
    const auth = localStorage.getItem("mjc_member_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  // データの取得
  useEffect(() => {
    if (isAuthenticated) {
      fetch("/members/data.json")
        .then((res) => res.json())
        .then((data) => setMembersData(data))
        .catch((err) => console.error("データ取得エラー:", err));

      fetch("/members/documents.json")
        .then((res) => res.json())
        .then((data) => setDocumentsData(data))
        .catch((err) => console.error("資料データ取得エラー:", err));
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MEMBER_PASSWORD) {
      localStorage.setItem("mjc_member_auth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("パスワードが正しくありません");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("mjc_member_auth");
    setIsAuthenticated(false);
    setCurrentPage("menu");
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  // ローディング中
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  // 未認証時：ログイン画面
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 overflow-hidden">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={40} className="text-primary-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">会員専用ページ</h1>
              <p className="text-gray-500 mt-2">パスワードを入力してください</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="パスワード"
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors active:bg-primary-800"
              >
                ログイン
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ページタイトル取得
  const getPageTitle = () => {
    if (currentPage === "menu") return "会員専用ページ";
    const item = menuItems.find((m) => m.id === currentPage);
    return item?.label || "会員専用ページ";
  };

  // 認証済み：ダッシュボード
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-primary-600 text-white py-3 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          {currentPage !== "menu" ? (
            <button
              onClick={() => setCurrentPage("menu")}
              className="flex items-center gap-1 text-primary-100 hover:text-white transition-colors p-2 -ml-2 rounded-lg active:bg-primary-700"
            >
              <ChevronLeft size={24} />
              <span className="text-sm">戻る</span>
            </button>
          ) : (
            <h1 className="text-lg font-bold">{getPageTitle()}</h1>
          )}

          {currentPage === "menu" && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors p-2 -mr-2 rounded-lg active:bg-primary-700"
            >
              <LogOut size={20} />
              <span className="text-sm">ログアウト</span>
            </button>
          )}

          {currentPage !== "menu" && (
            <h1 className="text-lg font-bold flex-1 text-center mr-10">{getPageTitle()}</h1>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* メニュー画面 */}
        {currentPage === "menu" && (
          <div className="space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="w-full bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-900 text-lg">{item.label}</p>
                  </div>
                  <ChevronRight size={24} className="text-gray-400" />
                </button>
              );
            })}

            {/* クイックリンク */}
            <div className="pt-4 border-t border-gray-200 mt-6">
              <p className="text-sm text-gray-500 mb-3">クイックリンク</p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="bg-white rounded-xl p-4 text-center hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-sm"
                >
                  <span className="text-gray-700 font-medium">事務局へ連絡</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white rounded-xl p-4 text-center hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-sm"
                >
                  <span className="text-gray-700 font-medium">公式サイトTOP</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 次回理事会 */}
        {currentPage === "meeting" && membersData?.nextMeeting && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="bg-primary-50 rounded-xl p-5">
              <h3 className="font-bold text-primary-900 text-xl mb-4">
                {membersData.nextMeeting.title}
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <Clock size={22} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">日時</p>
                    <p className="font-medium">{membersData.nextMeeting.date} {membersData.nextMeeting.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">場所</p>
                    <p className="font-medium">{membersData.nextMeeting.place}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-100">
              <p className="font-bold text-gray-900 mb-3">議題</p>
              <ul className="space-y-3">
                {membersData.nextMeeting.agenda.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 上程スケジュール */}
        {currentPage === "schedule" && membersData?.submissionSchedule && (
          <div className="space-y-3">
            {membersData.submissionSchedule.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-bold text-gray-900 text-lg">{item.committee}</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
                    〆 {formatDate(item.deadline)}
                  </span>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* 資料ダウンロード */}
        {currentPage === "documents" && documentsData && (
          <div className="space-y-4">
            {/* タブ */}
            <div className="flex gap-2 flex-wrap">
              {[
                { id: "minutes", label: "議事録" },
                { id: "forms", label: "申請書" },
                { id: "manuals", label: "マニュアル" },
                { id: "schedule", label: "スケジュール" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDocTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeDocTab === tab.id
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-600 active:bg-gray-100 shadow-sm"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ファイル一覧 */}
            <div className="space-y-2">
              {documentsData[activeDocTab as keyof DocumentsData]?.map((doc, index) => (
                <a
                  key={index}
                  href={`/members/${activeDocTab}/${doc.file}`}
                  download
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText size={24} className="text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    {doc.description && (
                      <p className="text-sm text-gray-500 mt-0.5">{doc.description}</p>
                    )}
                  </div>
                  <Download size={22} className="text-gray-400 flex-shrink-0" />
                </a>
              ))}
              {documentsData[activeDocTab as keyof DocumentsData]?.length === 0 && (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <p className="text-gray-500">資料がありません</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* お知らせ */}
        {currentPage === "announcements" && membersData?.announcements && (
          <div className="space-y-3">
            {membersData.announcements.map((announcement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-5">
                <p className="text-sm text-primary-600 font-medium mb-1">
                  {formatDate(announcement.date)}
                </p>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
