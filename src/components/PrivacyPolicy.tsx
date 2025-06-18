import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy & Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            At Radiance of Glory Embassy, we are committed to safeguarding the privacy of our community members, partners, and visitors. This Privacy Policy explains how we collect, use, and protect your personal information when you engage with our services, platforms, and website (www.radianceofgloryembassy.org).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why We Collect Information</h2>
          <p className="mb-4">
            We collect certain personal data to enhance your experience with Radiance of Glory Embassy and to provide you with services that support our ministry and outreach efforts. You may provide information when you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Sign up for newsletters, prayer networks, or special events.</li>
            <li>Donate to our ministry.</li>
            <li>Submit testimonies or engage with our digital content.</li>
            <li>Contact us for inquiries or assistance.</li>
          </ul>
          <p className="mb-6">
            Any personal information you provide remains strictly confidential and will not be shared without explicit consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            When you use our website and services, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Browser type, device information, and interaction data to improve user experience.</li>
            <li>IP addresses for security and website functionality purposes.</li>
          </ul>
          <p className="mb-6">
            We do not sell personal data to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            Your information helps us:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Deliver requested services, such as prayer resources, event registrations, and newsletters.</li>
            <li>Improve our website and outreach efforts.</li>
            <li>Analyze data to optimize engagement and ministry impact.</li>
          </ul>
          <p className="mb-6">
            We use security measures to protect your data from unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Long We Retain Information</h2>
          <p className="mb-6">
            We keep your information as long as needed to provide our services effectively. If you would like to update or remove any personal data, please contact us at{' '}
            <a href="mailto:radianceofgloryembassy@gmail.com" className="text-orange-500 hover:text-orange-600 cursor-pointer">
              radianceofgloryembassy@gmail.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Payment & Donations</h2>
          <p className="mb-6">
            For those supporting our ministry through donations, Radiance of Glory Embassy does not store credit card details. Payments are processed securely through trusted third-party platforms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Opt-Out & Data Management</h2>
          <p className="mb-4">
            To unsubscribe from communications:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Send an email to{' '}
              <a href="mailto:radianceofgloryembassy@gmail.com" className="text-orange-500 hover:text-orange-600 cursor-pointer">
                radianceofgloryembassy@gmail.com
              </a>.
            </li>
            <li>Click "unsubscribe" in any email you receive from us.</li>
          </ul>
          <p className="mb-6">
            For any corrections to your information, contact us using the email above.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
          <p className="mb-6">
            We may update this policy from time to time. Any changes will be reflected on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 