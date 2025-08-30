import Button from './ui/Button';
import Link from 'next/link';

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
        <section className="section-padding bg-background">
            <div className="container-luxury text-center">
                <h2 className="text-display text-foreground mb-6">
                    {title}
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
                    {description}
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href={ctaLink} className="btn-primary">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductCtaSection;