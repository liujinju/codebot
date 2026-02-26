import { useEffect } from 'react';

export default function useReveal(trigger) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsObserver = 'IntersectionObserver' in window;
    let intersectionObserver = null;
    const observedNodes = new WeakSet();

    const revealNode = (node) => {
      if (!(node instanceof Element)) {
        return;
      }

      if (!node.matches('[data-reveal]')) {
        return;
      }

      // Reveal immediately when reduced-motion is enabled or observer is unavailable.
      if (reduceMotion || !supportsObserver) {
        node.classList.add('is-visible');
        return;
      }

      if (observedNodes.has(node)) {
        return;
      }

      intersectionObserver.observe(node);
      observedNodes.add(node);
    };

    if (!reduceMotion && supportsObserver) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              intersectionObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      );
    }

    const scanRevealTargets = () => {
      document.querySelectorAll('[data-reveal]').forEach(revealNode);
    };

    // Handle currently mounted nodes.
    scanRevealTargets();

    // Also handle nodes mounted later (e.g. lazy-loaded route content).
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          revealNode(node);
          node.querySelectorAll('[data-reveal]').forEach(revealNode);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
    };
  }, [trigger]);
}
