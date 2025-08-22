'use client';

import { useEffect, useRef } from "react";
import Navigation from "../../components/navigation";
import HeroSection from "../../components/hero-section";
import ConceptSection from "../../components/concept-section";
import CitronelloSection from "../../components/citronello-section";
import CollectionsSection from "../../components/collectoins-section";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";
import InspirationSection from "../../components/inspiration-section";
import { useParallaxScroll } from "./useParallaxScroll";

const parallaxSections = [
  {
    id: "hero",
    title: "Mirage",
    subtitle: "Experience luxury design like never before",
    backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    component: HeroSection
  },
  {
    id: "concept",
    title: "Our Concept",
    subtitle: "Where innovation meets timeless elegance",
    backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
    component: ConceptSection
  },
  {
    id: "citronello",
    title: "Citronello Collection",
    subtitle: "Discover our signature designs",
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2000&auto=format&fit=crop",
    component: CitronelloSection
  },
  {
    id: "inspiration",
    title: "Inspiration",
    subtitle: "Drawing from nature's finest elements",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    component: InspirationSection
  },
  {
    id: "collections",
    title: "Collections",
    subtitle: "Curated pieces for discerning tastes",
    backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
    component: CollectionsSection
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentSlideNumber } = useParallaxScroll({ 
    totalSlides: parallaxSections.length 
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const backgrounds = containerRef.current.querySelectorAll('.parallax-background');
      
      backgrounds.forEach((bg, index) => {
        bg.classList.remove('up-scroll', 'down-scroll');
        
        if (index < currentSlideNumber) {
          bg.classList.add('down-scroll');
        } else if (index > currentSlideNumber) {
          bg.classList.add('up-scroll');
        }
      });
    }
  }, [currentSlideNumber]);

  return (
    <>
      <Navigation />
      <div ref={containerRef} className="parallax-container">
        {parallaxSections.map((section) => (
          <section
            key={section.id}
            className="parallax-background"
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
            }}
          >
            <div className="parallax-content">
              <h1 className="parallax-title">{section.title}</h1>
              <p className="parallax-subtitle">{section.subtitle}</p>
            </div>
          </section>
        ))}
      </div>
      
      {/* Hidden sections for SEO and fallback */}
      <div className="sr-only">
        <HeroSection />
        <ConceptSection />
        <CitronelloSection />
        <InspirationSection />
        <CollectionsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
