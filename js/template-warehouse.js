// Template Warehouse Management System
class TemplateWarehouse {
    constructor() {
        this.templates = [];
        this.userTemplates = [];
        this.currentFilter = 'all';
        this.currentSort = 'name';
        this.init();
    }

    // Initialize template warehouse
    async init() {
        console.log('Initializing Template Warehouse...');
        await this.loadBuiltInTemplates();
        this.loadUserTemplates();
        this.setupEventListeners();
        this.updateCategoryCounts();
        this.renderTemplateGrid();
        this.renderUserTemplates();
        console.log('Template Warehouse initialized successfully');
    }

    // Load built-in templates
    async loadBuiltInTemplates() {
        this.templates = [
            // Supplier Research Templates
            {
                id: 'supplier-research-1',
                name: 'Supplier Capability Assessment',
                category: 'supplier-research',
                description: 'Comprehensive template for evaluating supplier capabilities and qualifications.',
                content: `Analyze the capabilities of [SUPPLIER_NAME] for [PRODUCT_SERVICE] procurement. Focus on:

1. **Company Overview**
   - Company size, years in business, and market position
   - Financial stability and credit rating
   - Key personnel and organizational structure

2. **Technical Capabilities**
   - Production capacity and quality certifications
   - Technology and innovation capabilities
   - Compliance with industry standards ([STANDARDS])

3. **Operational Excellence**
   - Supply chain management and logistics
   - Quality control processes and metrics
   - Delivery performance and reliability

4. **Risk Assessment**
   - Geographic and geopolitical risks
   - Financial and operational risks
   - Mitigation strategies and contingency plans

Provide a detailed analysis with specific recommendations for [PROCUREMENT_DECISION].`,
                tags: ['supplier', 'research', 'capability', 'assessment'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            {
                id: 'supplier-research-2',
                name: 'Market Intelligence Gathering',
                category: 'supplier-research',
                description: 'Template for gathering comprehensive market intelligence on suppliers and competitors.',
                content: `Our sourcing team needs actionable market intelligence on [PRODUCT_CATEGORY]. The goal is to identify market dynamics, supplier landscape, and procurement opportunities that directly support [SPECIFIC_OBJECTIVE].

You are a procurement market analyst at Rutgers University with expertise in competitive intelligence and supplier ecosystem mapping.

Conduct market intelligence research and provide a structured report that includes:

1. Market Landscape
   - Total addressable market size and growth trends
   - Key market players and their estimated market share
   - Emerging trends, innovations, and disruptive technologies

2. Competitive Analysis
   - Direct competitors: [COMPETITOR_1], [COMPETITOR_2], [COMPETITOR_3]
   - Competitive advantages and differentiators
   - Pricing strategies and market positioning

3. Supplier Ecosystem
   - Tier 1, 2, and 3 supplier mapping
   - Supplier concentration and dependency risks
   - Alternative supplier options and capabilities

4. Strategic Insights
   - Market opportunities and threats
   - Recommended procurement strategies
   - Timeline and implementation considerations

Present the findings in a clear, professional report with numbered sections, tables where applicable, and concise bullet points for key insights. Highlight any missing data or assumptions that could impact decision-making.

Maintain a professional, analytical, and objective tone that emphasizes procurement relevance and actionable recommendations.`,
                tags: ['market', 'intelligence', 'research', 'competitive'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            {
                id: 'supplier-research-3',
                name: 'Pricing Analysis Framework',
                category: 'supplier-research',
                description: 'Comprehensive framework for analyzing market pricing and cost structures.',
                content: `Analyze pricing for [PRODUCT_SERVICE] in [MARKET_SEGMENT]. Conduct:

1. **Market Pricing Analysis**
   - Current market rates and price ranges
   - Price trends over the last [TIME_PERIOD]
   - Regional pricing variations and factors

2. **Cost Structure Breakdown**
   - Raw materials and component costs
   - Labor and manufacturing costs
   - Overhead and margin analysis
   - Transportation and logistics costs

3. **Competitive Pricing**
   - Competitor pricing strategies
   - Value proposition analysis
   - Price sensitivity and elasticity

4. **Total Cost of Ownership (TCO)**
   - Initial acquisition costs
   - Operating and maintenance costs
   - Lifecycle cost analysis
   - Hidden costs and risks

5. **Recommendations**
   - Target price ranges for negotiation
   - Cost optimization opportunities
   - Risk mitigation strategies

Provide detailed analysis with supporting data and recommendations for [BUDGET_RANGE].`,
                tags: ['pricing', 'analysis', 'cost', 'market'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            // Spend Analysis Templates
            {
                id: 'spend-analysis-1',
                name: 'Comprehensive Spend Analysis',
                category: 'spend-analysis',
                description: 'Detailed spend analysis template for uncovering insights, trends, and cost optimization opportunities from procurement data.',
                content: `Context:
I have uploaded an Excel file containing spend data. The goal is to perform a detailed spend analysis to uncover insights on total spend, trends, inefficiencies, and recommendations for improvement.

Role:
You are a seasoned procurement analyst with over 10 years of experience in spend management, cost optimization, and supplier performance evaluation. Your expertise includes identifying spending patterns, anomalies, cost-saving opportunities, and risks in supplier data.

Action:
1. Load and inspect the entire dataset. Report file metadata (sheet names, row/column counts, file size).
2. Perform data cleaning: identify and handle missing values, normalize date and currency formats, deduplicate records, and standardize supplier/category names where appropriate. Describe all cleaning steps and assumptions.
3. Compute key metrics:
   - Total spend (overall and by fiscal year)
   - Spend by category, department, and supplier
   - Top 10 suppliers and categories by spend and transaction count
   - Monthly and quarterly trends (time series)
   - Average, median, and distribution of invoice amounts
   - Spend concentration metrics (e.g., % of spend from top 1/5/10 suppliers)
   - Off-contract / maverick spend detection (if contract data unavailable, flag as N/A)
4. Detect anomalies and data quality issues:
   - Outliers (unusually high/low invoices) with examples
   - Frequent small-value transactions indicating process issues
   - Missing or ambiguous category/supplier mappings
5. Identify savings & consolidation opportunities:
   - Categories or suppliers suitable for consolidation or renegotiation
   - Quick-win opportunities (low effort, high impact)
   - Long-term strategic opportunities (category strategies, sourcing events)
6. Risk assessment:
   - Rate identified risks (High / Medium / Low) and explain rationale
   - Highlight sole-source dependencies and single points of failure
7. Recommendations:
   - Prioritized, actionable steps (short-term and long-term) with estimated impact where possible
   - Suggested KPIs to track post-implementation
8. Visualizations (describe or provide code snippets):
   - Recommend 3–5 charts to illustrate findings (e.g., spend by category bar chart, supplier concentration Pareto, monthly trend line)
   - Optionally provide short Python/pandas + matplotlib code snippets to reproduce each recommended chart
9. Appendix:
   - Provide table of key calculations, any assumptions, and limitations of analysis

Format:
- Executive Summary: 1–3 paragraphs with top findings and top 3 recommended actions.
- Data Overview: table of summary statistics (rows/cols, missing value counts, sample rows).
- Detailed Analysis: clearly labelled sections for metrics, trends, supplier analysis, anomalies, and risk ratings. Use tables for breakdowns and lists for observations.
- Recommendations: prioritized list with ownerable actions and estimated impact/effort.
- Appendix: data cleaning log, assumptions, sample code snippets (optional).

Tone:
Professional, objective, and data-driven. Explain technical terms briefly if used. Focus on clear, actionable recommendations and quantify impact where feasible.`,
                tags: ['spend', 'analysis', 'cost', 'optimization', 'data'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            // RFP Management Templates
            {
                id: 'rfp-management-1',
                name: 'RFP Requirements Generator',
                category: 'rfp-management',
                description: 'Template for generating comprehensive RFP requirements and evaluation criteria.',
                content: `Our procurement team is preparing a Request for Proposal (RFP) for [PRODUCT/SERVICE]. The goal is to create a clear, measurable, and supplier-friendly RFP that aligns with [ORGANIZATIONAL_GOALS].

You are a procurement specialist with expertise in strategic sourcing and supplier evaluation. Draft comprehensive RFP requirements that include:

1. Project Overview
   - Project name: [PROJECT_NAME]
   - Scope and objectives
   - Timeline and milestones
   - Budget range: [BUDGET_RANGE]

2. Technical Requirements
   - Functional specifications (clearly separate must-have vs. nice-to-have)
   - Performance criteria and metrics
   - Integration requirements
   - Compliance and standards ([STANDARDS])
   - Highlight potential risks if requirements are not met

3. Commercial Requirements
   - Pricing structure and payment terms
   - Contract terms and conditions
   - Insurance and liability requirements
   - Intellectual property considerations

4. Evaluation Criteria
   - Technical capability (weight: [TECH_WEIGHT]%)
   - Commercial terms (weight: [COMM_WEIGHT]%)
   - Past performance (weight: [PERF_WEIGHT]%)
   - Risk assessment (weight: [RISK_WEIGHT]%)

5. Submission Requirements
   - Response format and structure (vendors must map responses directly to requirements)
   - Required documentation
   - Timeline and deadlines
   - Contact information

Present the RFP as a structured document with numbered sections and bullet points for readability. Use tables where appropriate (e.g., evaluation criteria with weights).

Maintain a professional, precise, and objective tone aligned with procurement best practices.
`,
                tags: ['rfp', 'requirements', 'procurement', 'evaluation'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            // Negotiation Templates
            {
                id: 'negotiation-1',
                name: 'Negotiation Strategy Framework',
                category: 'negotiation',
                description: 'Strategic framework for planning and executing supplier negotiations.',
                content: `Rutgers University sourcing team is preparing for a supplier negotiation on [NEGOTIATION_TOPIC]. The objective is to achieve [SPECIFIC_OUTCOMES] while maintaining a collaborative, value-driven relationship.

You are a senior procurement negotiator with expertise in supplier management, cost optimization, and strategic sourcing.

Develop a comprehensive negotiation strategy that includes:

1. **Pre-Negotiation Analysis**
   - Supplier's position and constraints
   - Market conditions and alternatives
   - Your organization's leverage points
   - BATNA (Best Alternative to Negotiated Agreement)

2. **Negotiation Objectives**
   - Primary goals: [PRIMARY_GOALS]
   - Secondary goals: [SECONDARY_GOALS]
   - Must-have vs. nice-to-have items
   - Walk-away points and thresholds

3. **Strategy and Tactics**
   - Opening position and anchoring
   - Concession strategy and timing
   - Information sharing approach
   - Relationship management considerations

4. **Key Discussion Points**
   - Price and payment terms
   - Delivery and service levels
   - Quality and performance standards
   - Risk allocation and mitigation

5. **Implementation Plan**
   - Negotiation team roles and responsibilities
   - Meeting agenda and structure
   - Documentation and follow-up
   - Success metrics and evaluation

Focus on creating value for both parties while achieving [SPECIFIC_OUTCOMES].`,
                tags: ['negotiation', 'strategy', 'supplier', 'planning'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            // Risk Assessment Templates
            {
                id: 'risk-assessment-1',
                name: 'Supplier Risk Assessment',
                category: 'risk-assessment',
                description: 'Comprehensive template for assessing supplier-related risks.',
                content: `Conduct risk assessment for [SUPPLIER_NAME] in [PROCUREMENT_CATEGORY]. Evaluate:

1. **Financial Risk**
   - Credit rating and financial stability
   - Cash flow and liquidity analysis
   - Debt levels and payment history
   - Financial performance trends

2. **Operational Risk**
   - Production capacity and reliability
   - Quality control and compliance
   - Supply chain dependencies
   - Technology and innovation capabilities

3. **Geographic Risk**
   - Political and regulatory environment
   - Economic stability and currency risks
   - Natural disaster exposure
   - Infrastructure and logistics challenges

4. **Strategic Risk**
   - Market position and competitiveness
   - Customer concentration and dependencies
   - Strategic partnerships and alliances
   - Long-term viability and sustainability

5. **Mitigation Strategies**
   - Risk monitoring and early warning systems
   - Diversification and alternative options
   - Insurance and contractual protections
   - Contingency planning and response

Rate each risk category (Low/Medium/High) and provide specific recommendations for [RISK_TOLERANCE_LEVEL].`,
                tags: ['risk', 'assessment', 'supplier', 'mitigation'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            },
            // Contract Management Templates
            {
                id: 'contract-management-1',
                name: 'Contract Review',
                category: 'contract-management',
                description: 'Comprehensive contract review template for analyzing procurement contracts with structured risk assessment and recommendations.',
                content: `Rutgers University procurement team needs to review a contract to ensure alignment with organizational objectives, compliance standards, and sourcing best practices. Indicate whether this is a service, software, or goods contract and tailor the review accordingly

                Review the uploaded contract and provide a structured analysis that covers:

                **Contract Structure**
                - Parties and legal entities
                - Effective dates and term duration
                - Scope of work and deliverables
                - Pricing and payment terms

                **Legal and Compliance**
                - Applicable laws and regulations
                - Intellectual property rights
                - Confidentiality and data protection
                - Insurance and liability coverage

                **Performance Standards**
                - Service level agreements (SLAs)
                - Quality metrics and KPIs
                - Delivery schedules and milestones
                - Acceptance criteria and procedures

                **Risk Management**
                - Force majeure and business continuity
                - Termination and exit clauses
                - Dispute resolution mechanisms
                - Change management procedures

                **Commercial Terms**
                - Pricing structure and adjustments
                - Payment terms and invoicing
                - Warranties and guarantees
                - Penalties and incentives

                **Operational Considerations**
                - Communication and reporting requirements
                - Training and knowledge transfer
                - Technology and system integration
                - Transition and implementation planning

                Format:
                - Deliver findings in a table with columns: Clause/Topic | Finding | Risk (High/Medium/Low) | Recommendation.
                - Include an executive summary highlighting overall contract health and top three risks.
                - Clearly indicate whether the contract is a service, software, or goods contract.
                - Highlight any missing clauses that should be added for risk mitigation.

                Tone:
                Professional, precise, and risk-aware. Emphasize clear recommendations that balance legal protection with practical procurement outcomes.`,
                tags: ['contract', 'review', 'legal', 'compliance', 'analysis'],
                popularity: 0,
                created: '2025-09-29',
                type: 'built-in'
            }
        ];
    }

    // Load user templates from localStorage
    loadUserTemplates() {
        try {
            const saved = localStorage.getItem('ai-training-user-templates');
            this.userTemplates = saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.warn('Could not load user templates:', error);
            this.userTemplates = [];
        }
    }

    // Save user templates to localStorage
    saveUserTemplates() {
        try {
            localStorage.setItem('ai-training-user-templates', JSON.stringify(this.userTemplates));
        } catch (error) {
            console.warn('Could not save user templates:', error);
        }
    }

    // Update category counts dynamically
    updateCategoryCounts() {
        const allTemplates = [...this.templates, ...this.userTemplates];
        const categoryCounts = {};
        
        // Count templates by category
        allTemplates.forEach(template => {
            categoryCounts[template.category] = (categoryCounts[template.category] || 0) + 1;
        });
        
        // Update the HTML with actual counts
        Object.keys(categoryCounts).forEach(category => {
            const categoryCard = document.querySelector(`[data-category="${category}"]`);
            if (categoryCard) {
                const countElement = categoryCard.querySelector('.category-count');
                if (countElement) {
                    const count = categoryCounts[category];
                    countElement.textContent = `${count} template${count !== 1 ? 's' : ''}`;
                }
            }
        });
    }

    // Setup event listeners
    setupEventListeners() {
        // Template search
        const searchInput = document.getElementById('template-search-input');
        const searchBtn = document.getElementById('template-search-btn');
        const clearBtn = document.getElementById('clear-template-search');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length > 0) {
                    this.searchTemplates(query);
                } else {
                    this.hideSearchResults();
                }
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query) {
                    this.searchTemplates(query);
                }
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                this.hideSearchResults();
            });
        }

        // Category filters
        document.querySelectorAll('.template-category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.getAttribute('data-category');
                this.filterByCategory(category);
            });
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });

        // Sort dropdown
        const sortSelect = document.getElementById('template-sort');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.setSort(e.target.value);
            });
        }

        // Template form
        const templateForm = document.getElementById('template-form');
        if (templateForm) {
            templateForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.createTemplate();
            });
        }

        // Preview button
        const previewBtn = document.getElementById('preview-template');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => {
                this.previewTemplate();
            });
        }

        // Export/Import buttons
        const exportBtn = document.getElementById('export-templates');
        const importBtn = document.getElementById('import-templates');
        const importFile = document.getElementById('import-file');

        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportTemplates();
            });
        }

        if (importBtn) {
            importBtn.addEventListener('click', () => {
                importFile.click();
            });
        }

        if (importFile) {
            importFile.addEventListener('change', (e) => {
                this.importTemplates(e.target.files[0]);
            });
        }
    }

    // Search templates
    searchTemplates(query) {
        const allTemplates = [...this.templates, ...this.userTemplates];
        const results = allTemplates.filter(template => {
            const searchText = `${template.name} ${template.description} ${template.tags.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        this.displaySearchResults(results, query);
    }

    // Display search results
    displaySearchResults(results, query) {
        const resultsContainer = document.getElementById('template-search-results');
        const resultsList = document.getElementById('template-results-list');
        const resultsCount = resultsContainer.querySelector('.template-results-count');

        if (!resultsContainer || !resultsList) return;

        if (results.length === 0) {
            resultsList.innerHTML = `
                <div class="no-results">
                    <p class="text-gray-500 text-center py-8">No templates found for "${query}"</p>
                </div>
            `;
        } else {
            resultsList.innerHTML = results.map(template => this.createTemplateCard(template)).join('');
        }

        resultsCount.textContent = `${results.length} template${results.length !== 1 ? 's' : ''} found`;
        resultsContainer.classList.remove('hidden');
    }

    // Hide search results
    hideSearchResults() {
        const resultsContainer = document.getElementById('template-search-results');
        if (resultsContainer) {
            resultsContainer.classList.add('hidden');
        }
    }

    // Filter by category
    filterByCategory(category) {
        this.setFilter(category);
        document.getElementById('template-library').scrollIntoView({ behavior: 'smooth' });
    }

    // Set filter
    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });

        this.renderTemplateGrid();
    }

    // Set sort
    setSort(sort) {
        this.currentSort = sort;
        this.renderTemplateGrid();
    }

    // Render template grid
    renderTemplateGrid() {
        const templateGrid = document.getElementById('template-grid');
        if (!templateGrid) return;

        let templates = [...this.templates];

        // Apply filter
        if (this.currentFilter !== 'all') {
            templates = templates.filter(template => template.category === this.currentFilter);
        }

        // Apply sort
        templates.sort((a, b) => {
            switch (this.currentSort) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'category':
                    return a.category.localeCompare(b.category);
                case 'popularity':
                    return b.popularity - a.popularity;
                case 'recent':
                    return new Date(b.created) - new Date(a.created);
                default:
                    return 0;
            }
        });

        templateGrid.innerHTML = templates.map(template => this.createTemplateCard(template)).join('');
    }

    // Create template card HTML
    createTemplateCard(template) {
        const categoryNames = {
            'supplier-research': 'Supplier Research',
            'spend-analysis': 'Spend Analysis',
            'rfp-management': 'RFP Management',
            'negotiation': 'Negotiation',
            'risk-assessment': 'Risk Assessment',
            'contract-management': 'Contract Management',
            'other': 'Other'
        };

        return `
            <div class="template-card" data-template-id="${template.id}">
                <div class="template-card-header">
                    <h3 class="template-card-title">${template.name}</h3>
                    <span class="template-card-category">${categoryNames[template.category] || template.category}</span>
                </div>
                <div class="template-card-content">
                    <p class="template-card-description">${template.description}</p>
                    <div class="template-card-tags">
                        ${template.tags.map(tag => `<span class="template-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="template-card-actions">
                    <button class="template-action-btn primary" onclick="templateWarehouse.useTemplate('${template.id}')">
                        Copy Template
                    </button>
                    <button class="template-action-btn secondary" onclick="templateWarehouse.previewTemplateCard('${template.id}')">
                        Preview
                    </button>
                    ${template.type === 'user' ? `
                        <button class="template-action-btn danger" onclick="templateWarehouse.deleteTemplate('${template.id}')">
                            Delete
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Copy template
    useTemplate(templateId) {
        const template = [...this.templates, ...this.userTemplates].find(t => t.id === templateId);
        if (!template) return;

        // Copy to clipboard
        navigator.clipboard.writeText(template.content).then(() => {
            this.showNotification('Template copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = template.content;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Template copied to clipboard!', 'success');
        });
    }

    // Copy edited template from preview
    copyEditedTemplate(templateId) {
        const textarea = document.getElementById('preview-content-textarea');
        if (!textarea) return;

        const editedContent = textarea.value;

        // Copy to clipboard
        navigator.clipboard.writeText(editedContent).then(() => {
            this.showNotification('Edited template copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = editedContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Edited template copied to clipboard!', 'success');
        });
    }

    // Preview template card
    previewTemplateCard(templateId) {
        const template = [...this.templates, ...this.userTemplates].find(t => t.id === templateId);
        if (!template) return;

        this.showTemplatePreview(template);
    }

    // Show template preview
    showTemplatePreview(template) {
        const previewContainer = document.getElementById('template-preview-modal');
        const previewContent = previewContainer.querySelector('.preview-content');
        
        if (!previewContainer || !previewContent) return;

        previewContent.innerHTML = `
            <div class="preview-template-info">
                <h4>${template.name}</h4>
                <p class="preview-category">Category: ${template.category}</p>
                <p class="preview-description">${template.description}</p>
            </div>
            <div class="preview-template-content">
                <h5>Template Content:</h5>
                <textarea class="preview-content-editable" id="preview-content-textarea" rows="15">${template.content}</textarea>
                <div class="preview-content-help">
                    <small>💡 You can edit the template content above before copying it to your clipboard.</small>
                </div>
            </div>
            <div class="preview-template-actions">
                <button class="btn-primary" onclick="templateWarehouse.copyEditedTemplate('${template.id}')">Copy Template</button>
                <button class="btn-secondary" onclick="templateWarehouse.hideTemplatePreview()">Close</button>
            </div>
        `;

        previewContainer.classList.remove('hidden');
    }

    // Hide template preview
    hideTemplatePreview() {
        const previewContainer = document.getElementById('template-preview-modal');
        if (previewContainer) {
            previewContainer.classList.add('hidden');
        }
    }

    // Create template
    createTemplate() {
        const form = document.getElementById('template-form');
        const formData = new FormData(form);
        
        const template = {
            id: 'user-' + Date.now(),
            name: formData.get('template-name'),
            category: formData.get('template-category'),
            description: formData.get('template-description') || '',
            content: formData.get('template-content'),
            tags: formData.get('template-tags') ? formData.get('template-tags').split(',').map(tag => tag.trim()) : [],
            popularity: 0,
            created: new Date().toISOString().split('T')[0],
            type: 'user'
        };

        // Validate required fields
        if (!template.name || !template.category || !template.content) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        this.userTemplates.push(template);
        this.saveUserTemplates();
        this.updateCategoryCounts();
        this.renderUserTemplates();
        form.reset();
        
        this.showNotification('Template created successfully!', 'success');
        
        // Scroll to my templates section
        document.getElementById('my-templates').scrollIntoView({ behavior: 'smooth' });
    }

    // Preview template from form
    previewTemplate() {
        const form = document.getElementById('template-form');
        const formData = new FormData(form);
        
        const template = {
            name: formData.get('template-name') || 'Untitled Template',
            category: formData.get('template-category') || 'other',
            description: formData.get('template-description') || 'No description provided',
            content: formData.get('template-content') || 'No content provided'
        };

        this.showTemplatePreview(template);
    }

    // Delete template
    deleteTemplate(templateId) {
        if (confirm('Are you sure you want to delete this template?')) {
            this.userTemplates = this.userTemplates.filter(t => t.id !== templateId);
            this.saveUserTemplates();
            this.updateCategoryCounts();
            this.renderUserTemplates();
            this.showNotification('Template deleted successfully', 'success');
        }
    }

    // Render user templates
    renderUserTemplates() {
        const grid = document.getElementById('my-templates-grid');
        const noTemplates = document.getElementById('no-templates');
        
        if (!grid || !noTemplates) return;

        if (this.userTemplates.length === 0) {
            grid.innerHTML = '';
            noTemplates.classList.remove('hidden');
        } else {
            grid.innerHTML = this.userTemplates.map(template => this.createTemplateCard(template)).join('');
            noTemplates.classList.add('hidden');
        }
    }

    // Export templates
    exportTemplates() {
        if (this.userTemplates.length === 0) {
            this.showNotification('No templates to export', 'warning');
            return;
        }

        const dataStr = JSON.stringify(this.userTemplates, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `ai-training-templates-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showNotification('Templates exported successfully!', 'success');
    }

    // Import templates
    importTemplates(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedTemplates = JSON.parse(e.target.result);
                
                if (!Array.isArray(importedTemplates)) {
                    throw new Error('Invalid file format');
                }

                // Add imported templates with new IDs
                importedTemplates.forEach(template => {
                    template.id = 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
                    template.type = 'user';
                    this.userTemplates.push(template);
                });

                this.saveUserTemplates();
                this.updateCategoryCounts();
                this.renderUserTemplates();
                this.showNotification(`${importedTemplates.length} templates imported successfully!`, 'success');
                
            } catch (error) {
                this.showNotification('Error importing templates. Please check the file format.', 'error');
            }
        };
        
        reader.readAsText(file);
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize template warehouse when DOM is loaded
let templateWarehouse;
document.addEventListener('DOMContentLoaded', () => {
    templateWarehouse = new TemplateWarehouse();
});
