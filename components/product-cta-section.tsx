import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductCtaSection = ({
    title,
    description,
    ctaText,
    ctaLink,
}: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}) => {
    return (
        <motion.section 
            className="section-padding bg-background"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div 
                className="container-luxury text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-display text-foreground mb-6">
                    {title}
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
                    {description}
                </p>
                <motion.div 
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Link href={ctaLink} className="btn-primary">
                        {ctaText}
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default ProductCtaSection;