// 后续更新个人资料、作品图片和说明时，优先修改这个文件。
const media = filename => `${import.meta.env.BASE_URL}media/${filename}`;
export const profile = {
  name: '黄豪俊',
  englishName: 'HUANG HAOJUN',
  email: '240864918@qq.com',
  phone: '18219343386',
  location: '中国 · 广东佛山',
  heroImage: media('hero-boy-designer.webp'),
  aboutImage: media('about-boy-book-v2.webp'),
  contactImage: media('contact-connect-v3.webp'),
};

export const projects = [
  {
    id: 'inherited-flame', number: '02', title: 'PV 视频',
    type: 'PV 视频', englishType: 'VISUAL DESIGN', period: '2 部作品',
    image: media('work-pv-video.webp'), video: media('work-pv-video.mp4'), category: '视觉设计',
    videos: [
      { title: 'PV 视频 1', video: media('work-pv-video.mp4'), image: media('work-pv-video.webp'), duration: '00:14' },
      { title: 'PV 视频 2', video: media('work-pv-video-2.mp4'), image: media('work-pv-video-2.webp'), duration: '00:05' },
    ],
    imageAlt: 'PV 视频的实际画面截帧',
    tags: ['PV 视频', '影像表达'],
    summary: 'PV 视频作品，以画面与节奏呈现影像表达。',
    description: '面向动漫社团的宣传，\n制作海报、推文与招新\n物料，参与活动剪辑。',
    details: [['展示分类', '视觉设计'], ['作品文件', 'PV视频.mp4 / PV视频2.mp4'], ['视频时长', '视频 1 约 14 秒 / 视频 2 约 5 秒'], ['画面规格', '960 × 540 / 1280 × 720 · 横屏']],
  },
  {
    id: 'campus-visuals', number: '01', title: 'AIGC 动画制作',
    type: 'AIGC 动画', englishType: 'AI & VISUAL STORYTELLING', period: '03:35',
    image: media('work-aigc-animation.webp'), video: media('work-aigc-animation.mp4'), category: 'AI影像',
    imageAlt: 'AIGC 动画制作的实际画面截帧',
    tags: ['AIGC', '动画制作', '视觉呈现'],
    summary: '以 AIGC 动画呈现视觉创作，观看完整作品。',
    description: '结合生成式视觉与动画，\n探索短片中的故事表达。',
    details: [['展示分类', 'AI影像'], ['作品文件', 'AIGC动画制作.mp4'], ['视频时长', '约 3 分 35 秒'], ['画面规格', '1920 × 1080 / 横屏']],
  },
  {
    id: 'ai-short-video', number: '03', title: '买量视频广告',
    type: '视频广告', englishType: 'EDITING & MOTION', period: '00:35',
    image: media('work-ad-video.webp'), video: media('work-ad-video.mp4'), category: '视频剪辑',
    imageAlt: '买量视频广告的实际画面截帧',
    tags: ['视频剪辑', '广告短片', '竖屏视频'],
    summary: '竖屏买量视频广告，展示短视频广告的剪辑与呈现。',
    description: '配合团队生成 AI 素材，\n完成短视频剪辑、字幕\n与画面包装。',
    details: [['展示分类', '视频剪辑'], ['作品文件', '买量视频广告.mp4'], ['视频时长', '约 35 秒'], ['画面规格', '720 × 1280 / 竖屏']],
  },
];

export const experiences = [
  { period: '2026.07 — 2026.09', title: '佛山市精鹰传媒', role: 'AI 短视频制作 · 实习', text: '生成式素材、短视频剪辑、字幕包装与基础数据反馈。' },
  { period: '2024 — 2026', title: '湛江科技学院动漫社团', role: '副会长 · 宣传', text: '海报与推文制作、活动剪辑、招新宣传及活动规划。' },
  { period: '2023.09 — 2027.06', title: '湛江科技学院', role: '数字媒体技术 · 本科在读', text: '影视后期、视觉传达、MG 动画与人机交互；预计 2027 年毕业。' },
];

// 作品目录与展板共用同一份分类数据，锚点对应真实项目 ID。
export const portfolioSections = [
  { number: '01', title: 'AI影像', english: 'AI & VISUAL STORYTELLING', description: '生成式视觉 · 动画短片', projectId: 'campus-visuals', statement: '让新的工具，参与叙事。' },
  { number: '02', title: '视觉设计', english: 'VISUAL DESIGN', description: '海报 · 插画 · 活动视觉', projectId: 'inherited-flame', statement: '用画面，连接热爱。' },
  { number: '03', title: '视频剪辑', english: 'EDITING & MOTION', description: '视频剪辑 · MG 动画 · 包装', projectId: 'ai-short-video', statement: '在每一帧之间，找到节奏。' },
];

export const softwareTools = [
  { mark: 'Ps', name: 'Photoshop', tone: 'blue' },
  { mark: 'Ae', name: 'After Effects', tone: 'violet' },
  { mark: '3D', name: 'Blender', tone: 'orange' },
  { mark: 'AI', name: '即梦 AI', tone: 'green' },
];

export const capabilities = [
  { number: '01', icon: 'visual', title: '视觉设计', en: 'VISUAL DESIGN', text: '从画面构图到信息层级，用海报、插画和活动视觉，让创意有清晰的表达。', tools: ['Photoshop', '海报 / 插画'] },
  { number: '02', icon: 'ai', title: 'AI 创意工作流', en: 'AI-POWERED CREATION', text: '将脚本构思、视觉素材生成和后期制作串联，让新工具真正参与创作。', tools: ['ChatGPT / DeepSeek', '即梦 AI'] },
  { number: '03', icon: 'motion', title: '视频剪辑与动效', en: 'EDITING & MOTION', text: '关注叙事节奏与画面情绪，完成视频剪辑、MG 动画、字幕和视觉包装。', tools: ['After Effects', '剪映'] },
  { number: '04', icon: 'dimension', title: '跨媒介创作', en: 'BEYOND ONE MEDIUM', text: '以三维建模拓展视觉语言，结合动漫创作兴趣与日语能力，探索不同表达。', tools: ['Blender', '大学日语六级'] },
];
