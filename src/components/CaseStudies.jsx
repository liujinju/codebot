import SectionHeader from './SectionHeader';
import { cases, localize } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function CaseStudies() {
  const { locale, isZh } = useLocale();

  return (
    <section id="cases" className="section cases">
      <SectionHeader
        eyebrow="Case Study"
        title={isZh ? '客户案例' : 'Customer Cases'}
        subtitle={
          isZh
            ? '真实业务场景验证具身智能的生产价值。'
            : 'Real-world scenarios validating the production value of embodied intelligence.'
        }
      />

      {/* Case cards keep business outcome text directly over large visuals. */}
      <div className="case-grid" data-reveal>
        {cases.map((item) => (
          <article className="case-card" key={String(localize(item.title, locale))}>
            <img src={item.image} alt={String(localize(item.title, locale))} loading="lazy" />
            <div className="case-content">
              <h3>{localize(item.title, locale)}</h3>
              <p>{localize(item.summary, locale)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
