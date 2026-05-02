// 新着情報のデータ型定義
export type NewsItem = {
  id: number;
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  year: string;
  readTime: string;
};

// 新着情報のデータ（WordPress から移行）
export const newsData: NewsItem[] = [
  {
    id: 1604,
    image: "/news-images/202605_3月定例会_260502_1.jpg",
    alt: "2026年度 3月定例会を開催しました（防災講義）",
    category: "事業報告",
    title: "2026年度 3月定例会を開催しました（防災講義）",
    description:
      "松原青年会議所の3月定例会を開催し、松原防災士会理事長 新田剛志様をはじめ防災士会メンバーの皆様に防災についてご講義いただきました。防災クイズも交えながら、いざという時に自分や家族の命を守るための学びを深めました。",
    content: `<p>先日、松原青年会議所の<strong>3月定例会</strong>を開催しました。今月のテーマは<strong>「防災」</strong>。<strong>松原防災士会理事長 新田剛志様</strong>をはじめ、防災士会メンバーの皆様にご講義をいただきました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_3月定例会_260502_1.jpg" alt="3月定例会の様子"/></figure>

<p>講義では、地震や水害をはじめ身近に起こり得る災害について、専門的な知見をもとに分かりやすくお話しいただきました。また、<strong>防災クイズ</strong>を通じて参加メンバーが楽しみながら知識を確認できる時間もあり、改めて自分の防災意識を見つめ直す良い機会となりました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_3月定例会_260502_2.jpg" alt="防災クイズの様子"/></figure>

<p><strong>いざという時のために防災を学んでおくこと</strong>は、自分自身はもちろん、大切な家族や周囲の人の命を守ることに直結します。今回の学びを一人ひとりが家庭や職場へ持ち帰り、日頃の備えへとつなげていくことが大切だと感じました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_3月定例会_260502_3.jpg" alt="防災講義の様子"/></figure>

<p>ご多忙の中ご講義をいただきました松原防災士会理事長 新田剛志様、防災士会メンバーの皆様、誠にありがとうございました。メンバー一同、大変有意義な学びをいただきました。</p>

<p>松原青年会議所は、今後も地域の安全・安心に資する取り組みを学び、まちづくりに活かしてまいります。</p>`,
    author: "松原青年会議所",
    date: "2026年5月2日",
    year: "2026",
    readTime: "2分で読める",
  },
  {
    id: 1603,
    image: "/news-images/202605_こども探検隊_260502_1.jpg",
    alt: "「こども探検隊」に協力させていただきました",
    category: "事業報告",
    title: "「こども探検隊」に協力させていただきました",
    description:
      "NPO法人子育て支援ぽけっと様・松原市人権交流センター様が主催する体験型イベント「こども探検隊」に松原青年会議所も協力させていただきました。地域の防災センターや八幡神社、河合のだんじり、株式会社合通カシロジ様の倉庫見学など、子どもたちがまちを学ぶ一日となりました。",
    content: `<p>先日、<strong>NPO法人子育て支援ぽけっと</strong>様・<strong>松原市人権交流センター</strong>様が主催する体験型イベント「<strong>こども探検隊</strong>」に、松原青年会議所も協力団体として参加させていただきました。</p>

<p>「こども探検隊」は、地域資源を活用しながら小学生がまちの安全や産業について学ぶ体験型のプログラムで、これまでにも防災探検や地元の野菜収穫など、多彩なテーマで開催されてきました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_こども探検隊_260502_1.jpg" alt="こども探検隊の様子"/></figure>

<p>今回は、街の案内人さんと一緒に、<strong>防災センター</strong>・<strong>八幡神社</strong>・<strong>河合のだんじり</strong>などを巡り、地域の歴史や防災について学びました。子どもたちは普段なかなか入る機会のない場所を熱心に見学し、案内人さんのお話に真剣に耳を傾けていました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_こども探検隊_260502_2.jpg" alt="街の案内人さんと巡る様子"/></figure>

<p>さらに、<strong>株式会社合通カシロジ</strong>様のご協力のもと、物流倉庫の見学もさせていただきました。普段目にすることのない大きな倉庫や物流の仕組みに子どもたちは興味津々。お菓子の掴み取り体験もあり、みんなとても楽しそうな笑顔を見せてくれました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_こども探検隊_260502_3.jpg" alt="倉庫見学の様子"/></figure>

<figure class="wp-block-image size-large"><img src="/news-images/202605_こども探検隊_260502_4.jpg" alt="お菓子の掴み取りの様子"/></figure>

<p><strong>子どもたちが自分たちの街のことを知るきっかけになる事業</strong>は非常に有益であり、未来のまちを担う子どもたちが地域に愛着を持って育っていくためにも、こうした取り組みが今後も続いていくことを願っています。</p>

<p>主催の NPO法人子育て支援ぽけっと様、松原市人権交流センター様、ご協力いただいた株式会社合通カシロジ様、街の案内人の皆様、そしてご参加いただいた子どもたち・保護者の皆様、本当にありがとうございました。</p>

<p>松原青年会議所は、これからも地域の子どもたちの学びと成長を支える活動に積極的に関わってまいります。</p>`,
    author: "松原青年会議所",
    date: "2026年5月2日",
    year: "2026",
    readTime: "3分で読める",
  },
  {
    id: 1602,
    image: "/news-images/202605_大和川クリーン作戦_260502_1.jpg",
    alt: "大和川クリーン作戦に参加しました",
    category: "事業報告",
    title: "大和川クリーン作戦に参加しました",
    description:
      "大和川のゴミ清掃活動「大和川クリーン作戦」に松原青年会議所メンバーで参加しました。様々な団体や一般の方々と共に、地域を流れる大和川の美化に汗を流しました。",
    content: `<p>先日、大和川のゴミ清掃活動<strong>「大和川クリーン作戦」</strong>に松原青年会議所メンバーで参加しました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_大和川クリーン作戦_260502_1.jpg" alt="大和川クリーン作戦の様子"/></figure>

<p>当日は、地域の様々な団体の皆様や一般の参加者の方々と一緒に、大和川の河川敷に落ちているゴミを拾い集めました。普段は気づかないような場所にも数多くのゴミがあり、皆で協力しながら一つひとつ丁寧に回収していきました。</p>

<p><strong>自分たちの地域をきれいに保つ</strong>ということは、とても意義のある活動だと改めて感じます。普段見慣れた川の景色も、自分たちの手で美しく整えることで、より愛着が湧いてきます。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_大和川クリーン作戦_260502_2.jpg" alt="参加者で協力して清掃する様子"/></figure>

<p>世代や所属の垣根を越えて、地域を想う多くの方々と一緒に汗を流せたことは、大変貴重な経験となりました。ご一緒くださった皆様、ありがとうございました。</p>

<p>松原青年会議所は、これからも地域の自然環境を大切にし、住む人にとってより良いまちづくりに取り組んでまいります。</p>`,
    author: "松原青年会議所",
    date: "2026年5月2日",
    year: "2026",
    readTime: "2分で読める",
  },
  {
    id: 1601,
    image: "/news-images/202605_新年互礼会_260502_1.jpg",
    alt: "2026年度 新年互礼会を開催しました",
    category: "お知らせ",
    title: "2026年度 新年互礼会を開催しました",
    description:
      "松原青年会議所2026年度の新年互礼会を開催しました。先輩方や地域団体の皆様、他LOMの方々に今年度メンバーをご紹介し、理事長より本年度の方針と熱い思いをお伝えしました。",
    content: `<p>先日、松原青年会議所2026年度の<strong>新年互礼会</strong>を開催しました。日頃よりお世話になっている先輩方、地域の各種団体の皆様、そして他LOMの皆様にお集まりいただき、本年度のスタートを盛大に祝うことができました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_新年互礼会_260502_1.jpg" alt="新年互礼会の様子"/></figure>

<p>会では、まず本年度を共に駆け抜ける<strong>2026年度メンバー</strong>を一人ひとりご紹介させていただきました。新たな仲間を含めたメンバー全員で皆様にご挨拶ができ、身の引き締まる思いです。</p>

<p>続いて理事長より、本年度の<strong>運動方針</strong>と松原のまち・未来の子どもたちに対する熱い思いを語らせていただきました。先輩方が築き上げてこられた歴史と伝統に敬意を払いながら、新たな一歩を踏み出す決意を皆様の前でお伝えできたことは、本年度の大きな励みとなります。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_新年互礼会_260502_2.jpg" alt="理事長挨拶の様子"/></figure>

<p>ご多忙の中ご臨席を賜りました皆様、誠にありがとうございました。2026年度の松原青年会議所は、頂戴したご声援を力に変え、明るい豊かな社会の実現に向けてメンバー一同力を合わせて活動してまいります。本年度もどうぞよろしくお願いいたします。</p>`,
    author: "松原青年会議所",
    date: "2026年5月2日",
    year: "2026",
    readTime: "2分で読める",
  },
  {
    id: 1600,
    image: "/news-images/202605_市長表敬_260502_1.jpg",
    alt: "2026年度 正副メンバーで市長表敬訪問を行いました",
    category: "お知らせ",
    title: "2026年度 正副メンバーで市長表敬訪問を行いました",
    description:
      "2026年度の正副理事長メンバーで松原市長への表敬訪問を行いました。今年度も松原青年会議所は地域のために全力で活動してまいります。",
    content: `<p>先日、2026年度の正副理事長メンバーで<strong>松原市長への表敬訪問</strong>を行いました。</p>

<figure class="wp-block-image size-large"><img src="/news-images/202605_市長表敬_260502_1.jpg" alt="市長表敬訪問の様子"/></figure>

<p>市長には、本年度の松原青年会議所の活動方針や事業計画についてご報告させていただき、引き続き松原市と連携しながら地域の発展に尽力していくことをお伝えしました。お忙しい中お時間を頂戴し、誠にありがとうございました。</p>

<p>2026年度も、松原青年会議所は<strong>「明るい豊かな社会の実現」</strong>を目指し、メンバー一同力を合わせて活動を頑張ってまいります。地域の皆様、関係各位のご支援・ご協力を、本年度もどうぞよろしくお願いいたします。</p>

<p>松原青年会議所は、これからも松原のまちと未来の子どもたちのために、全力で挑戦し続けます！</p>`,
    author: "松原青年会議所",
    date: "2026年5月2日",
    year: "2026",
    readTime: "1分で読める",
  },
  {
    id: 1504,
    image: "/news-images/202507_S__71770264-723x1024.jpg",
    alt: "🎉 第51回松原市民まつり🎉",
    category: "お知らせ",
    title: "🎉 第51回松原市民まつり🎉",
    description: "今年も第51回松原市民まつりが9月6日(土)に開催されます！松原青年会議所がメインに企画・運営をさせていただいております！ <img src=\"https://mjc.ne.jp/wp-content/uploads/2025/07/S__71770264-72",
    content: `<p>今年も第51回松原市民まつりが9月6日(土)に開催されます！松原青年会議所がメインに企画・運営をさせていただいております！</p>

<figure class="wp-block-image size-large"><img src="/news-images/202507_S__71770264-723x1024.jpg" alt="" class="wp-image-1505"/></figure>

<p>今年のテーマは、「みんなで繋げよう！未来の子どもたちの為に！」</p>

<p>当日は、子どもや大人も楽しめるイベントが盛りだくさん！</p>

<p>✨ 主な見どころ ✨</p>

<p>* 街コンLOVE！💖 25歳〜40歳限定の出会いのイベントも！</p>

<p>* ニンテンドープリベイトカード争奪戦！ 水てっぽう対決で盛り上がろう！🔫　※以下のQRコードからご応募ください</p>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2025/07/S__71770263-683x1024.png" alt="" class="wp-image-1506"/></figure>

<p>* 豪華賞品GETのチャンス！ 総額30万円のビンゴ大会も開催！1等海外旅行、2等ディズニーペアチケットなど！</p>

<p>* 阪南大学主催のスケートボードイベント 🛹</p>

<p>* 縁日＆屋台 🏮 キッチンカーや食事ブース、縁日遊びも楽しめます！</p>

<p>* ダンスやフラダンスなど地域の魅力ある芸能フェスティバル💃</p>

<p>時間については、12:00〜20:00 (パレードは11:00から12時まで！)</p>

<p>場所: 松原中央公園ほか</p>

<p>ご家族、お友達、みんなで遊びに来てくださいね！<br>思い出に残る一日を一緒に作りましょう！</p>

<p></p>`,
    author: "松原青年会議所",
    date: "2025年7月27日",
    year: "2025",
    readTime: "3分で読める",
  },
  {
    id: 1500,
    image: "/news-images/202507_5db2401af4e00f628f644b83c39c97fd-1024x768.jpg",
    alt: "7月定例会は異業種交流会！🤝✨",
    category: "お知らせ",
    title: "7月定例会は異業種交流会！🤝✨",
    description: "先日、松原青年会議所の7月定例会を開催しました！今回は、メンバーだけでなく、地域からたくさんのオブザーバーの方々にもご参加いただき、異業種交流会を兼ねたスペシャルな会に！🥳 「JCってどんな活動してるの？🤔」そんな疑問にも楽しくお答えできるよう、講師には一般社団法人丹波青年会議所2024年度...",
    content: `<p>先日、松原青年会議所の<strong>7月定例会</strong>を開催しました！今回は、メンバーだけでなく、地域から<strong>たくさんのオブザーバーの方々</strong>にもご参加いただき、<strong>異業種交流会</strong>を兼ねたスペシャルな会に！🥳</p>

<p>「JCってどんな活動してるの？🤔」そんな疑問にも楽しくお答えできるよう、講師には<strong>一般社団法人丹波青年会議所2024年度ご卒業の石川毅様</strong>をお招きし、熱いご講演をいただきました！👏</p>

<figure class="wp-block-image size-large is-resized"><img src="/news-images/202507_5db2401af4e00f628f644b83c39c97fd-1024x768.jpg" alt="" class="wp-image-1502" style="width:391px;height:auto"/></figure>

<p>講演後の異業種交流会では、テーブルごとに<strong>地域が抱える課題</strong>について「どうすればもっと良くなるだろう？」と真剣かつ和やかに意見交換を行いました。💡 地域を良くするためのアイデアや、JCの魅力について語り合い、あっという間の時間でしたね！😊</p>

<p>肩肘張らずに、地域について語り合える温かい定例会となりました。ご参加くださった皆様、そして石川毅様、本当にありがとうございました！</p>

<figure class="wp-block-image"><img alt=""/></figure>

<p>松原青年会議所は、これからも地域の未来のために、そして新しい仲間との出会いを大切に活動していきます！🙌</p>`,
    author: "松原青年会議所",
    date: "2025年7月27日",
    year: "2025",
    readTime: "2分で読める",
  },
  {
    id: 1465,
    image: "/news-images/202505_image-2.png",
    alt: "5/18 わんぱく相撲　松原場所 開催のお知らせ",
    category: "お知らせ",
    title: "5/18 わんぱく相撲　松原場所 開催のお知らせ",
    description: "📢 第40回 #わんぱく相撲#まつばら場所 開催決定！ 📢",
    content: `<p>📢 第40回 <a href="https://www.instagram.com/explore/tags/%E3%82%8F%E3%82%93%E3%81%B1%E3%81%8F%E7%9B%B8%E6%92%B2/">#わんぱく相撲</a><a href="https://www.instagram.com/explore/tags/%E3%81%BE%E3%81%A4%E3%81%B0%E3%82%89%E5%A0%B4%E6%89%80/">#まつばら場所</a> 開催決定！ 📢</p>

<p>5/18(日) <a href="https://www.instagram.com/explore/tags/%E6%9F%B4%E7%B1%AC%E7%A5%9E%E7%A4%BE/">#柴籬神社</a> で小学生対象のわんぱく相撲が今年も開催されます💪</p>

<figure class="wp-block-image size-full"><img src="/news-images/202505_image-2.png" alt="" class="wp-image-1466"/></figure>

<p>豪華景品やキッチンカーも登場✨ <strong><span class="ystdb-inline--larger-sp">参加資格は松原市在住の小学生！5/12(月)締切です🕊️</span></strong><br>是非 以下のQRコードからご登録お願い致します🔥</p>

<figure class="wp-block-image size-full"><img src="https://mjc.ne.jp/wp-content/uploads/2025/05/QR_820244.png" alt="" class="wp-image-1467"/></figure>

<p><a href="https://docs.google.com/forms/d/1WCBtgUB6PD9ykzHozu4r1ajgfUf1RoeRnRY2ROlhjRI/edit">https://docs.google.com/forms/d/1WCBtgUB6PD9ykzHozu4r1ajgfUf1RoeRnRY2ROlhjRI/edit</a> ⇐こちらからも登録可能です！</p>

<p>相撲って、体を強くするだけじゃなく、 礼儀も学べるし、最後まであきらめない気持ちも身につきます💪友達と一緒に出場して、思い出作りましょう！🌟</p>

<p></p>`,
    author: "松原青年会議所",
    date: "2025年5月1日",
    year: "2025",
    readTime: "3分で読める",
  },
  {
    id: 1460,
    image: "/news-images/202505_image-1.png",
    alt: "2025年4月定例会 創立55周年記念！澤井宏文市長ご講演「これまでの松原市の歩みと周年に対する想い」",
    category: "お知らせ",
    title: "2025年4月定例会 創立55周年記念！澤井宏文市長ご講演「これまでの松原市の歩みと周年に対する想い」",
    description: "【創立55周年記念！澤井宏文市長にご講演いただきました🌸】 松原青年会議所4月定例会では、特別講師として澤井宏文市長をお迎えしました！ <img src=\"ht",
    content: `<p>【創立55周年記念！澤井宏文市長にご講演いただきました🌸】</p>

<p>松原青年会議所4月定例会では、特別講師として澤井宏文市長をお迎えしました！</p>

<figure class="wp-block-image size-full"><img src="/news-images/202505_image-1.png" alt="" class="wp-image-1462"/></figure>

<p><br>澤井市長は、なんと私たちの先輩！第39代松原青年会議所理事長を務められた方です✨</p>

<p>今回の定例会は、創立55周年を迎えた私たちが、未来の60周年、70周年へと繋いでいくために、「周年の重要性」を学ぶ貴重な機会となりました。</p>

<p>澤井市長の市政における豊富なご経験と地域に対する熱い想い。</p>

<p>周年事業の成功、そしてその先の未来を見据えることの大切さを、改めて深く心に刻みました。</p>

<p>松原市政についてのお話も伺い、私たちが住む街への理解も深まりました。<br>澤井市長、素晴らしいご講演をありがとうございました！</p>

<p></p>

<p></p>`,
    author: "松原青年会議所",
    date: "2025年5月1日",
    year: "2025",
    readTime: "2分で読める",
  },
  {
    id: 1445,
    image: "/news-images/202504_S__130875396_0-1-1024x768.jpg",
    alt: "2025年　3月定例会「リーダーから学ぶ社会経験！」",
    category: "お知らせ",
    title: "2025年　3月定例会「リーダーから学ぶ社会経験！」",
    description: "先日、松原青年会議所3月定例会を開催いたしました！ 今回の講師は、私たち松原JCの誇るべき先輩であり、株式会社アレックス代表取締役としてご活躍されている大浦先輩✨ さらに、数多くの奉仕団体でも第一線でご活躍されており、まさに地域のリーダーです！ <!-- wp:image {\"id",
    content: `<p>先日、松原青年会議所3月定例会を開催いたしました！</p>

<p>今回の講師は、私たち松原JCの誇るべき先輩であり、株式会社アレックス代表取締役としてご活躍されている大浦先輩✨</p>

<p>さらに、数多くの奉仕団体でも第一線でご活躍されており、まさに地域のリーダーです！</p>

<figure class="wp-block-image size-large is-resized"><img src="/news-images/202504_S__130875396_0-1-1024x768.jpg" alt="" class="wp-image-1449" style="width:580px;height:auto"/></figure>

<p>今回の定例会は、私たちが地域を牽引するリーダーとして、どのように向き合うべきかを改めて深く考える機会とするため開催いたしました。</p>

<p>大浦先輩の力強いメッセージと貴重な経験談は、メンバー一人ひとりの心に深く響き、今後のJC活動における成長と発展への大きな糧となりました🔥</p>

<figure class="wp-block-image size-large is-resized"><img src="https://mjc.ne.jp/wp-content/uploads/2025/04/S__130875395-1-1024x768.jpg" alt="" class="wp-image-1450" style="width:595px;height:auto"/></figure>

<p>大浦先輩、本当にありがとうございました！</p>

<p></p>`,
    author: "松原青年会議所",
    date: "2025年4月29日",
    year: "2025",
    readTime: "2分で読める",
  },
  {
    id: 1441,
    image: "/news-images/202504_image.png",
    alt: "河内地域合同アカデミー",
    category: "お知らせ",
    title: "河内地域合同アカデミー",
    description: "先日、河内地域（柏原・河内長野・富田林・羽曳野藤井寺・東大阪・松原・八尾）全体で「河内地域合同アカデミー」が開催されました🌸 <img src=\"https://mjc.ne.jp/wp-content/uploads/2025/04/image.png\" alt=",
    content: `<p>先日、河内地域（柏原・河内長野・富田林・羽曳野藤井寺・東大阪・松原・八尾）全体で「河内地域合同アカデミー」が開催されました🌸</p>

<figure class="wp-block-image size-full"><img src="/news-images/202504_image.png" alt="" class="wp-image-1442"/></figure>

<p>今年の河内地域の委員長は、当青年会議所の岸君がつとめてくれています👍</p>

<p>今回のアカデミーでは、入会３年未満のメンバーを中心に、各地青年会議所の経験豊富な先輩方にご登壇いただき、JC活動の醍醐味や貴重な経験談を共有いただきました✨</p>

<figure class="wp-block-image size-full"><img src="https://mjc.ne.jp/wp-content/uploads/2025/04/image-1.png" alt="" class="wp-image-1443"/></figure>

<p>また、グループディスカッションでは「５年後の河内地域」をテーマに活発な意見交換を実施。例で言えば、一つのグループでは、「地域の名産を作るにはどう行動すべきか？」という題材を用いて、未来に向けた熱い議論が交わされました🔥</p>

<p>私たち青年世代こそが、地域の明るい未来を切り拓く担い手です💪<br>この学びを活かし、メンバー一同、手を取り合って地域のために邁進してまいります！</p>

<p></p>`,
    author: "松原青年会議所",
    date: "2025年4月29日",
    year: "2025",
    readTime: "2分で読める",
  },
  {
    id: 1422,
    image: "/news-images/202502_S__127410184_0-1024x768.jpg",
    alt: "2025年　2月定例会「JCI Impact!」",
    category: "お知らせ",
    title: "2025年　2月定例会「JCI Impact!」",
    description: "松原青年会議所の２月例会として、公益社団法人日本青年会議所近畿地区大阪ブロック協議会が開催される 日本JCのプログラム「JCI Impact」にメンバーで出席をさせていただきました✨ <!-- wp:image {\"id\":1424,\"width\":\"572px\",\"height\":\"a...",
    content: `<p>松原青年会議所の２月例会として、公益社団法人日本青年会議所近畿地区大阪ブロック協議会が開催される</p>

<p>日本JCのプログラム「JCI　Impact」にメンバーで出席をさせていただきました✨</p>

<figure class="wp-block-image size-large is-resized"><img src="/news-images/202502_S__127410184_0-1024x768.jpg" alt="" class="wp-image-1424" style="width:572px;height:auto"/></figure>

<p><br><br>・地域社会のためになるようなことをしたいけどいい事業が思いつかない</p>

<p>・地域社会が求めることが分からない</p>

<p>等、日々のJC運動を展開するにあたり、そういった壁に当たることも多々あるかと思います。</p>

<p>そこで、プログラムを通じて、地域の課題を見出し、地域社会を巻き込んだ事業を行うために個々やグループで議論を重ね、</p>

<p>事業・例会の構築の際の背景・目的を明確化する方法を学ぶことができました🔥</p>

<figure class="wp-block-image size-large is-resized"><img src="https://mjc.ne.jp/wp-content/uploads/2025/02/S__127410182_0-768x1024.jpg" alt="" class="wp-image-1423" style="width:437px;height:auto"/></figure>

<p></p>

<p><strong><span class="ystdb-inline--smaller"><span class="ystdb-inline--larger-sp">これからも私たちが、社会の課題を</span></span><span class="ystdb-inline--smaller"><span class="ystdb-inline--larger-sp">率先して</span></span><span class="ystdb-inline--smaller"><span class="ystdb-inline--larger-sp">解決することで持続可能な地域を創ることを誓います！👍</span></span></strong></p>

<p></p>`,
    author: "松原青年会議所",
    date: "2025年2月23日",
    year: "2025",
    readTime: "3分で読める",
  },
  {
    id: 1387,
    image: "/news-images/202501_91414-1024x768.jpg",
    alt: "松原青年会議所　2025年　新年互礼会",
    category: "お知らせ",
    title: "松原青年会議所　2025年　新年互礼会",
    description: "2025年1月20日 一般社団法人松原青年会議所 新年互礼会に沢山の方にご臨席を賜り、ありがとうございました🙇‍♂️ <img src=\"https://mjc.ne.jp/w",
    content: `<p>2025年1月20日 一般社団法人松原青年会議所 新年互礼会に沢山の方にご臨席を賜り、ありがとうございました🙇‍♂️</p>

<figure class="wp-block-image size-large is-resized"><img src="/news-images/202501_91414-1024x768.jpg" alt="" class="wp-image-1388" style="width:442px;height:auto"/></figure>

<p>今年のスローガンは、「心を磨き 人生を彩る」</p>

<p>心を鍛錬し続けることでより磨きがかかり、より充実感や幸福感のある素晴らしい人生になると確信しています🔥</p>

<figure class="wp-block-image size-large is-resized"><img src="https://mjc.ne.jp/wp-content/uploads/2025/01/80e78a2879658061c40a9cd299e07502-1024x769.jpg" alt="" class="wp-image-1389" style="width:349px;height:auto"/></figure>

<p>メンバー一人ひとりが、何事にも果敢にチャレンジしていき、リーダーシップをより発揮し、これからも地域にとって必要な団体であり続けられるように邁進してまいります👊</p>

<figure class="wp-block-image size-large is-resized"><img src="https://mjc.ne.jp/wp-content/uploads/2025/01/448b7af6d5c654afed6f3ceca081434a-768x1024.jpg" alt="" class="wp-image-1390" style="width:361px;height:auto"/></figure>

<p></p>

<figure class="wp-block-image size-large is-resized"><img src="https://mjc.ne.jp/wp-content/uploads/2025/01/e556ff54d8a7f7f400eb279c63d55fe1-1024x769.jpg" alt="" class="wp-image-1391" style="width:366px;height:auto"/></figure>

<p>メンバーも大募集しております‼️<br>・自己成長に繋げたい<br>・地域社会に貢献したい<br>・リーダーシップの育成 等</p>

<p>JCだからこそできることが沢山ありますので、お気軽にご連絡お待ちしております🔥</p>

<p><a href="https://www.instagram.com/explore/tags/%E6%9D%BE%E5%8E%9F%E9%9D%92%E5%B9%B4%E4%BC%9A%E8%AD%B0%E6%89%80/">#松原青年会議所</a><br><a href="https://www.instagram.com/explore/tags/%E6%9D%BE%E5%8E%9Fjc/">#松原JC</a><br><a href="https://www.instagram.com/explore/tags/%E5%9C%B0%E5%9F%9F%E7%A4%BE%E4%BC%9A%E3%81%AB%E8%B2%A2%E7%8C%AE/">#地域社会に貢献</a><br><a href="https://www.instagram.com/explore/tags/%E3%82%BB%E3%83%BC%E3%83%95%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3/">#セーフコミュニティ</a><br><a href="https://www.instagram.com/explore/tags/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%82%B7%E3%83%83%E3%83%97/">#リーダーシップ</a><br><a href="https://www.instagram.com/explore/tags/%E5%BF%83%E3%82%92%E7%A3%A8%E3%81%8D%E4%BA%BA%E7%94%9F%E3%82%92%E5%BD%A9%E3%82%8B/">#心を磨き人生を彩る</a><br><a href="https://www.instagram.com/explore/tags/%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E5%8B%9F%E9%9B%86%E4%B8%AD/">#メンバー募集中</a></p>`,
    author: "松原青年会議所",
    date: "2025年1月22日",
    year: "2025",
    readTime: "6分で読める",
  },
  {
    id: 1302,
    image: "/news-images/202409_LINE_ALBUM_大阪ブロック大会枚方大会_240930_1-1024x684.jpg",
    alt: "大阪ブロック大会　枚方大会✨",
    category: "お知らせ",
    title: "大阪ブロック大会　枚方大会✨",
    description: "９月２９日に公益社団法人日本青年会議所 大阪ブロック協議会開催の大阪ブロック大会 枚方大会において、 松原市の一般社団法人全日本ヒューマンサポート様と<a h",
    content: `<p>９月２９日に公益社団法人日本青年会議所　大阪ブロック協議会開催の<a href="https://www.jaycee.or.jp/18202/" title="大阪ブロック大会　枚方大会">大阪ブロック大会　枚方大会</a>において、</p>

<p>松原市の一般社団法人<em><a href="http://www.zen-nippon-hs.com/" title="全日本ヒューマンサポート様">全日本ヒューマンサポート様</a></em>と<a href="https://himawari-sagyousyo.com/" title="ひまわり作業所様">ひまわり作業所様</a>が共同制作されている</p>

<p>災害用トイレの製作体験を松原JCのブースにて、子どもたちをメインに体験していただきました✨</p>

<figure class="wp-block-image size-large is-resized"><img src="/news-images/202409_LINE_ALBUM_大阪ブロック大会枚方大会_240930_1-1024x684.jpg" alt="" class="wp-image-1304" style="width:446px;height:auto"/></figure>

<figure class="wp-block-image size-large is-resized"><img src="https://mjc.ne.jp/wp-content/uploads/2024/09/LINE_ALBUM_大阪ブロック大会枚方大会_240930_2-1024x684.jpg" alt="" class="wp-image-1303" style="width:448px;height:auto"/></figure>

<p>今回の製作を通じて、昨今の異常気象・災害に対して、より関心を持っていただき、</p>

<p>一人ひとりが災害に対する備えを心掛けていただけたら、幸いです🙌</p>

<p></p>`,
    author: "松原青年会議所",
    date: "2024年9月30日",
    year: "2024",
    readTime: "2分で読める",
  },
  {
    id: 1267,
    image: "/news-images/202406_S__113786896-2-1024x867.jpg",
    alt: "２０２４年度　５月定例会（５月２４日）",
    category: "お知らせ",
    title: "２０２４年度　５月定例会（５月２４日）",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/06/S__113786896-",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202406_S__113786896-2-1024x867.jpg" alt="" class="wp-image-1274"/></figure>
</figure>

<p>5月定例会は、松原JC広報発信委員会が担当しました。今回は、近代の情報発信について、委員長自らが講師として、定例会を開催しました。</p>

<p>メンバー一人ひとりが情報発信の方法を学ぶ事によって、誰もが松原青年会議所の活動などを発信が出来るようになり、属人化しない環境を整え、</p>

<p>社内やプライベートでも情報発信をより活用していただくことで、各社のさらなるイメージアップやプライベートがより充実感が溢れていく為の一助となりました🎶</p>

<p></p>

<p></p>`,
    author: "松原青年会議所",
    date: "2024年6月23日",
    year: "2024",
    readTime: "1分で読める",
  },
  {
    id: 1261,
    image: "/news-images/202406_6B1BCDE4-06AE-4078-98D4-7CF713E38B0C-1024x768.jpg",
    alt: "２０２４年度　４月定例会（４月１９日）",
    category: "お知らせ",
    title: "２０２４年度　４月定例会（４月１９日）",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/06/6B1BCDE4-06AE",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202406_6B1BCDE4-06AE-4078-98D4-7CF713E38B0C-1024x768.jpg" alt="" class="wp-image-1264"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/06/150D3B5E-EAD8-4A32-83DC-63920898DF60-1024x768.jpg" alt="" class="wp-image-1262"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/06/F5AF86FD-8A0B-4D77-B746-E6476E88A4FB-1024x768.jpg" alt="" class="wp-image-1263"/></figure>
</figure>

<p>４月定例会は、NEXT55委員会が担当しました。４月定例会では、来たる松原青年会議所の５５周年にむけて、</p>

<p>今一度メンバーの一人ひとりが、JCとは何かという事を考え、学ぶことが必要だと考えました。</p>

<p>メンバーがJCとの向き合い方を再度考える機会にするため、日本青年会議所JC教育推進委員会より道明トレーナーにご協力いただき、</p>

<p>VMV(Vision Mission&Values)というJCについての講義を行っていただきました。</p>

<p>JCが設立された時代背景や存在する目的、JCICreedの理解を通じて我々がめざす未来やMISSIONが再認識できる内容で内容の濃い定例会となりました✨</p>`,
    author: "松原青年会議所",
    date: "2024年6月23日",
    year: "2024",
    readTime: "3分で読める",
  },
  {
    id: 1186,
    image: "/news-images/202403_3月定例会_3-1024x684.jpg",
    alt: "２０２４年度　３月定例会（３月７日）",
    category: "お知らせ",
    title: "２０２４年度　３月定例会（３月７日）",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/03/3月定例会_3-1024x",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202403_3月定例会_3-1024x684.jpg" alt="" class="wp-image-1187"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/3月定例会_4-1024x684.jpg" alt="" class="wp-image-1188"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/3月定例会_1-1024x684.jpg" alt="" class="wp-image-1189"/></figure>
</figure>

<p>３月定例会は、青少年育成委員会が担当しました。３月定例会では、能登半島地震における子ども達への支援募金活動を通じ、被災された方々へ少しでもお力添えができればという想いと、メンバー同士で協力して例会を実施することで「和気藹藹」となるように想いを込めた例会でした。募金いただきました皆様、感謝申し上げます。皆様からいただいた募金につきましては、青少年育成委員会の事業でありますので、セーブザチルドレンを通じて、全額寄付をさせて頂きます。ありがとうございました。</p>`,
    author: "松原青年会議所",
    date: "2024年3月9日",
    year: "2024",
    readTime: "2分で読める",
  },
  {
    id: 1175,
    image: "/news-images/202403_1月定例会並びに定時総会_1-1-1024x768.jpg",
    alt: "２０２４年度　1月定例会並びに定時総会（１月２６日）",
    category: "お知らせ",
    title: "２０２４年度　1月定例会並びに定時総会（１月２６日）",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/03/1月定例会並びに定時総会_",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202403_1月定例会並びに定時総会_1-1-1024x768.jpg" alt="" class="wp-image-1176"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/1月定例会並びに定時総会_2-2-768x1024.jpg" alt="" class="wp-image-1178"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/1月定例会並びに定時総会_3-1-768x1024.jpg" alt="" class="wp-image-1179"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/1月定例会並びに定時総会_4-1-edited.jpg" alt="" class="wp-image-1181"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/1月定例会並びに定時総会_5-1-edited.jpg" alt="" class="wp-image-1182"/></figure>
</figure>

<p>１月定例会並びに定時総会は、松原JC運動発信委員会が担当しました。米田理事長、竹綱会長からご挨拶をいただき、褒賞を行いました。また、２０２４年度定時総会では、２０２４年度の議案が可決され、いよいよ事業が始まりますので、皆様今年一年よろしくお願いいたします。</p>`,
    author: "松原青年会議所",
    date: "2024年3月9日",
    year: "2024",
    readTime: "3分で読める",
  },
  {
    id: 1157,
    image: "/news-images/202403_2024年度　2月定例会_4-1024x768.jpg",
    alt: "２０２４年度　２月定例会（２月１６日）",
    category: "お知らせ",
    title: "２０２４年度　２月定例会（２月１６日）",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/03/2024年度 2月定例会_",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202403_2024年度　2月定例会_4-1024x768.jpg" alt="" class="wp-image-1169"/></figure>
</figure>

<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/2024年度　2月定例会_1-1024x768.jpg" alt="" class="wp-image-1170"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/2024年度　2月定例会_2-1024x768.jpg" alt="" class="wp-image-1171"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/2024年度　2月定例会_3-1024x768.jpg" alt="" class="wp-image-1172"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/2024年度　2月定例会_5-1024x684.jpg" alt="" class="wp-image-1173"/></figure>
</figure>

<p>２月定例会は、会員開発拡大委員会が担当しました。２月定例会では、一人ひとりの自己紹介を行うことで、改めて会員同士がお互いのことを知ることで、会員同士の交流を図ることや皆の前で自分自身のことを話すことでアピールをする機会にもなりました。２０２４年度の「和気藹藹」のスローガン通り、楽しい中にも修練が含まれた例会でした！</p>`,
    author: "松原青年会議所",
    date: "2024年3月9日",
    year: "2024",
    readTime: "3分で読める",
  },
  {
    id: 1151,
    image: "/news-images/202403_新年互礼会_1-1-1024x768.jpg",
    alt: "１月２２日　新年互例会を開催",
    category: "お知らせ",
    title: "１月２２日　新年互例会を開催",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/03/新年互礼会_1-1-102",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202403_新年互礼会_1-1-1024x768.jpg" alt="" class="wp-image-1155"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/03/新年互礼会_2-1-1024x768.jpg" alt="" class="wp-image-1154"/></figure>
</figure>

<p>本日は、新年互例会を開催しました。第５４代理事長の米田朋史君から、まずは当青年会議所へ協力いただいた御礼から、今年度も地域や子どもたちの為の運動を展開することをお伝えし、引き続き今年度のご協力のお願いをさせていただきました。そして、澤井宏文松原市長からご挨拶をいただき、続いて、河内議長、浦野衆議院議員、山本大阪府議会議員、和田地域担当副会長からご挨拶をいただきました。竹綱会長から乾杯の挨拶から歓談が始まり、アトラクションではストイッククラブ様が盛り上げていただきました。ご出席いただきました皆様ありがとうございました。</p>`,
    author: "松原青年会議所",
    date: "2024年3月9日",
    year: "2024",
    readTime: "1分で読める",
  },
  {
    id: 1135,
    image: "/news-images/202401_【1.17】松原中ロータリークラブ様-1024x768.jpg",
    alt: "１月１７日　松原中ロータリークラブ様の例会にて新年挨拶",
    category: "お知らせ",
    title: "１月１７日　松原中ロータリークラブ様の例会にて新年挨拶",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/01/【1.17】松原中ロータリ",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202401_【1.17】松原中ロータリークラブ様-1024x768.jpg" alt="" class="wp-image-1136"/></figure>
</figure>

<p>本日は、松原中ロータリークラブ様の例会の貴重なお時間を頂きまして、冒頭で新年のご挨拶、今年度の米田理事長の就任挨拶をさせていただきました。今年度も引き続きよろしくお願い申し上げます。</p>`,
    author: "松原青年会議所",
    date: "2024年1月18日",
    year: "2024",
    readTime: "1分で読める",
  },
  {
    id: 1132,
    image: "/about-image1.jpg",
    alt: "１月３日　能登半島地震における緊急支援物資について",
    category: "お知らせ",
    title: "１月３日　能登半島地震における緊急支援物資について",
    description: "１月１日に石川県を中心に発生しました能登半島地震について大阪ブロック協議会対策本部を設置され、大阪ブロック協議会で物資を収集して石川県へ緊急で発送しますとご連絡がありました。松原青年会議所としても、大阪ブロック協議会より依頼がありました物資を微力ながら支援させていただきました。このたびの災害に対し....",
    content: `<p>１月１日に石川県を中心に発生しました能登半島地震について大阪ブロック協議会対策本部を設置され、大阪ブロック協議会で物資を収集して石川県へ緊急で発送しますとご連絡がありました。松原青年会議所としても、大阪ブロック協議会より依頼がありました物資を微力ながら支援させていただきました。このたびの災害に対し、心よりお見舞い申し上げます。皆さまの一日も早いご再建をお祈りいたします。</p>`,
    author: "松原青年会議所",
    date: "2024年1月4日",
    year: "2024",
    readTime: "1分で読める",
  },
  {
    id: 1121,
    image: "/news-images/202401_【12.8】大納会②-2-1024x768.jpg",
    alt: "１２月８日　大納会【野村会長予定者・米田理事長予定者】",
    category: "お知らせ",
    title: "１２月８日　大納会【野村会長予定者・米田理事長予定者】",
    description: "<img src=\"https://mjc.ne.jp/wp-content/uploads/2024/01/【12.8】大納会②-2-",
    content: `<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large"><img src="/news-images/202401_【12.8】大納会②-2-1024x768.jpg" alt="" class="wp-image-1126"/></figure>
</figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/01/【12.8】大納会①-1024x768.jpg" alt="" class="wp-image-1123"/></figure>

<figure class="wp-block-image size-large"><img src="https://mjc.ne.jp/wp-content/uploads/2024/01/【12.8】大納会③-1-1024x768.jpg" alt="" class="wp-image-1127"/></figure>

<p>本日は、２０２３年度の締めくくりであります「大納会」！！第５４代理事長予定者の米田朋史君の紹介、そして、当青年会議所より大阪ブロック協議会の会長として、第６０代会長予定者の野村将一君が壇上で挨拶がありました。野村会長予定者を支えるとともに、2024年度も変わらぬ青年会議所運動を展開してまいります。今年一年ありがとうございました。</p>`,
    author: "松原青年会議所",
    date: "2023年12月9日",
    year: "2023",
    readTime: "2分で読める",
  },
  {
    id: 1117,
    image: "/news-images/202401_【1.16】松原ロータリークラブ様-1-1024x768.jpg",
    alt: "1月16日　松原ロータリークラブ様の例会にて新年挨拶",
    category: "お知らせ",
    title: "1月16日　松原ロータリークラブ様の例会にて新年挨拶",
    description: "本日は、松原ロータリ",
    content: `<figure class="wp-block-image size-large"><img src="/news-images/202401_【1.16】松原ロータリークラブ様-1-1024x768.jpg" alt="" class="wp-image-1119"/></figure>

<p>本日は、松原ロータリークラブ様の例会の貴重なお時間を頂きまして、冒頭で新年のご挨拶、今年度の米田理事長の就任挨拶をさせていただきました。今年度も引き続きよろしくお願い申し上げます。</p>`,
    author: "松原青年会議所",
    date: "2024年1月18日",
    year: "2024",
    readTime: "1分で読める",
  },
  {
    id: 1113,
    image: "/news-images/202401_澤井市長　新年挨拶訪問-1-1022x1024.jpg",
    alt: "１月１５日　澤井宏文松原市長へ新年の御挨拶",
    category: "お知らせ",
    title: "１月１５日　澤井宏文松原市長へ新年の御挨拶",
    description: "",
    content: `<figure class="wp-block-image size-large is-resized"><img src="/news-images/202401_澤井市長　新年挨拶訪問-1-1022x1024.jpg" alt="" class="wp-image-1114" width="767" height="768"/></figure>

<p>新年おめでとうございます！本日は、澤井宏文松原市長へ新年のご挨拶に伺わせていただきました。第５４代理事長の米田朋史君から、まずは昨年の御礼から、今年のスローガン、組織等の説明や今年度も地域や子どもたちの為の運動を展開することをお伝えし、澤井市長から、様々なアドバイスやご指導をいただきました。今年度もよろしくお願いいたします。</p>`,
    author: "松原青年会議所",
    date: "2024年1月18日",
    year: "2024",
    readTime: "1分で読める",
  },
];

// カテゴリー一覧
export const newsCategories = ["すべて", "お知らせ", "イベント"];

// 年一覧
export const newsYears = ["すべて", "2025", "2024", "2023"];

// IDでニュースを取得
export const getNewsById = (id: number): NewsItem | undefined => {
  return newsData.find((item) => item.id === id);
};

// 最新のニュースを取得（トップページ用）
export const getLatestNews = (count: number = 3): NewsItem[] => {
  return newsData.slice(0, count);
};

// 関連ニュースを取得
export const getRelatedNews = (
  currentId: number,
  category: string,
  count: number = 2
): NewsItem[] => {
  return newsData
    .filter((item) => item.category === category && item.id !== currentId)
    .slice(0, count);
};
