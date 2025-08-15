import Image from "next/image";
import Navigation from "../../components/navigation";
import HeroSection from "../../components/hero-section";
import ConceptSection from "../../components/concept-section";
import CitronelloSection from "../../components/citronello-section";
import CollectionsSection from "../../components/collectoins-section";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";
import InspirationSection from "../../components/inspiration-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ConceptSection />
        <CitronelloSection />
        <InspirationSection />
        <CollectionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
