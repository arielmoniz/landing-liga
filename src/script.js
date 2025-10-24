// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMobile = document.getElementById('navMobile');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = navMobile.querySelectorAll('.nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animated counters for impact numbers
const animateCounter = (element, target, duration = 2000) => {
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
        } else {
            element.textContent = formatNumber(Math.floor(current));
            requestAnimationFrame(updateCounter);
        }
    };
    
    updateCounter();
};

const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace('.', ',');
    }
    return num.toString();
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const valueElement = entry.target.querySelector('.stat-value');
            const targetValue = parseInt(entry.target.dataset.value);
            animateCounter(valueElement, targetValue);
        }
    });
}, observerOptions);

// Observe all stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    counterObserver.observe(card);
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show success message
    showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Log form data (in production, this would send to a server)
    console.log('Contact Form Data:', data);
});

// Notify Form
const notifyForm = document.getElementById('notifyForm');

notifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(notifyForm);
    const email = formData.get('notify-email');
    
    // Show success message
    showToast('E-mail cadastrado! Você será notificado quando abrirmos o próximo processo seletivo.', 'success');
    
    // Reset form
    notifyForm.reset();
    
    // Log email (in production, this would send to a server)
    console.log('Notify Email:', email);
});

// Toast notification function
const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
};

// Intersection Observer for fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for fade-in effect
const observeElements = () => {
    const elements = document.querySelectorAll('.feature-card, .project-card, .testimonial-card, .startup-card, .partner-card, .stat-card');
    elements.forEach(el => {
        el.classList.add('fade-in');
        fadeObserver.observe(el);
    });
};

// Initialize observers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
});

// Parallax effect for hero decoration
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-decoration');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effects to cards
const addCardHoverEffects = () => {
    const cards = document.querySelectorAll('.feature-card, .project-card, .testimonial-card, .startup-card, .partner-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
};

// Initialize hover effects
addCardHoverEffects();

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to navigation based on scroll position
const updateActiveNavigation = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = 80;
        
        if (window.pageYOffset >= (sectionTop - headerHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNavigation);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        showToast('🚀 Código secreto ativado! Você descobriu nosso easter egg! 🎉', 'success');
        document.body.style.animation = 'rainbow 5s linear';
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    updateActiveNavigation();
}, 100));

// Print current year in footer (if needed dynamically)
const updateYear = () => {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
};

updateYear();

// Log welcome message
console.log('%c🚀 Liga Empreendedora da UFBA', 'font-size: 20px; font-weight: bold; color: #6B31FF;');
console.log('%cInteressado em fazer parte? Acesse a seção "Chamada" e inscreva-se!', 'font-size: 14px; color: #238AA3;');

// Service Worker registration (for PWA - optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js').then(() => {
    //     console.log('Service Worker registered');
    // });
}
