function toggleMenu() {
    const darkbg = document.querySelector(".dark-bg");
    const menu = document.querySelector(".nav-icon-menu");
    const wrapper = document.querySelector(".wrapper");

    menu.classList.toggle("active");
    darkbg.classList.toggle("active");
    wrapper.classList.toggle("menu-active");

    // Handle body scrolling
    document.body.style.overflow = darkbg.classList.contains("active") ? "hidden" : "auto";

    darkbg.removeEventListener("click", removeMenu);
    if (darkbg.classList.contains("active")) {
        darkbg.addEventListener("click", removeMenu);
    }
}

function removeMenu() {
    const darkbg = document.querySelector(".dark-bg");
    const menu = document.querySelector(".nav-icon-menu");
    const wrapper = document.querySelector(".wrapper");

    menu.classList.remove("active");
    darkbg.classList.remove("active");
    wrapper.classList.remove("menu-active");
    document.body.style.overflow = "auto"; // Restore scrolling
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to show the selected section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active state from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Activate corresponding nav link
        const activeNavLink = document.querySelector(`a[href="#${targetId}"]`);
        if (activeNavLink) {
            activeNavLink.classList.add('active');
        }
    }

    // Initial page load - ensure home is active
    showSection('home');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const serverJoinButtons = document.querySelectorAll('.server-join');

    serverJoinButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serverCard = button.closest('.server-card');
            const serverIp = serverCard.querySelector('.server-details li:last-child').textContent.split(': ')[1];

            // Copy IP to clipboard
            navigator.clipboard.writeText(serverIp).then(() => {
                button.textContent = 'IP Copied!';
                button.style.backgroundColor = '#4CAF50';

                // Reset button after 2 seconds
                setTimeout(() => {
                    button.textContent = 'Join Server';
                    button.style.backgroundColor = '';
                }, 2000);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slides');
    let currentIndex = 0;
    const totalSlides = slides.length;
    console.log(slides)

    // Function to show the next slide
    function showSlide() {
        // Remove 'active' class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the current slide
        slides[currentIndex].classList.add('active');

        // Update the index for the next slide
        currentIndex = (currentIndex + 1) % totalSlides;
    }

    // Start the slideshow
    showSlide();
    setInterval(showSlide, 5000); // Change slide every 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const discordLinks = document.querySelectorAll('.discord');

    // Discord link hover effect
    discordLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.textContent = 'Copy Discord Tag';
        });

        link.addEventListener('mouseleave', (e) => {
            e.target.textContent = '💬 Discord';
        });

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const discordTag = e.target.closest('.contact-card').querySelector('h3').textContent;
            navigator.clipboard.writeText(discordTag).then(() => {
                e.target.textContent = 'Discord Tag Copied!';
                setTimeout(() => {
                    e.target.textContent = '💬 Discord';
                }, 2000);
            });
        });
    });

    // Message form submission
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(messageForm);

        // Basic validation (you'd typically use more robust validation)
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            // Simulate message sending (replace with actual backend logic)
            alert('Message sent successfully! We\'ll get back to you soon.');
            messageForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const serverCards = document.querySelectorAll('.server-card');

    let currentIndex = 0;

    function showCard(index) {
        serverCards.forEach((card, i) => {
            card.style.display = i === index ? 'flex' : 'none';
        });
    }

    // Initial display
    showCard(currentIndex);

    // Next button
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % serverCards.length;
        showCard(currentIndex);
    });

    // Previous button
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + serverCards.length) % serverCards.length;
        showCard(currentIndex);
    });

    // Copy IP functionality
    const copyIpButtons = document.querySelectorAll('.copy-ip');
    copyIpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const ipInput = button.previousElementSibling;
            ipInput.select();
            navigator.clipboard.writeText(ipInput.value).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy IP';
                }, 2000);
            });
        });
    });
});


