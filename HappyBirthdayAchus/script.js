console.log("Welcome Achus ❤️");

// --- 1. Floating Emojis Animation ---
const container = document.querySelector(".floating-bg");
const emojis = ["💜", "🌸", "💗", "💓", "🌺", "💖", "✨", "🤍"];
const items = [];

if (container) {
    for (let i = 0; i < 35; i++) {
        const span = document.createElement("span");
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const size = 18 + Math.random() * 18;
        span.style.fontSize = size + "px";
        span.style.position = "absolute"; 

        container.appendChild(span);

        items.push({
            element: span,
            x: Math.random() * (window.innerWidth - 40),
            y: Math.random() * (window.innerHeight - 40),
            dx: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1),
            dy: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1)
        });
    }
}

function animate() {
    items.forEach(item => {
        item.x += item.dx;
        item.y += item.dy;

        if (item.x <= 0 || item.x >= window.innerWidth - 40) item.dx *= -1;
        if (item.y <= 0 || item.y >= window.innerHeight - 40) item.dy *= -1;

        item.element.style.left = item.x + "px";
        item.element.style.top = item.y + "px";
    });
    requestAnimationFrame(animate);
}
if (items.length > 0) animate();

// --- 2. Mobile Nav Menu Toggle ---
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        menuBtn.innerHTML = navMenu.classList.contains("show") ? "❌" : "💜";
    });
}

// --- 3. Custom Glow Track Pointer ---
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }
});

// --- 4. Transparent Loader Dismissal ---
function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000); 
    }
}
setTimeout(hideLoader, 2500);

// --- 5. Password Mechanics (v0.4) ---
const startBtn = document.getElementById("startBtn");
const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorMessage = document.getElementById("errorMessage");
const transitionScreen = document.getElementById("transitionScreen");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// --- 5. Password Mechanics & Music Kick-Start Engine (v0.9) ---
const SECRET_PASSWORD = "04112025"; 

if (startBtn && passwordScreen) {
    startBtn.addEventListener("click", () => {
        passwordScreen.classList.add("show");
    });
}

function checkPassword() {
    const userInput = passwordInput.value.trim().toLowerCase();
    
    if (userInput === SECRET_PASSWORD) {
        errorMessage.style.display = "none";
        passwordScreen.classList.remove("show"); 
        
        // --- 1. FORCE THE AUDIO TO PLAY IMMEDIATELY ON CLICK CONTEXT ---
        const music = document.getElementById('bgMusic');
        const controller = document.getElementById('musicController');
        const musicText = controller ? controller.querySelector('.music-text') : null;

        if (music) {
            music.volume = 1.0; // Max out volume so it's fully audible
            music.play().then(() => {
                if (controller && musicText) {
                    controller.classList.add('playing');
                    musicText.textContent = "Music On";
                }
            }).catch(err => {
                console.log("Browser blocked automated playback context:", err);
            });
        }
        
        // --- 2. RUN THE STORY MODE SCENE TRANSITION ---
        if (transitionScreen && page1) {
            transitionScreen.classList.add("show");
            setTimeout(() => {
                transitionScreen.classList.remove("show");
                page1.classList.add("show");
            }, 2500);
        }
    } else {
        errorMessage.style.display = "block";
        passwordInput.value = ""; 
    }
}

// 💡 THE IMPORTANT HOOKS: Making sure the buttons actually listen for actions!
if (unlockBtn && passwordInput) {
    unlockBtn.addEventListener("click", checkPassword);
    
    passwordInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            checkPassword();
        }
    });
}

// --- 6. Story Mode Page Turning & Automatic Scroll Auto-Hook (v0.5 + v0.6 Fix) ---
const nextPage = document.getElementById("nextPage");
const nextPage2 = document.getElementById("nextPage2");
const finishStoryBtn = document.getElementById("finishStoryBtn");

if (nextPage && page1 && page2) {
    nextPage.addEventListener("click", () => {
        page1.classList.remove("show");
        page2.classList.add("show");
    });
}

if (nextPage2 && page2 && page3) {
    nextPage2.addEventListener("click", () => {
        page2.classList.remove("show");
        page3.classList.add("show");
    });
}

if (finishStoryBtn && page3) {
    finishStoryBtn.addEventListener("click", () => {
        page3.classList.remove("show");
        
        const gallerySection = document.getElementById("gallerySection");
        if (gallerySection) {
            setTimeout(() => {
                gallerySection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    });
}

// --- 7. Nav Bar Anchor Smooth-Scroll Auto-Hooks (v0.6 / v0.7 / v0.8) ---
const navLinks = document.querySelectorAll('nav ul li a');

if (navLinks.length >= 4) {
    navLinks[0].setAttribute("href", "#homePage");
    navLinks[1].setAttribute("href", "#gallerySection");
    navLinks[2].setAttribute("href", "#videosSection");
    navLinks[3].setAttribute("href", "#letterSection");
    
    // Auto-collapse header bar options when triggering navigations on phone variants
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
                menuBtn.innerHTML = "💜";
            }
        });
    });
}

// --- 8. Interactive Envelope Click Controller (v0.8 Fixes) ---
const envelope = document.getElementById("envelope");

if (envelope) {
    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open");
    });
}
// ==========================================
// 🎵 v0.9 Background Music Autoplay Engine
// ==========================================
const music = document.getElementById('bgMusic');
const controller = document.getElementById('musicController');
const musicText = controller.querySelector('.music-text');

// Set comfortable background volume level
// Change this line from 0.4 to 1.0
if (music) {
    music.volume = 1.0; 
}
function handleMusicPlaySuccess() {
    controller.classList.add('playing');
    musicText.textContent = "Music On";
}

// Manual Toggle Button Handler
function toggleMusic() {
    if (music.paused) {
        music.play().then(handleMusicPlaySuccess).catch(err => console.log(err));
    } else {
        music.pause();
        controller.classList.remove('playing');
        musicText.textContent = "Music Off";
    }
}

// Force music to kick in on first user interaction (Loader click, password entry, etc.)
function activateAutoplay() {
    if (music && music.paused) {
        music.play()
            .then(() => {
                handleMusicPlaySuccess();
                // Clean up event listeners once music is successfully running
                document.removeEventListener('click', activateAutoplay);
                document.removeEventListener('keydown', activateAutoplay);
            })
            .catch(err => console.log("Waiting for closer user interaction..."));
    }
}

// Attempt to play immediately on load (will work if browser permission allows)
window.addEventListener('DOMContentLoaded', () => {
    music.play().then(handleMusicPlaySuccess).catch(() => {
        console.log("Autoplay held by browser. Activating interaction triggers.");
    });
});

// Fallback: Listen for any initial click or keypress on the site to launch the audio
document.addEventListener('click', activateAutoplay);
document.addEventListener('keydown', activateAutoplay);