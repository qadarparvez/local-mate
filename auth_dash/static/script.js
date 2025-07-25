document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Highlight active nav item based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form handling
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         // Simple validation
    //         const name = document.getElementById('fullName').value.trim();
    //         const email = document.getElementById('email').value.trim();
    //         const reason = document.getElementById('contactReason').value;
    //         const message = document.getElementById('message').value.trim();
    //         if (!name || !email || !reason || !message) {
    //             alert('Please fill in all required fields.');
    //             return;
    //         }
    //         if (!validateEmail(email)) {
    //             alert('Please enter a valid email address.');
    //             return;
    //         }
    //         // Simulate form submission
    //         setTimeout(() => {
    //             contactForm.style.display = 'none';
    //             document.getElementById('formSuccess').style.display = 'block';
    //             // Reset form after 5 seconds
    //             setTimeout(() => {
    //                 contactForm.reset();
    //                 contactForm.style.display = 'block';
    //                 document.getElementById('formSuccess').style.display = 'none';
    //             }, 5000);
    //         }, 1000);
    //     });
    // }
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Initialize animations on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .step, .feature, .metric-card, .contact-method');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    window.addEventListener('load', function() {
        const animatedElements = document.querySelectorAll('.card, .step, .feature, .metric-card, .contact-method');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Trigger first check
        animateOnScroll();
    });
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
});
















// Add these to the existing script.js file

// Password toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Signup form handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const userType = document.getElementById('userType').value;
            const termsAgreed = document.getElementById('termsAgreement').checked;
            
            // Validation
            if (!name || !email || !password || !confirmPassword || !userType) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            
            if (!termsAgreed) {
                alert('You must agree to the Terms of Service and Privacy Policy.');
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                signupForm.style.display = 'none';
                document.getElementById('signupSuccess').style.display = 'block';
            }, 1000);
        });
    }

    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Validation
            if (!email || !password) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                alert('Login successful! Redirecting to dashboard...');
                // In a real app, you would redirect here
                // window.location.href = 'dashboard.html';
            }, 1000);
        });
    }
});