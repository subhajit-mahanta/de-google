

document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    const tryButtons = document.querySelectorAll('.try-button');
    tryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            showServiceGuide(service);
        });
    });

    
    function showServiceGuide(service) {
        const guides = {
            'protonmail': {
                title: 'Getting Started with ProtonMail',
                steps: [
                    'Visit protonmail.com and create a free account',
                    'Choose a secure password and enable 2FA',
                    'Import your Gmail contacts using the import tool',
                    'Set up email forwarding from Gmail to ProtonMail',
                    'Gradually inform contacts of your new email'
                ],
                url: 'https://protonmail.com'
            },
            'duckduckgo': {
                title: 'Switching to DuckDuckGo',
                steps: [
                    'Visit duckduckgo.com in your browser',
                    'Set DuckDuckGo as your default search engine',
                    'Install the DuckDuckGo browser extension',
                    'Configure privacy settings in your browser',
                    'Try the DuckDuckGo mobile app'
                ],
                url: 'https://duckduckgo.com'
            },
            'firefox': {
                title: 'Setting Up Firefox for Privacy',
                steps: [
                    'Download Firefox from mozilla.org',
                    'Import bookmarks and passwords from Chrome',
                    'Enable Enhanced Tracking Protection',
                    'Install privacy-focused extensions (uBlock Origin)',
                    'Configure privacy settings in preferences'
                ],
                url: 'https://firefox.com'
            },
            'nextcloud': {
                title: 'Nextcloud Setup Guide',
                steps: [
                    'Choose a Nextcloud provider or self-host',
                    'Create your account and secure it with 2FA',
                    'Download the desktop and mobile sync clients',
                    'Migrate files from Google Drive gradually',
                    'Set up automatic backup and sync'
                ],
                url: 'https://nextcloud.com'
            }
        };

        const guide = guides[service];
        if (guide) {
            showModal(guide);
        }
    }

    
    function showModal(guide) {
 
        const existingModal = document.querySelector('.service-modal');
        if (existingModal) {
            existingModal.remove();
        }

     
        const modal = document.createElement('div');
        modal.className = 'service-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${guide.title}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <ol>
                            ${guide.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                        <div class="modal-actions">
                            <a href="${guide.url}" target="_blank" rel="noopener" class="modal-button primary">Visit Website</a>
                            <button class="modal-button secondary modal-close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

       
        const style = document.createElement('style');
        style.textContent = `
            .service-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
            }
            
            .modal-overlay {
                background: rgba(0, 0, 0, 0.5);
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 1.5rem 0;
                border-bottom: 1px solid #e2e8f0;
                margin-bottom: 1.5rem;
            }
            
            .modal-header h3 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #1e293b;
                margin: 0;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #64748b;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-body {
                padding: 0 1.5rem 1.5rem;
            }
            
            .modal-body ol {
                margin-bottom: 2rem;
                padding-left: 1.5rem;
            }
            
            .modal-body li {
                margin-bottom: 0.75rem;
                line-height: 1.6;
                color: #475569;
            }
            
            .modal-actions {
                display: flex;
                gap: 1rem;
            }
            
            .modal-button {
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                font-size: 0.9rem;
                text-decoration: none;
                border: none;
                cursor: pointer;
                transition: all 0.2s ease;
                flex: 1;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-button.primary {
                background: #2563eb;
                color: white;
            }
            
            .modal-button.primary:hover {
                background: #1d4ed8;
            }
            
            .modal-button.secondary {
                background: #f1f5f9;
                color: #475569;
            }
            
            .modal-button.secondary:hover {
                background: #e2e8f0;
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(modal);

     
        const closeButtons = modal.querySelectorAll('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.remove();
                style.remove();
            });
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                modal.remove();
                style.remove();
            }
        });
    }
});
