// Función para ocultar el mensaje inicial al tocar la pantalla
document.addEventListener("DOMContentLoaded", function() {
    const initialMessage = document.getElementById("initialMessage");
    
    // Ocultar el mensaje inicial al hacer clic o tocar
    initialMessage.addEventListener("click", function() {
        initialMessage.style.animation = "fadeOut 0.8s ease-out forwards";
        
        setTimeout(() => {
            initialMessage.classList.add("hidden");
        }, 800);
    });
    
    // También ocultar con tecla Enter o Escape
    document.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === "Escape") {
            if (!initialMessage.classList.contains("hidden")) {
                initialMessage.style.animation = "fadeOut 0.8s ease-out forwards";
                
                setTimeout(() => {
                    initialMessage.classList.add("hidden");
                }, 800);
            }
        }
    });
    
    // Animaciones de entrada para las tarjetas de mascotas (ahora solo el gatito GIF)
    const petCards = document.querySelectorAll(".pet-card");
    petCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        
        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 1000 + (index * 200));
    });
    
    // Animación de entrada para los botones
    const loveButtons = document.querySelectorAll(".love-button");
    loveButtons.forEach((button, index) => {
        button.style.opacity = "0";
        button.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            button.style.transition = "all 0.6s ease";
            button.style.opacity = "1";
            button.style.transform = "scale(1)";
        }, 1500 + (index * 150));
    });
    
    // Efecto de partículas de corazones
    setInterval(createHeartParticles, 4000);
    
    // Animación suave para el contenedor de Fresita
    const fresitaContainer = document.querySelector(".fresita-container");
    if (fresitaContainer) {
        fresitaContainer.style.opacity = "0";
        fresitaContainer.style.transform = "scale(0.9)";
        
        setTimeout(() => {
            fresitaContainer.style.transition = "all 1s ease";
            fresitaContainer.style.opacity = "1";
            fresitaContainer.style.transform = "scale(1)";
        }, 2000);
    }

    // Animación suave para las tarjetas de dibujos
    const drawingCards = document.querySelectorAll(".drawing-card");
    drawingCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        
        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 2500 + (index * 100)); // Retraso para que aparezcan después de otros elementos
    });
});

// Función para crear partículas de corazones
function createHeartParticles() {
    const hearts = ["💖", "💕", "💗", "💝", "🌹", "💐", "❤️"];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-50px";
            heart.style.fontSize = "25px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "1";
            heart.style.animation = "heartFloat 6s linear forwards";
            heart.style.opacity = "0.8";
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }, i * 800);
    }
}

// Efecto de hover mejorado para los botones
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".love-button");
    
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            // Crear efecto de brillo
            const sparkle = document.createElement("div");
            sparkle.style.position = "absolute";
            sparkle.style.top = "50%";
            sparkle.style.left = "50%";
            sparkle.style.transform = "translate(-50%, -50%)";
            sparkle.style.width = "100%";
            sparkle.style.height = "100%";
            sparkle.style.background = "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)";
            sparkle.style.borderRadius = "50px";
            sparkle.style.pointerEvents = "none";
            sparkle.style.animation = "sparkleEffect 0.6s ease-out forwards";
            
            this.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 600);
        });
    });
});

// Función para hacer que los elementos respondan al mouse
document.addEventListener("mousemove", function(e) {
    const petals = document.querySelectorAll(".petal");
    
    petals.forEach(petal => {
        const rect = petal.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 150) {
            const moveX = (deltaX / distance) * 10;
            const moveY = (deltaY / distance) * 10;
            petal.style.transform = `translate(${moveX}px, ${moveY}px) rotate(45deg)`;
        } else {
            petal.style.transform = "translate(0, 0) rotate(45deg)";
        }
    });
});

// Agregar estilos de animación dinámicamente
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeOut {
        from { 
            opacity: 1; 
            transform: scale(1); 
        }
        to { 
            opacity: 0; 
            transform: scale(0.9); 
        }
    }
    
    @keyframes heartFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes sparkleEffect {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5);
        }
    }
`;
document.head.appendChild(style);

// Efecto de scroll suave
document.addEventListener("DOMContentLoaded", function() {
    // Hacer que el scroll sea más suave
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Efecto parallax suave para el header
    window.addEventListener("scroll", function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector(".romantic-header");
        
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
            header.style.opacity = Math.max(0.3, 1 - scrolled / 500);
        }
    });
});

// Mensaje de bienvenida en consola (easter egg)
console.log("💖 Página hecha con amor para Eli 💖");
console.log("🌹 Elizabeth, espero que te guste 🌹");


