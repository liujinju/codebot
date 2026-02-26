import { useEffect, useRef, useState } from 'react';
import { media } from '../data/siteData';
import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const titleRef = useRef(null);
  const { isZh } = useLocale();

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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const titleNode = titleRef.current;
    if (!titleNode) {
      return undefined;
    }

    const fitTitle = () => {
      // Reset to CSS-driven size before measuring overflow.
      titleNode.style.removeProperty('font-size');

      const availableWidth = titleNode.clientWidth;
      const contentWidth = titleNode.scrollWidth;

      if (availableWidth <= 0) {
        return;
      }

      if (contentWidth <= availableWidth) {
        return;
      }

      const currentFontSize = parseFloat(window.getComputedStyle(titleNode).fontSize) || 16;
      const scale = availableWidth / contentWidth;
      const nextFontSize = Math.max(12, Math.floor(currentFontSize * scale * 0.98));

      titleNode.style.fontSize = `${nextFontSize}px`;
    };

    let rafId = window.requestAnimationFrame(fitTitle);

    const handleResize = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(fitTitle);
    };

    window.addEventListener('resize', handleResize);

    let resizeObserver = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(titleNode);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleResize).catch(() => {});
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [isZh]);

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
          {isZh ? '你的浏览器不支持视频播放。' : 'Your browser does not support video playback.'}
        </video>
      ) : null}
      <div className="hero-overlay" />

      <div className="hero-content" data-reveal>
        <p className="hero-kicker">Embodied Intelligence Platform</p>
        <h1 ref={titleRef}>{isZh ? '让机器人理解世界并高效执行' : 'Enable Robots to Understand and Execute Efficiently'}</h1>
        <p>
          {isZh
            ? '面向企业客户、开发者与消费者的一体化具身智能平台，打通感知、控制、协作与部署全链路。'
            : 'A unified embodied intelligence platform for enterprises, developers, and consumers, covering perception, control, collaboration, and deployment end-to-end.'}
        </p>
        <div className="hero-actions">
          <Link to="/products" className="solid-btn lg">
            {isZh ? '探索产品' : 'Explore Products'}
          </Link>
          <Link to="/developers" className="ghost-btn lg">
            {isZh ? '获取 SDK' : 'Get SDK'}
          </Link>
        </div>
      </div>
    </section>
  );
}
