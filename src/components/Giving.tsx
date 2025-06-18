import React from 'react';
import { Heart, DollarSign, CreditCard, Calendar } from 'lucide-react';

const PAYSTACK_URL = 'https://paystack.shop/pay/rog';

const Giving: React.FC = () => {
  return (
    <section id="give" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Online Giving</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Support the mission and ministries of Radiance of Glory Embassy through your generous giving.
            Your contributions help us spread God's love in our community and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
              <Heart className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Tithes & Offerings</h3>
            <p className="text-gray-700 mb-4">
              Support the regular operations and ministries of our ministry through your faithful giving.
            </p>
            <a 
              href={PAYSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Give Now
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
              <DollarSign className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Programs</h3>
            <p className="text-gray-700 mb-4">
              Give to support our programs. Every contribution, big or small, makes a difference. Whether it’s funding youth programs, missions, or church initiatives, your support enables us to reach more people and create lasting change.
            </p>
            <a 
              href={PAYSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Support
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
              <Calendar className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Recurring Giving</h3>
            <p className="text-gray-700 mb-4">
             Recurring giving allows you to support our ministry effortlessly, ensuring that our outreach, worship, and community programs continue to thrive.
             By setting up a monthly, weekly, or quarterly donation, you help sustain vital initiatives such as missions, youth development, and local outreach. Your ongoing support enables us to plan effectively, expand our impact, and reach more lives with God’s love.
            </p>
            <a 
              href={PAYSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Schedule
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ways to Give</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CreditCard className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Online</h4>
                    <p className="text-gray-700 text-sm">
                      Make a secure donation through our Paystack payment platform.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Recurring Giving</h4>
                    <p className="text-gray-700 text-sm">
                      Set up weekly, bi-weekly, or monthly donations through Paystack.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile Money</h4>
                    <p className="text-gray-700 text-sm">
                      Text *170# to (+233) 539 441 223 to donate from your mobile device.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a 
                  href={PAYSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                >
                  Give Securely Online
                </a>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Giving Makes a Difference</h3>
              <p className="text-gray-700 mb-4">
                When you give to Radiance of Glory Embassy, you're supporting:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Weekly worship services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                   Youth ministries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Community outreach and programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Local and global missions
                </li>
              </ul>
              <p className="text-gray-700 italic">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giving;