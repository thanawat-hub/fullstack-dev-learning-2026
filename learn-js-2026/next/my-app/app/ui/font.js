import { Prompt, Sarabun } from "next/font/google";

// Font Prompt — โมเดิร์น เหมาะกับหัวข้อ/UI
export const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  variable: "--font-prompt",
});

// Font Sarabun — เรียบง่าย เหมาะกับเนื้อหายาว/อ่านสบาย
export const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  variable: "--font-sarabun",
});
