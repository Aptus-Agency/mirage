import { motion } from 'framer-motion';

const BackgroudVideoSection = () => {
  return (
    <motion.section 
      className="relative py-32 overflow-hidden h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Video */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <video
          src="https://res.cloudinary.com/zurri-cloud/video/upload/v1755868725/mirage/1734675334080_bvr29i.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/10" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-luxury h-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className='absolute bottom-4 md:bottom-2 flex flex-col md:flex-row justify-between bg-background/80 rounded-xl p-4 md:p-12 gap-4 md:gap-0'>
          <div className='w-full md:w-1/2'>
            <p className='text-4xl mb-4 md:mb-0 font-display font-medium'>Mirage is the trusted project partner you were looking for</p>
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-body text-text-secondary leading-relaxed'>Creativity, reliability and experience: we support your ideas and projects with practical solutions, thanks to a wide range of surfaces for indoor and outdoor design.</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default BackgroudVideoSection;