import { Link } from 'react-router-dom';
import { developerFeatures, media } from '../data/siteData';

export default function DevelopersPage() {
  return (
    <section className="page-shell">
      <div className="page-hero" data-reveal>
        <div>
          <p className="eyebrow">Developers</p>
          <h1>开发者生态与 SDK</h1>
          <p>从仿真到真机部署，统一 API 与工具链减少开发和验证成本。</p>
          <div className="page-actions">
            <Link to="/support?tab=docs" className="solid-btn lg">
              查看文档
            </Link>
            <Link to="/support?tab=forum" className="ghost-btn lg">
              社区问答
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
          你的浏览器不支持视频播放。
        </video>
      </div>

      <div className="mini-grid" data-reveal>
        {developerFeatures.map((item) => (
          <article key={item.title} className="mini-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>

      <pre className="code-block" data-reveal>
{`import { Robot } from '@ei/sdk';

const robot = new Robot({ endpoint: 'wss://api.ei-os.ai' });
await robot.perception.enable(['vision', 'audio', 'touch']);
await robot.task.run('line_inspection');`}
      </pre>
    </section>
  );
}
