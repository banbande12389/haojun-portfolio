import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { profile, projects, portfolioSections } from './content';
import ProjectVideo from './ProjectVideo';

export function AboutSection() {
  return (
    <section className="about concise-section" id="about" aria-labelledby="about-title">
      <div className="shell about-summary">
        <div className="section-intro">
          <span className="section-index">01 / ABOUT</span>
          <h2 id="about-title">关于我<span>.</span></h2>
          <p className="about-name">{profile.name}<span>视觉 · AI · 影像</span></p>
          <div className="about-illustration"><img src={profile.aboutImage} alt="男孩坐在打开的橙色书本上，手持画笔，身边有纸飞机与创作工具的插画" loading="lazy" /></div>
        </div>
        <div className="about-copy">
          <p className="about-lead">用视觉表达想法，<br />用 AI 与影像拓展创作。</p>
          <p className="about-description">数字媒体技术专业在读，专注海报与插画、AI 动画、视频剪辑与动效。热爱动漫与同人创作，也关注每一个想法如何落地。</p>
          <dl className="essential-facts">
            <div><dt>教育</dt><dd>湛江科技学院 · 数字媒体技术<span>本科在读 / 2027 年预计毕业</span></dd></div>
            <div><dt>实践</dt><dd>精鹰传媒 · AI 短视频制作实习<span>2026.07 — 2026.09</span></dd></div>
            <div><dt>获奖</dt><dd>《薪火相传》<span>未来设计师大赛三等奖</span></dd></div>
          </dl>
          <p className="essential-tools"><span>常用工具</span>Photoshop / After Effects / Blender / 即梦 AI / 剪映</p>
          <div className="about-actions"><a className="quiet-link" href="#contact">联系我 <ArrowUpRight size={16} /></a></div>
        </div>
      </div>
    </section>
  );
}

export function CatalogueSection() {
  return (
    <section className="catalogue concise-section" id="catalog" aria-labelledby="catalog-title">
      <div className="shell directory-layout">
        <div className="directory-heading"><div><span className="section-index">02 / CONTENTS</span><h2 id="catalog-title" aria-label="作品目录 Contents"><span className="directory-heading-star" aria-hidden="true">✦</span><span lang="en">C<span className="directory-flower-o">o<span aria-hidden="true">✿</span></span>ntents</span><span className="directory-heading-zh">目录</span><span className="directory-heading-star directory-heading-star--mint" aria-hidden="true">✦</span></h2></div><p>选一个方向，开启创作之旅。</p></div>
        <nav className="directory-cards" aria-label="作品分类目录">
          {portfolioSections.map((section, index) => {
            const project = projects.find(item => item.id === section.projectId);
            return <a className={`directory-card directory-card--${index + 1}`} href={`#${section.projectId}`} key={section.projectId} aria-label={`${section.number} ${section.title}，查看相关作品`}>
              <div className="directory-card-media"><img src={project.image} alt={project.imageAlt} loading="lazy" /><span>{project.videos ? project.period : project.video ? `视频作品 / ${project.period}` : '示意封面'}</span></div>
              <div className="directory-card-body"><div className="directory-card-title"><h3>{section.title}</h3><span aria-hidden="true">✦</span></div><p className="directory-card-english">{section.english}</p><p className="directory-card-description">{section.description}</p><span className="directory-card-number" aria-hidden="true">{section.number}</span><ArrowUpRight className="directory-card-arrow" size={20} aria-hidden="true" /></div>
            </a>;
          })}
        </nav>
        <div className="directory-footer"><span>KEEP<br />CREATING</span><p>点击卡片，查看作品 <ArrowDown size={14} aria-hidden="true" /></p><span>KEEP<br />EXPLORING</span></div>
      </div>
    </section>
  );
}

export function WorkSection({ onOpenProject }) {
  return (
    <section className="work concise-section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="work-intro">
          <div className="section-intro"><span className="section-index">03 / SELECTED WORK</span><h2 id="work-title">精选作品<span>.</span></h2></div>
          <p className="sample-notice"><span className="accent-dot" />四部视频作品 · 点击播放，观看完整内容</p>
        </div>
        <div className="selected-projects">
          {portfolioSections.map((section, index) => {
            const project = projects.find(item => item.id === section.projectId);
            return (
              <article className={`project-entry${index % 2 ? ' project-entry--reverse' : ''}`} id={project.id} key={project.id} aria-labelledby={`title-${project.id}`}>
                {project.video ? <ProjectVideo project={project} className="project-preview project-preview--video" /> : <button className="project-preview" onClick={() => onOpenProject(project)} aria-label={`查看${project.title}项目详情`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span className="preview-label">示意封面</span>
                  <span className="preview-arrow"><ArrowUpRight size={23} strokeWidth={1.4} /></span>
                </button>}
                <div className="project-summary">
                  <div className="project-category"><span className="project-category-pill"><span>{section.number}</span>{section.title}</span><span className="project-year">{project.period}</span></div>
                  <h3 className="project-name-shape" id={`title-${project.id}`}>{project.title}</h3>
                  <p className="project-short-description">{project.summary}</p>
                  {project.award && <p className="project-honor">✳ {project.award}</p>}
                  <p className="project-keywords">{project.tags.join(' / ')}</p>
                  <button className="underlined-link project-open-pill" onClick={() => onOpenProject(project)} aria-label={`查看项目详情：${project.title}`}>查看项目 <ArrowUpRight size={17} /></button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="work-return"><a className="quiet-link" href="#catalog">返回作品目录 <ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}
