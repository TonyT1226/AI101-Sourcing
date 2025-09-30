// Search Engine for AI Training Platform
class SearchEngine {
    constructor() {
        this.searchIndex = [];
        this.searchHistory = this.loadSearchHistory();
        this.isInitialized = false;
        this.init();
    }

    // Initialize search engine
    async init() {
        console.log('Initializing search engine...');
        try {
            await this.buildSearchIndex();
            this.setupEventListeners();
            this.isInitialized = true;
            console.log('Search engine initialized successfully');
        } catch (error) {
            console.error('Failed to initialize search engine:', error);
            // Still setup event listeners even if indexing fails
            this.setupEventListeners();
        }
    }

    // Build search index from all content
    async buildSearchIndex() {
        this.searchIndex = [];
        
        // Define content sources
        const contentSources = [
            { page: 'home', sections: ['section1'] },
            { page: 'training', sections: ['training-overview', 'build-prompt', 'prompt-templates', 'ai-guidelines'] },
            { page: 'training-basics', sections: ['foundation', 'craft-framework', 'interactive-workshop'] },
            { page: 'training-applications', sections: ['productivity', 'sourcing', 'advanced-techniques'] },
            { page: 'resources', sections: ['ai-tools', 'best-practices', 'useful-links'] },
            { page: 'template-warehouse', sections: ['template-warehouse', 'template-categories', 'template-library', 'create-template', 'my-templates'] }
        ];

        console.log('Starting to build search index...');
        
        // Index content from each page
        for (const source of contentSources) {
            try {
                console.log(`Indexing page: ${source.page}`);
                await this.indexPageContent(source.page, source.sections);
            } catch (error) {
                console.warn(`Could not index ${source.page}:`, error);
            }
        }

        console.log(`Search index built with ${this.searchIndex.length} entries`);
        
        // If no entries were indexed, log a warning
        if (this.searchIndex.length === 0) {
            console.warn('No content was indexed! Search will use fallback mode.');
        }
    }

    // Index content from a specific page
    async indexPageContent(pageName, sections) {
        try {
            // Determine correct path based on current page location
            const currentPath = window.location.pathname;
            let fetchPath;
            
            if (currentPath.includes('/pages/')) {
                fetchPath = `${pageName}.html`;
            } else {
                fetchPath = `pages/${pageName}.html`;
            }
            
            console.log(`Fetching page content from: ${fetchPath}`);
            const response = await fetch(fetchPath);
            if (!response.ok) {
                console.warn(`Could not fetch ${fetchPath}: ${response.status}`);
                return;
            }
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Index each section
            sections.forEach(sectionId => {
                const section = doc.getElementById(sectionId);
                if (section) {
                    this.indexSection(section, pageName, sectionId);
                }
            });

            // Index all text content for comprehensive search
            const allText = doc.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span');
            allText.forEach(element => {
                if (element.textContent.trim()) {
                    this.addToIndex({
                        content: element.textContent.trim(),
                        type: element.tagName.toLowerCase(),
                        page: pageName,
                        section: 'general',
                        element: element
                    });
                }
            });

        } catch (error) {
            console.warn(`Error indexing ${pageName}:`, error);
        }
    }

    // Index a specific section
    indexSection(section, pageName, sectionId) {
        const title = section.querySelector('h1, h2, h3, h4, h5, h6');
        const content = section.textContent.trim();
        
        this.addToIndex({
            content: content,
            title: title ? title.textContent.trim() : '',
            type: 'section',
            page: pageName,
            section: sectionId,
            element: section
        });
    }

    // Add entry to search index
    addToIndex(entry) {
        if (entry.content && entry.content.length > 10) {
            this.searchIndex.push({
                ...entry,
                id: `${entry.page}-${entry.section}-${this.searchIndex.length}`,
                keywords: this.extractKeywords(entry.content),
                relevanceScore: 0
            });
        }
    }

    // Extract keywords from content
    extractKeywords(content) {
        const words = content.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2)
            .filter(word => !this.isStopWord(word));
        
