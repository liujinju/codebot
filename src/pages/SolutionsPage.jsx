import { Link } from 'react-router-dom';
import { solutions } from '../data/siteData';

export default function SolutionsPage() {
  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Solutions</p>
        <h1>行业解决方案</h1>
        <p>面向制造、物流、商业服务与教育等场景，快速交付可验证价值。</p>
      </div>

      <div className="page-card-grid" data-reveal>
        {solutions.map((item) => (
          <article key={item.slug} className="page-card">
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <Link to={`/solutions/${item.slug}`} className="text-link">
              查看子页面 →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
