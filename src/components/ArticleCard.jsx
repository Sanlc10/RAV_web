const ArticleCard = ({ category, date, title, link }) => {
  return (
    <article className="space-y-3">
      {/* Category and Date */}
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span className="font-medium">{category}</span>
        <span>•</span>
        <span>{date}</span>
      </div>

      {/* Title */}
      <a href={link}>
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300 leading-tight">
          {title}
        </h3>
      </a>
    </article>
  );
};

export default ArticleCard;
