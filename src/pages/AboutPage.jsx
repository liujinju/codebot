import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';
import { localize } from '../data/siteData';

const milestones = [
  {
    zh: '2024：发布第一代具身智能平台底座',
    en: '2024: Released the first-generation embodied intelligence platform foundation.',
  },
  {
    zh: '2025：完成多行业客户试点与规模化验证',
    en: '2025: Completed cross-industry pilots and large-scale validation with customers.',
  },
  {
    zh: '2026：开放开发者生态，形成软硬件一体化产品线',
    en: '2026: Opened developer ecosystem and launched integrated hardware-software product lines.',
  },
];

export default function AboutPage() {
  const { locale, isZh } = useLocale();

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">About</p>
        <h1>{isZh ? '关于我们' : 'About Us'}</h1>
        <p>
          {isZh
            ? '我们专注于构建高可用、可扩展、可持续演进的具身智能产品平台。'
            : 'We focus on building highly available, scalable, and continuously evolving embodied intelligence products.'}
        </p>
      </div>

      <div className="detail-block" data-reveal>
        <h2>{isZh ? '发展里程碑' : 'Milestones'}</h2>
        <ul>
          {milestones.map((item) => (
            <li key={localize(item, locale)}>{localize(item, locale)}</li>
          ))}
        </ul>
        <div className="page-actions">
          <Link to="/contact" className="solid-btn lg">
            {isZh ? '商务合作' : 'Business Inquiry'}
          </Link>
          <button type="button" className="ghost-btn lg" disabled>
            {isZh ? '招聘页面（待上线）' : 'Careers (Coming Soon)'}
          </button>
        </div>
      </div>
    </section>
  );
}
