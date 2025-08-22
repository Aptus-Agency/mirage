'use client';

import { useEffect, useState, useCallback } from 'react';

interface UseParallaxScrollProps {
  totalSlides: number;
  scrollSensitivity?: number;
  slideDuration?: number;
}

export const useParallaxScroll = ({
  totalSlides,
  scrollSensitivity = 30,
  slideDuration = 600,
}: UseParallaxScrollProps) => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [ticking, setTicking] = useState(false);

  const isFirefox = typeof navigator !== 'undefined' && /Firefox/i.test(navigator.userAgent);
  const isIe = typeof navigator !== 'undefined' && 
    (/MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent));

  const slideDurationTimeout = useCallback((duration: number) => {
    setTimeout(() => {
      setTicking(false);
    }, duration);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlideNumber < totalSlides - 1) {
      setCurrentSlideNumber(prev => prev + 1);
    }
  }, [currentSlideNumber, totalSlides]);

  const previousSlide = useCallback(() => {
    if (currentSlideNumber > 0) {
      setCurrentSlideNumber(prev => prev - 1);
    }
  }, [currentSlideNumber]);

  const parallaxScroll = useCallback((evt: Event) => {
    let delta: number;

    if (isFirefox) {
      delta = (evt as unknown as { detail: number }).detail * (-120);
    } else if (isIe) {
      delta = -(evt as unknown as { deltaY: number }).deltaY;
    } else {
      delta = (evt as unknown as { wheelDelta?: number; deltaY: number }).wheelDelta || -(evt as unknown as { deltaY: number }).deltaY;
    }

    if (!ticking) {
      if (delta <= -scrollSensitivity) {
        // Down scroll
        setTicking(true);
        nextSlide();
        slideDurationTimeout(slideDuration);
      }
      if (delta >= scrollSensitivity) {
        // Up scroll
        setTicking(true);
        previousSlide();
        slideDurationTimeout(slideDuration);
      }
    }
  }, [ticking, scrollSensitivity, slideDuration, nextSlide, previousSlide, slideDurationTimeout, isFirefox, isIe]);

  const throttledParallaxScroll = useCallback((evt: Event) => {
    evt.preventDefault();
    parallaxScroll(evt);
  }, [parallaxScroll]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mousewheelEvent = isFirefox ? 'DOMMouseScroll' : 'wheel';
    
    window.addEventListener(mousewheelEvent as string, throttledParallaxScroll, { passive: false });

    return () => {
      window.removeEventListener(mousewheelEvent as string, throttledParallaxScroll);
    };
  }, [throttledParallaxScroll, isFirefox]);

  return {
    currentSlideNumber,
    setCurrentSlideNumber,
  };
};