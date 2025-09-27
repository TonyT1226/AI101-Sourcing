// Component loader utility
class ComponentLoader {
    // Embedded components as fallback
    static components = {
        header: `<header class="header">
    <img src="../photo/header.png" alt="Rutgers Procurement Services" class="header-logo">
    <div class="header-text">
        <div class="subtitle">Strategic Sourcing</div>
        <div class="title">AI Training 101</div>
    </div>
</header>`,
        navbar: `<nav class="navbar">
    <ul class="navbar-list">
        <li><a href="home.html" class="navbar-link" data-page="home">Home</a></li>
        <li class="navbar-dropdown">
            <a href="training.html" class="navbar-link navbar-dropdown-toggle" data-page="training">
                Training
                <svg class="navbar-dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            <ul class="navbar-dropdown-menu">
                <li><a href="training-basics.html" class="navbar-dropdown-link">📚 Training Basics</a></li>
                <li><a href="training-applications.html" class="navbar-dropdown-link">📊 Training Applications</a></li>
            </ul>
        </li>
        <li><a href="resources.html" class="navbar-link" data-page="resources">Resources</a></li>
    </ul>
</nav>`,
        footer: `<footer class="footer">
    <p>by Qiyuan (Tony) Tang</p>
    <p class="text-xs">Version 1.2 -- July 22, 2025</p>
</footer>`
    };

    static async loadComponent(elementId, componentPath, fallbackKey) {
        try {
            console.log(`Loading component: ${componentPath}`);
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
                console.log(`Successfully loaded component: ${componentPath}`);
            } else {
                console.error(`Element with id '${elementId}' not found`);
            }
        } catch (error) {
            console.error(`Error loading component from ${componentPath}:`, error);
            // Use embedded fallback
            const element = document.getElementById(elementId);
            if (element && this.components[fallbackKey]) {
                element.innerHTML = this.components[fallbackKey];
                console.log(`Used fallback for: ${fallbackKey}`);
            } else {
                console.error(`No fallback available for: ${fallbackKey}`);
            }
        }
    }

    static async loadAllComponents() {
        console.log('Starting to load all components...');
        
        // Load header
        await this.loadComponent('header-placeholder', '../components/header.html', 'header');
        
        // Load navbar
        await this.loadComponent('navbar-placeholder', '../components/navbar.html', 'navbar');
        
        // Load footer
        await this.loadComponent('footer-placeholder', '../components/footer.html', 'footer');
        
        // Set active state for current page
        this.setActiveNavItem();
        
        console.log('Finished loading all components');
    }

    static setActiveNavItem() {
        // Get current page name from URL
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        console.log(`Current page detected: ${currentPage}`);
        
        // Wait a bit for navbar to be loaded, then set active state
        setTimeout(() => {
            const navLinks = document.querySelectorAll('.navbar-link');
            console.log(`Found ${navLinks.length} navbar links`);
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const pageAttr = link.getAttribute('data-page');
                console.log(`Checking link: ${pageAttr} against current: ${currentPage}`);
                if (pageAttr === currentPage) {
                    link.classList.add('active');
                    console.log(`Set active: ${pageAttr}`);
                }
            });
        }, 100);
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting component loader...');
    ComponentLoader.loadAllComponents();
}); 