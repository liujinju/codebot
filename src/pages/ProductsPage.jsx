import { Link } from 'react-router-dom';
import { localize, media, productSlides } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function ProductsPage() {
  const { locale, isZh } = useLocale();

  return (
    <section className="page-shell">
      <div className="page-hero" data-reveal>
        <div>
          <p className="eyebrow">Products</p>
          <h1>{isZh ? '具身智能产品矩阵' : 'Embodied Product Portfolio'}</h1>
          <p>
            {isZh
              ? '从本体硬件到算法栈，提供完整产品化组件，支持企业级部署与持续升级。'
              : 'From embodied hardware to AI stacks, complete modular products for enterprise deployment and continuous evolution.'}
          </p>
          <div className="page-actions">
            <Link to="/contact" className="solid-btn lg">
              {isZh ? '预约演示' : 'Book Demo'}
            </Link>
            <Link to="/developers" className="ghost-btn lg">
              {isZh ? '开发文档' : 'Developer Docs'}
            </Link>
          </div>
        </div>
        <img src={media.product1} alt={isZh ? 'EI 产品展示' : 'EI product showcase'} className="page-hero-image" loading="lazy" />
      </div>

      <div className="page-card-grid" data-reveal>
        {productSlides.map((item) => (
          <article key={String(localize(item.title, locale))} className="page-card">
            <img src={item.image} alt={String(localize(item.title, locale))} loading="lazy" />
            <h3>{localize(item.title, locale)}</h3>
            <p>{localize(item.subtitle, locale)}</p>
            <ul>
              {localize(item.specs, locale).map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
