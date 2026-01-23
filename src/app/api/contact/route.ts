import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, category, message } = body;

    // バリデーション
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // メール送信設定
    // 環境変数で設定（.env.localに設定が必要）
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 管理者宛てメール
    const adminMailOptions = {
      from: process.env.SMTP_FROM || "noreply@example.com",
      to: process.env.CONTACT_TO_EMAIL || "info@example.com",
      subject: `【松原青年会議所】お問い合わせ: ${category}`,
      text: `
松原青年会議所ホームページよりお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お名前】
${name}

【メールアドレス】
${email}

【電話番号】
${phone || "未入力"}

【お問い合わせ種別】
${category}

【お問い合わせ内容】
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
このメールはホームページのお問い合わせフォームから
自動送信されています。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
    松原青年会議所 お問い合わせ
  </h2>

  <p>ホームページよりお問い合わせがありました。</p>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr>
      <th style="background: #f5f5f5; padding: 10px; text-align: left; border: 1px solid #ddd; width: 150px;">お名前</th>
      <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
    </tr>
    <tr>
      <th style="background: #f5f5f5; padding: 10px; text-align: left; border: 1px solid #ddd;">メールアドレス</th>
      <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr>
      <th style="background: #f5f5f5; padding: 10px; text-align: left; border: 1px solid #ddd;">電話番号</th>
      <td style="padding: 10px; border: 1px solid #ddd;">${phone || "未入力"}</td>
    </tr>
    <tr>
      <th style="background: #f5f5f5; padding: 10px; text-align: left; border: 1px solid #ddd;">お問い合わせ種別</th>
      <td style="padding: 10px; border: 1px solid #ddd;">${category}</td>
    </tr>
    <tr>
      <th style="background: #f5f5f5; padding: 10px; text-align: left; border: 1px solid #ddd; vertical-align: top;">お問い合わせ内容</th>
      <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
    </tr>
  </table>

  <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
    このメールはホームページのお問い合わせフォームから自動送信されています。
  </p>
</body>
</html>
      `.trim(),
    };

    // 自動返信メール（お客様宛て）
    const autoReplyOptions = {
      from: process.env.SMTP_FROM || "noreply@example.com",
      to: email,
      subject: "【松原青年会議所】お問い合わせを受け付けました",
      text: `
${name} 様

この度は松原青年会議所へお問い合わせいただき、
誠にありがとうございます。

以下の内容でお問い合わせを受け付けました。
内容を確認の上、担当者より折り返しご連絡いたします。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お問い合わせ種別】
${category}

【お問い合わせ内容】
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※このメールは自動送信されています。
※このメールに返信いただいてもお答えできませんのでご了承ください。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
一般社団法人松原青年会議所
https://matsubara-jc.jp（仮）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
    };

    // メール送信
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
