import SectionHeader from './SectionHeader';
import { capabilityCards } from '../data/siteData';

export default function CoreCapabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <SectionHeader
        eyebrow="Capabilities"
        title="核心能力"
        subtitle="从传感到决策，从控制到协作，形成完整具身智能闭环。"
      />

      {/* Capability cards highlight platform-level technical modules. */}
      <div className="card-grid" data-reveal>
        {capabilityCards.map((card) => (
          <article key={card.title} className="ability-card">
            <p className="chip">{card.tag}</p>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
