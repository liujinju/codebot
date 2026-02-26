import { cases } from '../data/siteData';

export default function CasesPage() {
  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Case Study</p>
        <h1>客户案例</h1>
        <p>通过真实业务指标展示具身智能在不同场景的落地效果。</p>
      </div>

      <div className="page-card-grid" data-reveal>
        {cases.map((item) => (
          <article key={item.title} className="page-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
