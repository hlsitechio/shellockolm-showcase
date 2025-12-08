import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import DetectionSection from "@/components/DetectionSection";
import InstallSection from "@/components/InstallSection";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CoverageSection />
        <section id="detection">
          <DetectionSection />
        </section>
        <section id="install">
          <InstallSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
