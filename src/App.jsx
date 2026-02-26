import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const SolutionDetailPage = lazy(() => import('./pages/SolutionDetailPage'));
const DevelopersPage = lazy(() => import('./pages/DevelopersPage'));
const CasesPage = lazy(() => import('./pages/CasesPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SocialPage = lazy(() => import('./pages/SocialPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteLoading() {
  return (
    <section className="page-shell route-fallback" role="status" aria-live="polite">
      <p>页面加载中...</p>
    </section>
  );
}

function withLazy(element) {
  return <Suspense fallback={<RouteLoading />}>{element}</Suspense>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={withLazy(<HomePage />)} />
        <Route path="/products" element={withLazy(<ProductsPage />)} />
        <Route path="/solutions" element={withLazy(<SolutionsPage />)} />
        <Route path="/solutions/:slug" element={withLazy(<SolutionDetailPage />)} />
        <Route path="/developers" element={withLazy(<DevelopersPage />)} />
        <Route path="/cases" element={withLazy(<CasesPage />)} />
        <Route path="/support" element={withLazy(<SupportPage />)} />
        <Route path="/about" element={withLazy(<AboutPage />)} />
        <Route path="/auth/login" element={withLazy(<AuthPage mode="login" />)} />
        <Route path="/auth/register" element={withLazy(<AuthPage mode="register" />)} />
        <Route path="/privacy" element={withLazy(<PrivacyPage />)} />
        <Route path="/terms" element={withLazy(<TermsPage />)} />
        <Route path="/social" element={withLazy(<SocialPage />)} />
        <Route path="/contact" element={withLazy(<ContactPage />)} />
        <Route path="*" element={withLazy(<NotFoundPage />)} />
      </Route>
    </Routes>
  );
}
