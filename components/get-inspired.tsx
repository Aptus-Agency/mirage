import Image from 'next/image';
import Button from './ui/Button';
import { motion } from 'framer-motion';

export default function GetInspiredSection() {
    return (
        <motion.section 
            className="section-padding"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="container-luxury">
                <motion.div 
                    className='mb-8 md:mb-16'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-display text-foreground mb-2">Get Inspired</h2>
                    <p className='text-body text-text-secondary'>Projects & Stories</p>
                </motion.div>
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
                    <motion.div 
                        className="w-full lg:w-[60%]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Image
                            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/l8z47zfbwqsa2zmtiz8x.jpg"
                            alt=""
                            width={800}
                            height={800}
                            className="rounded-2xl w-full h-auto"
                        />
                    </motion.div>
                    <motion.div 
                        className="w-full lg:w-[40%]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className='text-heading mb-4'>Kampala hotel lobby project by Mirage Tiles</p>
                        <p className="text-body text-text-secondary leading-relaxed mb-6 lg:mb-8">Crafted by our Kampala-based team, this hospitality space pairs contemporary design with long‑wear performance. We specified large‑format porcelain with slip‑resistant finishes for high‑traffic areas, warm stone textures in guest zones, and low‑maintenance grout systems—engineered for Uganda's tropical climate. Locally managed from concept to handover, delivered on time and built to last.</p>
                        <Button>View Our Gallery</Button>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
}