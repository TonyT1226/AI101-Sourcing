# AI Training for Strategic Sourcing

An interactive training platform designed to help Rutgers University procurement teams understand and leverage AI tools in their daily work.

## 🎯 Overview

This web-based training platform provides comprehensive education on AI fundamentals, prompt engineering, and practical applications for strategic sourcing professionals. The content is structured to be accessible for beginners while providing valuable insights for experienced practitioners.

## 🆕 What's New in Version 1.3

This major update (September 27, 2025) transforms the platform into a search-first experience with comprehensive content reorganization:

### 🔍 **Search-First Home Page Design**
- **Massive Search Hub** - Prominent search interface as the primary user entry point
- **Search Suggestions** - Popular search terms with quick access buttons
- **Category Filters** - Quick access to AI Basics, Prompting, Templates, and Tools
- **Search Results Container** - Ready for future search functionality implementation
- **Recent Searches** - Placeholder for search history functionality

### 📚 **Content Reorganization & Training Integration**
- **Streamlined Home Page** - Removed all content except "What is AI & Why Should We Care?" section
- **Comprehensive Training Page** - Integrated all training content into modular learning structure
- **Training Subpages** - Created specialized modules:
  - `training-basics.html` - Foundation, CRAFT Framework, Interactive Workshop
  - `training-applications.html` - Productivity, Sourcing, Advanced Techniques
- **Logical Learning Flow** - Practice → Templates → Guidelines progression

### 🧭 **Professional Navigation Enhancement**
- **Navbar Dropdown Menu** - Professional dropdown in main navigation for training modules
- **Mobile Responsive** - Dropdown works seamlessly on all screen sizes
- **Clean Navigation** - Removed redundant navigation links from subpages
- **Consistent UX** - Global navigation available on all pages

### 📋 **Training Content Optimization**
- **Prompt Templates Integration** - Moved from Resources to Training page as second section
- **Section Order Fixed** - Build Your Own Prompt → Prompt Templates → AI Guidelines
- **Clean Section Titles** - Removed "Part X:" prefixes for cleaner UI
- **Conclusion Section Removed** - Streamlined content without redundant conclusion

### 🔗 **University Integration**
- **Rutgers IT AI Resources** - Added official university AI guidance link
- **Policy Compliance** - Links to Academic Integrity, Information Classification, and Acceptable Use policies
- **AI Tools Access** - Microsoft Copilot, Google Gemini, NotebookLM, ChatGPT Edu

### 🔧 **Technical Improvements**
- **Enhanced Component Architecture** - Updated navbar with dropdown functionality and fallback support
- **Advanced CSS Styling** - Added comprehensive dropdown styles with hover animations
- **JavaScript Integration** - Updated component loading with proper fallback handling
- **Mobile Responsiveness** - Added mobile-specific dropdown adjustments

## ✨ Features

- **Search-First Design**: Massive search hub as primary user entry point with suggestions and category filters
- **Modular Training Structure**: Comprehensive learning modules with specialized subpages
- **Professional Navigation**: Dropdown menu with mobile-responsive design
- **Interactive Learning Modules**: Streamlined sections with logical learning progression
- **CRAFT Framework Workshop**: Interactive prompt engineering training with hands-on practice exercises
- **Interactive Practice Section**: Real-time prompt builder with copy-to-clipboard functionality
- **Professional Prompt Templates**: 5 copy-to-clipboard templates integrated into training flow
- **University Integration**: Official Rutgers IT AI resources and policy compliance links
- **Complete Feedback System**: User feedback collection for continuous improvement
- **Enhanced Resource Library**: Curated AI tools, templates, and best practices
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Rutgers Branding**: Official university colors and modern UI styling

## 📚 Content Structure

### 🏠 **Home Page (Search-First)**
1. **Welcome Message** - Introduction to AI training
2. **Search Hub** - Primary interface for content discovery with suggestions and filters
3. **AI Basics** - "What is AI & Why Should We Care?" (moved to end)

### 📚 **Training Page (Main)**
1. **Training Overview** - Introduction and description
2. **Build Your Own Prompt** - Interactive practice exercise with CRAFT framework
3. **Prompt Templates** - Ready-to-use templates with copy functionality
4. **AI Guidelines** - Best practices and university policies

