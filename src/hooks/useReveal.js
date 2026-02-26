import { useEffect } from 'react';

export default function useReveal(trigger) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const targets = document.querySelectorAll('[data-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Graceful fallback for old browsers and reduced-motion users.
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [trigger]);
}
