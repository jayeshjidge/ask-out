// Add floating hearts and particles to Page 3
document.addEventListener("DOMContentLoaded", function() {
    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.createElement("div");
        heartsContainer.className = "floating-hearts";
        document.body.appendChild(heartsContainer);
        
        const heartSymbols = ["", "", "", "", "", "", "", "", "", "", ""];
        
        setInterval(() => {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
            heart.style.fontSize = (Math.random() * 10 + 15) + "px";
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }, 1000);
    }

    // Create floating particles
    function createParticles() {
        const particlesContainer = document.createElement("div");
        particlesContainer.className = "particles";
        document.body.appendChild(particlesContainer);
        
        setInterval(() => {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.width = particle.style.height = (Math.random() * 4 + 2) + "px";
            particle.style.animationDuration = (Math.random() * 3 + 2) + "s";
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 4000);
        }, 500);
    }

    // Add sparkle effect on mouse move
    document.addEventListener("mousemove", (e) => {
        if (Math.random() > 0.95) {
            const sparkle = document.createElement("div");
            sparkle.innerHTML = "";
            sparkle.style.position = "fixed";
            sparkle.style.left = e.clientX + "px";
            sparkle.style.top = e.clientY + "px";
            sparkle.style.pointerEvents = "none";
            sparkle.style.zIndex = "1000";
            sparkle.style.fontSize = "20px";
            sparkle.style.animation = "sparkleAnim 1s ease-out forwards";
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });

    // Add sparkle animation
    const style = document.createElement("style");
    style.textContent = `
        @keyframes sparkleAnim {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize animations
    createFloatingHearts();
    createParticles();
});
