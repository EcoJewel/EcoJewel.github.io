// EcoJewel Website Interactivity

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // In a real application, you would send this data to a server
        console.log('Form submitted with data:', data);

        // Show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth' });

        // Optional: Reset after showing success
        // setTimeout(() => {
        //     contactForm.reset();
        //     contactForm.style.display = 'block';
        //     formSuccess.style.display = 'none';
        // }, 5000);
    });
}

// Video placeholder click handler
const videoPlaceholders = document.querySelectorAll('.video-placeholder');
videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        // In a real application, this would open a video modal or redirect to YouTube
        const youtubeUrl = 'https://www.youtube.com/watch?v=WbGCAsRja38';
        window.open(youtubeUrl, '_blank');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .community-card, .testimonial-card, .stat-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Search functionality (basic implementation)
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                // In a real application, this would search through content
                console.log('Searching for:', searchTerm);
                alert(`Search functionality would look for: "${searchTerm}"\n\nThis is a demo - search not fully implemented.`);
            }
        }
    });
}

// Location search functionality
const locationInputs = document.querySelectorAll('input[placeholder*="location"]');
locationInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const location = this.value.trim();
            if (location) {
                console.log('Location entered:', location);
                // In a real application, this would filter map data or show location-specific info
                alert(`In a full implementation, this would show environmental data for: ${location}`);
            }
        }
    });
});

// Download button analytics (placeholder)
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const store = this.querySelector('strong').textContent;
        console.log(`Download clicked for: ${store}`);
        alert(`App downloads coming soon!\n\nYou clicked: ${store}\n\nThe EcoJewel app is currently in development.`);
    });
});

// Form validation enhancement
const requiredInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
requiredInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#4caf50';
        }
    });

    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '#ddd';
        }
    });
});

// Add hover effects to map (placeholder for future interactivity)
const mapContainers = document.querySelectorAll('.map-container, .map-visualization');
mapContainers.forEach(map => {
    map.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });

    map.addEventListener('click', function() {
        console.log('Map clicked - would show interactive map in full implementation');
        // In a real application, this might open an interactive map modal
    });
});

// Console welcome message
console.log('%c< Welcome to EcoJewel! ', 'background: #667eea; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%cTransforming environmental awareness into action', 'color: #666; font-size: 14px;');
console.log('Learn more at: https://github.com/ecojewel');
