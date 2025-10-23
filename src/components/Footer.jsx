import { FaChurch, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Info Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaChurch className="text-3xl text-blue-500" />
              <span className="text-2xl font-bold">Ríos de Agua Viva</span>
            </div>
            <p className="text-gray-400 mb-4">
              Una iglesia cristiana evangélica donde experimentarás la presencia de Dios.
            </p>
            <p className="text-gray-400">
              San Juan Tlautla, 72750<br />
              Cholula de Rivadavia, Puebla
            </p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-lg font-bold mb-4">Horarios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Domingos 10:30 AM - Discipulado</li>
              <li>Domingos 12:00 PM - Culto General</li>
              <li>Miércoles 8:30 PM - Adoración (Zoom)</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com/RiosDeAguaVivaPuebla"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/riosdeaguaviva70"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Mantente conectado con nuestra comunidad y recibe las últimas actualizaciones.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Ríos de Agua Viva. Donde encontrarás vida en Cristo.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
