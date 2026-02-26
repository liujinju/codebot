import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ei_locale';
const SUPPORTED = ['zh', 'en'];

const LocaleContext = createContext(null);

function detectInitialLocale() {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(saved)) {
    return saved;
  }

  const browser = (window.navigator.language || '').toLowerCase();
  return browser.startsWith('zh') ? 'zh' : 'en';
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(detectInitialLocale);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      isZh: locale === 'zh',
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === 'zh' ? 'en' : 'zh')),
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }

  return context;
}
