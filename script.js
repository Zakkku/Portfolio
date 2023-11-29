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
    const words = ['Web Developer   ', 'Software Engineer   ', 'E-commerce Expert   ', 'Shopify Specialist   ', 'App Developer   ', 'JavaScript Addict   ', 'Pokémon Master'];
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
