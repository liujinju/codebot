import { media } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    // Hero uses remote MP4 as background and keeps key CTAs above fold.
    <section id="hero" className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster={media.heroPoster}
        src={media.heroVideo}
      >
        你的浏览器不支持视频播放。
      </video>
      <div className="hero-overlay" />

      <div className="hero-content" data-reveal>
        <p className="hero-kicker">Embodied Intelligence Platform</p>
        <h1>让机器人真正理解世界、执行任务、协同进化</h1>
        <p>
          面向企业客户、开发者和消费者的一体化具身智能平台，融合感知、控制、决策和开发生态。
        </p>
        <div className="hero-actions">
          <Link to="/products" className="solid-btn lg">
            探索产品
          </Link>
          <Link to="/developers" className="ghost-btn lg">
            获取 SDK
          </Link>
        </div>
      </div>
    </section>
  );
}
