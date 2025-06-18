import React from 'react';
import { Users, BookOpen, Heart, Music, Church, BookOpenText } from 'lucide-react';

const ministries = [
  {
    id: 1,
    title: "Intercessory Ministry",
    description: "Our intercessory prayer ministry is dedicated to lifting up the needs of our congregation, community, and world before God. Through organized prayer meetings, prayer chains, and individual intercession, we stand in the gap for others.",
    icon: <BookOpen className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748223355/IMG_0024_wnegrg.jpg",
    meetingTimes: "Every Saturday at 6:45 PM"
  },
  {
    id: 2,
    title: "Youth Group",
    description: "Our vibrant youth ministry helps teens grow in their faith through weekly gatherings, small groups, service projects, and fun activities. We focus on building strong foundations in Christ while addressing real-life challenges young people face today.",
    icon: <Users className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748225937/IMG_9963_rlw3ki.jpg",
  },
  {
    id: 3,
    title: "Worship Ministry",
    description: "Our worship team leads the congregation in meaningful praise and worship through music, creating an atmosphere where people can encounter God's presence. We incorporate both contemporary and traditional elements in our worship experience.",
    icon: <Music className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748224424/IMG_0005_yltbrv.jpg",
    meetingTimes: "Every Saturday at 6:30 PM"
  },
  {
    id: 4,
    title: "Outreach & Missions",
    description: "We're committed to sharing God's love both locally and globally through various outreach initiatives, community service, and mission trips. Our teams work with local organizations and international partners to make a difference.",
    icon: <Heart className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dzydzt8x8/image/upload/v1748224564/PXL_20241130_143414395_Radiant_Photo_ovjskh.jpg",
    meetingTimes: "Monthly planning meetings"
  },
  {
    id: 5,
    title: "Prayer Warriors",
    description: "A dedicated team committed to spiritual warfare and intercession, meeting regularly to pray for the church, its members, and specific prayer requests from the congregation.",
    icon: <Church className="h-10 w-10 text-orange-500" />,
    image: "https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    meetingTimes: "First Friday Of Every Month"
  },
  {
    id: 10,
    title: "Bible Study Groups",
    description: "Small group Bible studies meeting throughout the week to dive deeper into God's Word, foster fellowship, and encourage spiritual growth.",
    icon: <BookOpenText className="h-10 w-10 text-orange-500" />,
    image: "https://images.pexels.com/photos/5905498/pexels-photo-5905498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    meetingTimes: "Every Saturday at 6:00 PM"
  }
];

const MinistryCard: React.FC<{ministry: typeof ministries[0]}> = ({ ministry }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img 
        src={ministry.image} 
        alt={ministry.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="mb-4">{ministry.icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{ministry.title}</h3>
        <p className="text-gray-700 mb-4">{ministry.description}</p>
        <div className="text-sm text-orange-600 font-medium">
          Meeting Times: {ministry.meetingTimes}
        </div>
      </div>
    </div>
  );
};

const AllMinistries: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Ministries</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore our various ministries and find where you can connect, serve, and grow in your faith journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map(ministry => (
            <MinistryCard key={ministry.id} ministry={ministry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllMinistries; 