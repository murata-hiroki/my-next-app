import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // ↓↓↓ ここから追加 ↓↓↓
        primary: {
          DEFAULT: "#0097D7", // メインカラー
          foreground: "#ffffff", // primary背景色に対するテキスト色
          100: "#e0f2fa", // 薄い色（背景などに）
          600: "#0097D7", // メインカラー（DEFAULTと同じ）
          700: "#007fb4", // 少し濃い色（ホバー時などに）
        },
        // ↑↑↑ ここまで追加 ↑↑↑
      },
      fontSize: {
        "1.4rem": "1.4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
