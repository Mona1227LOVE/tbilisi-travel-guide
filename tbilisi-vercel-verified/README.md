# Tbilisi Travel Guide

第比利斯个人旅行攻略网页框架。

当前版本包含：

- 以 Hotels & Preference Hualing Tbilisi 为起终点
- 固定两日高强度旅行路线
- 苏联现代主义、野兽派与社会主义现实主义建筑
- 每站时间、历史背景、停留时间、移动方式和参观提示
- 桌面端、平板与手机端响应式布局

页面不使用图片或动画。

## 本地运行

需要先安装 Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

终端显示本地地址后，用浏览器打开该地址即可。

## 部署到 Vercel

项目现在使用标准 Next.js 构建，不依赖 Vite、Cloudflare Worker 或
`.openai/hosting.json`。

1. 将项目推送到 GitHub、GitLab 或 Bitbucket。
2. 在 Vercel 中导入仓库。
3. Framework Preset 选择 `Next.js`。
4. Build Command 保持默认的 `next build`，Output Directory 留空。
5. 点击 Deploy。

## 主要文件

- `app/page.tsx`：页面结构与天数切换交互
- `app/globals.css`：完整视觉与响应式样式
- `app/layout.tsx`：网页标题与基础布局
