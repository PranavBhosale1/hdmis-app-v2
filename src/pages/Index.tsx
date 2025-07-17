import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureCards from "@/components/FeatureCards";
import HowHdimsHelps from "@/components/HowHdimsHelps";
import RegistrationGuide from "@/components/RegistrationGuide";
import HospitalsOnboard from "@/components/HospitalsOnboard";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onLoginClick={() => setIsModalOpen(true)}
        onRegisterClick={() => setIsModalOpen(true)}
      />
      <HeroSection 
        onLoginClick={() => setIsModalOpen(true)}
        onRegisterClick={() => setIsModalOpen(true)}
      />
      <AboutSection />
      <FeatureCards />
      <HowHdimsHelps />
      <RegistrationGuide />
      <HospitalsOnboard />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
