# 黄豪俊 · 个人作品集

视觉设计 / AI 影像 / 视频剪辑。React + Vite 实现，包含作品分类、视频切换、项目详情和联系方式。

网站地址：https://banbande12389.github.io/haojun-portfolio/

## 本地开发

需要 Node.js 24 与 pnpm 11.25.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## 发布

在仓库 Settings → Pages 中选择 GitHub Actions。推送 main 分支后，工作流自动构建并发布到 GitHub Pages。

资源路径自动适配仓库子目录。也可以通过 VITE_BASE_PATH 配置自定义部署路径。

## 更新内容

- src/content.js：项目、文案、视频及封面。
- src/ProjectVideo.jsx：播放器与多视频切换。
- src/hero.css、src/illustrated.css：界面与动效。
- scripts/published-assets.mjs：发布资源白名单。新增素材时请同步更新。

仅包含页面正在使用的插画、视频与封面。姓名与经历由作者提供；虚构人物插画由 AI 辅助生成。

## 大视频资源

AIGC 动画原文件按 24 MiB 分块保存在 media-parts/，避免单次网络上传中断。pnpm build 会自动校验 SHA-256 并恢复原始视频，视频内容与画质不变。更新该视频时需同步更新四个分块和 scripts/restore-large-media.mjs 中的校验值。
