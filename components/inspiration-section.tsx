import Image from 'next/image';

const InspirationSection = () => {
  const inspirationItems = [
    {
      image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236051/mirage/ekvs8vkbcijizqvv0uxy.jpg',
      title: "Living Spaces",
      description: "Modern comfort meets natural beauty",
      alt: "Modern luxury living room with natural stone feature wall"
    },
    {
      image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236051/mirage/ekvs8vkbcijizqvv0uxy.jpg',
      title: "Private Retreats",
      description: "Intimate spaces for peaceful moments",
      alt: "Elegant bedroom with natural stone headboard"
    },
    {
      image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755236051/mirage/ekvs8vkbcijizqvv0uxy.jpg',
      title: "Culinary Environments",
      description: "Where gastronomy and design unite",
      alt: "Modern kitchen with natural stone countertops"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-foreground mb-6">
            Get inspired
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore how natural materials transform living spaces into sanctuaries 
            of beauty and tranquility
          </p>
        </div>

        {/* Inspiration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirationItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div>
                <h3 className="text-heading mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;