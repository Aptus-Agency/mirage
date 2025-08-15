import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/anq5esbmpzvmdq6zpdat.jpg'}
          alt="Natural stone arch formation over crystal clear water in Sicily"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="image-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-hero text-foreground mb-6 animate-fade-in">
          A tribute to Sicily
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up">
          Discover the timeless beauty of natural stone and artisanal craftsmanship
        </p>
        <button className="btn-primary animate-slide-up">
          Explore Collection
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground to-transparent opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;