'use client';

import Navigation from "../../components/navigation";
import HeroSection from "../../components/hero-section";
import AboutSection from "../../components/concept-section";
import BackgroudVideoSection from "../../components/background-video-section";
import CollectionsSection from "../../components/collectoins-section";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";
import ShapeYourIdeas from "../../components/shape-your-ideas";
import GetInspiredSection from "../../components/get-inspired";

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
      <ContactSection />
      <Footer />
    </>
  );
}
