import { Link, useParams } from 'react-router-dom';
import { capabilityCards, solutions } from '../data/siteData';

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return (
      <section className="page-shell" data-reveal>
        <div className="page-card">
          <h1>未找到该方案页面</h1>
          <p>当前链接不存在或已下线，请返回解决方案总览。</p>
          <Link to="/solutions" className="solid-btn lg">
            返回解决方案
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Solution Detail</p>
        <h1>{solution.name}</h1>
        <p>{solution.detail}</p>
      </div>

      <div className="detail-block" data-reveal>
        <h2>推荐能力模块</h2>
        <div className="mini-grid">
          {capabilityCards.map((item) => (
            <article key={item.title} className="mini-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="page-actions">
          <Link to="/contact" className="solid-btn lg">
            联系方案顾问
          </Link>
          <Link to="/solutions" className="ghost-btn lg">
            返回总览
          </Link>
        </div>
      </div>
    </section>
  );
}
