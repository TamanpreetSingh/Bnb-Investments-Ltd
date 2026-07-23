import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import About from "@/components/About";
import InvestmentSectors from "@/components/InvestmentSectors";
import Approach from "@/components/Approach";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <About />
        <InvestmentSectors />
        <Approach />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
