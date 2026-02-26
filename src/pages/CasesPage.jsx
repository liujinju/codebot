import { casesPage, localize } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function CasesPage() {
  const { locale, isZh } = useLocale();

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Case Study</p>
        <h1>{isZh ? '客户案例' : 'Customer Cases'}</h1>
        <p>
          {isZh
            ? '通过真实业务指标展示具身智能在不同场景的落地效果。'
            : 'Show real deployment outcomes of embodied intelligence across different scenarios with measurable business metrics.'}
        </p>
      </div>

      <div className="page-card-grid" data-reveal>
        {casesPage.map((item) => (
          <article key={String(localize(item.title, locale))} className="page-card">
            <img src={item.image} alt={String(localize(item.title, locale))} loading="lazy" />
            <h3>{localize(item.title, locale)}</h3>
            <p>{localize(item.summary, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
