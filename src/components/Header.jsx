import { useState, useEffect } from 'react';
import { FaCompass, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCompass className="text-white text-3xl" />
            <span className="text-white text-2xl font-bold">Journal X</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              About
            </a>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium flex items-center space-x-1"
              >
                <span>Pages</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPagesOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48">
                  <a href="#travel" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Travel
                  </a>
                  <a href="#adventure" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Adventure
                  </a>
                  <a href="#gear" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Gear
                  </a>
                </div>
              )}
            </div>

            <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Contact
            </a>
            <a href="#blog" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Blog
            </a>
          </nav>

          {/* Subscribe Button (Desktop) */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg rounded-lg mt-4 mb-4 py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#pages"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Pages
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="#blog"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Blog
              </a>
              <button className="btn-primary mt-4">
                Subscribe
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
