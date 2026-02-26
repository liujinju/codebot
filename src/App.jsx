import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import DevelopersPage from './pages/DevelopersPage';
import CasesPage from './pages/CasesPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SocialPage from './pages/SocialPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth/login" element={<AuthPage mode="login" />} />
        <Route path="/auth/register" element={<AuthPage mode="register" />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
