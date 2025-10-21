import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert('Please enter your email address');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Success
    setIsSubmitted(true);
    alert('Thank you for subscribing to Journal X! 🎉');
    setEmail('');

    // Reset submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get the latest adventure stories, travel tips, and gear reviews delivered straight to your inbox.
              Join our community of explorers and never miss an update!
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <FaPaperPlane />
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full inline-block">
                Successfully subscribed! Check your inbox.
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div
              className="h-[400px] rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
