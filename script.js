document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate skill circles and language circles
    const statCircles = document.querySelectorAll('.stat-circle');
    const languageCircles = document.querySelectorAll('.language-circle');
    
    function animateCircles() {
        statCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const svgCircle = circle.querySelector('svg circle:nth-child(2)');
            
            if (svgCircle) {
                const radius = svgCircle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (percent / 100) * circumference;
                
                svgCircle.style.strokeDashoffset = offset;
            }
        });
    }
    
    function animateLanguageCircles() {
        languageCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const svgCircle = circle.querySelector('svg circle:nth-child(2)');
            
            if (svgCircle) {
                const radius = svgCircle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (percent / 100) * circumference;
                
                svgCircle.style.strokeDashoffset = offset;
            }
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stat-circle')) {
                    animateCircles();
                }
                if (entry.target.classList.contains('language-circle')) {
                    animateLanguageCircles();
                }
                
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate when scrolled to
    document.querySelectorAll('.stat-circle, .language-circle, .skill-level, .timeline-item, .experience-card, .activity-card').forEach(el => {
        observer.observe(el);
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});