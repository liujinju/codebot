import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RouteEffects from '../components/RouteEffects';
import SiteFooter from '../components/SiteFooter';
import useReveal from '../hooks/useReveal';

export default function MainLayout() {
  const location = useLocation();

  // Re-register reveal animation targets whenever route changes.
  useReveal(`${location.pathname}${location.search}`);

  return (
    <div className="app-shell">
      {/* Handles route-level scroll restore and SEO meta updates. */}
      <RouteEffects />
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
