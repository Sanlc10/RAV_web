import { FaCompass, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FaCompass className="text-3xl text-blue-500" />
              <span className="text-2xl font-bold">Journal X</span>
            </div>
            <p className="text-gray-400">
              Exploring the world, one adventure at a time. Join us on our journey to discover the planet's most incredible destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#articles" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#travel" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Travel
                </a>
              </li>
              <li>
                <a href="#adventure" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Adventure
                </a>
              </li>
              <li>
                <a href="#gear" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Gear Reviews
                </a>
              </li>
              <li>
                <a href="#guides" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Travel Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#pinterest"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Pinterest"
              >
                <FaPinterest className="text-2xl" />
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Stay connected with our community and get the latest updates on your favorite social platforms.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Journal X. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
