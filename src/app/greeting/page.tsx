import React from "react";
import Overview from "../components/Overview";
import Image from "next/image";

const Greeting = () => {
  return (
    <>
      <Overview title="理事長所信" image="/greeting_mainimage.jpg" />
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 uppercase tracking-widest mt-10">
          理事長挨拶
        </h3>
        <div className="w-16 h-1 bg-[#009FE3] mx-auto mt-2"></div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/president-image.png"
          alt="理事長所信"
          width={816}
          height={1080}
          className="rounded-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="prose prose-lg">
          <h2 className="text-2xl font-bold mb-6">はじめに</h2>
          <p className="mb-4 leading-relaxed">
            １日の時間は、２４時間で割り当てられています。これは、年齢関係なく、生きているうちは、すべての人間に平等に与えられています。私は、時間が平等に与えられているからこそ、自分の目標や価値観に基づいて、効果的に時間を使うことが大切だと考えます。計画的に行動し、社会への奉仕、自己成長や仲間や家族との良好な関係構築などに時間を投資できる人こそが、私自身が目指す「像」であります。
          </p>
          <p className="mb-4 leading-relaxed">
            私は、2015 年に松原青年会議所に入会しました。当時 23
            歳で、社会に出て間もない頃、先輩たちが地域や組織のために躍動されておられるのに感銘を受け、10
            年の月日が経ちました。1970
            年の創立当初から「明るい豊かな社会」の実現を目指し、地域の方々から必要とされる団体として日々躍動し、時代の流れが変わろうとも、色褪せることなく存続し、今年で節目の
            55 周年を迎えます。
          </p>
          <p className="mb-4 leading-relaxed">
            また同じタイミングで、わたしたちが運動を展開する松原市は、来年に市政７０周年という記念すべき年を迎えます。その長い歴史の中で、松原青年会議所が５５年の間、松原市とともに歩んできたと考えてみると、とても感慨深く、これからも必要な存在であり続けられるように、邁進していくことが必要です。
          </p>
          <p className="mb-4 leading-relaxed">
            「青年会議所」という存在は、メンバーにとって、発展と成長の機会を大いに提供してくれる場であります。例えば、大勢の前で話をすることが苦手な人や、会社でのマネジメントがうまくいかない人など、人間だれしも生きている上で、不得意なことがあるのも事実です。そこで、前向きに
            JC
            運動・活動を行うことで、経験や失敗、そして気づきが生まれ、成長に結びつきます。
          </p>
          <p className="mb-4 leading-relaxed">
            その機会をメンバーが逃すことなく、時間は平等だからこそ、計画性をもって時間を活かす大切さを考え、目的や信念を共有し、結束力が高い組織体を作り、これからの明るい豊かな社会の実現を目指してまいりましょう。
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-12">55周年の歴史</h2>
          <p className="mb-4 leading-relaxed">
            本年度、松原青年会議所は、創立 55
            周年という記念すべき節目の年になります。歴代理事長をはじめとする、先輩諸兄姉がこの長い歴史を築いてこられたことに敬意を表します。周年を迎えるにあたり、これからも歴史と伝統を重んじながら、革新と成長への意欲をもって、先を見据えた記念式典の開催と
            JC
            運動を展開してまいります。また、運動によって、わたしたちの愛する「まつばら」がより魅力的なまちとなり、日本、そして世界中にむけて、大事な一歩を踏み出します。
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-12">
            子どもたちの未知なる可能性
          </h2>
          <p className="mb-4 leading-relaxed">
            これからの未来を背負っていく子どもたちは、実直で純粋な心を持っており、どのアングルから考えてみても、無限の可能性で満ち溢れています。そこで、子どもたちにとって、これからもより魅力ある人生を構築する為には、まずは、私たち青年会議所と同じ発展と成長の場を設けることが必要だと確信します。
          </p>
          <p className="mb-4 leading-relaxed">
            その為には、何事にも「挑戦する心」を育むことが重要であり、松原青年会議所としては、子どもたちが活躍できる場を広げ、幾度となく経験や苦悩を積み重ねることで、自分の限界を超えて成長できるように支援してまいります。そして、子どもならではの想像力の豊かさや好奇心が、今後の未来をより明るく照らしてくれることと確信しております。その可能性を、わたしたちが舵を取って、指針を示します。
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-12">むすびに</h2>
          <p className="mb-4 leading-relaxed">
            本年度のスローガンを「心を磨き
            人生を彩る」としました。松原青年会議所は、私にとって、心の道場であります。心を鍛錬しながら磨き続けることで、感情や思考に変化や気付きが生まれてきます。そして、人生を鮮やかに彩るためには、一度きりの人生だからこそ、何事にも積極的に行動することが大切です。本年度は、明るい豊かな社会の実現のために、まずはできることから、メンバーが一致団結の精神をもって、邁進してまいります。
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-12">【基本方針】</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>さらなる革新と成長をめざす５５周年</li>
            <li>明るい未来に繋がる青少年の育成</li>
            <li>的確かつ迅速な情報発信</li>
            <li>同心を持った人材開発とリーダーの育成</li>
            <li>仲間とともに「挑戦する心」を育む</li>
            <li>地域にとって強い影響を与える存在を目指す</li>
            <li>風通しが良く、円滑な LOM の運営</li>
            <li>メンバーの発展と成長の機会を常に提供する</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">【組織構築及び運営方針】</h2>
          <ol className="list-decimal pl-6">
            <li className="mb-4">
              <p className="font-semibold">
                まちづくり醸成室にまつり・広報発信委員会、会員開発・拡大委員会の設置
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>市民まつりや市民マラソンなどの運営協力を行います。</li>
                <li>
                  これからの組織運営のために、フォローアップと思いやりを大切にした会員開発及び拡大運動を行います。
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <p className="font-semibold">
                明るい未来創造室に青少年育成委員会の設置
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  無限の可能性をもった子供たちに、未来に繋がる事業の構築を行います。
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <p className="font-semibold">
                ブラッシュアップ室に創立５５周年委員会を設置
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  ５５周年の歴史と伝統に敬意を表し、さらなる革新と成長にむけた記念式典を開催します。
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Greeting;
