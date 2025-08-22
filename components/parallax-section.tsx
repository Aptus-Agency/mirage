import { useParallaxScroll } from "@/hooks/useParallaxScroll";
import { useRef, useEffect } from "react";
import CitronelloSection from "./citronello-section";
import CollectionsSection from "./collectoins-section";
import ConceptSection from "./concept-section";
import HeroSection from "./hero-section";
import InspirationSection from "./inspiration-section";

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

export default function ParallaxSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentSlideNumber } = useParallaxScroll({
        totalSlides: parallaxSections.length
    });


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
    )
}