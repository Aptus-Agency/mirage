'use client';

import Navigation from "../../components/navigation";
import HeroSection from "../../components/hero-section";
import AboutSection from "../../components/concept-section";
import CitronelloSection from "../../components/citronello-section";
import CollectionsSection from "../../components/collectoins-section";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";
import InspirationSection from "../../components/inspiration-section";
import Image from "next/image";
import Button from "../../components/ui/Button";

export default function Home() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CitronelloSection />
      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex flex-row justify-between gap-8">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/l8z47zfbwqsa2zmtiz8x.jpg"
                alt=""
                width={800}
                height={800}
                className="rounded-2xl"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-display text-foreground mb-6">Get Inspired</h2>
              <p className="text-body text-text-secondary leading-relaxed mb-8">It’s a project that merges aesthetics and substance, craftsmanship and industrial vision, material and design culture. This is confirmed by the awards received from prestigious institutions and organizations in the world of design, capable of offering a critical and independent perspective on contemporary creativity.</p>
              <Button>View Our Gallery</Button>
            </div>

          </div>
        </div>
      </section>
      <InspirationSection />
      <CollectionsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
