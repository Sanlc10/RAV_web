import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ author, articles }) => {
  return (
    <aside className="space-y-8">
      {/* Pastor Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestros Pastores</h3>

        {/* Pastor Photo */}
        <div className="mb-4">
          <img
            src={author.photo}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-100"
          />
        </div>

        {/* Pastor Name */}
        <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
          {author.name}
        </h4>

        {/* Pastor Bio */}
        <p className="text-gray-600 text-center mb-6">
          {author.bio}
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4">
          <a
            href={author.socials.facebook}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href={author.socials.instagram}
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href={author.socials.youtube}
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href={author.socials.email}
            className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Service Times */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Horarios de Servicio</h3>

        <div className="space-y-4">
          {articles.slice(0, 3).map((article, index) => (
            <div
              key={article.id}
              className={`pb-4 ${
                index < 2 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <a href={article.link}>
                <h4 className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300">
                  {article.title}
                </h4>
              </a>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <a
          href="#horarios"
          className="block text-center text-blue-500 hover:text-blue-600 font-semibold mt-6 transition-colors duration-300"
        >
          Ver todos los horarios →
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
