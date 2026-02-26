import { Link } from 'react-router-dom';
import { developerFeatures, localize, media } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function DevelopersPage() {
  const { locale, isZh } = useLocale();

  return (
    <section className="page-shell">
      <div className="page-hero" data-reveal>
        <div>
          <p className="eyebrow">Developers</p>
          <h1>{isZh ? '开发者生态与 SDK' : 'Developer Ecosystem & SDK'}</h1>
          <p>
            {isZh
              ? '从仿真到真机部署，统一 API 与工具链减少开发和验证成本。'
              : 'From simulation to real-robot deployment, unified APIs and toolchains reduce development and validation costs.'}
          </p>
          <div className="page-actions">
            <Link to="/support?tab=docs" className="solid-btn lg">
              {isZh ? '查看文档' : 'View Docs'}
            </Link>
            <Link to="/support?tab=forum" className="ghost-btn lg">
              {isZh ? '社区问答' : 'Community Q&A'}
            </Link>
          </div>
        </div>
        <video
          className="page-hero-image"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.product4}
          src={media.factoryVideo}
        >
          {isZh ? '你的浏览器不支持视频播放。' : 'Your browser does not support video playback.'}
        </video>
      </div>

      <div className="mini-grid" data-reveal>
        {developerFeatures.map((item) => (
          <article key={String(localize(item.title, locale))} className="mini-card">
            <h3>{localize(item.title, locale)}</h3>
            <p>{localize(item.desc, locale)}</p>
          </article>
        ))}
      </div>

      <article className="detail-block" data-reveal>
        <h2>{isZh ? 'SDK 示例下载' : 'SDK Sample Download'}</h2>
        <p>
          {isZh
            ? '按照你的要求，代码不在页面直接展示。请下载 TXT 查看完整示例。'
            : 'As requested, code is not displayed directly on the page. Please download the TXT file for the full sample.'}
        </p>
        <a href="/sdk-quickstart.txt" className="solid-btn lg download-btn" download>
          {isZh ? '下载 sdk-quickstart.txt' : 'Download sdk-quickstart.txt'}
        </a>
      </article>
    </section>
  );
}
