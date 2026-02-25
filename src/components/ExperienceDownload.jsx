import { media } from '../data/siteData';

export default function ExperienceDownload() {
  return (
    // CTA zone for SDK download, whitepaper and community onboarding.
    <section id="experience" className="section experience" data-reveal>
      <div className="experience-content">
        <p className="eyebrow">Get Started</p>
        <h2>立即体验具身智能平台</h2>
        <p>下载 SDK、获取开发白皮书，或加入开发者社区开启协作。</p>
        <div className="hero-actions">
          <a href="#" className="solid-btn lg">
            下载 SDK
          </a>
          <a href="#" className="ghost-btn lg">
            获取白皮书
          </a>
          <a href="#" className="ghost-btn lg">
            进入社区
          </a>
        </div>
      </div>

      <div className="experience-media">
        <img src={media.appPhone} alt="App preview" className="phone-img" loading="lazy" />
        <img src={media.appQr} alt="Download QR" className="qr-img" loading="lazy" />
      </div>
    </section>
  );
}
