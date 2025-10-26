'use client';

import Navigation from '../../../../components/navigation';
import Footer from '../../../../components/footer';
import Button from '../../../../components/ui/Button';
import ProductCtaSection from '../../../../components/product-cta-section';
import { motion } from 'framer-motion';
import { tileCollections } from '@/lib/data';
import imageLoader from '@/lib/imageLoader';

const TilesPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <motion.section
          className="relative h-[50vh] bg-background flex items-center justify-center text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={imageLoader({ src: '/v1755236079/mirage/gucfvsjsuee7rho3wymh.jpg', width: 1000 })}
            alt="Tiles Collection"
            width={1000}
            height={1000}
            className="object-cover w-full h-full opacity-20"
          />
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-display text-foreground mb-4">Tile Collections</h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Discover a world of elegance and durability with our exquisite tile collections.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          className="section-padding bg-surface"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-luxury">
            <div className="grid gap-16">
              {tileCollections.map((collection, index) => (
                <motion.div
                  key={index}
                  className="grid lg:grid-cols-2 gap-16 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div
                    className={`relative h-[500px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <img
                      src={imageLoader({ src: collection.imageUrl, width: 1000 })}
                      alt={collection.name}
                      width={1000}
                      height={1000}
                      className="hover:scale-110 transition duration-500"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
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
                    <a href={`/collection/${collection.slug}`}>
                      <Button>View Collection</Button>
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <ProductCtaSection title="Ready to Transform Your Space?" description="Struggling to visualize your project? Our design experts are here to help. Visit our showroom in Bugolobi to see our collections in person or book a free design consultation today." ctaText="Book a Consultation" ctaLink="/contact-us" />
      </main>
      <Footer />
    </>
  );
};

export default TilesPage;