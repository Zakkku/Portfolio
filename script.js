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
    const words = ['Web Developer', 'Software Engineer', 'E-commerce Expert', 'Shopify Specialist', 'App Developer', 'JavaScript Addict', 'Pokemon Master'];
    let index = 1;

    function changeText() {
        changingText.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeText, 1300);
});
