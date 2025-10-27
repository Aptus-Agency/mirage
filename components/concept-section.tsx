import Button from './ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import imageLoader from '@/lib/imageLoader';

const AboutSection = () => {
  return (
    <motion.section
      className="section-padding bg-surface"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={imageLoader({ src: '/v1755871559/mirage/ln1zgasvz0rpxfpbwdzb.jpg', width: 1000 })}
                alt="Luxury bathroom concept with natural stone surfaces"
                width={1000}
                height={600}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h2 className="text-display text-foreground mb-6">
                About<span className="font-light"> Mirage</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed mb-8">
                We are a company based in Kampala Uganda, with a focus on natural stone and ceramic tiles.
                Our bathroom concepts transform everyday rituals into moments of pure luxury,
                where every surface tells a story of craftsmanship and elegance.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                We offer a wide range of products, including ceramic tiles, natural stone, and bathroom fixtures,
                all of which are carefully selected to create spaces that breathe with natural beauty and timeless sophistication.
              </p>
            </div>

            <Button>
              <Link href={"/about"}>Discover More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;