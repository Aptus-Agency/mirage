import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineSection() {
  const milestones = [
    {
      year: "2014",
      description: "Launched our first nationwide tile-sample delivery service.",
      position: "top"
    },
    {
      year: "2016", 
      description: "Expanded our product line to include luxury bathroom fixtures.",
      position: "bottom"
    },
    {
      year: "2018",
      description: "Introduced on-site 3D design consultations.",
      position: "top"
    },
    {
      year: "2021",
      description: "Opened a second showroom in Entebbe.",
      position: "bottom"
    }
  ];

  return (
    <motion.section 
      className="section-padding bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-luxury">
        <motion.h2 
          className="text-display text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Milestones on Our Journey
        </motion.h2>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gold transform -translate-y-1/2 hidden lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          
          {/* Mobile timeline line */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold lg:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ transformOrigin: "top" }}
          />
          
          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: milestone.position === 'top' ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background z-10"></div>
                
                {/* Content positioned above or below the line */}
                <div className={`${milestone.position === 'top' ? 'pb-16' : 'pt-16'} text-center`}>
                  <div className={`p-6 border border-border-subtle rounded-lg bg-surface hover:bg-surface-elevated transition-all duration-300 ${milestone.position === 'bottom' ? 'mt-8' : 'mb-8'}`}>
                    <h3 className="text-heading text-gold mb-4">{milestone.year}</h3>
                    <p className="text-body text-text-secondary leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile layout */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-background"></div>
                
                {/* Content */}
                <div className="p-6 border border-border-subtle rounded-lg bg-surface">
                  <h3 className="text-heading text-gold mb-4">{milestone.year}</h3>
                  <p className="text-body text-text-secondary leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};