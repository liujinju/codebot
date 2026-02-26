import SectionHeader from './SectionHeader';
import { localize, solutions } from '../data/siteData';
import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function SolutionsSection() {
  const { locale, isZh } = useLocale();

  return (
    <section id="solutions" className="section solutions">
      <SectionHeader
        eyebrow="Solutions"
        title={isZh ? '行业解决方案' : 'Industry Solutions'}
        subtitle={
          isZh
            ? '针对不同行业场景提供可落地的具身智能能力包。'
            : 'Deployable embodied intelligence capability packs tailored to different industries.'
        }
      />

      {/* Scenario cards split solution value by industry verticals. */}
      <div className="solution-list" data-reveal>
        {solutions.map((item) => (
          <article key={item.slug} className="solution-item">
            <h3>{localize(item.name, locale)}</h3>
            <p>{localize(item.detail, locale)}</p>
            <Link to={`/solutions/${item.slug}`}>{isZh ? '查看方案' : 'View Solution'}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
