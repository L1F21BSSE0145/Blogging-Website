// Show a welcome alert when the page loads
window.onload = function () {
    alert("Welcome to Our Website!");
    updateTime(); // Update time on page load
};

// Function to update and display current time
function updateTime() {
    const timeElement = document.getElementById("current-time");
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = `Current Time: ${now.toLocaleTimeString()}`;
    }
}

// Update time every second
setInterval(updateTime, 1000);

// Function to change the welcome message when clicked
function changeMessage() {
    const heading = document.getElementById("welcome-message");
    if (heading) {
        heading.textContent = "Have a great day!";
        heading.style.color = "#ff4081";
    }
}

// Attach event listener to welcome message
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("welcome-message");
    if (heading) {
        heading.addEventListener("click", changeMessage);
    }
});
