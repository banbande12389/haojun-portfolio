import { useRef, useState } from 'react';

export default function ProjectVideo({ project, className = '' }) {
  const [failed, setFailed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRef = useRef(null);
  const clips = project.videos ?? [{ title: project.title, video: project.video, image: project.image, duration: project.period }];
  const clip = clips[selectedIndex];
  function selectClip(index) {
    if (index === selectedIndex) return;
    videoRef.current?.pause();
    setFailed(false);
    setSelectedIndex(index);
  }
  function handlePlay(event) {
    // A second inline player or the detail dialog should not overlap another video's audio.
    document.querySelectorAll('video').forEach(video => {
      if (video !== event.currentTarget) video.pause();
    });
  }
  return <div className={`project-video ${className}${clips.length > 1 ? ' project-video--multiple' : ''}`}>
    <div className="project-video-stage">
    <video
      key={clip.video}
      ref={videoRef}
      controls
      playsInline
      preload="none"
      poster={clip.image}
      src={clip.video}
      aria-label={`播放作品：${clip.title}`}
      onPlay={handlePlay}
      onError={() => setFailed(true)}
    >
      你的浏览器暂不支持视频播放。<a href={clip.video}>打开视频文件</a>
    </video>
    {failed && <p className="video-error" role="status">视频暂时无法播放，<a href={clip.video} target="_blank" rel="noreferrer">打开视频文件</a>重试。</p>}
    </div>
    {clips.length > 1 && <div className="project-video-switcher" role="group" aria-label={`${project.title}作品切换`}>
      {clips.map((item, index) => <button type="button" key={item.video} aria-pressed={selectedIndex === index} onClick={() => selectClip(index)}>{item.title}<span>{item.duration}</span></button>)}
    </div>}
  </div>;
}
