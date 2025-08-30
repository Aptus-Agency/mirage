'use client';

import Image from 'next/image';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';
import TimelineSection from '../../../components/timeline-section';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <motion.section 
          className="section-padding bg-surface pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container-luxury">
            <motion.div 
              className="text-center mb-16 py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-display text-foreground mb-6">About Mirage Tiles Ltd.</h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Mirage Tiles Ltd was born from a passion for quality finishes and a vision to elevate interior spaces across Uganda.
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-heading text-foreground mb-6">Humble Beginnings</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  In 2010, Mirage Tiles Ltd opened its doors in a small showroom off Jinja Road, Kampala, with just three tile patterns and a single plumbing fixtures supplier. Our founder, Grace Nakato, recognized a gap in Uganda's market: homeowners and builders alike struggled to find high-quality, stylish surface finishes paired with dependable bathroom fixtures under one roof. Armed with a dream and a shoestring budget, Grace set out to change the way Ugandans experienced their living and working spaces one tile at a time.
                </p>
              </motion.div>
              <motion.div 
                className="relative h-96 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Image
                  src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755871559/mirage/ln1zgasvz0rpxfpbwdzb.jpg"
                  alt="Humble beginnings of Mirage Tiles"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className='md:order-2'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-heading text-foreground mb-6">A Vision for Excellence</h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  From day one, our guiding principle was simple: source the very best materials from around the globe and pair them with local know-how. We forged partnerships with manufacturers in Italy, Spain, India, and China, hand-selecting each tile based on durability, design, and eco-credentials. Back home, our team of fitters and design consultants began transforming dusty construction sites into gleaming kitchens, patios, and showrooms. Word spread quickly by 2013, we'd moved into our current headquarters in the Industrial Area, complete with a large warehouse and state-of-the-art sample gallery.
                </p>
              </motion.div>
              <motion.div 
                className="relative h-96 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Image
                  src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/nisqd2r3jt0zwjlxrpvo.jpg"
                  alt="Vision for Excellence"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <TimelineSection />

        <motion.section 
          className="section-padding bg-surface"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-luxury text-center">
            <motion.h2 
              className="text-display text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Crafting Spaces, Uplifting Communities
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Mirage Tiles is more than a supplier—we're active participants in Uganda's building renaissance.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="card-luxury p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-4">Local Empowerment</h3>
                <p className="text-body text-text-secondary">We train and employ local craftsmen, sharing advanced tiling and plumbing techniques.</p>
              </motion.div>
              <motion.div 
                className="card-luxury p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-4">Community Support</h3>
                <p className="text-body text-text-secondary">We partner with NGOs to donate tiles and fixtures for community schools, clinics, and clean-water projects.</p>
              </motion.div>
              <motion.div 
                className="card-luxury p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-body text-text-secondary">We champion sustainable practices, recycling over 75% of our on-site waste and sourcing eco-friendly grout and adhesives.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="section-padding bg-background text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="container-luxury mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-display text-foreground mb-6">Our Mission</h2>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Our mission is to offer durable, stylish tiles and fixtures that inspire your next project. We envision a future where every home and business in Uganda shines with spaces you love.
            </p>
          </motion.div>
          <motion.div 
            className="container-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-display text-foreground mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard title="Quality Above All" description="We source only the finest materials, ensuring every product meets rigorous standards for durability and aesthetics." />
              <ValueCard title="Customer-First Service" description="Your vision is our priority. We provide personalized guidance and support from selection to installation." />
              <ValueCard title="Local Empowerment" description="We train and employ local craftsmen, sharing advanced tiling and plumbing techniques." />
              <ValueCard title="Sustainable Sourcing" description="We are committed to eco-friendly practices, from sourcing sustainable materials to minimizing our operational footprint." />
            </div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;


function ValueCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div 
      className="card-luxury p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h3 className="text-xl mb-4">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </motion.div>
  )
}