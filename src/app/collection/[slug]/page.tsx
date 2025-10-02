'use client'

import Link from "next/link";
import Navigation from "../../../../components/navigation";
import { Icon } from "@iconify/react";
import Footer from "../../../../components/footer";
import { useParams } from "next/navigation";
import { ceramics, naturalstones, porcelains, tileCollections } from "@/lib/data";
import { motion } from "framer-motion";

const ArtisanCollection = () => {
    const { slug } = useParams();
    const collection = tileCollections.find((collection) => collection.slug === slug);

    if (!collection) {
        return <div className="min-h-screen bg-background text-secondary">Collection not found</div>;
    }

    const products = slug === 'ceramic-tiles' ? ceramics : slug === 'porcelain-tiles' ? porcelains : naturalstones;

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Header */}
            <section className="pt-32 pb-16 mt-16 md:mt-24 bg-surface border-b border-border-subtle">
                <div className="container-luxury">
                    <Link
                        href="/products/tiles"
                        className="inline-flex items-center text-text-secondary hover:text-gold transition-colors mb-8"
                    >
                        <Icon icon="heroicons-solid:arrow-left" className="w-4 h-4 mr-2" />
                        Back to Collections
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="text-display text-foreground mt-4 mb-6">
                            {collection.name}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-8">
                            {collection.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                            <div>
                                <span className="text-text-muted">Techniques</span>
                                <p className="text-foreground mt-1">{collection.features.join(', ')}</p>
                            </div>
                            <div>
                                <span className="text-text-muted">Materials</span>
                                <p className="text-foreground mt-1">Premium Natural Stone</p>
                            </div>
                            <div>
                                <span className="text-text-muted">Availability</span>
                                <p className="text-foreground mt-1">Made to Order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.finish} className="group">
                                <div className="card-luxury overflow-hidden">
                                    {/* Product Image Placeholder */}
                                    <div className="aspect-square bg-surface-elevated relative overflow-hidden">
                                        <img src={product.image} alt={product.finish} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6">
                                        <div className="space-y-1 text-sm text-text-secondary">
                                            <p>Finish: {product.finish}</p>
                                            <p>Size: {product.size}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="section-padding bg-background mx-4 md:mx-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div
                    className="container-luxury bg-surface p-6 md:p-16 rounded-2xl flex flex-col md:flex-row justify-between gap-4 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="basis-3/4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-2xl md:text-4xl mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-lg leading-relaxed mb-12 text-text-secondary">
                            Struggling to visualize your project? Our design experts are here to help. Visit our showroom in Bugolobi to see our collections in person or book a free design consultation today.
                        </p>
                    </motion.div>
                    <motion.div
                        className="basis-1/4 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Link href="/contact-us" className="btn-primary">
                            Get in Touch
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default ArtisanCollection;