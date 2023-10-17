// Pop-up //

const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];

const timeToAppear = 3000 // Milliseconds after which the pop-up will appear
const timeInterval = 60 * 1000; // <-- Modify this. Prevent the pop-up from reappearing when reloading: Insert interval in milliseconds.
let minutes = timeInterval / 1000 / 60; // Convert milliseconds to minutes

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    currentTime = new Date().getTime(); // current timestamp in milliseconds
    localStorage.setItem('modalClosed', currentTime.toString());
});

// // Close the pop-up by clicking outside the window
// window.addEventListener('click', (event) => {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//         currentTime = new Date().getTime(); // current timestamp in milliseconds
//         localStorage.setItem('modalClosed', currentTime.toString());
//     }
// });

const modalClosedTime = localStorage.getItem('modalClosed');
let currentTime = new Date().getTime();

if (!modalClosedTime || currentTime - modalClosedTime >= timeInterval) {
    setTimeout(() => {
        modal.style.display = 'block';
    }, timeToAppear);
}

// localStorage.removeItem('modalClosed'); //Uncomment to reset pop-up


const interval = document.getElementById('time-interval');

// Modify html paragraph based on set interval
if (minutes < 1) { 
    minutes = minutes * 60;
    interval.innerHTML = `${minutes} seconds`;
} 
else if (minutes === 1) { 
    interval.innerHTML = `${minutes} minute`;
}
else { 
    interval.innerHTML = `${minutes} minutes`;
}

// End of pop-up //




// Articles //

// Add click event listeners to category buttons
document.querySelectorAll('.category').forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.id;
        filterArticles(category);
    });
});

// Function to filter articles
const filterArticles = (category) => {
    const articles = document.querySelectorAll('.article');
    articles.forEach((article) => {
        if (article.getAttribute('data-category') === category || category === 'all') {
            article.style.display = ''; // Show the article
        } else {
            article.style.display = 'none'; // Hide the article
        }
    });
}

// End of articles //