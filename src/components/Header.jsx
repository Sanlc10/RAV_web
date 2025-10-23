import { useState, useEffect } from 'react';
import { FaChurch, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

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
            <FaChurch className="text-white text-3xl" />
            <span className="text-white text-2xl font-bold">Ríos de Agua Viva</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Inicio
            </a>
            <a href="#quienes-somos" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Quiénes Somos
            </a>

            {/* Ministerios Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium flex items-center space-x-1"
              >
                <span>Ministerios</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPagesOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl py-2 w-48">
                  <a href="#alabanza" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Alabanza
                  </a>
                  <a href="#ninos" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Ministerio Infantil
                  </a>
                  <a href="#pastoral" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Ministerio Pastoral
                  </a>
                </div>
              )}
            </div>

            <a href="#horarios" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Horarios
            </a>
            <a href="#contacto" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              Contacto
            </a>
          </nav>

          {/* Conectar Button (Desktop) */}
          <div className="hidden md:block">
            <a href="#newsletter" className="btn-primary">
              Conectar
            </a>
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
                href="#inicio"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a
                href="#quienes-somos"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Quiénes Somos
              </a>
              <a
                href="#ministerios"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Ministerios
              </a>
              <a
                href="#horarios"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Horarios
              </a>
              <a
                href="#contacto"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                onClick={toggleMenu}
              >
                Contacto
              </a>
              <a href="#newsletter" className="btn-primary mt-4">
                Conectar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
