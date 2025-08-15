import Image from 'next/image';

const CitronelloSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236050/mirage/fsvhgkpwcyiyjfotr3j7.jpg'}
          alt="Volcanic lava texture representing Citronello collection"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <h2 className="text-display text-foreground mb-8">
          Citronello
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Born from the volcanic heart of Sicily, Citronello captures the raw energy 
          and passionate spirit of the Mediterranean landscape. Each piece carries 
          the story of ancient lava flows transformed into contemporary art.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-heading mb-4">Shape your ideas</h3>
            <p className="text-body text-text-secondary leading-relaxed">
              Inspired by the fluid movement of molten rock, our artisans shape each piece 
              with respect for the material's natural character and inherent beauty.
            </p>
          </div>
          
          <div className="text-left">
            <h3 className="text-heading mb-4">Volcanic Heritage</h3>
            <p className="text-body text-text-secondary leading-relaxed">
              Drawing from centuries of volcanic activity, we celebrate the transformative 
              power of nature in creating surfaces of unparalleled depth and character.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitronelloSection;