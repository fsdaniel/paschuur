# De Beauty Schuur - Website Planning Document

## Project Overview
**Website:** debeautyschuur.nl  
**Type:** Static HTML website for beauty salon  
**Target:** Novice-friendly content management  
**Hosting:** GitHub Pages  
**Language:** Dutch  

## Design Philosophy
- **Minimal external dependencies** - Keep the site lightweight and fast
- **Novice-friendly** - Easy for non-technical users to update content
- **Professional appearance** - Clean, modern design inspired by industry leaders
- **Mobile-first** - Responsive design for all devices

## Color Scheme
- **Background:** `#dbd3ce` (warm, neutral beige)
- **Text:** `#3b2300` (rich, dark brown)
- **Accent colors:** To be determined based on brand identity

## Typography
- **Header Font:** `--wp--preset--font-family--marcellus` or similar elegant serif
- **Body Font:** Clean, readable sans-serif (system fonts preferred)
- **Fallback:** Standard web-safe fonts

## Site Structure

### Main Navigation
1. **Home** (`index.html`)
2. **Over de Beauty Schuur** (`over-ons.html`)
3. **Behandelingen** (dropdown)
   - Example 1 (`behandelingen/example1.html`)
   - Example 2 (`behandelingen/example2.html`)
4. **Tarieven** (`tarieven.html`)
5. **Afspraak maken** (`afspraak-maken.html`) - External booking system
6. **Merken** (`merken.html`)
7. **Contact** (`contact.html`)

### File Structure
```
/
├── index.html
├── over-ons.html
├── tarieven.html
├── afspraak-maken.html
├── merken.html
├── contact.html
├── behandelingen/
│   ├── index.html
│   ├── example1.html
│   └── example2.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo.png
│       ├── hero-bg.jpg
│       └── treatments/
├── _config.yml (GitHub Pages)
└── README.md
```

## Technical Requirements

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid/Flexbox
- **Vanilla JavaScript** - Minimal interactivity
- **GitHub Pages** - Hosting platform

### External Dependencies (Minimal)
1. **Contact Form Widget** - External service for secure form handling
2. **Booking System** - External booking platform integration
3. **Cookie Banner** - Simple, self-contained solution

### Performance Considerations
- Optimize images (WebP format with fallbacks)
- Minify CSS and JavaScript
- Use system fonts to reduce loading time
- Implement lazy loading for images

## Page Specifications

### Home Page (`index.html`)
- **Hero Section:** Welcome message with call-to-action
- **Services Overview:** Brief introduction to main treatments
- **About Preview:** Short introduction to the salon
- **Testimonials:** Customer reviews
- **Contact Information:** Address, phone, hours
- **Social Media Links**

### Over de Beauty Schuur (`over-ons.html`)
- **Salon History:** Story and mission
- **Team Section:** Staff profiles and photos
- **Facility Photos:** Interior and treatment rooms
- **Values & Philosophy:** What makes the salon unique

### Behandelingen (`behandelingen/`)
- **Main Page:** Overview of all treatments
- **Individual Treatment Pages:**
  - Detailed descriptions
  - Before/after photos
  - Duration and pricing
  - Preparation instructions

### Tarieven (`tarieven.html`)
- **Treatment Pricing Table:** Clear, organized pricing
- **Package Deals:** Special offers and bundles
- **Payment Methods:** Accepted payment options
- **Cancellation Policy:** Terms and conditions

### Afspraak maken (`afspraak-maken.html`)
- **External Booking Widget:** Embedded booking system
- **Contact Information:** Alternative booking methods
- **Preparation Guidelines:** What clients need to know
- **FAQ Section:** Common booking questions

### Merken (`merken.html`)
- **Brand Showcase:** Products and brands used
- **Product Categories:** Skincare, makeup, tools
- **Online Shop Link:** If applicable
- **Brand Partnerships:** Professional relationships

### Contact (`contact.html`)
- **Contact Form:** Secure external widget
- **Location Information:** Address and map
- **Business Hours:** Operating schedule
- **Contact Methods:** Phone, email, social media
- **Directions:** How to find the salon

## Design Inspiration
Based on analysis of:
- **Face Factory (facefactory.nl):** Clean, professional layout with clear navigation
- **Numa Beauty (numabeauty.nl):** Modern design with good use of whitespace

### Key Design Elements
- **Clean Navigation:** Simple, intuitive menu structure
- **High-Quality Images:** Professional photography of treatments and salon
- **Consistent Branding:** Cohesive color scheme and typography
- **Clear Call-to-Actions:** Prominent booking and contact buttons
- **Trust Indicators:** Certifications, reviews, before/after photos

## Content Strategy

### Tone of Voice
- **Professional yet approachable**
- **Informative and helpful**
- **Confident in expertise**
- **Warm and welcoming**

### Content Requirements
- **Treatment Descriptions:** Detailed, benefit-focused
- **About Content:** Personal story and professional credentials
- **FAQ Sections:** Address common concerns
- **Legal Pages:** Privacy policy, terms of service

## SEO Considerations
- **Meta Tags:** Title, description, keywords for each page
- **Structured Data:** Local business markup
- **Image Alt Tags:** Descriptive alt text for accessibility
- **Internal Linking:** Logical page connections
- **Mobile Optimization:** Responsive design

## Accessibility Features
- **Semantic HTML:** Proper heading structure
- **Alt Text:** All images have descriptive alt text
- **Keyboard Navigation:** Full keyboard accessibility
- **Color Contrast:** WCAG compliant color combinations
- **Screen Reader Friendly:** Proper ARIA labels

## Security & Privacy
- **Cookie Banner:** GDPR compliant cookie notice
- **Contact Form Security:** External widget with proper validation
- **Privacy Policy:** Clear data handling information
- **HTTPS:** Secure connection (GitHub Pages default)

## Development Phases

### Phase 1: Foundation
- [ ] Set up GitHub repository
- [ ] Create basic HTML structure
- [ ] Implement CSS framework
- [ ] Set up GitHub Pages hosting

### Phase 2: Content & Design
- [ ] Create all page templates
- [ ] Implement responsive design
- [ ] Add content and images
- [ ] Test across devices

### Phase 3: Functionality
- [ ] Integrate contact form widget
- [ ] Set up booking system
- [ ] Implement cookie banner
- [ ] Add basic JavaScript interactions

### Phase 4: Optimization
- [ ] SEO optimization
- [ ] Performance testing
- [ ] Accessibility audit
- [ ] Final content review

### Phase 5: Launch
- [ ] Domain setup
- [ ] Final testing
- [ ] Go live
- [ ] Monitor and maintain

## Maintenance Plan
- **Content Updates:** Simple HTML editing for text changes
- **Image Updates:** Replace images in assets folder
- **Regular Backups:** GitHub repository serves as backup
- **Performance Monitoring:** Regular speed and SEO checks

## Success Metrics
- **Page Load Speed:** Under 3 seconds
- **Mobile Responsiveness:** 100% mobile-friendly
- **Contact Form Conversions:** Track form submissions
- **Booking Conversions:** Monitor booking system usage
- **SEO Performance:** Track search engine rankings

## Budget Considerations
- **Domain Registration:** Annual cost
- **External Services:** Contact form and booking system fees
- **Photography:** Professional images for treatments
- **Content Creation:** Copywriting and image optimization

## Timeline
- **Planning & Design:** 1-2 weeks
- **Development:** 2-3 weeks
- **Content Creation:** 1-2 weeks
- **Testing & Launch:** 1 week
- **Total:** 5-8 weeks

---

*This planning document serves as the foundation for the debeautyschuur.nl website project. It should be reviewed and updated as the project progresses.*
