# AI Training for Strategic Sourcing

An interactive training platform designed to help Rutgers University procurement teams understand and leverage AI tools in their daily work.

## 🎯 Overview

This web-based training platform provides comprehensive education on AI fundamentals, prompt engineering, and practical applications for strategic sourcing professionals. The content is structured to be accessible for beginners while providing valuable insights for experienced practitioners.

## 🆕 What's New in Version 1.4

This major update (September 29, 2025) introduces a comprehensive Template Warehouse system that revolutionizes how procurement professionals access and use AI prompts:

### 🏪 **Template Warehouse System**
- **Complete Template Management** - Comprehensive system for organizing, searching, and managing AI prompt templates
- **Editable Preview Modal** - Users can edit template content before copying to clipboard
- **Professional Modal Design** - Full-screen modal with overlay and intuitive close functionality
- **Category Organization** - Templates organized into logical categories (Supplier Research, Spend Analysis, RFP Management, etc.)
- **Advanced Search** - Enhanced search functionality with category filtering and sorting options

### 📊 **New Spend Analysis Category**
- **Comprehensive Spend Analysis Template** - Professional-grade template for analyzing procurement spend data
- **9-Step Analysis Process** - Structured approach covering data cleaning, metrics computation, anomaly detection, and recommendations
- **Visualization Guidance** - Includes chart recommendations and code snippets for data visualization
- **Risk Assessment** - Built-in risk identification and mitigation strategies

### 🔄 **Template System Overhaul**
- **Category Consolidation** - Moved Pricing Analysis Framework to Supplier Research category
- **Removed Market Analysis** - Streamlined categories by removing redundant Market Analysis category
- **Enhanced Templates** - Updated all templates with Rutgers University context and professional formatting
- **Improved Descriptions** - More descriptive and informative template descriptions

### 🎨 **Enhanced User Experience**
- **Template Cards** - Visual template representation with category icons and counts
- **Filter System** - Easy category-based filtering in template library
- **Sort Options** - Multiple sorting options (name, category, popularity, recent)
- **Copy Functionality** - Separate copy functions for original and edited templates
- **Visual Feedback** - Clear success notifications for all operations

### 🔧 **Template Updates**
- **RFP Requirements Generator** - Enhanced with comprehensive role definition and professional guidelines
- **Market Intelligence Gathering** - Added Rutgers University context and improved analysis structure
- **Contract Review** - Comprehensive contract review with structured risk assessment
- **Negotiation Strategy Framework** - Added university-specific negotiation context
- **Bug Fixes** - Corrected typos and improved template consistency

## ✨ Features

### 🏪 **Template Warehouse**
- **Template Management System** - Complete template organization and management
- **Editable Preview** - Modify template content before copying
- **Category Organization** - Logical categorization of templates by function
- **Advanced Search** - Search templates by name, description, and tags
- **User Templates** - Create, save, and manage custom templates
- **Export/Import** - Template export and import functionality

### 📚 **Training System**
- **Search-First Design**: Massive search hub as primary user entry point
- **Modular Training Structure**: Comprehensive learning modules with specialized subpages
- **Professional Navigation**: Dropdown menu with mobile-responsive design
- **Interactive Learning Modules**: Streamlined sections with logical learning progression
- **CRAFT Framework Workshop**: Interactive prompt engineering training with hands-on practice exercises

### 🎯 **Template Categories**
- **Supplier Research** (13 templates) - Supplier capability assessment, market intelligence, pricing analysis
- **Spend Analysis** (1 template) - Comprehensive spend analysis and cost optimization
- **RFP Management** (15 templates) - RFP requirements generation and evaluation
- **Negotiation** (10 templates) - Strategic negotiation planning and execution
- **Risk Assessment** (7 templates) - Supplier risk evaluation and mitigation
- **Contract Management** (9 templates) - Contract review and analysis

### 🔗 **University Integration**
- **Rutgers IT AI Resources** - Official university AI guidance links
- **Policy Compliance** - Links to Academic Integrity, Information Classification, and Acceptable Use policies
- **AI Tools Access** - Microsoft Copilot, Google Gemini, NotebookLM, ChatGPT Edu
- **University Context** - All templates tailored for Rutgers University procurement needs

## 📚 Content Structure

