import { media } from '../data/siteData';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useLocale } from '../contexts/LocaleContext';

export default function ExperienceDownload() {
  const { isZh } = useLocale();

  return (
    // CTA zone for SDK download, whitepaper and community onboarding.
    <section id="experience" className="section experience">
      <div className="experience-content" data-reveal>
        <SectionHeader
          eyebrow={isZh ? 'GET STARTED' : 'GET STARTED'}
          title={isZh ? '立即体验具身智能平台' : 'Start Building with Embodied Intelligence'}
          subtitle={
            isZh
              ? '下载 SDK、获取开发白皮书，或加入开发者社区开启协作。'
              : 'Download the SDK, get the whitepaper, or join the developer community to start collaboration.'
          }
        />
        <div className="hero-actions">
          <Link to="/developers" className="solid-btn lg download-btn">
            {isZh ? '下载 SDK' : 'Download SDK'}
          </Link>
          <Link to="/support?tab=docs" className="ghost-btn lg">
            {isZh ? '获取白皮书' : 'Get Whitepaper'}
          </Link>
          <Link to="/support?tab=forum" className="ghost-btn lg">
            {isZh ? '进入社区' : 'Join Community'}
          </Link>
        </div>
      </div>

      <div className="experience-media" data-reveal>
        <img src={media.appPhone} alt="App preview" className="phone-img" loading="lazy" />
        <img src={media.appQr} alt="Download QR" className="qr-img" loading="lazy" />
      </div>
    </section>
  );
}
