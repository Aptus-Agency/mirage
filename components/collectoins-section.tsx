const CollectionsSection = () => {
    const collections = [
      {
        title: "Sicilian Stone",
        description: "Ancient limestone formations crafted for modern living",
        features: ["Travertine", "Limestone", "Marble"],
        accent: "Mediterranean"
      },
      {
        title: "Volcanic Series",
        description: "Raw power of nature transformed into architectural elements",
        features: ["Lava Stone", "Basalt", "Pumice"],
        accent: "Etna Collection"
      },
      {
        title: "Artisan Collection",
        description: "Handcrafted pieces that celebrate traditional techniques",
        features: ["Hand-carved", "Brushed Finish", "Custom Design"],
        accent: "Limited Edition"
      }
    ];
  
    return (
      <section className="section-padding bg-surface">
        <div className="container-luxury">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-display text-foreground mb-6">
              Our collections
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
                    Explore Collection
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