// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Create particles
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `-${size}px`;
    
    // Random animation duration between 10s and 20s
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random delay
    particle.style.animationDelay = `${Math.random() * 10}s`;
    
    particlesContainer.appendChild(particle);
}

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    observer.observe(item);
});

// Floating animation for container
const container = document.querySelector('.container');

window.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 75;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 75;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset container position when mouse leaves
window.addEventListener('mouseleave', () => {
    container.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Enhanced Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.skill-modal');

    // Open modal function
    function openModal(modal) {
        document.body.style.overflow = 'hidden';
        modalOverlay.style.display = 'block';
        modal.style.display = 'block';
        
        // Trigger reflow to enable animations
        void modalOverlay.offsetWidth;
        void modal.offsetWidth;
        
        modalOverlay.classList.add('active');
        modal.classList.add('active');
    }

    // Close modal function
    function closeModals() {
        modalOverlay.classList.remove('active');
        
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        
        setTimeout(() => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300); // Match this with your CSS transition duration
    }

    // Add click event to each skill card
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) openModal(modal);
        });
    });

    // Close modal events
    modalOverlay.addEventListener('click', closeModals);
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling to overlay
            closeModals();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModals();
    });

    // (Keep your existing dark mode, particles, timeline, and tilt code)
});

// Better touch support
document.addEventListener('DOMContentLoaded', function() {
    // Add touch class to body
    document.body.classList.add('touch-device');
    
    // Prevent double-tap zoom on buttons
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(btn => {
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});