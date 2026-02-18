const form = document.querySelector("form");
const emailField = document.querySelector("input[name='email']");
form.addEventListener("submit", function (e) {
    if (!emailField.value.includes("@")) {
        alert("Enter a valid email");
        e.preventDefault();
        return;
    }
});
let submitTimes = []; // stores timestamps of recent submissions
function isRateLimited() {
const now = Date.now();
// Keep only submissions from the last 60 seconds
submitTimes = submitTimes.filter(time => now - time < 60000);
// If already 3 submissions, block
if (submitTimes.length >= 3) {
return true;
}
// Otherwise, record this submission
submitTimes.push(now);
return false;
}
// Example usage inside submit event:
form.addEventListener("submit", (e) => {
if (isRateLimited()) {
e.preventDefault();
alert("Too many submissions. Please wait a minute.");
}
});
// Record when the form loads
const formLoadTime = Date.now();
function isTooFast() {
const submitTime = Date.now();
const secondsTaken = (submitTime - formLoadTime) / 1000;
return secondsTaken < 2;
}
form.addEventListener("submit", (e) => {
if (isTooFast()) {
e.preventDefault();
alert("Submission was too fast. Please try again.");
}
});
const spamWords = ["free money", "buy now", "click here",
"subscribe", "promo", "bet88", "you won", "win easy"];
function containsSpam(message) {
const lowerMessage = message.toLowerCase();
return spamWords.some(word => lowerMessage.includes(word));
}
form.addEventListener("submit", (e) => {
const message = document.querySelector("#message").value;
if (containsSpam(message)) {
e.preventDefault();
alert("Your message contains blocked spam keywords.");
}
});