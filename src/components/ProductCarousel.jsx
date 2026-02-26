import { useEffect, useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import { productSlides } from '../data/siteData';

export default function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const total = productSlides.length;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
    } else {
      media.addListener(update);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  // Auto-play carousel every 6 seconds when motion reduction is disabled.
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [total, isPaused, prefersReducedMotion]);

  const goPrev = () => setActive((prev) => (prev - 1 + total) % total);
  const goNext = () => setActive((prev) => (prev + 1) % total);

  const slide = useMemo(() => productSlides[active], [active]);

  return (
    <section id="products" className="section products">
      <SectionHeader
        eyebrow="Products"
        title="关键具身智能产品矩阵"
        subtitle="以产品化组件方式构建可扩展机器人平台。"
      />

      {/* Main visual + details panel, similar to DJI-style product focus section. */}
      <div
        className="carousel"
        data-reveal
        role="region"
        aria-label="产品轮播"
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') goPrev();
          if (event.key === 'ArrowRight') goNext();
        }}
      >
        <div className="carousel-media">
          <img src={slide.image} alt={slide.title} loading="lazy" />
        </div>

        <div className="carousel-panel" aria-live="polite">
          <p className="index-badge">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <h3>{slide.title}</h3>
          <p>{slide.subtitle}</p>
          <ul>
            {slide.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>

          <div className="carousel-actions">
            <button type="button" aria-label="上一项产品" onClick={goPrev}>
              上一项
            </button>
            <button type="button" aria-label="下一项产品" onClick={goNext}>
              下一项
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail rail allows quick switching to any product module. */}
      <div className="thumb-grid" data-reveal>
        {productSlides.map((item, idx) => (
          <button
            type="button"
            className={`thumb ${idx === active ? 'active' : ''}`}
            key={item.title}
            onClick={() => setActive(idx)}
            aria-pressed={idx === active}
            aria-label={`查看 ${item.title}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
