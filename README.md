# AI Training for Strategic Sourcing

An interactive training platform designed to help Rutgers University procurement teams understand and leverage AI tools in their daily work.

## 🎯 Overview

This web-based training platform provides comprehensive education on AI fundamentals, prompt engineering, and practical applications for strategic sourcing professionals. The content is structured to be accessible for beginners while providing valuable insights for experienced practitioners.

## 🆕 What's New in Version 1.2

This major update (July 22, 2025) introduces significant enhancements to the learning experience:

### 🎯 **Interactive Practice Section**
- **NEW Section 3**: Hands-on CRAFT framework practice with real-time prompt building
- User input forms with validation and instant feedback
- One-click copy-to-clipboard for generated prompts

### 📋 **Professional Prompt Templates**
- 5 ready-to-use templates with bold placeholders for easy customization:
  - Supplier Research Template
  - Market Analysis Template
  - RFP Question Generator Template
  - Negotiation Strategy Template
  - Risk Assessment Template

### 📝 **Enhanced User Experience**
- Complete feedback collection system for continuous improvement
- Streamlined content organization (6 sections → 5 focused sections)
- Advanced styling with improved responsive design
- Better navigation with descriptive section names

### 🔧 **Technical Improvements**
- Enhanced JavaScript functionality with form validation
- Advanced clipboard operations with fallback support
- Improved component system with synchronized fallbacks
- Cross-browser compatibility enhancements

## ✨ Features

- **Interactive Learning Modules**: 5 streamlined sections with improved learning progression
- **CRAFT Framework Workshop**: Interactive prompt engineering training with hands-on practice exercises
- **Interactive Practice Section**: Real-time prompt builder with copy-to-clipboard functionality
- **Professional Prompt Templates**: 5 copy-to-clipboard templates for immediate workplace use
- **Complete Feedback System**: User feedback collection for continuous improvement
- **Enhanced Resource Library**: Curated AI tools, templates, and best practices
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Rutgers Branding**: Official university colors and modern UI styling

## 📚 Home Content Sections

### 1. AI Basics
- Understanding what AI is and isn't
- Generative vs. traditional AI
- Real-world AI applications in daily life
- Why AI matters for strategic sourcing

### 2. The Art of Prompting
- The CRAFT framework (Context, Role, Action, Format, Tone)
- Step-by-step prompt construction methodology
- Best practices for effective AI communication

### 3. Practice Exercise
- **NEW**: Interactive hands-on CRAFT framework practice
- Real-time prompt builder with user inputs
- One-click copy-to-clipboard functionality
- Form validation and instant feedback

### 4. Everyday Productivity
- Document summarization and analysis
- Email and agenda drafting
- Information reformatting and restructuring
- Meeting preparation assistance

### 5. Level Up Sourcing
- Market intelligence gathering and analysis
- Supplier identification and comprehensive vetting
- RFP development and question generation
- Negotiation strategy development
- Risk assessment and mitigation
- Complex document analysis and review

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
├── style.css                  # Main stylesheet
├── js/
│   └── components.js          # Component loader and navigation
├── components/                # Reusable UI components
│   ├── header.html
│   ├── navbar.html
│   └── footer.html
├── pages/                     # Main content pages
│   ├── home.html             # Primary training content
│   ├── training.html         # Detailed workshop
│   └── resources.html        # Tools and resources
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

- [x] ~~Interactive practice exercises~~ ✅ **Completed in v1.2**
- [x] ~~Copy-to-clipboard prompt templates~~ ✅ **Completed in v1.2**
- [x] ~~User feedback collection system~~ ✅ **Completed in v1.2**
- [ ] Backend integration for feedback form processing
- [ ] Search functionality across content sections
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
**Last Updated**: July 22, 2025  
**Version**: 1.2  
**Website**: https://tonyt1226.github.io/AI101-Sourcing/pages/home.html