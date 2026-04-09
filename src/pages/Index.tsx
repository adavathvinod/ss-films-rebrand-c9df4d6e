import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutStatement from "@/components/AboutStatement";
import BigTextSection from "@/components/BigTextSection";
import ShowreelSection from "@/components/ShowreelSection";
import ServicesSection from "@/components/ServicesSection";
import PrideSection from "@/components/PrideSection";
import GrowthSection from "@/components/GrowthSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutStatement />
      <BigTextSection />
      <ShowreelSection />
      <ServicesSection />
      <PrideSection />
      <GrowthSection />
      <ProjectsSection />
      <AboutSection />
      <FAQSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
