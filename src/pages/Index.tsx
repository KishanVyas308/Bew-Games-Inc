import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GameShowcase from "@/components/GameShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <GameShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
