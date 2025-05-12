// JavaScript to change the background color on button click
document.getElementById("changeColorButton").addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.background = randomColor;
});

// Function to generate random gradient colors
function getRandomColor() {
    const colors = [
        "linear-gradient(45deg, #ff6b6b, #f0e130)",
        "linear-gradient(45deg, #6b6bff, #e130f0)",
        "linear-gradient(45deg, #0ff, #ff0)",
        "linear-gradient(45deg, #f06, #0f6)",
        "linear-gradient(45deg, #ff4500, #32cd32)"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
