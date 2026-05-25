# Daniel's AI Native Portfolio

AI Native 数字空间 — 暗色赛博朋克多页个人网站。

**线上地址**：https://personal-site-dun-psi.vercel.app

## 技术栈

| 领域 | 选型 |
|------|------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 3D | Three.js + React Three Fiber + Drei |
| 2D | Canvas API (技能图谱) |
| 动画 | Lenis + Framer Motion + 3D Simplex Noise |
| 部署 | Vercel |

## 项目结构

```
src/
├── app/
│   ├── globals.css              # @theme 暗色 token
│   ├── layout.tsx               # Nav + SceneLoader + PageTransition + Footer
│   ├── page.tsx                 # 首页：Hero
│   ├── about/page.tsx           # 关于：旅程 + 原则
│   ├── projects/page.tsx        # 工程档案
│   ├── skills/page.tsx          # Canvas 技能图谱
│   └── gallery/page.tsx         # 照片墙 + Lightbox
├── components/
│   ├── nav.tsx                  # 固定顶栏（backdrop-blur + cyan active）
│   ├── footer.tsx               # 终端风格联系
│   ├── page-transition.tsx      # Framer Motion 路由过渡
│   ├── lenis.tsx                # Lenis 平滑滚动
│   ├── home/hero.tsx            # 暗色 Hero + 3D 视差
│   ├── about/timeline.tsx       # 时间轴
│   ├── about/principles.tsx     # 工程原则卡片
│   ├── projects/dossier-card.tsx # 档案卡片（monospace 标签 + 3D tilt）
│   ├── skills/skills-graph.tsx  # 2D Canvas 技能图谱
│   ├── gallery/masonry-grid.tsx # Masonry 瀑布流
│   ├── gallery/lightbox.tsx     # 沉浸式预览
│   └── three/
│       ├── scene.tsx            # R3F Canvas
│       ├── particles.tsx        # 800 噪声粒子
│       └── scene-loader.tsx     # 异步加载器
├── lib/
│   ├── utils.ts                 # cn()
│   ├── noise.ts                 # 3D Simplex Noise
│   └── use-scroll-progress.ts   # 滚动进度 Hook
└── data/
    └── projects.ts              # 项目数据
```

## 特性

- **3D 粒子背景** — 800 粒子，Simplex Noise 有机运动，鼠标视差，全页共享
- **多页路由** — App Router 5 页面，Framer Motion 过渡
- **2D Canvas 技能图谱** — Bezier 曲线 + 能量光点流动
- **工程档案卡** — Monospace 标签，CSS 3D 倾斜，STATUS 指示
- **暗色主题** — #08080C 基色，Cyan/Magenta/Mint 点缀
- **照片墙** — CSS Columns Masonry + IO 淡入 + 沉浸式 Lightbox

## 本地运行

```bash
npm install
npm run dev
```

## 部署

```bash
npx vercel --yes --prod
```

## 设计 Token

| Token | Hex |
|-------|-----|
| `--color-bg` | `#08080C` |
| `--color-surface` | `#111116` |
| `--color-border` | `#1E1E24` |
| `--color-cyan` | `#00E5FF` |
| `--color-magenta` | `#FF2D7F` |
| `--color-mint` | `#00FF88` |
