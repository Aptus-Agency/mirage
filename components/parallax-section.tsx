'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const parallaxSections = [
    {
      id: "hero",
      title: "Mirage",
      subtitle: "Experience luxury design like never before",
      backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "concept",
      title: "Our Concept",
      subtitle: "Where innovation meets timeless elegance",
      backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "citronello",
      title: "Citronello Collection",
      subtitle: "Discover our signature designs",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "inspiration",
      title: "Inspiration",
      subtitle: "Drawing from nature's finest elements",
      backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "collections",
      title: "Collections",
      subtitle: "Curated pieces for discerning tastes",
      backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
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
                            className="text-center text-white z-10"
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
                        <div className="absolute inset-0 bg-black/30" />
                    </motion.section>
                );
            })}
        </div>
    );
}