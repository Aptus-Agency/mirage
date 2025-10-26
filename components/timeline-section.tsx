import { Milestone } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineProps {
  milestones: Milestone[];
}

const TimelineItem = ({ milestone, index }: { milestone: Milestone; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex items-center mb-12 md:mb-16 last:mb-0"
    >
      {/* Desktop: Alternating layout */}
      <div className="hidden md:flex w-full items-center">
        {isEven ? (
          <>
            {/* Content on left */}
            <div className="w-5/12 text-right pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 border border-border-subtle rounded-lg bg-surface hover:bg-surface-elevated transition-all duration-300 shadow-card hover:shadow-luxury"
              >
                <h3 className="text-3xl font-bold text-primary mb-3">{milestone.year}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </motion.div>
            </div>

            {/* Center marker */}
            <div className="w-2/12 flex justify-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                className="w-6 h-6 rounded-full bg-gold border-4 border-background shadow-lg"
              />
            </div>

            {/* Empty space on right */}
            <div className="w-5/12" />
          </>
        ) : (
          <>
            {/* Empty space on left */}
            <div className="w-5/12" />

            {/* Center marker */}
            <div className="w-2/12 flex justify-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                className="w-6 h-6 rounded-full bg-gold border-4 border-background shadow-lg"
              />
            </div>

            {/* Content on right */}
            <div className="w-5/12 text-left pl-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 border border-border-subtle rounded-lg bg-surface hover:bg-surface-elevated transition-all duration-300 shadow-card hover:shadow-luxury"
              >
                <h3 className="text-3xl font-bold text-primary mb-3">{milestone.year}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Mobile: Simple vertical layout */}
      <div className="flex md:hidden w-full items-start gap-4">
        {/* Marker */}
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
            className="w-5 h-5 rounded-full bg-gold border-4 border-background shadow-lg"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-5 border border-border-subtle rounded-lg bg-surface hover:bg-surface-elevated transition-all duration-300 shadow-card hover:shadow-luxury flex-1"
        >
          <h3 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Timeline = ({ milestones }: TimelineProps) => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Milestones on our Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Two decades of innovation, growth, and excellence in serving our customers
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold transform -translate-x-1/2" />

          {/* Vertical line (mobile) */}
          <div className="block md:hidden absolute left-[10px] top-0 bottom-0 w-0.5 bg-gold" />

          {/* Timeline items */}
          <div>
            {milestones.map((milestone, index) => (
              <TimelineItem key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
