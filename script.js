// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resume download loading animation
const resumeDownload = document.getElementById('resumeDownload');
const resumeTooltip = document.getElementById('resumeTooltip');

if (resumeDownload) {
    resumeDownload.addEventListener('click', function(e) {
        this.classList.add('loading');
        // Remove loading state after a short delay
        setTimeout(() => {
            this.classList.remove('loading');
        }, 1000);
    });
}

// Tooltip functionality
const downloadContainer = document.querySelector('.download-container');
if (downloadContainer) {
    downloadContainer.addEventListener('mouseenter', () => {
        resumeTooltip.style.opacity = '1';
        resumeTooltip.style.visibility = 'visible';
    });

    downloadContainer.addEventListener('mouseleave', () => {
        resumeTooltip.style.opacity = '0';
        resumeTooltip.style.visibility = 'hidden';
    });
}

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add active state to navigation links
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all project cards and skill cards
document.querySelectorAll('.project-card, .skill-card').forEach(el => {
    observer.observe(el);
});
