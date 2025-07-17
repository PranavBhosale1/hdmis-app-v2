const HospitalsOnboard = () => {
  const hospitals = [
    { name: "Noble Hospital", logo: "NH" },
    { name: "Sahyadri Hospitals", logo: "SH" },
    { name: "Poona Hospital and Research Centre", logo: "PH" },
    { name: "Motherhood Hospitals", logo: "MH" },
    { name: "City Care Hospital", logo: "CC" },
    { name: "Apollo Hospitals", logo: "AH" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Hospitals Onboard</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {hospitals.map((hospital, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">{hospital.logo}</span>
              </div>
              <p className="text-sm text-center text-muted-foreground font-medium">
                {hospital.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalsOnboard;