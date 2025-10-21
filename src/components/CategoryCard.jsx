import { FaExternalLinkAlt } from 'react-icons/fa';

const CategoryCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      className="group relative h-[400px] rounded-xl overflow-hidden block"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* External Link Icon */}
      <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaExternalLinkAlt className="text-xl" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-base">
          {description}
        </p>
      </div>
    </a>
  );
};

export default CategoryCard;
