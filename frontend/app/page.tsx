import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import About from "@/components/About";
import InvestmentSectors from "@/components/InvestmentSectors";
import ApproachInvestors from "@/components/ApproachInvestors";
import CTA from "@/components/CTA";
import EnquiryForm from "@/components/EnquiryForm";
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
        <ApproachInvestors />
        <CTA />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