        return [...new Set(words)];
    }

    // Check if word is a stop word
    isStopWord(word) {
        const stopWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'a', 'an'];
        return stopWords.includes(word);
    }

    // Setup event listeners
    setupEventListeners() {
        const searchInput = document.getElementById('main-search-input');
        const searchBtn = document.getElementById('main-search-btn');
        const clearBtn = document.getElementById('clear-main-search');
        const suggestionsContainer = document.getElementById('main-search-suggestions');
        const resultsContainer = document.getElementById('main-search-results');

        if (!searchInput) {
            console.error('Search input element not found');
            return;
        }

        console.log('Setting up search engine event listeners...');

        // Search input events
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            console.log('Search input event triggered with query:', query);
            if (query.length > 0) {
                this.showSuggestions(query);
                this.performSearch(query);
            } else {
                this.hideSuggestions();
                this.hideResults();
            }
        });

        // Search button click
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            console.log('Search button clicked with query:', query);
            if (query) {
                this.performSearch(query);
                this.addToSearchHistory(query);
            }
        });

        // Clear button
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            this.hideSuggestions();
            this.hideResults();
            searchInput.focus();
        });

        // Suggestion clicks
        suggestionsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-item')) {
                const searchTerm = e.target.getAttribute('data-search');
                searchInput.value = searchTerm;
                this.performSearch(searchTerm);
                this.addToSearchHistory(searchTerm);
            }
        });

        // Category filter clicks
        document.querySelectorAll('.category-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.getAttribute('data-category');
                this.performCategorySearch(category);
            });
        });

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    this.performSearch(query);
                    this.addToSearchHistory(query);
                }
            } else if (e.key === 'Escape') {
                this.hideSuggestions();
                this.hideResults();
            }
        });
    }

    // Show search suggestions
    showSuggestions(query) {
        const suggestionsContainer = document.getElementById('main-search-suggestions');
        if (!suggestionsContainer) return;

        const suggestions = this.getSuggestions(query);
        if (suggestions.length > 0) {
            const suggestionsList = suggestionsContainer.querySelector('.suggestions-list');
            suggestionsList.innerHTML = suggestions.map(suggestion => 
                `<button class="suggestion-item" data-search="${suggestion}">🔍 ${suggestion}</button>`
            ).join('');
            suggestionsContainer.classList.remove('hidden');
        } else {
            this.hideSuggestions();
        }
    }

    // Get search suggestions based on query
    getSuggestions(query) {
        const popularSearches = [
            'supplier research', 'market analysis', 'RFP questions', 'negotiation strategy',
            'risk assessment', 'CRAFT framework', 'prompt templates', 'AI guidelines',
            'productivity tips', 'sourcing strategies', 'best practices', 'data security'
        ];

        return popularSearches.filter(search => 
            search.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6);
    }

    // Hide suggestions
    hideSuggestions() {
        const suggestionsContainer = document.getElementById('main-search-suggestions');
        if (suggestionsContainer) {
            suggestionsContainer.classList.add('hidden');
        }
    }

    // Perform search
    performSearch(query) {
        console.log('performSearch called with query:', query);
        console.log('Search engine initialized:', this.isInitialized);
        console.log('Search index length:', this.searchIndex.length);
        
        if (!this.isInitialized) {
            console.warn('Search engine not initialized yet, using fallback search');
            this.performFallbackSearch(query);
            return;
        }

        const results = this.search(query);
        console.log('Search results:', results);
        this.displayResults(results, query);
        this.hideSuggestions();
    }

    // Fallback search when full indexing is not available
    performFallbackSearch(query) {
        console.log('Performing fallback search for:', query);
        
        // Create comprehensive search results based on common content
        const fallbackResults = [
            {
                content: 'AI Training for Strategic Sourcing - Welcome to your interactive guide to Artificial Intelligence. This series of short modules is designed to help the Rutgers sourcing team understand and leverage AI as a powerful tool in your daily work.',
                title: 'AI Training Overview',
                page: 'home',
                section: 'home',
                relevanceScore: 100
            },
            {
                content: 'AI is a Tool, Not Magic - Think of AI as a sophisticated system trained to recognize patterns, make predictions, and generate new content based on the data it has learned. It\'s not about thinking robots; it\'s about practical problem-solving.',
                title: 'What is AI?',
                page: 'home',
                section: 'section1',
                relevanceScore: 90
            },
            {
                content: 'You Already Use AI - From Netflix show recommendations and Google Maps traffic predictions to email spam filters, AI is already integrated into the tools we use daily, making them smarter and more efficient.',
                title: 'You Already Use AI',
                page: 'home',
                section: 'section1',
                relevanceScore: 85
            },
            {
                content: 'Generative vs. Traditional AI - Traditional AI analyzes existing data (e.g., identifies spam). Generative AI, the focus of this training, *creates* new content, like drafting an email or brainstorming ideas.',
                title: 'Generative vs. Traditional AI',
                page: 'home',
                section: 'section1',
                relevanceScore: 80
            },
            {
                content: 'CRAFT Framework - Context, Role, Action, Format, Tone. Use this framework to create effective prompts for AI tools.',
                title: 'CRAFT Framework',
                page: 'training-basics',
                section: 'craft-framework',
                relevanceScore: 75
            },
            {
                content: 'Supplier Research - Use AI to research potential suppliers, analyze market trends, and gather competitive intelligence.',
                title: 'Supplier Research',
                page: 'training-applications',
                section: 'sourcing',
                relevanceScore: 70
            },
            {
                content: 'Market Analysis - Leverage AI tools to analyze market conditions, pricing trends, and supplier capabilities.',
                title: 'Market Analysis',
                page: 'training-applications',
                section: 'sourcing',
                relevanceScore: 65
            },
            {
                content: 'RFP Questions - Generate comprehensive RFP questions using AI to ensure thorough supplier evaluation.',
                title: 'RFP Questions',
                page: 'training-applications',
                section: 'sourcing',
                relevanceScore: 60
            },
            {
                content: 'Negotiation Strategy - Develop effective negotiation strategies using AI-powered analysis and recommendations.',
                title: 'Negotiation Strategy',
                page: 'training-applications',
                section: 'sourcing',
                relevanceScore: 55
            },
            {
                content: 'Risk Assessment - Use AI to identify and assess potential risks in supplier relationships and contracts.',
                title: 'Risk Assessment',
                page: 'training-applications',
                section: 'sourcing',
                relevanceScore: 50
            }
        ];

        // More flexible filtering - check for partial matches and synonyms
        const queryLower = query.toLowerCase();
        const filteredResults = fallbackResults.filter(result => {
            const contentLower = result.content.toLowerCase();
            const titleLower = result.title.toLowerCase();
            
            // Direct matches
            if (contentLower.includes(queryLower) || titleLower.includes(queryLower)) {
                return true;
            }
            
            // Handle common synonyms and variations
            const synonyms = {
                'ai': ['artificial intelligence', 'machine learning', 'ml', 'automation'],
                'supplier': ['vendor', 'provider', 'contractor'],
                'research': ['analysis', 'investigation', 'study'],
                'market': ['industry', 'sector', 'field'],
                'negotiation': ['bargaining', 'deal', 'contract'],
                'risk': ['threat', 'danger', 'concern'],
                'craft': ['framework', 'method', 'approach']
            };
            
            // Check synonyms
            for (const [key, values] of Object.entries(synonyms)) {
                if (queryLower.includes(key) || values.some(synonym => queryLower.includes(synonym))) {
                    if (contentLower.includes(key) || titleLower.includes(key) || 
                        values.some(synonym => contentLower.includes(synonym) || titleLower.includes(synonym))) {
                        return true;
                    }
                }
            }
            
            return false;
        });

        console.log(`Fallback search found ${filteredResults.length} results for query: "${query}"`);
        this.displayResults(filteredResults, query);
        this.hideSuggestions();
    }

    // Perform category search
    performCategorySearch(category) {
        const categoryQueries = {
            'basics': 'AI basics foundation introduction',
            'prompting': 'prompt engineering CRAFT framework',
            'templates': 'prompt templates examples',
            'tools': 'AI tools platforms resources'
        };

        const query = categoryQueries[category] || category;
        this.performSearch(query);
    }

    // Search function
    search(query) {
        const queryWords = this.extractKeywords(query);
        const results = [];

        // If search index is empty, use fallback
        if (this.searchIndex.length === 0) {
            console.log('Search index is empty, using fallback search');
            this.performFallbackSearch(query);
            return [];
        }

        this.searchIndex.forEach(entry => {
            let score = 0;
            
            // Exact match bonus
            if (entry.content.toLowerCase().includes(query.toLowerCase())) {
                score += 100;
            }
            
            // Title match bonus
            if (entry.title && entry.title.toLowerCase().includes(query.toLowerCase())) {
                score += 50;
            }
            
            // Keyword matching
            queryWords.forEach(queryWord => {
                if (entry.keywords.includes(queryWord)) {
                    score += 10;
                }
                
                // Partial word matching
                entry.keywords.forEach(keyword => {
                    if (keyword.includes(queryWord) || queryWord.includes(keyword)) {
                        score += 5;
                    }
                });
            });

            if (score > 0) {
                results.push({
                    ...entry,
                    relevanceScore: score,
                    matchedQuery: query
                });
            }
        });

        // If no results found, try fallback
        if (results.length === 0) {
            console.log('No results in main search, trying fallback');
            this.performFallbackSearch(query);
            return [];
        }

        // Sort by relevance score
        return results.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 20);
    }

    // Display search results
    displayResults(results, query) {
        console.log('displayResults called with:', results.length, 'results for query:', query);
        
        const resultsContainer = document.getElementById('main-search-results');
        const resultsList = document.getElementById('main-results-list');
        const resultsCount = resultsContainer ? resultsContainer.querySelector('.results-count') : null;

        console.log('Results container found:', !!resultsContainer);
        console.log('Results list found:', !!resultsList);
        console.log('Results count element found:', !!resultsCount);

        if (!resultsContainer || !resultsList) {
            console.error('Search results container or list not found');
            console.error('Container:', resultsContainer);
            console.error('List:', resultsList);
            return;
        }

        console.log(`Displaying ${results.length} search results for query: "${query}"`);

        if (results.length === 0) {
            resultsList.innerHTML = `
                <div class="no-results">
                    <p class="text-gray-500 text-center py-8">No results found for "${query}"</p>
                    <p class="text-sm text-gray-400 text-center">Try different keywords or check the spelling</p>
                </div>
            `;
        } else {
            resultsList.innerHTML = results.map(result => this.createResultHTML(result, query)).join('');
        }

        if (resultsCount) {
            resultsCount.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found`;
        }
        resultsContainer.classList.remove('hidden');
    }

    // Create HTML for search result
    createResultHTML(result, query) {
        const content = this.highlightSearchTerms(result.content, query);
        const pageTitle = this.getPageTitle(result.page);
        const sectionTitle = result.title || result.section;
        
        return `
            <div class="search-result-item" data-page="${result.page}" data-section="${result.section}">
                <div class="result-header">
                    <h4 class="result-title">${sectionTitle}</h4>
                    <span class="result-page">${pageTitle}</span>
                </div>
                <div class="result-content">
                    ${content.substring(0, 200)}${content.length > 200 ? '...' : ''}
                </div>
                <div class="result-actions">
                    <button class="result-action-btn" onclick="searchEngine.navigateToResult('${result.page}', '${result.section}')">
                        Go to Section →
                    </button>
                </div>
            </div>
        `;
    }

    // Highlight search terms in content
    highlightSearchTerms(content, query) {
        const queryWords = query.toLowerCase().split(/\s+/);
        let highlightedContent = content;
        
        queryWords.forEach(word => {
            if (word.length > 2) {
                const regex = new RegExp(`(${word})`, 'gi');
                highlightedContent = highlightedContent.replace(regex, '<mark class="search-highlight">$1</mark>');
            }
        });
        
        return highlightedContent;
    }

    // Get page title
    getPageTitle(page) {
        const pageTitles = {
            'home': 'Home',
            'training': 'Training',
            'training-basics': 'Training Basics',
            'training-applications': 'Training Applications',
            'resources': 'Resources',
            'template-warehouse': 'Template Warehouse'
        };
        return pageTitles[page] || page;
    }

    // Navigate to search result
    navigateToResult(page, section) {
        if (page === 'home') {
            window.location.href = `../pages/home.html#${section}`;
        } else {
            window.location.href = `../pages/${page}.html#${section}`;
        }
    }

    // Hide results
    hideResults() {
        const resultsContainer = document.getElementById('main-search-results');
        if (resultsContainer) {
            resultsContainer.classList.add('hidden');
        }
    }

    // Search history management
    addToSearchHistory(query) {
        if (!this.searchHistory.includes(query)) {
            this.searchHistory.unshift(query);
            this.searchHistory = this.searchHistory.slice(0, 10); // Keep last 10 searches
            this.saveSearchHistory();
            this.updateRecentSearches();
        }
    }

    // Update recent searches display
    updateRecentSearches() {
        const recentSearchesContainer = document.getElementById('recent-searches');
        const recentSearchesList = document.getElementById('recent-searches-list');

        if (!recentSearchesContainer || !recentSearchesList) return;

        if (this.searchHistory.length > 0) {
            recentSearchesList.innerHTML = this.searchHistory.map(search => 
                `<button class="recent-search-item" onclick="searchEngine.performSearch('${search}')">${search}</button>`
            ).join('');
            recentSearchesContainer.classList.remove('hidden');
        } else {
            recentSearchesContainer.classList.add('hidden');
        }
    }

    // Load search history from localStorage
    loadSearchHistory() {
        try {
            const history = localStorage.getItem('ai-training-search-history');
            return history ? JSON.parse(history) : [];
        } catch (error) {
            console.warn('Could not load search history:', error);
            return [];
        }
    }

    // Save search history to localStorage
    saveSearchHistory() {
        try {
            localStorage.setItem('ai-training-search-history', JSON.stringify(this.searchHistory));
        } catch (error) {
            console.warn('Could not save search history:', error);
        }
    }
}

