import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Slightly offset to trigger before element is fully in view
      }
    );

    const elements = ref.current?.querySelectorAll('.reveal') ?? [];
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return ref;
}