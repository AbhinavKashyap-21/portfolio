import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isRevealed];
}

export function useMultiReveal(count, options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -30px 0px',
    staggerDelay = 100,
  } = options;

  const refs = useRef([]);
  const [revealed, setRevealed] = useState(new Array(count).fill(false));

  useEffect(() => {
    const observers = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setRevealed(prev => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * staggerDelay);
            observer.unobserve(element);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [count, threshold, rootMargin, staggerDelay]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return [setRef, revealed];
}
