import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ArticleCard from './components/ArticleCard';
import Newsletter from './components/Newsletter';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { heroSlides, categories, popularArticles, author, featuredArticle } from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero slides={heroSlides} />

      {/* Article Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Article categories</h2>
            <a
              href="#all-articles"
              className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-300"
            >
              Browse all articles →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Now Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {popularArticles.slice(0, 6).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Featured Article + Sidebar Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
            {/* Featured Article */}
            <div className="relative h-[600px] rounded-xl overflow-hidden group">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${featuredArticle.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {featuredArticle.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-blue-400 font-semibold">{featuredArticle.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-300">{featuredArticle.date}</span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-300 text-lg mb-6">
                  {featuredArticle.description}
                </p>

                <a
                  href={featuredArticle.link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Read Full Story
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar author={author} articles={popularArticles} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
