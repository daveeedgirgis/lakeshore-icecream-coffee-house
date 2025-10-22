# Lakeshore Ice Cream & Coffee House Website

A modern, responsive website for Lakeshore Ice Cream & Coffee House, a lakeside café located in Burlington, Ontario. Built with React, TailwindCSS, and Vite for optimal performance and user experience.

## 🌟 Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, warm design with coffee-brown and cream color palette
- **SEO Optimized** - Meta tags, Open Graph, and LocalBusiness schema markup
- **Accessibility Compliant** - Semantic HTML, alt texts, and keyboard navigation
- **Performance Optimized** - Image lazy loading, code splitting, and optimized builds
- **Interactive Menu** - Dynamic categorization with dietary tag filtering
- **Photo Gallery** - Lazy-loaded images with modal preview
- **Google Maps Integration** - Embedded map with location details
- **Contact Forms** - Interactive contact form with validation
- **Social Media Integration** - Links to Instagram and Facebook

## 📋 Pages & Sections

### Homepage
- Hero section with lakeside imagery and tagline
- Feature highlights (ethical sourcing, lakeside location, premium quality)
- Customer testimonials
- Call-to-action sections

### Menu
- **Coffee & Beverages** - Espresso, lattes, cold brew, teas
- **Ice Cream & Sundaes** - Artisanal flavors including vegan options
- **Sandwiches & Paninis** - Fresh, locally-sourced ingredients
- **Cakes & Desserts** - House-made pastries and desserts
- Dietary tags: Vegan and Gluten-Free options clearly marked

### Gallery
- Categorized photo grid (Interior, Exterior, Food, Coffee, Ice Cream, Lakeside)
- Lazy loading for performance
- Modal preview with descriptions

### About
- Café story and values
- Sustainability commitment
- Community focus

### Location & Hours
- Google Maps embed (2007 Lakeshore Rd, Burlington, ON)
- Operating hours
- Contact information
- Accessibility and amenities info

### Contact
- Contact form with subject categorization
- Business contact information
- Social media links

## 🚀 Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: TailwindCSS with custom color palette
- **Routing**: React Router DOM
- **Fonts**: Inter (body) and Poppins (headings) from Google Fonts
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash for high-quality stock photos
- **Deployment**: Render.com static site hosting

## 🔧 Development Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lakeshore_icecream_n_coffee_house
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 📝 Content Management

### Updating Menu Items

Menu data is stored in `/src/data/menuData.js`. To add, edit, or remove menu items:

1. Open `/src/data/menuData.js`
2. Find the appropriate category
3. Add/edit items following this structure:
```javascript
{
  name: "Item Name",
  description: "Description of the item",
  price: "$X.XX",
  tags: ["Vegan", "Gluten-Free"] // Optional
}
```

### Adding Gallery Images

1. Add images to the `images` array in `/src/pages/Gallery.jsx`
2. Follow this structure:
```javascript
{
  src: 'image-url',
  alt: 'Descriptive alt text',
  category: 'Interior|Exterior|Coffee|Ice Cream|Food|Desserts|Lakeside'
}
```

### Updating Contact Information

Update contact details in:
- `/src/components/Footer.jsx`
- `/src/pages/Location.jsx`
- `/src/pages/Contact.jsx`
- `index.html` (LocalBusiness schema)

## 🌐 Deployment

### Deploying to Render.com

1. **Connect GitHub Repository**:
   - Create a new GitHub repository
   - Push your code to the repository
   - Connect it to Render.com

2. **Create Web Service**:
   - In Render dashboard, click "New +" → "Web Service"
   - Connect your GitHub repository
   - Use these settings:
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`
     - **Environment**: `Node`

3. **Configure Domain** (Optional):
   - In your Render service settings, go to "Custom Domains"
   - Add your custom domain (e.g., `lakeshoreicecream.ca`)
   - Configure DNS records as instructed by Render

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder contents to your hosting provider

### Environment Variables

No environment variables are required for basic functionality. For advanced features, you might want to add:

- `VITE_GOOGLE_MAPS_API_KEY` - For enhanced Google Maps features
- `VITE_CONTACT_FORM_ENDPOINT` - For contact form backend integration

## 🎨 Customization

### Color Palette

The site uses a custom color palette defined in `tailwind.config.js`:

- **Coffee**: Warm brown tones (#5c3d2a to #faf7f2)
- **Cream**: Light beige tones (#7e502b to #fefcf9)
- **Lake**: Blue tones for accents (#0c4a6e to #f0f9ff)

### Fonts

- **Display font**: Poppins (headings)
- **Body font**: Inter (body text)

### Images

Replace placeholder images with your own:
1. Add images to `/public` folder
2. Update image sources in components
3. Ensure images are optimized for web (WebP format recommended)

## 📱 Mobile Optimization

The site is built mobile-first with:
- Responsive navigation with hamburger menu
- Touch-friendly buttons and interactions
- Optimized image sizes for different screen sizes
- Readable typography on all devices

## ♿ Accessibility Features

- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- High contrast color combinations
- Screen reader friendly content
- Focus indicators for interactive elements

## 🚀 Performance Optimizations

- **Lazy loading**: Images load as they come into view
- **Code splitting**: JavaScript bundles are optimized
- **Tree shaking**: Unused code is removed
- **Compressed assets**: Minified CSS and JavaScript
- **Optimized images**: Compressed and properly sized

## 📊 SEO Features

- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **LocalBusiness Schema**: Structured data for search engines
- **Sitemap ready**: Structure supports automatic sitemap generation

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support & Maintenance

### Regular Updates

1. **Content**: Update menu items, hours, and contact information as needed
2. **Images**: Refresh gallery images seasonally
3. **Dependencies**: Keep npm packages updated for security
4. **Performance**: Monitor site speed and optimize as needed

### Troubleshooting

**Build Errors**:
- Ensure Node.js version compatibility
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Deployment Issues**:
- Check build logs in Render dashboard
- Verify all environment variables are set
- Ensure `_redirects` file is properly copied

**Performance Issues**:
- Optimize images (use WebP format)
- Check for unused CSS/JavaScript
- Monitor Core Web Vitals

## 📄 License

This project is created for Lakeshore Ice Cream & Coffee House. All rights reserved.

## 🤝 Contributing

For updates or modifications, please contact the development team or create a pull request with detailed descriptions of changes.

---

**Built with ❤️ for Lakeshore Ice Cream & Coffee House**

For technical support or questions about this website, please contact: [support-email]