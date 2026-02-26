import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { localize, supportLinks } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

const supportContent = {
  docs: {
    title: { zh: '开发文档中心', en: 'Developer Documentation Center' },
    desc: {
      zh: '包含 API 文档、快速开始、接入示例和部署建议。',
      en: 'Includes API docs, quickstart guides, integration examples, and deployment recommendations.',
    },
  },
  faq: {
    title: { zh: '常见问题', en: 'Frequently Asked Questions' },
    desc: {
      zh: '覆盖账号、权限、部署、升级、计费等高频问题。',
      en: 'Covers common questions on accounts, permissions, deployment, upgrades, and billing.',
    },
  },
  forum: {
    title: { zh: '开发者论坛', en: 'Developer Forum' },
    desc: {
      zh: '与开发者协作交流，获取官方支持与社区示例。',
      en: 'Collaborate with developers and get official support plus community examples.',
    },
  },
};

export default function SupportPage() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'docs';
  const { locale, isZh } = useLocale();

  const activeContent = useMemo(() => supportContent[activeTab] || supportContent.docs, [activeTab]);

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Support</p>
        <h1>{isZh ? '支持与资源' : 'Support & Resources'}</h1>
        <p>
          {isZh
            ? '按资源类型快速定位文档、FAQ 与开发者论坛。'
            : 'Quickly locate docs, FAQ, and developer forum resources by type.'}
        </p>
      </div>

      <div className="mini-grid" data-reveal>
        {supportLinks.map((item) => (
          <Link
            key={item.tab}
            to={item.href}
            className={`mini-card selectable ${activeTab === item.tab ? 'selected' : ''}`}
          >
            <h3>{localize(item.title, locale)}</h3>
            <p>{localize(item.desc, locale)}</p>
          </Link>
        ))}
      </div>

      <article className="detail-block" data-reveal>
        <h2>{localize(activeContent.title, locale)}</h2>
        <p>{localize(activeContent.desc, locale)}</p>
        <div className="page-actions">
          <Link to="/auth/register" className="solid-btn lg">
            {isZh ? '注册账号' : 'Create Account'}
          </Link>
          <Link to="/contact" className="ghost-btn lg">
            {isZh ? '联系支持' : 'Contact Support'}
          </Link>
        </div>
      </article>
    </section>
  );
}
