import { useLocale } from '../contexts/LocaleContext';

export default function PrivacyPage() {
  const { isZh } = useLocale();

  return (
    <section className="page-shell">
      <article className="detail-block" data-reveal>
        <p className="eyebrow">Policy</p>
        <h1>{isZh ? '隐私政策' : 'Privacy Policy'}</h1>
        <p>
          {isZh
            ? '我们仅在提供服务所需范围内收集数据，并对敏感信息进行分级保护、访问控制与审计追踪。'
            : 'We collect data only as needed to provide services, and apply tiered protection, access control, and audit tracking for sensitive information.'}
        </p>
      </article>
    </section>
  );
}
