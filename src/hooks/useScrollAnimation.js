import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to elements with the given selector
 * and adds the 'visible' class when they scroll into view.
 */
const useScrollAnimation = (selector = '.reveal, .reveal-left, .reveal-right') => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.12,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [selector]);
};

export default useScrollAnimation;
