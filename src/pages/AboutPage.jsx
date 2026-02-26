import { Link } from 'react-router-dom';

const milestones = [
  '2024：发布第一代具身智能平台底座',
  '2025：完成多行业客户试点与规模化验证',
  '2026：开放开发者生态，形成软硬件一体化产品线',
];

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="page-header" data-reveal>
        <p className="eyebrow">About</p>
        <h1>关于我们</h1>
        <p>我们专注于构建高可用、可扩展、可持续演进的具身智能产品平台。</p>
      </div>

      <div className="detail-block" data-reveal>
        <h2>发展里程碑</h2>
        <ul>
          {milestones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="page-actions">
          <Link to="/contact" className="solid-btn lg">
            商务合作
          </Link>
          <button type="button" className="ghost-btn lg" disabled>
            招聘页面（待上线）
          </button>
        </div>
      </div>
    </section>
  );
}
