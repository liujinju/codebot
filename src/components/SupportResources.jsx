import SectionHeader from './SectionHeader';
import { supportLinks } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function SupportResources() {
  return (
    <section id="support" className="section support">
      <SectionHeader
        eyebrow="Support"
        title="支持与资源"
        subtitle="文档、问题排查、社区交流和平台公告一站式覆盖。"
      />

      {/* Support entry points for docs, FAQ and community help. */}
      <div className="support-grid" data-reveal>
        {supportLinks.map((item) => (
          <Link key={item.title} className="support-card" to={item.href}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>立即访问 →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
