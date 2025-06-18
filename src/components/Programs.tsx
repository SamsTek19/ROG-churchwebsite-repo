import React from 'react';
import { Users, BookOpen, Heart, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 1,
    title: "Intercessory Ministry",
    description: "Our intercessory prayer ministry is a pillar of spiritual strength, dedicated to standing in the gap through fervent prayer and intercession. We believe in the transformative power of prayer to bring healing, breakthrough, and divine alignment. Our vision is to To raise a generation of committed intercessors who will pray with authority, faith, and compassion—ushering in God's presence and glory in every sphere of life.",
    icon: <BookOpen className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748223355/IMG_0024_wnegrg.jpg"
  },
  {
    id: 2,
    title: "Youth Group",
    description: "Our vibrant Youth Ministry is a place where young people can grow in their faith, build meaningful relationships, and discover their God-given purpose. We believe in equipping the next generation to live boldly for Christ through worship, discipleship, service, and fellowship.",
    icon: <Users className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748225937/IMG_9963_rlw3ki.jpg"
  },
  {
    id: 3,
    title: "Worship Ministry",
    description: "Our worship team leads the congregation in meaningful praise and worship through music, creating an atmosphere where people can encounter God's presence. Our Worship Ministry is dedicated to leading the congregation into deep, meaningful encounters with God through spirit-filled praise and worship. We believe that worship is more than just music—it is a powerful expression of faith, surrender, and devotion.",
    icon: <Music className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748224424/IMG_0005_yltbrv.jpg"
  },
  {
    id: 4,
    title: "Outreach & Missions",
    description: "We're committed to sharing God's love both locally and globally through various outreach initiatives, community service, and mission trips.At Radiance Of Glory Embassy, our Outreach & Missions Ministry is dedicated to spreading God's love beyond the church walls—impacting lives, restoring hope, and transforming communities through compassionate service and evangelism.",
    icon: <Heart className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748224564/PXL_20241130_143414395_Radiant_Photo_ovjskh.jpg"
  }
];

const ProgramCard: React.FC<{program: typeof programs[0], isReversed: boolean}> = ({ program, isReversed }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg overflow-hidden shadow-lg mb-12`}>
      <div className="md:w-1/2">
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-4">{program.icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
        <p className="text-gray-700 mb-6">{program.description}</p>
        {program.id !== 1 && program.id !== 2 && program.id !== 3 && program.id !== 4 && (
          <a 
            href="#" 
            className="inline-block self-start px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Ministries</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Discover the various ministries and programs we offer to help you connect, grow, and serve.
          </p>
        </div>
        
        <div className="mt-12">
          {programs.map((program, index) => (
            <ProgramCard 
              key={program.id} 
              program={program} 
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/ministries" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
          >
            View All Ministries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;