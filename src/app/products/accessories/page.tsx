'use client';

import Navigation from '../../../../components/navigation';
import Footer from '../../../../components/footer';
import Image from 'next/image';
import Button from '../../../../components/ui/Button';
import ProductCtaSection from '../../../../components/product-cta-section';

const accessoryCollections = [
    {
        name: 'Tile Grouts & Sealants',
        description: 'High-quality grouts and sealants to ensure a long-lasting and professional finish for your tile installations.',
        accent: 'Essential for Protection',
        imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1756415938/mirage/jgfps6lvslbgfzlbocrk.jpg',
        features: [
            "Available in a variety of colors to match your tiles",
            "Resistant to stains, mold, and mildew",
            "Provides a strong, durable bond",
            "Easy to apply and clean",
        ],
    },
    {
        name: 'Edge Trims & Profiles',
        description: 'Give your tile installations a clean, polished look with our range of edge trims and profiles.',
        accent: 'The Perfect Finish',
        imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236050/mirage/fsvhgkpwcyiyjfotr3j7.jpg',
        features: [
            "Available in various materials like aluminum, PVC, and stainless steel",
            "Protects tile edges from chipping and damage",
            "Creates smooth transitions between different flooring surfaces",
            "Wide range of styles and finishes",
        ],
    },
    {
        name: 'Waterproofing Solutions',
        description: 'Protect your home from water damage with our reliable waterproofing solutions for bathrooms, kitchens, and other wet areas.',
        accent: 'Ultimate Protection',
        imageUrl: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg',
        features: [
            "Creates a waterproof barrier behind your tiles",
            "Prevents leaks and moisture damage",
            "Ideal for showers, bathrooms, and balconies",
            "Easy to apply before tiling",
        ],
    },
];

const AccessoriesPage = () => {
    return (
        <>
            <Navigation />
            <main>
                <section className="relative h-[50vh] bg-background flex items-center justify-center text-center">
                    <Image
                        src="https://res.cloudinary.com/zurri-cloud/image/upload/v1756416003/mirage/lc4oopinxjtqckrltt9s.jpg"
                        alt="Accessories Collection"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                    />
                    <div className="relative z-10">
                        <h1 className="text-display text-foreground mb-4">Accessories</h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            The finishing touches that make all the difference.
                        </p>
                    </div>
                </section>

                <section className="section-padding bg-surface">
                    <div className="container-luxury">
                        <div className="grid gap-16">
                            {accessoryCollections.map((collection, index) => (
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
                <ProductCtaSection
                    title="Ready to Transform Your Space?"
                    description="Struggling to visualize your project? Our design experts are here to help. Visit our showroom to see our collections in person or book a free design consultation today."
                    ctaText="Book a Consultation"
                    ctaLink="/contact" />
            </main>
            <Footer />
        </>
    );
};

export default AccessoriesPage;