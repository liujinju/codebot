import { Link, useParams } from 'react-router-dom';
import { capabilityCards, localize, solutions } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug);
  const { locale, isZh } = useLocale();

  if (!solution) {
    return (
      <section className="page-shell" data-reveal>
        <div className="page-card">
          <h1>{isZh ? '未找到该方案页面' : 'Solution page not found'}</h1>
          <p>{isZh ? '当前链接不存在或已下线，请返回解决方案总览。' : 'This link does not exist or is unavailable. Please return to solutions overview.'}</p>
          <Link to="/solutions" className="solid-btn lg">
            {isZh ? '返回解决方案' : 'Back to Solutions'}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Solution Detail</p>
        <h1>{localize(solution.name, locale)}</h1>
        <p>{localize(solution.detail, locale)}</p>
      </div>

      <div className="detail-block" data-reveal>
        <h2>{isZh ? '推荐能力模块' : 'Recommended Capability Modules'}</h2>
        <div className="mini-grid">
          {capabilityCards.map((item) => (
            <article key={String(localize(item.title, locale))} className="mini-card">
              <h3>{localize(item.title, locale)}</h3>
              <p>{localize(item.desc, locale)}</p>
            </article>
          ))}
        </div>
        <div className="page-actions">
          <Link to="/contact" className="solid-btn lg">
            {isZh ? '联系方案顾问' : 'Contact Consultant'}
          </Link>
          <Link to="/solutions" className="ghost-btn lg">
            {isZh ? '返回总览' : 'Back to Overview'}
          </Link>
        </div>
      </div>
    </section>
  );
}
