import { useLocale } from '../contexts/LocaleContext';

export default function TermsPage() {
  const { isZh } = useLocale();

  return (
    <section className="page-shell">
      <article className="detail-block" data-reveal>
        <p className="eyebrow">Policy</p>
        <h1>{isZh ? '服务条款' : 'Terms of Service'}</h1>
        <p>
          {isZh
            ? '使用平台前请阅读服务条款，涵盖账号规范、许可范围、服务可用性与责任边界说明。'
            : 'Please review the terms before using the platform, including account rules, license scope, service availability, and liability boundaries.'}
        </p>
      </article>
    </section>
  );
}
