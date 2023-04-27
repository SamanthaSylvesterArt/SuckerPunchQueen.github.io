window.addEventListener('DOMContentLoaded', (event) => {
    // Get all glow elements
    var glows = document.querySelectorAll('.glow');

    // Iterate over each glow element
    glows.forEach(glow => {
        // Generate a random animation duration between 1s and 5s
        var randomDuration = Math.random() * 4 + 1;

        // Set the animation duration for this glow element
        glow.style.animationDuration = randomDuration + 's';
    });
});
