"use client";

import React from "react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img src="/jc_logo.png" alt="JCI Matsubara Logo" className="h-16" />
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "blog", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-[#009FE3] font-medium transition-colors"
                >
                  {item === "home"
                    ? "ホーム"
                    : item === "about"
                    ? "私たちについて"
                    : item === "services"
                    ? "活動内容"
                    : item === "blog"
                    ? "活動報告"
                    : "お問い合わせ"}
                </button>
              </li>
            ))}
            <button
              onClick={() => alert("入会に関する詳細情報をお送りいたします。")}
              className="bg-[#009FE3] text-white px-6 py-2 rounded-md hover:bg-[#0082BA] transition-colors"
            >
              入会案内
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
