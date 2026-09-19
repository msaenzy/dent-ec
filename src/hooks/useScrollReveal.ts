import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
) {
  const ref = useRef<T | null>(null);
  // Default to true so if JS is delayed, content is immediately visible & accessible
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-triggers both when entering AND when exiting the viewport (no 'once')
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}
