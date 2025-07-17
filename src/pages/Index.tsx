import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureCards from "@/components/FeatureCards";
import HowHdimsHelps from "@/components/HowHdimsHelps";
import RegistrationGuide from "@/components/RegistrationGuide";
import HospitalsOnboard from "@/components/HospitalsOnboard";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />
      <HeroSection 
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />
      <AboutSection />
      <FeatureCards />
      <HowHdimsHelps />
      <RegistrationGuide />
      <HospitalsOnboard />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
};

export default Index;
