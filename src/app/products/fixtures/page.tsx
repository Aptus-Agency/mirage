'use client';

import Navigation from '../../../../components/navigation';
import Footer from '../../../../components/footer';
import Image from 'next/image';
import Button from '../../../../components/ui/Button';
import ProductCtaSection from '../../../../components/product-cta-section';
import { motion } from 'framer-motion';

const fixtureCollections = [
    {
        name: 'Shower Heads',
        description: 'Rainfall, handheld, multi-jet configurations.',
        accent: 'Refreshing & Invigorating',
        imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756560324/mirage/vwq7ojigriz3i91byaha.jpg',
        features: [
            "Luxurious rainfall shower heads for a spa-like experience",
            "Versatile handheld options for flexibility",
            "Advanced multi-jet systems with various spray patterns",
            "Water-efficient designs without compromising performance",
        ],
    },
    {
        name: 'Faucets',
        description: 'Modern and classic designs in chrome, brushed nickel, and matte black.',
        accent: 'Elegant & Functional',
        imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756560432/mirage/wkjngna4niv2jebfz50p.jpg',
        features: [
            "Available in a variety of finishes to match any decor",
            "Durable construction for long-lasting use",
            "Easy-to-use single-handle and double-handle designs",
            "Sensor-activated faucets for a touchless experience",
        ],
    },
    {
        name: 'Toilet Seats',
        description: 'Soft-close lids, ergonomic shapes, and quick-release hinges.',
        accent: 'Comfort & Convenience',
        imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756560502/mirage/yjh7kk3ss2ooqlthdhka.jpg',
        features: [
            "Soft-close mechanism to prevent slamming",
            "Ergonomically designed for maximum comfort",
            "Quick-release hinges for easy cleaning",
            "Made from high-quality, durable materials",
        ],
    },
];

const FixturesPage = () => {
    return (
        <>
            <Navigation />
            <main>
                <motion.section 
                    className="relative h-[50vh] bg-background flex items-center justify-center text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="https://res.cloudinary.com/zurri-cloud/image/upload/v1756560206/mirage/qr8v48pr8zkuvfultayh.jpg"
                        alt="Bathroom Fixtures Collection"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                    />
                    <motion.div 
                        className="relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <h1 className="text-display text-foreground mb-4">Bathroom Fixtures</h1>
                        <p className="text-body text-text-secondary max-w-2xl mx-auto">
                            Complete your bathroom with our premium selection of fixtures.
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
                            {fixtureCollections.map((collection, index) => (
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
                                        <Image
                                            src={collection.imageUrl}
                                            alt={collection.name}
                                            layout="fill"
                                            objectFit="cover"
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
                                        <Button>Shop this Style</Button>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
                <ProductCtaSection
                    title="Ready to Transform Your Space?"
                    description="Struggling to visualize your project? Our design experts are here to help. Visit our showroom in Bugolobi to see our collections in person or book a free design consultation today."
                    ctaText="Book a Consultation"
                    ctaLink="/contact-us" />
            </main>
            <Footer />
        </>
    );
};

export default FixturesPage;