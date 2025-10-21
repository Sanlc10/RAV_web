import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';

const Sidebar = ({ author, articles }) => {
  return (
    <aside className="space-y-8">
      {/* Author Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">About the Author</h3>

        {/* Author Photo */}
        <div className="mb-4">
          <img
            src={author.photo}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-100"
          />
        </div>

        {/* Author Name */}
        <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
          {author.name}
        </h4>

        {/* Author Bio */}
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
            href={author.socials.twitter}
            className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href={author.socials.pinterest}
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
            aria-label="Pinterest"
          >
            <FaPinterest className="text-2xl" />
          </a>
          <a
            href={author.socials.linkedin}
            className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h3>

        <div className="space-y-4">
          {articles.slice(0, 4).map((article, index) => (
            <div
              key={article.id}
              className={`pb-4 ${
                index < 3 ? 'border-b border-gray-200' : ''
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
          href="#all-articles"
          className="block text-center text-blue-500 hover:text-blue-600 font-semibold mt-6 transition-colors duration-300"
        >
          View All Articles →
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
