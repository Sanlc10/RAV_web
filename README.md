# Journal X - Adventure & Travel Magazine Website

A modern, responsive travel and adventure magazine website built with **Vite**, **React**, and **Tailwind CSS**. Features a dynamic hero carousel, article categories, newsletter subscription, and a beautiful UI with smooth animations.

![Journal X](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop)

## Features

- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Hero Carousel** - Auto-playing slideshow with manual navigation
- **Dynamic Categories** - Interactive category cards with hover effects
- **Newsletter Subscription** - Email validation and submission handling
- **Author Sidebar** - Social media integration and popular articles
- **Smooth Animations** - Professional transitions and hover effects throughout
- **Modern UI/UX** - Clean, professional design with Tailwind CSS

## Tech Stack

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React 19](https://react.dev/)** - Modern UI framework with hooks
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **JavaScript** - ES6+ features (no TypeScript)

## Project Structure

```
journal-x/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Auto-playing carousel
│   │   ├── CategoryCard.jsx    # Category display cards
│   │   ├── ArticleCard.jsx     # Article preview cards
│   │   ├── Newsletter.jsx      # Email subscription form
│   │   ├── Sidebar.jsx         # Author info & popular posts
│   │   └── Footer.jsx          # Site footer
│   ├── data/
│   │   └── content.js          # Mock data for all content
│   ├── assets/
│   │   └── images/             # Image assets
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Tailwind directives & global styles
│   └── main.jsx                # React entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- **Node.js** 18+ and npm installed on your machine
- Basic knowledge of React and Tailwind CSS

### Installation

1. **Clone or navigate to the project directory:**

```bash
cd journal-x
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser and visit:**

```
http://localhost:5173
```

The development server supports Hot Module Replacement (HMR), so your changes will appear instantly without page refresh.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173` with HMR enabled.

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally before deployment.

### Lint

```bash
npm run lint
```

Run ESLint to check code quality and identify issues.

## Component Documentation

### Header Component

Sticky navigation bar with:
- Logo and brand name
- Desktop navigation menu
- Dropdown menu for "Pages"
- Mobile hamburger menu
- Subscribe button
- Scroll-based background change effect

### Hero Component

Auto-playing carousel featuring:
- 3 rotating slides with 5-second intervals
- Background images with gradient overlays
- Category badges and dates
- Titles and descriptions
- Navigation dots for manual control

**Props:**
- `slides` - Array of slide objects with image, badge, date, title, and description

### CategoryCard Component

Interactive category cards with:
- Background images with zoom on hover
- Gradient overlays
- External link icons
- Smooth transitions

**Props:**
- `title` - Category name
- `description` - Brief description
- `image` - Background image URL
- `link` - Destination URL

### ArticleCard Component

Simple article preview displaying:
- Category and date metadata
- Article title with hover effect
- Clickable link to full article

**Props:**
- `category` - Article category
- `date` - Publication date
- `title` - Article headline
- `link` - Article URL

### Newsletter Component

Email subscription form with:
- Email input validation
- Submit button with icon
- Success message display
- Privacy notice
- Decorative side image

### Sidebar Component

Author information and popular articles featuring:
- Author photo (circular)
- Name and biography
- Social media links (Facebook, Twitter, Pinterest, LinkedIn)
- List of popular articles
- "View All" link

**Props:**
- `author` - Object with name, bio, photo, and social links
- `articles` - Array of article objects

### Footer Component

Site footer containing:
- Brand logo and description
- Quick links navigation
- Category links
- Social media icons
- Copyright and legal links

## Customization Guide

### Adding New Categories

Edit `src/data/content.js`:

```javascript
export const categories = [
  {
    id: 4,
    title: "Your Category",
    description: "Category description",
    image: "https://example.com/image.jpg",
    link: "#your-category"
  },
  // ... existing categories
];
```

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      dark: '#YOUR_COLOR',
    },
  },
}
```

### Modifying Hero Carousel

In `src/data/content.js`, update the `heroSlides` array:

```javascript
export const heroSlides = [
  {
    id: 1,
    image: "your-image-url",
    badge: "Your Badge",
    date: "Your Date",
    title: "Your Title",
    description: "Your description"
  }
];
```

To change auto-play interval, edit `src/components/Hero.jsx` (default is 5000ms):

```javascript
const timer = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
}, 5000); // Change this value
```

### Adding More Articles

Update `src/data/content.js`:

```javascript
export const popularArticles = [
  {
    id: 7,
    category: "Category",
    date: "Date",
    title: "Article Title",
    link: "#article-link"
  },
  // ... existing articles
];
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images from Unsplash CDN
- Lazy loading support
- Minimal bundle size
- Fast page loads with Vite
- Efficient re-renders with React

## Accessibility

- Semantic HTML5 elements
- Alt text for images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements

## Future Enhancements

Potential features to add:
- [ ] Blog post detail pages
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Comment system
- [ ] Social sharing buttons
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Pagination for articles
- [ ] Filter by category
- [ ] Tag system

## Contributing

Feel free to fork this project and customize it for your own needs. Pull requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## Support

For issues or questions, please open an issue on the GitHub repository.

---

**Built with ❤️ using Vite + React + Tailwind CSS**
