import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supportLinks } from '../data/siteData';

const supportContent = {
  docs: {
    title: '开发文档中心',
    desc: '包含 API 文档、快速开始、接入示例和部署建议。',
  },
  faq: {
    title: '常见问题',
    desc: '覆盖账号、权限、部署、升级、计费等高频问题。',
  },
  forum: {
    title: '开发者论坛',
    desc: '与开发者协作交流，获取官方支持与社区示例。',
  },
  status: {
    title: '状态与公告',
    desc: '查看平台运行状态、版本发布信息和安全公告。',
  },
};

export default function SupportPage() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'docs';

  const activeContent = useMemo(() => supportContent[activeTab] || supportContent.docs, [activeTab]);

  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">Support</p>
        <h1>支持与资源</h1>
        <p>按资源类型快速定位文档、FAQ、论坛和平台状态信息。</p>
      </div>

      <div className="mini-grid" data-reveal>
        {supportLinks.map((item) => (
          <Link
            key={item.tab}
            to={item.href}
            className={`mini-card selectable ${activeTab === item.tab ? 'selected' : ''}`}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>

      <article className="detail-block" data-reveal>
        <h2>{activeContent.title}</h2>
        <p>{activeContent.desc}</p>
        <div className="page-actions">
          <Link to="/auth/register" className="solid-btn lg">
            注册账号
          </Link>
          <Link to="/contact" className="ghost-btn lg">
            联系支持
          </Link>
        </div>
      </article>
    </section>
  );
}
