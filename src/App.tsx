import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Giving from './components/Giving';
import Programs from './components/Programs';
import Sermons from './components/Sermons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import YouthCampRegistration from './components/YouthCampRegistration';
import AllMinistries from './components/AllMinistries';
import PrivacyPolicy from './components/PrivacyPolicy';

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Events />
      <Programs />
      <Sermons />
      <Giving />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/youth-camp-registration" element={<YouthCampRegistration />} />
            <Route path="/OneYearAnniversary" element={<YouthCampRegistration />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<AllMinistries />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;