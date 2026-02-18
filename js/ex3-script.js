// 1. Declare variables globally (but don't assign the element yet)
let ball;
let posX = 0;
let posY = 0;
let speedX = 4;
let speedY = 3;

function animateBall() {
    const court = document.getElementById("court").getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect(); // [cite: 175]

    posX += speedX;
    posY += speedY;

    if (posX + ballRect.width >= court.width || posX <= 0) {
        speedX *= -1; 
    }
    if (posY + ballRect.height >= court.height || posY <= 0) {
        speedY *= -1; 
    }

    // Apply movement using style attributes [cite: 182]
    ball.style.left = posX + "px";
    ball.style.top = posY + "px";

    // Log or display the position [cite: 176]
    const display = document.getElementById("pos-display");
    if(display) {
        display.innerText = `Position: X: ${Math.round(ballRect.left)}, Y: ${Math.round(ballRect.top)}`;
    }
}

// 2. The critical fix: Wait for the window to load 
window.onload = function() {
    ball = document.getElementById("ball"); // Assign the element now that it exists
    setInterval(animateBall, 20); // [cite: 180, 183]
};