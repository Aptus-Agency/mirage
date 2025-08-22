'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const parallaxSections = [
    {
      id: "hero",
      title: "Mirage",
      subtitle: "Experience luxury design like never before",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg",
    },
    {
      id: "concept",
      title: "Our Concept",
      subtitle: "Where innovation meets timeless elegance",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236050/mirage/fsvhgkpwcyiyjfotr3j7.jpg",
    },
    {
      id: "citronello",
      title: "Citronello Collection",
      subtitle: "Discover our signature designs",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/gucfvsjsuee7rho3wymh.jpg",
    },
    {
      id: "inspiration",
      title: "Inspiration",
      subtitle: "Drawing from nature's finest elements",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236120/mirage/kcjgbhl4djak22xm6xw0.jpg",
    },
    {
      id: "collections",
      title: "Collections",
      subtitle: "Curated pieces for discerning tastes",
      backgroundImage: "https://res.cloudinary.com/zurri-cloud/image/upload/v1755236122/mirage/fv7qgb3ihskuxhus2mkm.jpg",
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
                        <motion.div 
                            className="absolute bottom-35 left-35 text-white z-10"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.h1 
                                className="text-6xl md:text-8xl font-bold mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {section.title}
                            </motion.h1>
                            <motion.p 
                                className="text-xl md:text-2xl max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {section.subtitle}
                            </motion.p>
                        </motion.div>
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.section>
                );
            })}
        </div>
    );
}