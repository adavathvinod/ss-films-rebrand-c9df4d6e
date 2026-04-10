import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutStatement from "@/components/AboutStatement";
import BigTextSection from "@/components/BigTextSection";
import ShowreelSection from "@/components/ShowreelSection";
import ServicesSection from "@/components/ServicesSection";
import RupamSection from "@/components/RupamSection";
import PrideSection from "@/components/PrideSection";
import GrowthSection from "@/components/GrowthSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
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
      <RupamSection />
      <PrideSection />
      <GrowthSection />
      <ProjectsSection />
      <AboutSection />
      <CollaborationsSection />
      <ReviewsSection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
