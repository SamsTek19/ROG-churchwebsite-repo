import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const CHURCH_LOGO = "https://res.cloudinary.com/dzydzt8x8/image/upload/e_background_removal/f_png/v1748218932/20240501_090345_copy_r2ed5u.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2">
            <img 
              src={CHURCH_LOGO} 
              alt="Radiance Of Glory Embassy Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-orange-500">
              Radiance Of Glory Embassy
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link to="/events" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-orange-500 transition-colors">
              Events
            </Link>
            <Link to="/sermons" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-orange-500 transition-colors">
              Sermons
            </Link>
            <Link to="/giving" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-orange-500 transition-colors">
              Giving
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={handleNavigation} className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={handleNavigation} className="text-gray-600 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link to="/events" onClick={handleNavigation} className="text-gray-600 hover:text-orange-500 transition-colors">
              Events
            </Link>
            <Link to="/sermons" onClick={handleNavigation} className="text-gray-600 hover:text-orange-500 transition-colors">
              Sermons
            </Link>
            <Link to="/giving" onClick={handleNavigation} className="text-gray-600 hover:text-orange-500 transition-colors">
              Giving
            </Link>
            <Link to="/contact" onClick={handleNavigation} className="text-gray-600 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;