import SectionHeader from './SectionHeader';
import { developerFeatures, media } from '../data/siteData';

export default function DeveloperEcosystem() {
  return (
    <section id="developers" className="section developers">
      <SectionHeader
        eyebrow="Developer"
        title="开发者生态与 SDK"
        subtitle="提供从算法开发、仿真验证到真机部署的全流程工具链。"
      />

      {/* Left side video proof + right side SDK and ecosystem details. */}
      <div className="developer-layout" data-reveal>
        <div className="developer-video">
          <video
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

        <div className="developer-content">
          {developerFeatures.map((feature) => (
            <article key={feature.title} className="developer-item">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}

          <pre className="code-block">
{`import { Robot } from '@ei/sdk';

const robot = new Robot({ endpoint: 'wss://api.ei-os.ai' });
await robot.perception.enable(['vision', 'audio', 'touch']);
await robot.task.run('line_inspection');`}
          </pre>
        </div>
      </div>
    </section>
  );
}
