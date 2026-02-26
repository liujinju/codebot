import SectionHeader from './SectionHeader';
import { solutions } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section solutions">
      <SectionHeader
        eyebrow="Solutions"
        title="行业解决方案"
        subtitle="针对不同行业场景提供可落地的具身智能能力包。"
      />

      {/* Scenario cards split solution value by industry verticals. */}
      <div className="solution-list" data-reveal>
        {solutions.map((item) => (
          <article key={item.slug} className="solution-item">
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <Link to={`/solutions/${item.slug}`}>查看方案</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
