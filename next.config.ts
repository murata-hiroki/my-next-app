import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的エクスポートを有効化（さくらインターネット用）
  output: "export",
  
  // 末尾スラッシュを追加（静的ホスティングで推奨）
  trailingSlash: true,
  
  // 画像最適化を無効化（静的エクスポートでは使用不可）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
