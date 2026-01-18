import HeroSection from "@/components/ui/hero-section";
import ProblemSection from "@/components/ui/problem-section";
import DataEngineSection from "@/components/ui/data-engine-section";
import MethodologySection from "@/components/ui/methodology-section";
import TrustSection from "@/components/ui/trust-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      
      <div id="problem">
        <ProblemSection />
      </div>
      
      <div id="services">
        <DataEngineSection />
      </div>
      
      <div id="methodology">
        <MethodologySection />
      </div>
      
      <div id="trust">
        <TrustSection />
      </div>
      
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
