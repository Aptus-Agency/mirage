'use client';

import Navigation from "../../components/navigation";
import AboutSection from "../../components/concept-section";
import CitronelloSection from "../../components/citronello-section";
import CollectionsSection from "../../components/collectoins-section";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";
import InspirationSection from "../../components/inspiration-section";
import ParallaxSection from "../../components/parallax-section";

export default function Home() {


  return (
    <>
      <Navigation />

      <ParallaxSection />

      <AboutSection />
      <CitronelloSection />
      <InspirationSection />
      <CollectionsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
