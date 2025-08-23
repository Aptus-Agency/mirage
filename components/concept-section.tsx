import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1755871559/mirage/ln1zgasvz0rpxfpbwdzb.jpg'}
                alt="Luxury bathroom concept with natural stone surfaces"
                width={1000}
                height={1000}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display text-foreground mb-6">
                About<span className="font-light"> Mirage</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed mb-8">
                We are a family-run company based in Uganda, with a focus on natural stone and ceramic tiles. 
                Our bathroom concepts transform everyday rituals into moments of pure luxury, 
                where every surface tells a story of craftsmanship and elegance.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                We offer a wide range of products, including ceramic tiles, natural stone, and bathroom fixtures, 
                all of which are carefully selected to create spaces that breathe with natural beauty and timeless sophistication.
              </p>
            </div>
            
            <button className="btn-secondary group">
              Discover More
              <svg 
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;