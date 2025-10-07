import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1974&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Radiance Of Glory Embassy
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Join us in worship, fellowship, and service as we grow together in faith.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('events')}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 focus:ring-2 focus:ring-orange-300"
          >
            Upcoming Events
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Service Times */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center text-white text-center md:text-left gap-4 md:gap-12">
            <div>
              <h3 className="font-semibold text-orange-300">Prayer Meetings</h3>
              <p>Saturdays at 6:30 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-300">Cell Bible Study</h3>
              <p>6:00 PM on Saturdays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;