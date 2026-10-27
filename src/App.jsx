import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp, X, Copy, Check, MapPin, Menu } from 'lucide-react';
import { profile } from './content';
import { AboutSection, CatalogueSection, WorkSection } from './sections';
import Hero from './Hero';
import ProjectVideo from './ProjectVideo';

const navItems = [{ id: 'about', title: '关于我' }, { id: 'catalog', title: '作品目录' }, { id: 'work', title: '精选作品' }];

function SectionLabel({ number, children }) {
  return <div className="section-label"><span className="accent-dot" />{number}<span className="label-slash">/</span>{children}</div>;
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    dialog.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = before; if (dialog.open) dialog.close(); };
  }, [project]);
  if (!project) return null;
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={event => { if (event.target === ref.current) onClose(); }}>
    <div className="dialog-inner">
      <button className="dialog-close icon-button" onClick={onClose} aria-label="关闭项目详情" autoFocus><X size={22} /></button>
      {project.video ? <ProjectVideo key={project.id} project={project} className="dialog-video" /> : <img className="dialog-image" src={project.image} alt={project.imageAlt} />}
      <div className="dialog-body">
        <div className="eyebrow">{project.englishType} <span> / {project.period}</span></div>
        <h2 id="project-title">{project.title}</h2>
        {project.award && <p className="award-text">✳ {project.award}</p>}
        <p className="dialog-description">{project.description}</p>
        <dl className="project-details">{project.details.map(([title, value]) => <div key={title}><dt>{title}</dt><dd>{value}</dd></div>)}</dl>
        {project.note && <p className="material-note">{project.note}</p>}
        <a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(`关于作品「${project.title}」的交流`)}`}>与我交流这个项目 <ArrowUpRight size={18} /></a>
      </div>
    </div>
  </dialog>;
}

function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [copied, setCopied] = useState('');
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  function openProject(item) {
    document.querySelectorAll('video').forEach(video => video.pause());
    setProject(item);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-20% 0px -45% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => { observer.disconnect(); clearTimeout(toastTimer.current); };
  }, []);

  async function copyContact(value, kind) {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      setCopied(kind); setToast(`${kind}已复制`);
    } catch {
      setToast(`请手动复制${kind}：${value}`);
    }
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => { setCopied(''); setToast(''); }, 5000);
  }


  return <>
    <a className="skip-link" href="#about">跳到主要内容</a>
    <header className="site-header site-header--editorial">
      <div className="shell header-inner">
        <a href="#home" onClick={() => setMenuOpen(false)} className="brand" aria-label="黄豪俊，返回首页"><span className="brand-mark">h<span>.</span></span><span className="brand-name">黄豪俊<small>HUANG HAOJUN</small></span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="主导航">
          {navItems.map((item, i) => <a href={`#${item.id}`} key={item.id} className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{item.title}</a>)}
        </nav>
        <div className="header-actions"><button className="mobile-toggle icon-button" aria-label={menuOpen ? '关闭导航' : '打开导航'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      </div>
    </header>

    <main className={paused ? 'motion-paused' : undefined}>
      <Hero paused={paused} onToggleMotion={() => setPaused(value => !value)} />

      <AboutSection />
      <CatalogueSection />
      <WorkSection onOpenProject={openProject} />

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-inner">
          <SectionLabel number="04">LET'S CONNECT / 联系我</SectionLabel>
          <div className="contact-main contact-main--illustrated">
            <div className="contact-copy">
              <div className="contact-heading"><h2 id="contact-title">一起，把想法<br />变成<span className="serif">作品。</span></h2></div>
              <a href={`mailto:${profile.email}`} className="email-link">{profile.email}<ArrowUpRight size={30} /></a>
              <div className="contact-details"><button onClick={() => copyContact(profile.email, '邮箱')}>{copied === '邮箱' ? <Check size={16} /> : <Copy size={16} />}复制邮箱</button><button onClick={() => copyContact(profile.phone, '电话')}>{copied === '电话' ? <Check size={16} /> : <Copy size={16} />}{profile.phone}</button><span><MapPin size={16} />{profile.location}</span></div>
            </div>
            <div className="contact-illustration"><img src={profile.contactImage} alt="蓝色手机与联系人卡片，周围有邮件、相机、地球和鼠标的通信主题插画" loading="lazy" /></div>
          </div>
          <footer className="site-footer"><a href="#home" className="footer-name">HUANG HAOJUN<span>黄豪俊</span></a><span>© {new Date().getFullYear()} · 以好奇心驱动创作</span><a href="#home" className="back-top">回到顶部 <ArrowUp size={15} /></a></footer>
        </div>
      </section>
    </main>
    <ProjectDialog project={project} onClose={() => setProject(null)} />
    <div className={`toast ${toast ? 'visible' : ''}`} role="status" aria-live="polite">{toast}</div>
  </>;
}

export default App;
