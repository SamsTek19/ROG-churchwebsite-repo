import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        timestamp: new Date(),
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Reach out with any questions or prayer requests.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
            
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2 bg-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <MapPin className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-700">
                    KNUST Queens Hall<br />
                    Kumasi, Ghana
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700">+233 539 441 223</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:radianceofgloryembassy@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                  radianceofgloryembassy@gmail.com
                </a>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Service Times</h4>
                  <p className="text-gray-700">
                    Prayer Meetings: 9:00 AM & 11:00 AM<br />
                    Wednesday Bible Study: 7:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: Closed<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6767576!2d-1.5759513!3d6.6767576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946eb08b88a9%3A0x5b2fa6f4a8d83500!2sRoyal%20Parade%20Grounds!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;