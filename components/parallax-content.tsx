'use client';

import { motion } from "framer-motion";
import Link from "next/link";

interface ParallaxContentProps {
  section: {
    id: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
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
    </motion.div>
  );
}

// Concept Section Content
export function ConceptContent({ section }: ParallaxContentProps) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-light mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {section.title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-xl mx-auto font-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {section.subtitle}
      </motion.p>
    </motion.div>
  );
}

// Citronello Section Content
export function CitronelloContent({ section }: ParallaxContentProps) {
  return (
    <motion.div
      className="absolute top-20 right-20 text-right text-white z-10"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {section.title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-md"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {section.subtitle}
      </motion.p>
    </motion.div>
  );
}

// Inspiration Section Content
export function InspirationContent({ section }: ParallaxContentProps) {
  return (
    <motion.div
      className="absolute bottom-20 right-1/2 transform translate-x-1/2 text-center text-white z-10"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {section.subtitle}
      </motion.p>
      <motion.h1
        className="text-5xl md:text-7xl font-thin"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {section.title}
      </motion.h1>
    </motion.div>
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