import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RouteEffects from '../components/RouteEffects';
import SiteFooter from '../components/SiteFooter';
import useReveal from '../hooks/useReveal';
import { useLocale } from '../contexts/LocaleContext';

export default function MainLayout() {
  const location = useLocation();
  const { isZh } = useLocale();

  // Re-register reveal animation targets whenever route changes.
  useReveal(`${location.pathname}${location.search}`);

  return (
    <div className="app-shell">
      {/* Handles route-level scroll restore and SEO meta updates. */}
      <RouteEffects />
      <a href="#main-content" className="skip-link">
        {isZh ? '跳到主要内容' : 'Skip to main content'}
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