### 🏠 **Home Page**
1. **Welcome Message** - Introduction to AI training
2. **AI Basics** - "What is AI & Why Should We Care?"
3. **AI Articles** - Latest procurement AI news and articles

### 🏪 **Template Warehouse**
1. **Template Categories** - Visual category cards with template counts
2. **Template Library** - Searchable and filterable template collection
3. **Create Template** - Custom template creation form
4. **My Templates** - User-created templates management

### 📚 **Training Pages**
- **Training Basics** - Foundation, CRAFT Framework, Interactive Workshop
- **Training Applications** - Productivity, Sourcing, Advanced Techniques

### 🛠️ **Resources Page**
1. **AI Tools & Platforms** - External AI tools and tutorials
2. **Best Practices** - Data security and verification guidelines
3. **Useful Links** - External resources including Rutgers IT AI Resources

## 🛠️ Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript with enhanced interactivity
- **Template System**: Comprehensive template management with local storage
- **Modal System**: Professional modal implementation with overlay and accessibility
- **Component System**: Modular architecture with reusable components
- **Interactive Features**: Real-time form validation, clipboard API integration, dynamic content generation
- **Dependencies**: Chart.js (loaded via CDN)
- **Responsive**: Mobile-first design approach with advanced CSS Grid and Flexbox
- **Browser Compatibility**: Modern browsers with fallback support for older versions

## 🚀 Getting Started

### Local Development
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Navigate through the training modules and template warehouse

### GitHub Pages Deployment
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" → "main" branch → "/ (root)"
4. Access your site at `https://yourusername.github.io/repository-name`

## 📁 Project Structure

```
├── index.html                 # Entry point (redirects to home)
├── style.css                  # Main stylesheet with template warehouse styles
├── js/
│   ├── components.js          # Component loader and navigation
│   ├── template-warehouse.js   # Template warehouse management system
│   └── search-engine.js       # Search functionality
├── components/                # Reusable UI components
│   ├── header.html
│   ├── navbar.html
│   └── footer.html
├── pages/                     # Main content pages
│   ├── home.html             # Home page with AI basics and articles
│   ├── template-warehouse.html # Template warehouse system
│   ├── training.html         # Main training page
│   ├── training-basics.html  # Foundation and CRAFT Framework
│   ├── training-applications.html # Productivity and Sourcing
│   └── resources.html        # Tools and resources
├── project docs/              # Documentation
│   ├── UPDATE_NOTES_0929.md  # Version 1.4 update notes
│   ├── VERSION_1.4_OBJECTIVES.md # Version 1.4 objectives
│   └── [other documentation]
└── photo/                     # Images and assets
    ├── header.png
    ├── favicon.ico
    └── [other images]
```

## 🎨 Design System

- **Colors**: Rutgers University official palette
- **Typography**: Inter font family
- **Layout**: CSS Grid and Flexbox
- **Components**: Modular, reusable design system
- **Modals**: Professional modal system with overlay and accessibility

## 🔒 Security & Best Practices

The training includes comprehensive guidelines for:
- Data confidentiality and privacy
- AI output verification
- Responsible AI usage
- University policy compliance
- Template security and validation

## 📈 Future Enhancements

### ✅ **Completed in v1.4**
- [x] ~~Template Warehouse System~~ ✅ **Completed**
- [x] ~~Editable Preview Modal~~ ✅ **Completed**
- [x] ~~Spend Analysis Category~~ ✅ **Completed**
- [x] ~~Template Category Reorganization~~ ✅ **Completed**
- [x] ~~Enhanced Template Content~~ ✅ **Completed**

### 🔄 **Planned for v1.5**
- [ ] **Template Usage Analytics** - Track template usage and popularity
- [ ] **Advanced Search Features** - Tag-based filtering and advanced search options
- [ ] **Template Sharing** - User template sharing functionality
- [ ] **Bulk Operations** - Bulk template operations (copy, export, delete)

### 🚀 **Future Versions**
- [ ] Backend integration for feedback form processing
- [ ] Progress tracking between sessions with local storage
- [ ] Template versioning and change tracking
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
**Last Updated**: September 29, 2025  
**Version**: 1.4  
**Website**: https://tonyt1226.github.io/AI101-Sourcing/pages/home.html