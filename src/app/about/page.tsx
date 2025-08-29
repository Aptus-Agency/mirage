'use client';

import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';
import Image from 'next/image';
import Button from '../../../components/ui/Button';

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="section-padding bg-surface pt-32">
          <div className="container-luxury">
            <div className="text-center mb-16">
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
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/zurri-cloud/image/upload/v1756415938/mirage/jgfps6lvslbgfzlbocrk.jpg"
                  alt="Vision for Excellence"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h2 className="text-heading text-foreground mb-6">A Vision for Excellence</h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  From day one, our guiding principle was simple: source the very best materials from around the globe and pair them with local know-how. We forged partnerships with manufacturers in Italy, Spain, India, and China, hand-selecting each tile based on durability, design, and eco-credentials. Back home, our team of fitters and design consultants began transforming dusty construction sites into gleaming kitchens, patios, and showrooms. Word spread quickly by 2013, we'd moved into our current headquarters in the Industrial Area, complete with a large warehouse and state-of-the-art sample gallery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <h2 className="text-display text-center text-foreground mb-16">Milestones on Our Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-8 border border-border-subtle rounded-lg">
                <h3 className="text-heading mb-4">2014</h3>
                <p className="text-body text-text-secondary">Launched our first nationwide tile-sample delivery service.</p>
              </div>
              <div className="p-8 border border-border-subtle rounded-lg">
                <h3 className="text-heading mb-4">2016</h3>
                <p className="text-body text-text-secondary">Expanded our product line to include luxury bathroom fixtures.</p>
              </div>
              <div className="p-8 border border-border-subtle rounded-lg">
                <h3 className="text-heading mb-4">2018</h3>
                <p className="text-body text-text-secondary">Introduced on-site 3D design consultations.</p>
              </div>
              <div className="p-8 border border-border-subtle rounded-lg">
                <h3 className="text-heading mb-4">2021</h3>
                <p className="text-body text-text-secondary">Opened a second showroom in Entebbe.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-luxury text-center">
            <h2 className="text-display text-foreground mb-6">Crafting Spaces, Uplifting Communities</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Mirage Tiles is more than a supplier—we're active participants in Uganda's building renaissance.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-luxury p-8">
                <h3 className="text-heading mb-4">Local Empowerment</h3>
                <p className="text-body text-text-secondary">We train and employ local craftsmen, sharing advanced tiling and plumbing techniques.</p>
              </div>
              <div className="card-luxury p-8">
                <h3 className="text-heading mb-4">Community Support</h3>
                <p className="text-body text-text-secondary">We partner with NGOs to donate tiles and fixtures for community schools, clinics, and clean-water projects.</p>
              </div>
              <div className="card-luxury p-8">
                <h3 className="text-heading mb-4">Sustainability</h3>
                <p className="text-body text-text-secondary">We champion sustainable practices, recycling over 75% of our on-site waste and sourcing eco-friendly grout and adhesives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="text-center">
              <h2 className="text-display text-foreground mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
                Our mission is to offer durable, stylish tiles and fixtures that inspire your next project. We envision a future where every home and business in Uganda shines with spaces you love.
              </p>
              <h2 className="text-display text-foreground mb-6">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-8">
                <h3 className="text-heading mb-4">Quality Above All</h3>
              </div>
              <div className="p-8">
                <h3 className="text-heading mb-4">Customer-First Service</h3>
              </div>
              <div className="p-8">
                <h3 className="text-heading mb-4">Integrity & Transparency</h3>
              </div>
              <div className="p-8">
                <h3 className="text-heading mb-4">Sustainable Sourcing</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;