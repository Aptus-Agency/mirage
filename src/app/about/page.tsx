'use client';

import Image from 'next/image';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';
import TimelineSection from '../../../components/timeline-section';

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="section-padding bg-surface pt-32">
          <div className="container-luxury">
            <div className="text-center mb-16 py-16">
              <h1 className="text-display text-foreground mb-6">About Mirage Tiles Ltd.</h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Mirage Tiles Ltd was born from a passion for quality finishes and a vision to elevate interior spaces across Uganda.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-heading text-foreground mb-6">Humble Beginnings</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  In 2010, Mirage Tiles Ltd opened its doors in a small showroom off Jinja Road, Kampala, with just three tile patterns and a single plumbing fixtures supplier. Our founder, Grace Nakato, recognized a gap in Uganda's market: homeowners and builders alike struggled to find high-quality, stylish surface finishes paired with dependable bathroom fixtures under one roof. Armed with a dream and a shoestring budget, Grace set out to change the way Ugandans experienced their living and working spaces one tile at a time.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755871559/mirage/ln1zgasvz0rpxfpbwdzb.jpg"
                  alt="Humble beginnings of Mirage Tiles"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className='md:order-2'>
                <h2 className="text-heading text-foreground mb-6">A Vision for Excellence</h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  From day one, our guiding principle was simple: source the very best materials from around the globe and pair them with local know-how. We forged partnerships with manufacturers in Italy, Spain, India, and China, hand-selecting each tile based on durability, design, and eco-credentials. Back home, our team of fitters and design consultants began transforming dusty construction sites into gleaming kitchens, patios, and showrooms. Word spread quickly by 2013, we'd moved into our current headquarters in the Industrial Area, complete with a large warehouse and state-of-the-art sample gallery.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236005/mirage/nisqd2r3jt0zwjlxrpvo.jpg"
                  alt="Vision for Excellence"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <TimelineSection />

        <section className="section-padding bg-surface">
          <div className="container-luxury text-center">
            <h2 className="text-display text-foreground mb-6">Crafting Spaces, Uplifting Communities</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Mirage Tiles is more than a supplier—we're active participants in Uganda's building renaissance.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-luxury p-8">
                <h3 className="text-2xl font-bold mb-4">Local Empowerment</h3>
                <p className="text-body text-text-secondary">We train and employ local craftsmen, sharing advanced tiling and plumbing techniques.</p>
              </div>
              <div className="card-luxury p-8">
                <h3 className="text-2xl font-bold mb-4">Community Support</h3>
                <p className="text-body text-text-secondary">We partner with NGOs to donate tiles and fixtures for community schools, clinics, and clean-water projects.</p>
              </div>
              <div className="card-luxury p-8">
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-body text-text-secondary">We champion sustainable practices, recycling over 75% of our on-site waste and sourcing eco-friendly grout and adhesives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background text-center">
          <div className="container-luxury mb-24">
            <h2 className="text-display text-foreground mb-6">Our Mission</h2>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Our mission is to offer durable, stylish tiles and fixtures that inspire your next project. We envision a future where every home and business in Uganda shines with spaces you love.
            </p>
          </div>
          <div className="container-luxury">
            <h2 className="text-display text-foreground mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard title="Quality Above All" description="We source only the finest materials, ensuring every product meets rigorous standards for durability and aesthetics." />
              <ValueCard title="Customer-First Service" description="Your vision is our priority. We provide personalized guidance and support from selection to installation." />
              <ValueCard title="Local Empowerment" description="We train and employ local craftsmen, sharing advanced tiling and plumbing techniques." />
              <ValueCard title="Sustainable Sourcing" description="We are committed to eco-friendly practices, from sourcing sustainable materials to minimizing our operational footprint." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;


function ValueCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="card-luxury p-8 text-center">
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h3 className="text-xl mb-4">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </div>
  )
}