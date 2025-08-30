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
      <div className="relative z-10 container-luxury h-full">
        <div className='absolute bottom-2 flex flex-row justify-between bg-background/80 rounded-xl p-12'>
          <div className='w-1/2'>
            <p className='text-4xl font-display font-medium w-[80%]'>Mirage is the trusted project partner you were looking for</p>
          </div>
          <div className='w-1/2'>
            <p className='text-body text-text-secondary leading-relaxed w-[70%]'>Creativity, reliability and experience: we support your ideas and projects with practical solutions, thanks to a wide range of surfaces for indoor and outdoor design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroudVideoSection;