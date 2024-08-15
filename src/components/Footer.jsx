//import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:underline">Support Services</a></li>
              <li><a href="#" className="hover:underline">Counseling & Therapy</a></li>
              <li><a href="#" className="hover:underline">Legal Assistance</a></li>
              <li><a href="#" className="hover:underline">Shelter Information</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Mizpa Initiatives</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:underline">Programs & Outreach</a></li>
              <li><a href="#" className="hover:underline">Workshops & Seminars</a></li>
              <li><a href="#" className="hover:underline">Community Engagement</a></li>
              <li><a href="#" className="hover:underline">Volunteer Opportunities</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Events</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:underline">Upcoming Events</a></li>
              <li><a href="#" className="hover:underline">Awareness Campaigns</a></li>
              <li><a href="#" className="hover:underline">Fundraising Initiatives</a></li>
              <li><a href="#" className="hover:underline">Annual Reports</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:underline">Volunteer</a></li>
              <li><a href="#" className="hover:underline">Donate</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Mizpa House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
