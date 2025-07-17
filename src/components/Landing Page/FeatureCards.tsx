import { ArrowUpRight, Play, FileText, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureCards = () => {
  const cards = [
    {
      title: "Features",
      description: "Explore the powerful tools HDIMS offers for smarter healthcare management.",
      bgColor: "bg-hdims-pink",
      icon: ArrowUpRight
    },
    {
      title: "Latest News",
      description: "Stay updated with the latest developments and updates from HDIMS.",
      bgColor: "bg-hdims-yellow",
      icon: ArrowUpRight
    },
    {
      title: "Registration Guide",
      description: "Watch simple video tutorials on how to register and use the HDIMS platform.",
      bgColor: "bg-hdims-green",
      icon: ArrowUpRight
    },
    {
      title: "Hospitals Onboard",
      description: "See the hospitals and medical facilities already linked with our platform.",
      bgColor: "bg-hdims-purple",
      icon: ArrowUpRight
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className={`${card.bgColor} rounded-lg p-6 relative min-h-[200px] flex flex-col justify-between`}>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/20">
                  <card.icon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;