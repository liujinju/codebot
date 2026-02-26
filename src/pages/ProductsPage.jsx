import { Link } from 'react-router-dom';
import { media, productSlides } from '../data/siteData';

export default function ProductsPage() {
  return (
    <section className="page-shell">
      <div className="page-hero" data-reveal>
        <div>
          <p className="eyebrow">Products</p>
          <h1>具身智能产品矩阵</h1>
          <p>
            从本体硬件到算法栈，提供完整产品化组件，支持企业级部署与持续升级。
          </p>
          <div className="page-actions">
            <Link to="/contact" className="solid-btn lg">
              预约演示
            </Link>
            <Link to="/developers" className="ghost-btn lg">
              开发文档
            </Link>
          </div>
        </div>
        <img src={media.product1} alt="EI 产品展示" className="page-hero-image" loading="lazy" />
      </div>

      <div className="page-card-grid" data-reveal>
        {productSlides.map((item) => (
          <article key={item.title} className="page-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <ul>
              {item.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
