import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dataEntryImage from "@/assets/data-entry-illustration.png";

const HowHdimsHelps = () => {
  const helpSections = [
    {
      title: "Easy Data Entry for Hospitals",
      description: "Hospitals can quickly upload patient and facility data with a user-friendly interface.",
      image: dataEntryImage,
      bgColor: "bg-primary"
    },
    {
      title: "Interactive Dashboards for Government",
      description: "Government officials can view real-time, visualized health data for informed decisions.",
      bgColor: "bg-primary"
    },
    {
      title: "Unified Health Data Platform",
      description: "All hospital data is securely collected and managed in one place.",
      bgColor: "bg-primary"
    },
    {
      title: "Secure and Compliant",
      description: "Built with strict data privacy and healthcare compliance standards.",
      bgColor: "bg-primary"
    },
    {
      title: "Role-Based Access",
      description: "Custom views and permissions for hospitals, admins, and policymakers.",
      bgColor: "bg-primary"
    },
    {
      title: "Data-Driven Policy Making",
      description: "Get insights that help shape better health policies and resource allocation.",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">How HDIMS Helps</h2>
        
        <div className="space-y-8">
          {helpSections.map((section, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className={`${section.bgColor} rounded-lg p-8 text-center text-primary-foreground relative`}>
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                
                {section.image && (
                  <div className="bg-white rounded-lg p-4 mb-4 max-w-md mx-auto">
                    <img src={section.image} alt={section.title} className="w-full h-auto rounded" />
                  </div>
                )}
                
                {!section.image && (
                  <div className="bg-white rounded-lg p-8 mb-4 max-w-md mx-auto">
                    <div className="bg-gray-100 rounded h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Dashboard Preview</span>
                    </div>
                  </div>
                )}
                
                <p className="text-sm opacity-90">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowHdimsHelps;