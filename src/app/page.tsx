import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import WhoWeAre from "@/components/WhoWeAre";
import FeaturedServices from "@/components/FeaturedServices";
import Portfolio from "@/components/Portfolio";
import WorldMapWrapper from "@/components/WorldMapWrapper";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      <Hero />
      <MarqueeTicker />
      <WhoWeAre />
      <FeaturedServices />
      <Portfolio />
      <WorldMapWrapper />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <CallToAction />
      <ContactSection />
      <Footer />
    </main>
  );
}
