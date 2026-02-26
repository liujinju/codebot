import HeroSection from '../components/HeroSection';
import ProductCarousel from '../components/ProductCarousel';
import CoreCapabilities from '../components/CoreCapabilities';
import SolutionsSection from '../components/SolutionsSection';
import DeveloperEcosystem from '../components/DeveloperEcosystem';
import CaseStudies from '../components/CaseStudies';
import ExperienceDownload from '../components/ExperienceDownload';
import SupportResources from '../components/SupportResources';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <CoreCapabilities />
      <SolutionsSection />
      <DeveloperEcosystem />
      <CaseStudies />
      <ExperienceDownload />
      <SupportResources />
    </>
  );
}
