import Image from 'next/image';

const ShapeYourIdeas = () => {
  const inspirationItems = [
    {
      image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756415938/mirage/jgfps6lvslbgfzlbocrk.jpg',
      title: "Indoor & Outdoor",
      description: "Modern comfort meets natural beauty",
      accents: "Hotels, residential buildings, offices, co-working spaces or public spaces: the Mirage indoor and outdoor tile collections create instantly impressive, quality settings",
      alt: "Modern luxury living room with natural stone feature wall"
    },
    {
      image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756415873/mirage/ru7c92fn9yn3aev16kix.jpg',
      title: "Flooring Solutions",
      description: "Seamless durability, timeless warmth",
      accents: "Explore a versatile range of porcelain and stone-look tiles engineered for high-traffic commercial and residential floors. Our solutions deliver lasting durability without compromising on sophisticated design.",
      alt: "Elegant bedroom with natural stone headboard"
    },
    {
      image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756416003/mirage/lc4oopinxjtqckrltt9s.jpg',
      title: "Bathrooms",
      description: "Where gastronomy and design unite",
      accents: "100% Bathroom solutions for every space; Sophisticated design, durable performance, and timeless appeal.",
      alt: "Modern bathrooms with natural stone countertops"
    }
  ];

  return (
    <section className="section-padding bg-background" id="collections">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-start mb-16">
          <h2 className="text-display text-foreground mb-6">
            Shape Your Ideas
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore how natural materials transform living spaces into sanctuaries
            of beauty and tranquility
          </p>
        </div>

        {/* Inspiration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirationItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <h3 className="text-heading mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.accents}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShapeYourIdeas;