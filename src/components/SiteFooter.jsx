import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    // Footer keeps legal links and social entry points in one compact area.
    <footer id="about" className="site-footer">
      <div className="footer-brand">
        <Link className="logo" to="/">
          EI<span>•OS</span>
        </Link>
        <p>面向未来的具身智能产品与平台。</p>
      </div>

      <div className="footer-links">
        <Link to="/privacy">隐私政策</Link>
        <Link to="/terms">服务条款</Link>
        <Link to="/social">社交媒体</Link>
        <Link to="/contact">联系我们</Link>
      </div>

      <p className="copyright">© 2026 Embodied Intelligence Platform. All rights reserved.</p>
    </footer>
  );
}
