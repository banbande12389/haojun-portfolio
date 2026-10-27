import { ArrowUpRight, ArrowDown, Pause, Play } from 'lucide-react';
import { profile } from './content';

const directions = [
  { en: 'Visual design', zh: '视觉设计', href: '#inherited-flame', tone: 'lavender' },
  { en: 'AI creation', zh: 'AI 视觉创作', href: '#campus-visuals', tone: 'mint' },
  { en: 'Video editing', zh: '视频剪辑', href: '#ai-short-video', tone: 'yellow' },
];

export default function Hero({ paused, onToggleMotion }) {
  return (
    <section id="home" className={`hero hero--playful${paused ? ' is-paused' : ''}`} aria-labelledby="hero-title">
      <div className="shell playful-stage">
        <div className="playful-topline"><span className="playful-edition">PORTFOLIO <span>2026</span></span><p><span aria-hidden="true">✦</span> keep exploring</p></div>
        <div className="playful-copy">
          <h1 id="hero-title" aria-label="黄豪俊的个人作品集，Portfolio">
            <span className="portfolio-word" aria-hidden="true">
              <span className="portfolio-line portfolio-line--first"><span>P</span><span className="portfolio-oval">O</span><span>RT</span><span className="portfolio-flower">✿</span></span>
              <span className="portfolio-line portfolio-line--second"><span>F</span><span className="portfolio-capsule"><i /></span><span>LI</span><span className="portfolio-oval">O</span></span>
            </span>
            <span className="portfolio-title-zh">作品集</span>
          </h1>
          <p className="playful-author">{profile.name}<span>HUANG HAOJUN</span></p>
          <p className="playful-intro">视觉设计师 / AI 设计师 / 视频剪辑师</p>
          <span className="playful-spark playful-spark--one" aria-hidden="true">✦</span><span className="playful-spark playful-spark--two" aria-hidden="true">✦</span>
        </div>
        <div className="playful-art"><img src={profile.heroImage} alt="男孩坐在巨大的铅笔上，周围漂浮着设计软件图标、星球和灵感符号的插画" fetchPriority="high" /></div>
        <div className="playful-footer">
          <a href="#catalog" className="playful-enter" aria-label="探索我的作品"><ArrowUpRight size={25} strokeWidth={1.6} /></a>
          <nav className="playful-directions" aria-label="首页作品分类">{directions.map(item => <a href={item.href} key={item.zh}><span className={`direction-star direction-star--${item.tone}`} aria-hidden="true">✦</span><span>{item.en}<small>{item.zh}</small></span></a>)}</nav>
          <button className="motion-toggle" onClick={onToggleMotion} aria-label={paused ? '播放插画动画' : '暂停插画动画'} aria-pressed={paused}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'PLAY' : 'PAUSE'}</span></button>
        </div>
        <a href="#about" className="playful-scroll" aria-label="向下了解我"><ArrowDown size={15} />认识我</a>
      </div>
    </section>
  );
}
