// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA Button Animation
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('plants').scrollIntoView({ behavior: 'smooth' });
});

// Newsletter Form Handler
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if(email) {
        alert(`Thank you! We've added ${email} to our newsletter.`);
        e.target.reset();
    }
});

// Add fade-in animation to elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});