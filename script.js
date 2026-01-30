
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const particlesContainer = document.getElementById('particles');

if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = 5 + Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

const style = document.createElement('style');
style.textContent = `
    #particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
    }

    .particle {
        position: absolute;
        bottom: -10px;
        width: 2px;
        height: 2px;
        background: #00ff00;
        animation: floatUp linear infinite;
        opacity: 0.7;
    }

    @keyframes floatUp {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100vh);
        }
    }
`;
document.head.appendChild(style);
