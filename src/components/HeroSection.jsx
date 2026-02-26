import { useEffect, useState } from 'react';
import { media } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Save-data or reduced-motion users see static hero image for faster perceived load.
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = Boolean(connection && connection.saveData);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (saveData || reduceMotion) {
      setUseVideo(false);
    }
  }, []);

  return (
    // Hero uses remote MP4 as background and keeps key CTAs above fold.
    <section id="hero" className="hero">
      <img
        className="hero-poster"
        src={media.heroPoster}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />
      {useVideo ? (
        <video
          className={`hero-video ${videoReady ? 'is-ready' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster={media.heroPoster}
          src={media.heroVideo}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setUseVideo(false)}
        >
          你的浏览器不支持视频播放。
        </video>
      ) : null}
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
