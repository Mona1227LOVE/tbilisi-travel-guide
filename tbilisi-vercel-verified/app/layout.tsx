import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tbilisi Soviet Field Notes｜第比利斯两日建筑路线",
  description: "从第比利斯海新城出发的两日高强度苏联建筑与城市空间旅行路线。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
