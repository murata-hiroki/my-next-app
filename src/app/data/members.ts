export type InterviewBlock =
  | {
      type: "qa";
      qNo: number;
      question: string;
      answer: string; // 改行は \n でOK
      imageSrc?: string; // "/xxx.jpg"
      reverse?: boolean; // 画像左右反転
    }
  | {
      type: "card";
      title: string;
      text: string;
      imageSrc?: string;
    }
  | {
      type: "message";
      title: string;
      text: string;
      bgPc?: string;
      bgSp?: string;
    }
  | {
      type: "schedule";
      title: string;
      items: { time: string; text: string }[];
    };

export type MemberDetail = {
  id: string;
  headline: string; // MVのh1
  label: string; // "エンジニア" など
  name: string;
  joinYear?: string; // "2020年入社"
  teamLines?: string[]; // 所属/役職など複数行
  mvImageSrc?: string; // MV右側の画像
  mvAspect?: "landscape" | "portrait" | "square"; // 画像のアスペクト比

  /**
   * 追加：画像の切り抜き基準点（CSS object-position）
   * 例: "50% 10%"（中央・上寄せ）, "50% 0%"（最上）, "50% 30%"（少し下）
   */
  mvObjectPosition?: string;

  profileText?: string; // プロフィール説明
  blocks: InterviewBlock[]; // 本文ブロック
  recommend?: { title: string; href: string; imageSrc?: string }[];
};

export const members: MemberDetail[] = [
  {
    id: "murata",
    headline: "「まちのために何かしたい」を、行動に変えられる場所がここにありました。",
    label: "広報委員会 / 委員",
    name: "村田（Murata）",
    joinYear: "2024年度入会",
    teamLines: ["一般社団法人 ○○青年会議所", "広報委員会"],
    mvImageSrc: "/murata.jpeg",
    mvAspect: "portrait",
    // 顔が上にある写真ならまずこれが安定
    mvObjectPosition: "50% 10%",

    profileText:
      "地域で仕事をする中で、人や事業の魅力が十分に伝わっていない場面に何度も出会いました。「伝える力」でまちの挑戦を後押ししたいと思い、青年会議所に入会。現在は、例会や事業の広報・発信づくりに携わっています。",

    blocks: [
      {
        type: "qa",
        qNo: 1,
        question: "入会のきっかけを教えてください",
        answer:
          "地元で働くほど、地域の良さも課題も“自分ごと”になっていきました。\n一方で、良い取り組みがあっても知られていなかったり、関わる入口が見えにくかったりすることも多いと感じていました。\n「伝える」ことで人の輪を広げられるのではと思い、入会を決めました。",
        imageSrc: "/post_1.png",
      },
      {
        type: "qa",
        qNo: 2,
        question: "青年会議所の活動で印象に残っていることは？",
        answer:
          "会議の熱量です。年齢も業種も違うメンバーが、地域の未来を本気で話し合う。\n意見が割れることもありますが、目的を共有して「じゃあ次に何をする？」まで落とし込むスピード感が印象的でした。\n“議論で終わらせない”文化があると感じます。",
      },
      {
        type: "qa",
        qNo: 3,
        question: "広報委員会では具体的にどんなことをしていますか？",
        answer:
          "事業の目的や成果が伝わるように、文章・写真・デザイン・導線を整えています。\n単に「やりました」ではなく、誰に何を届けたいのか（ターゲット）を決めて、見せ方を揃えることを大切にしています。\n当日の現場では撮影やSNS投稿の運用も行います。",
        imageSrc: "/post_2.png",
        reverse: true,
      },
      {
        type: "qa",
        qNo: 4,
        question: "仕事や家庭との両立はどうしていますか？",
        answer:
          "予定を早めに共有し、準備は分担して前倒しで進めています。\n個人で抱えないように、タスクを見える化して「任せる・頼る」を意識しています。\n忙しい時ほど、短い時間でも連絡のテンポを落とさないことが、結果的に両立につながっています。",
      },
      {
        type: "card",
        title: "これからの目標",
        text:
          "青年会議所の活動は、外から見ると少し分かりづらいことがあります。\nだからこそ「何のために、誰のためにやっているのか」が自然に伝わる発信を整え、関わる人が増える“入口”を作りたいです。\nまちの挑戦が連鎖するような流れを、広報の面から支えていきます。",
        imageSrc: "/post_3.png",
      },
      {
        type: "message",
        title: "未来の仲間へ",
        text:
          "青年会議所は、特別な人だけの場所ではありません。\n「地域のために何かしたい」という気持ちがあれば、経験や職種に関係なく挑戦できる場があります。\n一人ではできないことを、仲間となら形にできる。\nまずは一度、例会や活動の雰囲気を見に来てください。お会いできるのを楽しみにしています。",
        bgPc: "/hero.jpg",
        bgSp: "/hero.jpg",
      },
      {
        type: "schedule",
        title: "ある日のスケジュール（委員会がある日）",
        items: [
          { time: "09:00", text: "業務開始（メール確認・タスク整理）" },
          { time: "12:00", text: "昼休憩（委員会メンバーと進捗共有）" },
          { time: "18:30", text: "委員会（企画確認・広報導線のすり合わせ）" },
          { time: "20:00", text: "発信準備（文章作成・画像選定・予約投稿設定）" },
          { time: "21:00", text: "次回の段取り確認（任意）" },
        ],
      },
    ],

    recommend: [
      { title: "青年会議所とは", href: "/about", imageSrc: "/about_mainimage.jpg" },
      { title: "入会の流れ", href: "/join", imageSrc: "/benefits-image.jpg" },
    ],
  },
];

export function getMember(id: string) {
  return members.find((m) => m.id === id);
}