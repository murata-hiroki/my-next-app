"use client";
import React from "react";
import Overview from "../components/Overview";
import Image from "next/image";

const Greeting = () => {
  return (
    <>
      <Overview title="理事長所信" image="/greeting_mainimage.jpg" />

      {/* mainタグで主要コンテンツを囲み、左右に余白を追加 */}
      <main className="px-4 sm:px-6 lg:px-8">
        {/* === タイトルエリア === */}
        <div className="text-center my-12 md:my-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-widest">
            理事長挨拶
          </h1>
          <div className="w-16 h-1 bg-[#009FE3] mx-auto mt-2"></div>
        </div>

        {/* === 理事長の写真エリア === */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/hukayama.jpg"
              alt="第56代理事長 深山大地"
              width={816}
              height={1080}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* === スローガン === */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 mb-2">2026年度スローガン</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            REスタート
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            ～「あれ」がわかる組織へ～
          </p>
        </div>

        {/* === 文章エリア === */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-base md:prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">～はじめに～</h2>
            <p className="mb-4 leading-relaxed">
              私が松原青年会議所に入会したのが2019年、当時の青年会議所メンバーは私の中での「ヒーロー」でした。私が青年会議所を理解していない時、当時の先輩に一度オブザーバーで良いので定例会に参加してみては？とアドバイスを頂き、11月定例会のオブザーバーに参加した記憶があります。そこでは１つの議案に対してメンバーの意見が飛び交い、この例会で仕事に対しての向き合い方について改めて考えさせられた記憶があります。そしてこの例会を通じで、仲間と切磋琢磨によって得られる気付きや自己成長に感銘を受け、翌年に青年会議所の扉を開きました。
            </p>
            <p className="mb-4 leading-relaxed">
              JAYCEE活動をする上で大切にしているものがあります。１つは「楽しむ気持ち」もう１つは「コミュニケーション」です。「楽しむ気持ち」ですが、例会を担当するにあたり、自分が楽しいと思わなければ、例会の成功は出来ません。高い志を持ち、挑戦を常日頃から意識を行い、その中で得られる「楽しい」を見つける事が、成功の近道になります。さらに「コミュニケーション」を徹底する事でJAYCEE活動の輪が活発になります。人は１人で生きていけないと同じで、１人で例会を作っても問題の核心を深く掘り下げる事が出来ません。コミュニケーションを同志と取る事で、多角的な視点の取り組みができ、同志一同、意識の統一とアラインメントが獲得できます。
            </p>
            <p className="mb-4 leading-relaxed">
              この「楽しむ気持ち」が導く挑戦の熱量と、「コミュニケーションがもたらす意識の統一」を原動力として、同志一同、約束を固め、明るい豊かな社会の実現に向けたJAYCEE活動の輪を、活発かつ力強く推し進めていくことを誓います。
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">～「あれ」～</h2>
            <p className="mb-4 leading-relaxed">
              「あれ、例の、あの件」といった極めて簡略化された言葉や非言語的なサインだけで意思疎通が成立する組織は、コミュニケーションの効率が極めて高い、成熟した集団の証です。
            </p>
            <p className="mb-4 leading-relaxed">
              「あれ」という一言が通用するのは、話すまでもない共通認識がメンバー間に徹底して浸透しています。私は仕事から家に帰るとお酒を飲みます。妻は私が着替えて戻ってくるとまずお酒を私に差し出します。これは強固な信頼関係の上に成り立っており、相手が何を求めているかを察知し、足りない情報や行動を自発的に補完する当事者意識が根付いています。「あれ」と言われたら「これ」だろうと、互いの役割を超えて動ける相互理解があるのです。
            </p>
            <p className="mb-4 leading-relaxed">
              これが組織で出来るのであれば、これほど良い組織はないのでしょうか。
            </p>
            <p className="mb-4 leading-relaxed">
              同志間の深い相互理解を基盤としつつ、理想的なコミュニケーションを実現し、理想的な組織へと結びつけていきます。
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">
              ～子どもたちの未来～
            </h2>
            <p className="mb-4 leading-relaxed">
              「子どもたちの未来が想像よりも幸せで、またその子供たちの未来も君よりもっと幸せでありますよう」これは私が好きなアーティストの一部の歌詞を抜粋したものです。私は幼少期、毎日外で遊ぶのが当たり前だと思っていました。現在はどうでしょうか？地球温暖化に伴い、熱中症警戒アラートがなり外で遊べなくなり、非認知能力を育む事が出来なくなっています。その結果、子どもたちの「生きる力」が弱体化され、直接触れ合う事で身に付いていた感受性や他人への思いやりなどの内面的成長が遮断されています。
            </p>
            <p className="mb-4 leading-relaxed">
              この様な状況を変化させるには、個人の対策から社会全体でのシステムチェンジへと意識を転換し、行動を推進する必要があります。成長を促すにあたり、季節や時間帯を考えるのは勿論の事、実体験型学習や多様な人々と直接的コミュニケーションを取る事で、非認知能力が強化され子どもたちの「生きる力」が強化されます。これらの機会を失わせないことが、私たち大人が次世代の幸福な未来に投資する最も重要な手段と確信しています。
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">～環境改善～</h2>
            <p className="mb-4 leading-relaxed">
              松原青年会議所の入会歴で5年を越える人数はわずか４人で、来年には２人まで減少します。松原青年会議所における「入会歴5年超のメンバーが激減する」という危機的な状況は、「組織への理解不足による早期退会」と「入会に至らない障壁」という、二つの根深い問題に起因しています。
            </p>
            <p className="mb-4 leading-relaxed">
              この状況を改善し、組織を再び強固にするため、入会後のメンバーが存在意義を見失わないよう、組織の居心地と成長実感を提供しなければなりません。メンバーがここにいる定義を見出し、自己成長と組織への貢献が直結すると確信する事で、活動の継続意義が高まり、５年超メンバーの激減を根本的に解決します。
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">～むすびに～</h2>
            <p className="mb-4 leading-relaxed">
              松原青年会議所が直面する「経験者（５年超メンバー）の激減」という危惧は、私が掲げるスローガンの大きな壁です。しかし、楽しむ気持ちが導く挑戦の熱量と、コミュニケーションがもたらす意識の統一を、松原青年会議所活動の揺るぎない原動力とし、この力をもって、松原青年会議所をREスタートさせます。
            </p>
            <p className="mb-4 leading-relaxed">
              同志間の強固な信頼関係を築き、「あれ」がわかる組織へと変革します。この信念のもと、明るい豊かな社会の実現にむけたJAYCEE活動の輪を、活動かつ力強く推し進めていきます。
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">【基本方針】</h2>
            <ul className="list-disc pl-6 mb-8">
              <li>「あれ」で動き出す強固なアライメント</li>
              <li>楽しむ気持ちが導く挑戦</li>
              <li>成長を確約するプログラムの推進</li>
              <li>「生きる力」を育む未来への投資</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">
              【組織構築及び運営方針】
            </h2>
            <ol className="list-decimal pl-6">
              <li className="mb-4">
                <p className="font-semibold">環境改善委員会の設置</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    市民まつりをはじめ内部環境を根深く改善できる運営協力を行います。
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                <p className="font-semibold">ウェルビーイング推進委員会の設置</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    「生きる力」を育み、未来に繋がる事業の構築を行い、その未来の子どもたちも喜んで頂ける継続事業運営協力を行います。
                  </li>
                </ul>
              </li>
            </ol>

            {/* === 署名エリア === */}
            <div className="text-right mt-16 mb-8">
              <p className="text-lg text-gray-600 mb-1">
                一般社団法人松原青年会議所
              </p>
              <p className="text-xl font-bold">第56代理事長 深山 大地</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Greeting;
