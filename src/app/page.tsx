'use client';

import Navigation from "../../components/navigation";
import HeroSection from "../../components/hero-section";
import AboutSection from "../../components/concept-section";
import BackgroudVideoSection from "../../components/background-video-section";
import CollectionsSection from "../../components/collectoins-section";
import Footer from "../../components/footer";
import ShapeYourIdeas from "../../components/shape-your-ideas";
import GetInspiredSection from "../../components/get-inspired";
import ProductCtaSection from "../../components/product-cta-section";

export default function Home() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BackgroudVideoSection />
      <GetInspiredSection />
      <ShapeYourIdeas />
      <CollectionsSection />
      {/* <ContactSection /> */}
      <ProductCtaSection title="Ready to Transform Your Space?" description="Struggling to visualize your project? Our design experts are here to help. Visit our showroom in Bugolobi to see our collections in person or book a free design consultation today." ctaText="Book a Consultation" ctaLink="/contact-us" />
      <Footer />
    </>
  );
}
