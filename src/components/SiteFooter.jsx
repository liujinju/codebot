export default function SiteFooter() {
  return (
    // Footer keeps legal links and social entry points in one compact area.
    <footer id="about" className="site-footer">
      <div className="footer-brand">
        <a className="logo" href="#hero">
          EI<span>•OS</span>
        </a>
        <p>面向未来的具身智能产品与平台。</p>
      </div>

      <div className="footer-links">
        <a href="#">隐私政策</a>
        <a href="#">服务条款</a>
        <a href="#">社交媒体</a>
        <a href="#">联系我们</a>
      </div>

      <p className="copyright">© 2026 Embodied Intelligence Platform. All rights reserved.</p>
    </footer>
  );
}
