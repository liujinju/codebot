import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SiteFooter from '../components/SiteFooter';
import useReveal from '../hooks/useReveal';

export default function MainLayout() {
  const location = useLocation();

  // Re-register reveal animation targets whenever route changes.
  useReveal(`${location.pathname}${location.search}`);

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        跳到主要内容
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
