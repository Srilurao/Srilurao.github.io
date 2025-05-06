document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                item.classList.remove('show');
                
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.add('show');
                }
            });
        });
    });
    
    // Show all projects by default
    projectItems.forEach(item => item.classList.add('show'));
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Toggle detailed responsibilities
    const toggleBtn = document.getElementById('toggle-btn');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const details = document.querySelector('.detailed-responsibilities');
            details.classList.toggle('show');
            
            // Change button text based on state
            if (details.classList.contains('show')) {
                this.textContent = 'Hide Detailed Responsibilities';
                this.classList.add('active');
            } else {
                this.textContent = 'View Detailed Responsibilities';
                this.classList.remove('active');
            }
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-item, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Hero image animation
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        let isAnimating = false;
        
        window.addEventListener('scroll', function() {
            if (!isAnimating) {
                isAnimating = true;
                
                // Add bounce animation class
                heroImage.classList.add('bounce');
                
                // Remove after animation completes
                setTimeout(() => {
                    heroImage.classList.remove('bounce');
                    isAnimating = false;
                }, 1000);
            }
        });
    }
});

