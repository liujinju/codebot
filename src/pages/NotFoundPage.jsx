import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function NotFoundPage() {
  const { isZh } = useLocale();

  return (
    <section className="page-shell">
      <article className="detail-block" data-reveal>
        <p className="eyebrow">404</p>
        <h1>{isZh ? '页面不存在' : 'Page Not Found'}</h1>
        <p>
          {isZh
            ? '你访问的页面可能已移动或不存在，请返回首页继续浏览。'
            : 'The page you visited may have moved or no longer exists. Please go back to the homepage.'}
        </p>
        <Link to="/" className="solid-btn lg">
          {isZh ? '返回首页' : 'Back to Home'}
        </Link>
      </article>
    </section>
  );
}
