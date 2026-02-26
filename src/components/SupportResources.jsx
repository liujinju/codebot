import SectionHeader from './SectionHeader';
import { localize, supportLinks } from '../data/siteData';
import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function SupportResources() {
  const { locale, isZh } = useLocale();

  return (
    <section id="support" className="section support">
      <SectionHeader
        eyebrow="Support"
        title={isZh ? '支持与资源' : 'Support & Resources'}
        subtitle={
          isZh
            ? '文档、问题排查、社区交流一站式覆盖。'
            : 'One-stop access to docs, troubleshooting, and community collaboration.'
        }
      />

      {/* Support entry points for docs, FAQ and community help. */}
      <div className="support-grid" data-reveal>
        {supportLinks.map((item) => (
          <Link key={item.tab} className="support-card" to={item.href}>
            <h3>{localize(item.title, locale)}</h3>
            <p>{localize(item.desc, locale)}</p>
            <span>{isZh ? '立即访问 →' : 'Open →'}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
