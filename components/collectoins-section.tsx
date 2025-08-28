const CollectionsSection = () => {
    const collections = [
      {
        title: "Metro Gloss",
        description: "Timeless subway tiles with a luminous glaze",
        features: ["75×150 & 75×300", "Gloss & Satin", "White, Bone, Sage, Ink", "Bullnose & corners"],
        accent: "Subway Series"
      },
      {
        title: "Terra Matte",
        description: "Clay-inspired tones with a soft, tactile surface",
        features: ["100×300 & 300×600", "Matte, anti-glare", "Sand, Terra, Smoke, Charcoal", "Rectified edges"],
        accent: "Matte Essentials"
      },
      {
        title: "Calacatta Silk",
        description: "Marble-look surfaces with delicate veining",
        features: ["300×600", "Silk & Polished", "P1–P3 veining variation", "50×50 mosaic"],
        accent: "Marble Look"
      }
    ];
  
    return (
      <section className="section-padding bg-surface">
        <div className="container-luxury">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-display text-foreground mb-6">
              Our Ceramic Tile collections
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
              Each collection represents a unique journey through Sicily's geological heritage, 
              transformed by master craftsmen into surfaces of extraordinary beauty and durability.
            </p>
          </div>
  
          {/* Collections Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {collections.map((collection, index) => (
              <div key={index} className="group">
                <div className="card-luxury p-8 h-full">
                  <div className="mb-6">
                    <span className="text-small text-gold uppercase tracking-widest font-medium">
                      {collection.accent}
                    </span>
                  </div>
                  
                  <h3 className="text-heading mb-4 group-hover:text-gold transition-colors duration-300">
                    {collection.title}
                  </h3>
                  
                  <p className="text-body text-text-secondary mb-8 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {collection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-gold rounded-full mr-3" />
                        <span className="text-small text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="btn-secondary">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CollectionsSection;