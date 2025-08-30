import React from 'react';

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
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <h2 className="text-display text-center text-foreground mb-16">Milestones on Our Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gold transform -translate-y-1/2 hidden lg:block"></div>
          
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold lg:hidden"></div>
          
          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background z-10"></div>
                
                {/* Content positioned above or below the line */}
                <div className={`${milestone.position === 'top' ? 'pb-16' : 'pt-16'} text-center`}>
                  <div className={`p-6 border border-border-subtle rounded-lg bg-surface hover:bg-surface-elevated transition-all duration-300 ${milestone.position === 'bottom' ? 'mt-8' : 'mb-8'}`}>
                    <h3 className="text-heading text-gold mb-4">{milestone.year}</h3>
                    <p className="text-body text-text-secondary leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile layout */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-background"></div>
                
                {/* Content */}
                <div className="p-6 border border-border-subtle rounded-lg bg-surface">
                  <h3 className="text-heading text-gold mb-4">{milestone.year}</h3>
                  <p className="text-body text-text-secondary leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};