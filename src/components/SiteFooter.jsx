import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function SiteFooter() {
  const { isZh } = useLocale();

  return (
    // Footer keeps legal links and social entry points in one compact area.
    <footer id="about" className="site-footer">
      <div className="footer-brand">
        <Link className="logo" to="/">
          EI<span>•OS</span>
        </Link>
        <p>{isZh ? '面向未来的具身智能产品与平台。' : 'Embodied intelligence products and platform for the future.'}</p>
      </div>

      <div className="footer-links">
        <Link to="/privacy">{isZh ? '隐私政策' : 'Privacy'}</Link>
        <Link to="/terms">{isZh ? '服务条款' : 'Terms'}</Link>
        <Link to="/social">{isZh ? '社交媒体' : 'Social'}</Link>
        <Link to="/contact">{isZh ? '联系我们' : 'Contact'}</Link>
      </div>

      <p className="copyright">© 2026 Embodied Intelligence Platform. {isZh ? '版权所有。' : 'All rights reserved.'}</p>
    </footer>
  );
}
