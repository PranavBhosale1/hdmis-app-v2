import { Database, BarChart3, Shield, Building2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Database,
      title: "Centralized Data Collection and Access",
      description: "Securely gathers data from partner hospitals in real-time.",
      bgColor: "bg-purple-100"
    },
    {
      icon: BarChart3,
      title: "Visualization",
      description: "Interactive dashboards help policymakers track health indicators.",
      bgColor: "bg-pink-100"
    },
    {
      icon: Shield,
      title: "Security",
      description: "End-to-end encryption ensures compliance with medical data norms.",
      bgColor: "bg-green-100"
    },
    {
      icon: Building2,
      title: "Hospital Integration",
      description: "Easily integrates with public and private hospitals of all sizes.",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">About HDIMS</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            HDIMS (Health Data Information & Management System) is a unified platform designed to 
            collect, manage, and visualize real-time hospital data, enabling government bodies to make 
            faster, data-driven healthcare decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 rounded-full ${feature.bgColor} flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-sm text-primary-foreground text-center px-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;