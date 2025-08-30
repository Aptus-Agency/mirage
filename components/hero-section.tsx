'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  bgImage: string;
  overlayColor: string;
}

const slides: Slide[] = [
  {
    id: 0,
    title: "Mirage Tiles",
    description: "Transform your space with our exquisite collection of ceramic tiles. From modern minimalist designs to classic patterns, find the perfect tiles for every room.",
    linkText: "About Us",
    linkUrl: "/about",
    bgImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
    overlayColor: "rgb(233, 156, 126)"
  },
  {
    id: 1,
    title: "Ceramic Tiles",
    description: "Transform your spaces with tiles that redefine elegance, functionality, and durability.",
    linkText: "Explore Collections",
    linkUrl: "/#collections",
    bgImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
    overlayColor: "rgb(225, 204, 174)"
  },
  {
    id: 2,
    title: "Shower Heads",
    description: "Elevate your bathing experience with our premium shower heads.",
    linkText: "Explore Products",
    linkUrl: "/products/fixtures",
    bgImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
    overlayColor: "rgb(173, 197, 205)"
  },
  {
    id: 3,
    title: "Toilet Seats",
    description: "Elevate your bathing experience with our premium shower heads.",
    linkText: "Explore Products",
    linkUrl: "/products/fixtures",
    bgImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
    overlayColor: "rgb(203, 198, 195)"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const numOfSlides = slides.length - 1;
  const animTime = 500;
  const autoSlideDelay = 6000;

  const changeSlide = useCallback((slideIndex: number, instant = false) => {
    if (isAnimating) return;
    
    if (!instant) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, animTime);
    }
    
    setCurrentSlide(slideIndex);
  }, [isAnimating]);

  const navigateLeft = useCallback(() => {
    if (isAnimating) return;
    if (currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  }, [currentSlide, isAnimating, changeSlide]);

  const navigateRight = useCallback(() => {
    if (isAnimating) return;
    if (currentSlide < numOfSlides) {
      changeSlide(currentSlide + 1);
    }
  }, [currentSlide, numOfSlides, isAnimating, changeSlide]);

  // Auto slide effect
  useEffect(() => {
    const autoSlideTimeout = setTimeout(() => {
      let nextSlide = currentSlide + 1;
      if (nextSlide > numOfSlides) nextSlide = 0;
      changeSlide(nextSlide);
    }, autoSlideDelay);

    return () => clearTimeout(autoSlideTimeout);
  }, [currentSlide, numOfSlides, changeSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < numOfSlides) {
      navigateRight();
    }
    if (isRightSwipe && currentSlide > 0) {
      navigateLeft();
    }
  };

  return (
    <section className="hero-slider relative h-screen overflow-hidden select-none cursor-grab active:cursor-grabbing">
      {/* Left Control */}
      <div 
        className={`slider-control left absolute top-0 left-0 w-[12%] h-full z-20 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          currentSlide === 0 ? 'cursor-auto pointer-events-none' : 'cursor-pointer'
        }`}
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 100%)'
        }}
        onClick={navigateLeft}
      />

      {/* Right Control */}
      <div 
        className={`slider-control right absolute top-0 right-0 w-[12%] h-full z-20 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          currentSlide === numOfSlides ? 'cursor-auto pointer-events-none' : 'cursor-pointer'
        }`}
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)'
        }}
        onClick={navigateRight}
      />

      {/* Slider Container */}
      <div 
        className={`slider relative h-full ${
          isAnimating ? 'transition-transform duration-500' : ''
        }`}
        style={{
          transform: `translate3d(${-currentSlide * 100}%, 0, 0)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute top-0 w-full h-full overflow-hidden ${
              index === currentSlide ? 'active' : ''
            }`}
            style={{ left: `${index * 100}%` }}
          >
            {/* Background */}
            <div 
              className={`slide-bg absolute top-0 w-full h-full bg-cover will-change-transform ${
                isAnimating ? 'transition-transform duration-500' : ''
              }`}
              style={{
                left: `${-index * 50}%`,
                backgroundImage: `url(${slide.bgImage})`,
                transform: `translate3d(${currentSlide * 50}%, 0, 0)`
              }}
            />
            
            {/* Content */}
            <div className="slide-content absolute top-0 left-0 w-full h-full">
              {/* SVG Overlay */}
              <svg 
                className={`slide-overlay absolute bottom-0 left-0 h-full min-h-[810px] transition-all duration-500 will-change-transform ${
                  index === currentSlide 
                    ? 'opacity-100 transform-none delay-500' 
                    : 'opacity-0 transform translate3d(-20%, 0, 0)'
                } hidden lg:block`}
                viewBox="0 0 720 405" 
                preserveAspectRatio="xMaxYMax slice"
              >
                <path 
                  className="slide-overlay-path opacity-80" 
                  d="M0,0 150,0 500,405 0,405" 
                  fill={"#221E1C"}
                />
              </svg>
              
              {/* Text Content */}
              <div className={`slide-text absolute text-white will-change-transform transition-all duration-500 ${
                index === currentSlide 
                  ? 'opacity-100 transform-none delay-700' 
                  : 'opacity-0 transform -translate-y-1/2'
              } w-1/4 bottom-[15%] left-[12%] lg:w-1/4 lg:bottom-[15%] lg:left-[12%] lg:transform-none lg:text-left max-lg:left-0 max-lg:bottom-0 max-lg:w-full max-lg:h-80 max-lg:text-center max-lg:transform max-lg:translate-y-1/2 max-lg:px-4`}
              >
                <h2 className="font-bold text-6xl mb-8">
                  {slide.title}
                </h2>
                <p className="font-normal text-lg mb-6 max-lg:hidden">
                  {slide.description}
                </p>
                <Link href={slide.linkUrl} className="btn-primary">
                  {slide.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-3 hidden md:flex">
        <button
          onClick={navigateLeft}
          disabled={currentSlide === 0}
          className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-background/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={navigateRight}
          disabled={currentSlide === numOfSlides}
          className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-background/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;