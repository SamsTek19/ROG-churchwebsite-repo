import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

// Sample event data
const events = [
  {
    id: 3,
    title: 'The Nations Awakening',
    date: 'July 1, 2025',
    time: '9am to 12pm',
    location: 'KNUST Botanical Gardens',
    description: 'A time of fellowship, and spiritual growth for young and old people.',
    image: 'https://res.cloudinary.com/dzydzt8x8/image/upload/v1750210869/nat_riibtu.jpg'
  },
  {
    id: 1,
    title: 'Prayer Meetings',
    date: 'Every Saturday',
    time: '6:30 PM',
    location: 'KNUST Parade Ground',
    description: 'Join us for intercessory prayers and an inspiring message from Prophet Micheal Agyemang.',
    image: 'https://res.cloudinary.com/dzydzt8x8/image/upload/v1749756183/IMG_9687_v0oocp.jpg'
  },
  {
    id: 4,
    title: 'Bible Study',
    date: 'Every Saturday',
    time: '6:00 PM',
    location: 'KNUST Parade Ground',
    description: 'Join us for our cell Bible study as we explore and learn the word of God.',
    image: 'https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Community Outreach',
    description: 'Volunteer to help with our quarterly community service event. We will be providing meals, clothing, and resources to those in need.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const EventCard: React.FC<{event: typeof events[0]}> = ({ event }) => {
  const navigate = useNavigate();

  const handleLearnMore = (eventTitle: string) => {
    if (eventTitle === 'The Nations Awakening') {
      window.scrollTo(0, 0);
      navigate('/youth-camp-registration');
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
        <div className="mb-4 flex-grow">
          {event.date && (
            <div className="flex items-center mb-2 text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-orange-500" />
              <span>{event.date}</span>
            </div>
          )}
          {event.time && (
            <div className="flex items-center mb-2 text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-orange-500" />
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center mb-4 text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-orange-500" />
              <span>{event.location}</span>
            </div>
          )}
          <p className="text-gray-700 text-sm">{event.description}</p>
        </div>
        {event.title === 'The Nations Awakening' && (
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleLearnMore(event.title);
            }}
            className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-center self-start"
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const location = useLocation();
  const isEventsPage = location.pathname === '/events';

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Join us for these upcoming events and activities. There's something for everyone in our church family.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {!isEventsPage && (
          <div className="mt-12 text-center">
            <Link 
              to="/events" 
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              View All Events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;