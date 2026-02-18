
window.onload = function() {
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

    document.getElementById("greeting-header").innerText = greeting;
};

function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById('digital-clock').innerText = h + ":" + m + ":" + s;
}

setInterval(updateClock, 1000);

updateClock();