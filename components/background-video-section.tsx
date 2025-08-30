import Image from 'next/image';

const BackgroudVideoSection = () => {
  return (
    <section className="relative py-32 overflow-hidden h-screen">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/zurri-cloud/video/upload/v1755868725/mirage/1734675334080_bvr29i.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury h-full mx-auto">
        <div className='absolute bottom-4 md:bottom-2 flex flex-col md:flex-row justify-between bg-background/80 rounded-xl p-4 md:p-12 gap-4 md:gap-0'>
          <div className='w-full md:w-1/2'>
            <p className='text-4xl mb-4 md:mb-0 font-display font-medium'>Mirage is the trusted project partner you were looking for</p>
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-body text-text-secondary leading-relaxed'>Creativity, reliability and experience: we support your ideas and projects with practical solutions, thanks to a wide range of surfaces for indoor and outdoor design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroudVideoSection;