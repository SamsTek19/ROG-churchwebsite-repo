import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Radiance Of Glory Embassy is a non-denominational organisation that exists to glorify God by making disciples who love God,
            love one another, and serve our community with the transformative message of Jesus Christ.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 rounded-lg p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full">
              <span className="text-orange-500 text-2xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Intercession</h3>
            <p className="text-gray-700">
               The Intercession Ministry at Radiance Of Glory Embassy is a pillar of spiritual strength, dedicated to standing in the gap through fervent prayer and intercession. Rooted in faith and guided by the Holy Spirit, this ministry seeks to uplift individuals, communities, and nations through the power of prayer.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full">
              <span className="text-orange-500 text-2xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Worship</h3>
            <p className="text-gray-700">
              The Worship Ministry at Radiance Of Glory Embassy is devoted to creating an atmosphere where God’s presence is felt, hearts are transformed, and lives are renewed through passionate, Spirit-led worship. We believe that worship is more than just music—it is a lifestyle of surrender, adoration, and communion with God.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full">
              <span className="text-orange-500 text-2xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Community</h3>
            <p className="text-gray-700">
            The Community Ministry at Radiance Of Glory Embassy is dedicated to serving, uplifting, and transforming lives through acts of love, compassion, and outreach. We believe that the ministry is not just a place of worship but a beacon of hope, impacting lives beyond its walls.
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Church</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 17th June 2024, Radiance Of Glory Embassy is a non denominational organisation that has been a beacon of hope and faith in our community for a year now. 
              Our congregation is made up of people from all walks of life, united by our love for God and desire to grow spiritually.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We believe in the authority of Scripture, the power of prayer, and the importance of authentic community. 
              Our services combine reverent worship with practical, Bible-based teaching that connects with everyday life.
            </p>
            <a href="#contact" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium">
              Visit Us This Saturday →
            </a>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Church congregation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;