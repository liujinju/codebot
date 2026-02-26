import { Link } from 'react-router-dom';
import { localize, solutions } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function SolutionsPage() {
  const { locale, isZh } = useLocale();

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Solutions</p>
        <h1>{isZh ? '行业解决方案' : 'Industry Solutions'}</h1>
        <p>
          {isZh
            ? '面向制造、物流、商业服务与教育等场景，快速交付可验证价值。'
            : 'Deliver measurable value quickly across manufacturing, logistics, service, and education scenarios.'}
        </p>
      </div>

      <div className="page-card-grid" data-reveal>
        {solutions.map((item) => (
          <article key={item.slug} className="page-card">
            <h3>{localize(item.name, locale)}</h3>
            <p>{localize(item.detail, locale)}</p>
            <Link to={`/solutions/${item.slug}`} className="text-link">
              {isZh ? '查看子页面 →' : 'Open Detail →'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