// Initialize search engine when DOM is loaded
let searchEngine;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing search engine...');
    
    // Check if required elements exist
    const searchInput = document.getElementById('main-search-input');
    const resultsContainer = document.getElementById('main-search-results');
    const resultsList = document.getElementById('main-results-list');
    
    console.log('Required elements check:');
    console.log('- Search input:', !!searchInput);
    console.log('- Results container:', !!resultsContainer);
    console.log('- Results list:', !!resultsList);
    
    if (!searchInput || !resultsContainer || !resultsList) {
        console.error('Required search elements not found!');
        return;
    }
    
    searchEngine = new SearchEngine();
    
    // Add a test button for debugging (remove in production)
    setTimeout(() => {
        const testBtn = document.createElement('button');
        testBtn.textContent = 'Test Search';
        testBtn.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 9999; background: #dc2626; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;';
        testBtn.onclick = () => {
            console.log('Testing search engine...');
            console.log('Search engine object:', searchEngine);
            if (searchEngine) {
                console.log('Calling performSearch directly...');
                searchEngine.performSearch('AI');
            } else {
                console.error('Search engine not initialized');
            }
        };
        document.body.appendChild(testBtn);
        
        // Also add a button to test fallback directly
        const fallbackBtn = document.createElement('button');
        fallbackBtn.textContent = 'Test Fallback';
        fallbackBtn.style.cssText = 'position: fixed; top: 50px; right: 10px; z-index: 9999; background: #059669; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;';
        fallbackBtn.onclick = () => {
            console.log('Testing fallback search directly...');
            if (searchEngine) {
                searchEngine.performFallbackSearch('AI');
            } else {
                console.error('Search engine not initialized');
            }
        };
        document.body.appendChild(fallbackBtn);
    }, 2000);
});
