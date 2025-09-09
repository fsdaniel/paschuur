// De Beauty Schuur - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cookie banner functionality
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptBtn = document.querySelector('.cookie-btn--accept');
    const declineBtn = document.querySelector('.cookie-btn--decline');
    
    // Check if user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            if (cookieBanner) {
                cookieBanner.classList.add('show');
            }
        }, 1000);
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            hideCookieBanner();
            // Enable analytics or other tracking here
            enableTracking();
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            hideCookieBanner();
        });
    }
    
    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }
    
    function enableTracking() {
        // Add Google Analytics or other tracking code here
        console.log('Tracking enabled');
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation and submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            if (!name || !email || !message) {
                showNotification('Vul alle verplichte velden in.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Voer een geldig e-mailadres in.', 'error');
                return;
            }
            
            // Here you would typically send the form data to your external form handler
            // For now, we'll just show a success message
            showNotification('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.', 'success');
            this.reset();
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            z-index: 1002;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        if (type === 'success') {
            notification.style.backgroundColor = '#4CAF50';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#f44336';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit' || this.classList.contains('cta-button')) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize external widgets when DOM is ready
    initializeExternalWidgets();
});

function initializeExternalWidgets() {
    // Initialize contact form widget
    if (typeof window.ContactFormWidget !== 'undefined') {
        window.ContactFormWidget.init({
            container: '#contact-form-widget',
            apiKey: 'your-api-key-here' // Replace with actual API key
        });
    }
    
    // Initialize booking system widget
    if (typeof window.BookingWidget !== 'undefined') {
        window.BookingWidget.init({
            container: '#booking-widget',
            apiKey: 'your-booking-api-key-here' // Replace with actual API key
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for external use
window.BeautySchuur = {
    showNotification: function(message, type) {
        // Re-export notification function for external use
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            z-index: 1002;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        if (type === 'success') {
            notification.style.backgroundColor = '#4CAF50';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#f44336';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
};
