import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll progress
 * @returns { progress: number, scrolled: boolean }
 */
export function useScrollProgress(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold check for background transitions
      setScrolled(window.scrollY > threshold);
      
      // Progress calculation for progress bars
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { progress, scrolled };
}
