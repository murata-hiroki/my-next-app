"use client";

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-widest">
            ABOUT
          </h2>
          <p className="text-gray-600 text-sl">青年会議所について</p>
          <div className="w-16 h-1 bg-[#009FE3] mx-auto mt-2"></div>
        </div>

        {/* セクション1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-16">
          {/* 左の画像 */}
          <div className="md:w-1/2">
            <img
              src="/about-image1.jpg"
              alt="交通インフラ"
              className="w-full rounded-lg"
            />
          </div>
          {/* 右のテキスト */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              明るい豊かな社会の実現
            </h3>
            <p className="text-gray-600 leading-relaxed">
              松原青年会議所は、１９７０年９月２０日に創設され、全盛期には１００名前後のメンバーが在籍していました。しかしながら現在は、１７名（２０２５年２月現在）程度のメンバー数となり、年齢層の割合では、３６歳以上のメンバーが３割、３５歳以下のメンバーは７割と比較的若い世代が多く、さらに女性会員も増えてきている青年会議所となっています。メンバー数は少ないですが、一致団結し、多くの事業を開催するなど、子ども達のため、まちのために、日夜汗をかいて、全力で活動しています。当青年会議所の特徴の一つとしては、行政、企業、各種団体、先輩諸兄の皆様との協働させていただき、運動が幅広く展開することができています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