### 📖 **Training Subpages**
- **Training Basics** (`training-basics.html`) - Foundation, CRAFT Framework, Interactive Workshop
- **Training Applications** (`training-applications.html`) - Productivity, Sourcing, Advanced Techniques

### 🛠️ **Resources Page**
1. **AI Tools & Platforms** - External AI tools and tutorials
2. **Best Practices** - Data security and verification guidelines
3. **Useful Links** - External resources including Rutgers IT AI Resources
4. **Feedback Form** - User feedback collection (development version)

## 🛠️ Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript with enhanced interactivity
- **No Build Process**: Runs directly in any modern web browser
- **Component System**: Modular architecture with reusable components and fallback support
- **Interactive Features**: Real-time form validation, clipboard API integration, dynamic content generation
- **Dependencies**: Chart.js (loaded via CDN)
- **Responsive**: Mobile-first design approach with advanced CSS Grid and Flexbox
- **Browser Compatibility**: Modern browsers with fallback support for older versions

## 🚀 Getting Started

### Local Development
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Navigate through the training modules

### GitHub Pages Deployment
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" → "main" branch → "/ (root)"
4. Access your site at `https://yourusername.github.io/repository-name`

## 📁 Project Structure

```
├── index.html                 # Entry point (redirects to home)
├── style.css                  # Main stylesheet with search hub and dropdown styles
├── js/
│   └── components.js          # Component loader and navigation with dropdown support
├── components/                # Reusable UI components
│   ├── header.html
│   ├── navbar.html            # Updated with dropdown functionality
│   └── footer.html
├── pages/                     # Main content pages
│   ├── home.html             # Search-first design with massive search hub
│   ├── training.html         # Main training page with practice, templates, guidelines
│   ├── training-basics.html  # Foundation, CRAFT Framework, Interactive Workshop
│   ├── training-applications.html # Productivity, Sourcing, Advanced Techniques
│   └── resources.html        # Tools, resources, and Rutgers IT AI links
├── project docs/              # Documentation
│   ├── UPDATE_NOTES_0927.md  # Version 1.3 update notes
│   ├── VERSION_1.3_OBJECTIVES.md # Version 1.3 objectives and roadmap
│   └── [other documentation]
└── photo/                     # Images and assets
    ├── header.png
    └── [other images]
```

## 🎨 Design System

- **Colors**: Rutgers University official palette
- **Typography**: Inter font family
- **Layout**: CSS Grid and Flexbox
- **Components**: Modular, reusable design system

## 🔒 Security & Best Practices

The training includes comprehensive guidelines for:
- Data confidentiality and privacy
- AI output verification
- Responsible AI usage
- University policy compliance

## 📈 Future Enhancements

### ✅ **Completed in v1.3**
- [x] ~~Search-first home page design~~ ✅ **Completed**
- [x] ~~Content reorganization and training integration~~ ✅ **Completed**
- [x] ~~Professional navbar dropdown navigation~~ ✅ **Completed**
- [x] ~~Modular training subpages~~ ✅ **Completed**
- [x] ~~University integration with Rutgers IT AI resources~~ ✅ **Completed**

### 🔄 **Planned for v1.4**
- [ ] **Client-side search functionality** - JavaScript search implementation across all content
- [ ] **Search result highlighting** - Content highlighting and suggestions
- [ ] **Search history** - Local storage for recent searches
- [ ] **Advanced filtering** - Content type and category filtering

### 🚀 **Future Versions**
- [ ] Backend integration for feedback form processing
- [ ] Progress tracking between sessions with local storage
- [ ] Template customization and user-saved templates
- [ ] Print-friendly content versions
- [ ] Additional practice scenarios and exercises
- [ ] Mobile app version
- [ ] User account system for personalized experience

## 🤝 Contributing

This project is designed for Rutgers University's strategic sourcing team. For questions or suggestions, please contact Qiyuan Tang(qt40@finance.rutgers.edu).

## 📄 License

This project is created for educational purposes at Rutgers University.

---

**Developed by**: Qiyuan (Tony) Tang  
**Last Updated**: September 27, 2025  
**Version**: 1.3  
**Website**: https://tonyt1226.github.io/AI101-Sourcing/pages/home.html