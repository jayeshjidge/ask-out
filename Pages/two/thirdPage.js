document.addEventListener("DOMContentLoaded", function () {
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
        }, 800);
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
        }, 300);
    }

    // Function to show the clickable button and hide the loading button
    function showClickableButton() {
        const loadingSection = document.querySelector(".loading-section");
        const readySection = document.querySelector(".ready-section");
        
        // Fade out loading section
        loadingSection.style.transition = "opacity 0.5s ease-out";
        loadingSection.style.opacity = "0";
        
        setTimeout(() => {
            loadingSection.style.display = "none";
            readySection.style.display = "block";
        }, 500);
    }

    // Function to navigate to the next page
    function navigateToNextPage() {
        // Add fade out effect
        document.body.style.transition = "opacity 0.5s ease-out";
        document.body.style.opacity = "0";
        
        setTimeout(() => {
            window.location.href = "../three/";
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

    // Call the showClickableButton function after 3 seconds
    setTimeout(showClickableButton, 3000);

    // Call the navigateToNextPage function when the clickable button is clicked
    document.getElementById("enable").addEventListener("click", navigateToNextPage);
});
