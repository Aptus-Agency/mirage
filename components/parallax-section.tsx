'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  HeroContent, 
  ConceptContent, 
  CitronelloContent, 
  InspirationContent, 
  CollectionsContent 
} from "./parallax-content";

const parallaxSections = [
    {
      id: "hero",
      title: "Mirage Tiles",
      subtitle: "Transform Your Space with Premium Tiles & Bathroom Fixtures",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
      Component: HeroContent,
    },
    {
      id: "concept",
      title: "Our Concept",
      subtitle: "Where innovation meets timeless elegance",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236050/mirage/fsvhgkpwcyiyjfotr3j7.jpg",
      Component: ConceptContent,
    },
    {
      id: "citronello",
      title: "Citronello Collection",
      subtitle: "Discover our signature designs",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/gucfvsjsuee7rho3wymh.jpg",
      Component: CitronelloContent,
    },
    {
      id: "inspiration",
      title: "Inspiration",
      subtitle: "Drawing from nature's finest elements",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236120/mirage/kcjgbhl4djak22xm6xw0.jpg",
      Component: InspirationContent,
    },
    {
      id: "collections",
      title: "Collections",
      subtitle: "Curated pieces for discerning tastes",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236122/mirage/fv7qgb3ihskuxhus2mkm.jpg",
      Component: CollectionsContent,
    }
];

export default function ParallaxSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative">
            {parallaxSections.map((section, index) => {
                const targetScale = 1 - ((parallaxSections.length - index) * 0.05);
                const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
                const y = useTransform(scrollYProgress, [0, 1], [0, -index * 100]);

                return (
                    <motion.section
                        key={section.id}
                        style={{ 
                            scale,
                            y,
                            backgroundImage: `url(${section.backgroundImage})`,
                        }}
                        className="sticky top-0 h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
                    >
                        <section.Component section={section} />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.section>
                );
            })}
        </div>
    );
}