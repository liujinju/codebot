import SectionHeader from './SectionHeader';
import { capabilityCards, localize } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function CoreCapabilities() {
  const { locale, isZh } = useLocale();

  return (
    <section id="capabilities" className="section capabilities">
      <SectionHeader
        eyebrow="Capabilities"
        title={isZh ? '核心能力' : 'Core Capabilities'}
        subtitle={
          isZh
            ? '从传感到决策，从控制到协作，形成完整具身智能闭环。'
            : 'From sensing to decision-making, from control to collaboration, forming a full embodied intelligence loop.'
        }
      />

      {/* Capability cards highlight platform-level technical modules. */}
      <div className="card-grid" data-reveal>
        {capabilityCards.map((card) => (
          <article key={String(localize(card.title, locale))} className="ability-card">
            <p className="chip">{card.tag}</p>
            <h3>{localize(card.title, locale)}</h3>
            <p>{localize(card.desc, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
