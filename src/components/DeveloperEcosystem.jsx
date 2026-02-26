import SectionHeader from './SectionHeader';
import { developerFeatures, localize, media } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function DeveloperEcosystem() {
  const { locale, isZh } = useLocale();

  return (
    <section id="developers" className="section developers">
      <SectionHeader
        eyebrow="Developer"
        title={isZh ? '开发者生态与 SDK' : 'Developer Ecosystem & SDK'}
        subtitle={
          isZh
            ? '提供从算法开发、仿真验证到真机部署的全流程工具链。'
            : 'An end-to-end toolchain from algorithm development and simulation validation to real-robot deployment.'
        }
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
            {isZh ? '你的浏览器不支持视频播放。' : 'Your browser does not support video playback.'}
          </video>
        </div>

        <div className="developer-content">
          {developerFeatures.map((feature) => (
            <article key={String(localize(feature.title, locale))} className="developer-item">
              <h3>{localize(feature.title, locale)}</h3>
              <p>{localize(feature.desc, locale)}</p>
            </article>
          ))}

          <article className="sdk-download-card">
            <h3>{isZh ? 'SDK 快速示例' : 'SDK Quickstart Example'}</h3>
            <p>
              {isZh
                ? '按你的要求，页面不直接贴代码，点击下载 TXT 示例文件。'
                : 'As requested, code is not shown inline. Click to download the TXT sample file.'}
            </p>
            <a href="/sdk-quickstart.txt" className="solid-btn download-btn" download>
              {isZh ? '下载 SDK 示例 TXT' : 'Download SDK Sample TXT'}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
