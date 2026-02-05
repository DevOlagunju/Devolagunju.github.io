// ===== DOM Elements =====
const contactForm = document.getElementById('contact-form');
const backToTopBtn = document.getElementById('backToTop');
const themeToggle = document.getElementById('theme-toggle');

// ===== Back to Top Button =====
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', handleBackToTop);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Theme Toggle =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});


// ===== EmailJS Configuration =====
// IMPORTANT: Replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get your keys
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
    templateID: 'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
    publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your EmailJS Public Key
};

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
})();

// ===== Contact Form Handling with EmailJS =====
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Update button state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Check if EmailJS is configured
        if (EMAILJS_CONFIG.serviceID === 'YOUR_SERVICE_ID') {
            // EmailJS not configured - show instruction message
            console.warn('EmailJS not configured. Please update EMAILJS_CONFIG in script.js');
            showNotification('Email service not configured yet. Check console for setup instructions.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // For now, show success for demo purposes
            setTimeout(() => {
                showNotification('Demo mode: Message logged to console. Configure EmailJS for real emails.', 'success');
                console.log('Form Data:', data);
                this.reset();
            }, 1000);
            return;
        }

        // Send email using EmailJS
        emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_email: 'wasiu-ibrahim@outlook.com'
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            console.error('FAILED...', error);
            showNotification('Failed to send message. Please try again or email me directly.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// ===== Email Validation =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 9999;
        animation: slideIn 0.3s ease forwards;
        max-width: 400px;
    `;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0.25rem;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            .notification-close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
            }, index * 100); // Stagger animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .timeline-item, .stat, .contact-item, .achievement-item, .service-card, .testimonial-card, .core-skill-item, .skill-category-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Skill Progress Bar Animation =====
const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress-bar, .skill-bar-fill');
            progressBars.forEach((bar, index) => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100 + (index * 100));
            });
            skillBarsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observe skill sections
document.querySelectorAll('.core-skills, .skill-category-card').forEach(section => {
    skillBarsObserver.observe(section);
});

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ===== Typing Effect for Hero Title (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Scroll Indicator Click =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Trigger counter animation when stats become visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.textContent);
            if (!isNaN(target)) {
                animateCounter(statNumber, target, 2000);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    setActiveNavLink();
    
    // Add loaded class to body for any initial animations
    document.body.classList.add('loaded');
    
    // Console message for developers
    console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cInterested in how this portfolio was built? Feel free to check out the source code!', 'font-size: 14px; color: #64748b;');
    console.log('%c⭐ Made with passion by Wasiu Ibrahim', 'font-size: 12px; color: #8b5cf6;');
});

// ===== Keyboard Navigation Support =====
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// ===== Prefers Reduced Motion =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-normal', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}
