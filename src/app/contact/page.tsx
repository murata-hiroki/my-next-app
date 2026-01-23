"use client";
import React, { useState } from "react";
import Overview from "../components/Overview";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "送信に失敗しました"
      );
    }
  };

  const categories = [
    "入会について",
    "活動内容について",
    "イベントについて",
    "取材・メディア関連",
    "その他",
  ];

  return (
    <>
      <Overview title="お問い合わせ" image="/about_mainimage.jpg" />

      <main className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* 説明文 */}
          <div className="text-center mb-12">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              松原青年会議所へのお問い合わせは、下記フォームよりお願いいたします。
              <br />
              内容を確認の上、担当者より折り返しご連絡いたします。
            </p>
          </div>

          {/* 送信成功メッセージ */}
          {status === "success" && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-4">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-bold text-green-800 mb-1">
                  送信が完了しました
                </h3>
                <p className="text-green-700 text-sm">
                  お問い合わせいただきありがとうございます。
                  <br />
                  内容を確認の上、担当者より折り返しご連絡いたします。
                </p>
              </div>
            </div>
          )}

          {/* エラーメッセージ */}
          {status === "error" && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg flex items-start gap-4">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-bold text-red-800 mb-1">
                  送信に失敗しました
                </h3>
                <p className="text-red-700 text-sm">
                  {errorMessage || "しばらく時間をおいて再度お試しください。"}
                </p>
              </div>
            </div>
          )}

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="example@email.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="090-1234-5678"
              />
            </div>

            {/* お問い合わせ種別 */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
              >
                <option value="">選択してください</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* プライバシーポリシー同意 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                ご入力いただいた個人情報は、お問い合わせへの対応および確認のためのみに利用いたします。
              </p>
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    送信する
                  </>
                )}
              </button>
            </div>
          </form>

          {/* 補足情報 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">お問い合わせについて</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                ・ 通常、3営業日以内にご返信いたします。
              </li>
              <li>
                ・ お急ぎの場合は、お電話でのお問い合わせもご検討ください。
              </li>
              <li>
                ・ 内容によっては、お時間をいただく場合がございます。
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
