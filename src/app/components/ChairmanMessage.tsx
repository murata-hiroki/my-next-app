import React from "react";

const ChairmanMessage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            理事長からのメッセージ
          </h2>
          <blockquote className="text-xl text-gray-600 italic mb-8">
            私たちのチャリティーへようこそ。私たちの使命は、支援を必要とする人々をサポートし、より良い未来を創ることです。皆様の支援が私たちの目標達成には不可欠です。共に歩んでくださり、ありがとうございます。
          </blockquote>
          <p className="text-lg font-semibold text-gray-900">
            - 理事長, セイバー財団
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
