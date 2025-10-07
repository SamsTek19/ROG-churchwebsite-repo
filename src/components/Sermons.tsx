import React from 'react';
import { Play, Clock } from 'lucide-react';

const sermons = [
  {
    id: 1,
    title: "Finding Peace in Troubled Times",
    speaker: "Prophet Micheal Agyemang",
    date: "May 21, 2025",
    duration: "38 min",
    image: "https://images.pexels.com/photos/2157995/pexels-photo-2157995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    scripture: "John 14:27"
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Prophet Micheal Agyemang",
    date: "May 14, 2025",
    duration: "42 min",
    image: "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    scripture: "Philippians 4:6-7"
  },
  {
    id: 3,
    title: "Living with Purpose",
    speaker: "Prophet Micheal Agyemang",
    date: "May 7, 2025",
    duration: "45 min",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    scripture: "Ephesians 2:10"
  }
];

const SermonCard: React.FC<{sermon: typeof sermons[0]}> = ({ sermon }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="relative h-48 overflow-hidden group">
        <a 
          href="https://www.youtube.com/@radianceofgloryembassy"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <img 
            src={sermon.image} 
            alt={sermon.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
              <Play className="h-6 w-6 text-white" fill="white" />
            </button>
          </div>
        </a>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-orange-500 font-medium text-sm mb-2">{sermon.scripture}</span>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{sermon.title}</h3>
        <p className="text-gray-700 text-sm mb-4">{sermon.speaker}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-gray-600 text-sm">{sermon.date}</span>
          <span className="text-gray-600 text-sm flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {sermon.duration}
          </span>
        </div>
      </div>
    </div>
  );
};

const Sermons: React.FC = () => {
  return (
    <section id="sermons" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Sermons</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Missed a meeting or program? Catch up on our recent messages or revisit your favorites.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map(sermon => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@radianceofgloryembassy" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
          >
            View All Sermons
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sermons;