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

// progress bar

document.addEventListener('DOMContentLoaded', () => {
    const currentProgress = 30; // change here to update progress
    const totalProgress = 1000;

    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    const progressText = document.getElementById('progressText');

    const percentage = (currentProgress / totalProgress) * 100;

    // Update the progress bar and text
    progressFill.style.width = percentage + '%';
    progressPercentage.textContent = percentage.toFixed(1) + '%' + ' of goal';
    progressText.textContent = `Progress: ${currentProgress} / ${totalProgress} Stores`;
});

const currentProgress = 30; // change here to update progress
const totalStoresGoal = 1000;
const startDate = new Date('2024-07-01');
const today = new Date();

const progressFill = document.getElementById('progressFill');
const progressPercentage = document.getElementById('progressPercentage');
const progressText = document.getElementById('progressText');
const expectedCompletionText = document.getElementById('expectedCompletionText');
const elapsedDaysText = document.getElementById('elapsedDaysText');
const averageDaysPerStoreText = document.getElementById('averageDaysPerStoreText');

const elapsedDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)); // Days elapsed
const averageDaysPerStore = elapsedDays / currentProgress; // Average days it takes to complete 1 store

const percentage = (currentProgress / totalStoresGoal) * 100;

// Update progress bar and text
progressFill.style.width = percentage + '%';
progressPercentage.textContent = percentage.toFixed(1) + '%';
progressText.textContent = `Progress: ${currentProgress} / ${totalStoresGoal} Stores`;

// Display elapsed days and average days per store as text
elapsedDaysText.textContent = `Days elapsed: ${elapsedDays}`;
averageDaysPerStoreText.textContent = `Average days to complete a store: ${averageDaysPerStore.toFixed(2)}`;

// Estimate completion date
const remainingStores = totalStoresGoal - currentProgress;
const estimatedDaysToComplete = Math.ceil(remainingStores * averageDaysPerStore);

const expectedCompletionDate = new Date();
expectedCompletionDate.setDate(today.getDate() + estimatedDaysToComplete);

const formattedDate = expectedCompletionDate.toLocaleDateString();

expectedCompletionText.textContent = `Expected date of completion: ${formattedDate}`;