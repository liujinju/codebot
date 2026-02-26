import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page-shell">
      <article className="detail-block" data-reveal>
        <p className="eyebrow">404</p>
        <h1>页面不存在</h1>
        <p>你访问的页面可能已移动或不存在，请返回首页继续浏览。</p>
        <Link to="/" className="solid-btn lg">
          返回首页
        </Link>
      </article>
    </section>
  );
}
