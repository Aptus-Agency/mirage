'use client';

import Navigation from '../../../../components/navigation';
import Footer from '../../../../components/footer';
import Image from 'next/image';
import Button from '../../../../components/ui/Button';
import ProductCtaSection from '../../../../components/product-cta-section';

const tileCollections = [
  {
    name: 'Ceramic Tiles',
    description: 'Perfect for floors and walls in living areas, kitchens, and patios.',
    accent: 'Versatile & Stylish',
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756415873/mirage/ru7c92fn9yn3aev16kix.jpg',
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
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756559938/mirage/jjyfnqd33oz6qctnxhmm.jpg',
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
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236051/mirage/ekvs8vkbcijizqvv0uxy.jpg',
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
    imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756559878/mirage/p70ovg9ftebolyxguing.jpg',
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
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
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
                      className="hover:scale-110 transition duration-500"
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
                    <Button>Start Designing</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProductCtaSection title="Ready to Transform Your Space?" description="Struggling to visualize your project? Our design experts are here to help. Visit our showroom in Bugolobi to see our collections in person or book a free design consultation today." ctaText="Book a Consultation" ctaLink="/contact-us" />
      </main>
      <Footer />
    </>
  );
};

export default TilesPage;