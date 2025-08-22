'use client';

import { motion } from "framer-motion";
import Link from "next/link";

interface ParallaxContentProps {
  section: {
    id: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
    backgroundVideo?: string;
  };
}

// Hero Section Content
export function HeroContent({ section }: ParallaxContentProps) {
  return (
    <motion.div
      className="absolute top-1/3 left-20 text-white z-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="border-l-4 border-white pl-6"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {section.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {section.subtitle}
        </motion.p>
        <motion.div className="mt-8">
          <Link href="/shop" className="btn-primary bg-white text-black hover:bg-black hover:text-white hover:border-none">Discover More</Link>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator - only show on hero section */}
      <motion.div
        className="fixed bottom-12 left-1/2 transform -translate-x-1/2 text-white font-bold z-50 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-sm uppercase tracking-wider mb-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll for more
        </motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Tiles Section Content (with video background)
export function TilesSectionContent({ section }: ParallaxContentProps) {
  return (
    <>
      {/* Video Background */}
      {section.backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={section.backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {/* Content */}
      <motion.div
      className="absolute top-1/3 left-20 text-white z-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="border-l-4 border-white pl-6"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {section.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {section.subtitle}
        </motion.p>
        <motion.div className="mt-8">
          <Link href="/shop" className="btn-primary bg-white text-black hover:bg-black hover:text-white hover:border-none">Discover more tiles</Link>
        </motion.div>
      </motion.div>
      </motion.div>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}

export function ShowerHeadsContent({ section }: ParallaxContentProps) {
  return (
    <>
      {/* Video Background */}
      {section.backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={section.backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {/* Content */}
      <motion.div
      className="absolute top-1/3 left-20 text-white z-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="border-l-4 border-white pl-6"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {section.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {section.subtitle}
        </motion.p>
        <motion.div className="mt-8">
          <Link href="/shop" className="btn-primary bg-white text-black hover:bg-black hover:text-white hover:border-none">Discover more tiles</Link>
        </motion.div>
      </motion.div>
      </motion.div>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}

// Inspiration Section Content
export function ToiletSeatsSectionContent({ section }: ParallaxContentProps) {
  return (
    <>
      {/* Video Background */}
      {section.backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={section.backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {/* Content */}
      <motion.div
      className="absolute top-1/3 left-20 text-white z-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="border-l-4 border-white pl-6"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {section.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {section.subtitle}
        </motion.p>
        <motion.div className="mt-8">
          <Link href="/shop" className="btn-primary bg-white text-black hover:bg-black hover:text-white hover:border-none">Discover more</Link>
        </motion.div>
      </motion.div>
      </motion.div>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}

// Collections Section Content
export function CollectionsContent({ section }: ParallaxContentProps) {
  return (
    <motion.div
      className="absolute top-1/3 left-20 text-white z-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="border-l-4 border-white pl-6"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-medium mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {section.title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {section.subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}