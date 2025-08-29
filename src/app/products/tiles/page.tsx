'use client';

import Navigation from '../../../../components/navigation';
import Footer from '../../../../components/footer';
import Image from 'next/image';
import Button from '../../../../components/ui/Button';

const tileCollections = [
  {
    name: 'Ceramic Tiles',
    description: 'Perfect for floors and walls in living areas, kitchens, and patios.',
    accent: 'Versatile & Stylish',
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236050/mirage/fsvhgkpwcyiyjfotr3j7.jpg',
    features: [
      "Suited for indoor applications",
      "Wide range of colors and patterns",
      "Easy to clean and maintain",
      "Cost-effective solution",
    ],
  },
  {
    name: 'Porcelain Tiles',
    description: 'High durability for heavy-traffic zones and outdoor spaces.',
    accent: 'Durable & Resilient',
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg',
    features: [
      "Ideal for both indoor and outdoor use",
      "Resistant to stains, scratches, and water",
      "Available in various finishes like matte, gloss, and wood-look",
      "Low maintenance",
    ],
  },
  {
    name: 'Natural Stone',
    description: 'Marble, granite, slate—luxury that lasts.',
    accent: 'Elegant & Timeless',
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756415938/mirage/jgfps6lvslbgfzlbocrk.jpg',
    features: [
      "Each tile has a unique, natural pattern",
      "Adds significant value to your property",
      "Extremely durable and long-lasting",
      "Includes marble, granite, and slate options",
    ],
  },
  {
    name: 'Mosaic Tiles',
    description: 'Artistic patterns for feature walls and backsplashes.',
    accent: 'Creative & Artistic',
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756416003/mirage/lc4oopinxjtqckrltt9s.jpg',
    features: [
      "Perfect for creating focal points",
      "Available in various materials like glass, ceramic, and stone",
      "Ideal for backsplashes, bathrooms, and accent walls",
      "Endless design possibilities",
    ],
  },
];

const TilesPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative h-[50vh] bg-background flex items-center justify-center text-center">
          <Image
            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/gucfvsjsuee7rho3wymh.jpg"
            alt="Tiles Collection"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="relative z-10">
            <h1 className="text-display text-foreground mb-4">Tile Collections</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Discover a world of elegance and durability with our exquisite tile collections.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-luxury">
            <div className="grid gap-16">
              {tileCollections.map((collection, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={`relative h-[500px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image
                      src={collection.imageUrl}
                      alt={collection.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <span className="text-small text-gold uppercase tracking-widest font-medium">
                        {collection.accent}
                      </span>
                      <h2 className="text-heading text-foreground mt-2 mb-4">{collection.name}</h2>
                      <p className="text-body text-text-secondary leading-relaxed">
                        {collection.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {collection.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-gold rounded-full mr-3" />
                          <span className="text-small text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button>View Collection</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TilesPage;