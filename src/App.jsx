import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCarousel from './components/ProductCarousel';
import CoreCapabilities from './components/CoreCapabilities';
import SolutionsSection from './components/SolutionsSection';
import DeveloperEcosystem from './components/DeveloperEcosystem';
import CaseStudies from './components/CaseStudies';
import ExperienceDownload from './components/ExperienceDownload';
import SupportResources from './components/SupportResources';
import SiteFooter from './components/SiteFooter';
import useReveal from './hooks/useReveal';

export default function App() {
  // Enable scroll-triggered reveal animation globally.
  useReveal();

  return (
    <div className="app-shell">
      {/* Skip link improves keyboard and screen-reader navigation. */}
      <a href="#main-content" className="skip-link">
        跳到主要内容
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <HeroSection />
        <ProductCarousel />
        <CoreCapabilities />
        <SolutionsSection />
        <DeveloperEcosystem />
        <CaseStudies />
        <ExperienceDownload />
        <SupportResources />
      </main>
      <SiteFooter />
    </div>
  );
}
