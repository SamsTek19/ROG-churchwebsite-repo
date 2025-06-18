import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Church, Mail } from 'lucide-react';

const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/channel/UCYV8FLah9CQQoEXwsOBEeFA',
  facebook: 'https://web.facebook.com/profile.php?id=61576564207151',
  instagram: 'https://www.instagram.com/radianceofgloryembassy/',
  twitter: 'https://x.com/radiance_glory'
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Church className="h-8 w-8 text-orange-500" />
              <span className="ml-2 font-bold text-xl">Radiance Of Glory Embassy</span>
            </div>
            <p className="text-gray-400 mb-4">
              A welcoming community of faith, hope, and love where everyone can connect, grow, and serve.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sermons" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/giving" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition-colors">
                  Giving
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>KNUST Queens Hall</li>
              <li>Kumasi, Ghana</li>
              <li>Phone: +233 539 441 223</li>
              <li>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <a href="mailto:radianceofgloryembassy@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                    radianceofgloryembassy@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                Facebook
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                Twitter
              </a>
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                Instagram
              </a>
              <a 
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Radiance of Glory Embassy. All rights reserved.
            <div className="mt-1 space-x-4">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;