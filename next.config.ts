import type { NextConfig } from "next";
import path from "path";

/** Luôn trỏ đúng thư mục cap — tránh Next chọn C:\Code khi có lockfile cha */
const capRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  serverExternalPackages: ["ffmpeg-static", "edge-tts-universal"],
  outputFileTracingRoot: capRoot,
  turbopack: {
    root: capRoot,
  },
};

export default nextConfig;
