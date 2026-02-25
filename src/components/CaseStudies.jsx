import SectionHeader from './SectionHeader';
import { cases } from '../data/siteData';

export default function CaseStudies() {
  return (
    <section id="cases" className="section cases">
      <SectionHeader
        eyebrow="Case Study"
        title="客户案例"
        subtitle="真实业务场景验证具身智能的生产价值。"
      />

      {/* Case cards keep business outcome text directly over large visuals. */}
      <div className="case-grid" data-reveal>
        {cases.map((item) => (
          <article className="case-card" key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="case-content">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
