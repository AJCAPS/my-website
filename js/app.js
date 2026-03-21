// --- Section 1: Time-Based Greeting ---
window.addEventListener('DOMContentLoaded', () => {
    let now = new Date();
    let hour = now.getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon!";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening!";
    } else {
        greeting = "Good Night!";
    }

    const greetingElement = document.getElementById("greeting-header");
    if (greetingElement) greetingElement.innerText = greeting;
});

// --- Section 2: Digital Clock (Checklist Item 1) ---
function updateClock() {
    const now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) clockElement.innerText = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// --- Section 3: Interactive Ball Physics ---
const court = document.getElementById('court');
const ball = document.getElementById('ball');
const posDisplay = document.getElementById('pos-display');

if (court && ball) {
    court.addEventListener('mousemove', (e) => {
        const rect = court.getBoundingClientRect();
        const x = e.clientX - rect.left - 15; // Centering the ball
        const y = e.clientY - rect.top - 15;
        
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
        
        if (posDisplay) {
            posDisplay.textContent = `Position: X: ${Math.round(x)}, Y: ${Math.round(y)}`;
        }
    });
}

// --- Section 4: Bootstrap ScrollSpy Logic (Checklist Item 4) ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));