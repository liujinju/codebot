import { useEffect, useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import { localize, productSlides } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const total = productSlides.length;
  const { locale, isZh } = useLocale();

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
  const slideTitle = localize(slide.title, locale);
  const slideSubtitle = localize(slide.subtitle, locale);
  const slideSpecs = localize(slide.specs, locale);

  return (
    <section id="products" className="section products">
      <SectionHeader
        eyebrow="Products"
        title={isZh ? '关键具身智能产品矩阵' : 'Core Embodied Product Portfolio'}
        subtitle={
          isZh
            ? '以产品化组件方式构建可扩展机器人平台。'
            : 'Build scalable robot platforms with modular product components.'
        }
      />

      {/* Main visual + details panel, similar to DJI-style product focus section. */}
      <div
        className="carousel"
        data-reveal
        role="region"
        aria-label={isZh ? '产品轮播' : 'Product carousel'}
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
          <img src={slide.image} alt={String(slideTitle)} loading="lazy" />
        </div>

        <div className="carousel-panel" aria-live="polite">
          <p className="index-badge">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <h3>{slideTitle}</h3>
          <p>{slideSubtitle}</p>
          <ul>
            {slideSpecs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>

          <div className="carousel-actions">
            <button type="button" aria-label={isZh ? '上一项产品' : 'Previous product'} onClick={goPrev}>
              {isZh ? '上一项' : 'Previous'}
            </button>
            <button type="button" aria-label={isZh ? '下一项产品' : 'Next product'} onClick={goNext}>
              {isZh ? '下一项' : 'Next'}
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail rail allows quick switching to any product module. */}
      <div className="thumb-grid" data-reveal>
        {productSlides.map((item, idx) => {
          const itemTitle = localize(item.title, locale);
          return (
            <button
              type="button"
              className={`thumb ${idx === active ? 'active' : ''}`}
              key={String(itemTitle)}
              onClick={() => setActive(idx)}
              aria-pressed={idx === active}
              aria-label={isZh ? `查看 ${itemTitle}` : `View ${itemTitle}`}
            >
              <img src={item.image} alt={String(itemTitle)} loading="lazy" />
              <span>{itemTitle}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
