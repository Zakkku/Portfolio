const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const changingText = document.getElementById('changing-text');
    const words = ['Web Developer   ', 'Software Engineer   ', 'E-commerce Expert   ', 'Shopify Specialist   ', 'React Developer   ', 'JavaScript Addict   ', 'Coding Evangelist   ', 'Pokémon Master'];
    let wordIndex = 0;
    let charIndex = 0;

    function typeText() {
        const currentWord = words[wordIndex];
        changingText.textContent = currentWord.substring(0, charIndex);

        if (charIndex < currentWord.length) {
            charIndex++;
        } else {
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setInterval(typeText, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentProgress = 11; // Current progress
    const totalProgress = 1000; // Total progress

    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    const progressText = document.getElementById('progressText');

    const percentage = (currentProgress / totalProgress) * 100;

    // Update the progress bar and text
    progressFill.style.width = percentage + '%';
    progressPercentage.textContent = percentage.toFixed(1) + '%'; // Use toFixed(1) for 1 decimal place
    progressText.textContent = `Progress: ${currentProgress} / ${totalProgress} Stores`;
});
