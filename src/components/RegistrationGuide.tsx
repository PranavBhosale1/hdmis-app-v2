import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationGuide = () => {
  const videos = [
    {
      title: "10 TIPS HEALTHY EATING HABITS",
      thumbnail: "bg-gradient-to-r from-orange-400 to-yellow-400",
      duration: "5:30"
    },
    {
      title: "Data Analytics Overview",
      thumbnail: "bg-gradient-to-r from-blue-500 to-blue-700",
      duration: "8:45"
    },
    {
      title: "System Integration Guide",
      thumbnail: "bg-gradient-to-r from-blue-500 to-blue-700",
      duration: "12:20"
    },
    {
      title: "Security Best Practices",
      thumbnail: "bg-gradient-to-r from-orange-400 to-yellow-400",
      duration: "6:15"
    }
  ];

  return (
    <section className="py-16 px-6 bg-hdims-light-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Registration Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className={`${video.thumbnail} rounded-lg aspect-video flex items-center justify-center relative overflow-hidden`}>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="bg-black/20 hover:bg-black/40 text-white border-2 border-white/50"
                >
                  <Play className="h-8 w-8 ml-1" fill="white" />
                </Button>
                
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="mt-3">
                <h3 className="font-semibold text-foreground text-sm">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationGuide;