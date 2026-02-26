import { useLocale } from '../contexts/LocaleContext';

export default function SocialPage() {
  const { isZh } = useLocale();

  return (
    <section className="page-shell">
      <article className="detail-block" data-reveal>
        <p className="eyebrow">Social</p>
        <h1>{isZh ? '社交媒体' : 'Social Media'}</h1>
        <p>{isZh ? '关注我们的技术更新、产品发布和社区活动。' : 'Follow our technical updates, product releases, and community events.'}</p>
        <ul>
          <li>{isZh ? '微信公众号：Embodied Intelligence' : 'WeChat Official Account: Embodied Intelligence'}</li>
          <li>{isZh ? '视频号：Embodied Intelligence Lab' : 'Video Channel: Embodied Intelligence Lab'}</li>
          <li>{isZh ? '开发者社区：EI Forum' : 'Developer Community: EI Forum'}</li>
        </ul>
      </article>
    </section>
  );
}
