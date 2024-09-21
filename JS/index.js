// Function to set the active dot
function setActiveDot() {
    const currentPage = window.location.hostname;
    const homeDot = document.getElementById('home-dot');
    const portfolioDot = document.getElementById('portfolio-dot');
    const devlogsDot = document.getElementById('devlogs-dot');

    // Remove active class from all dots
    homeDot.classList.remove('active');
    portfolioDot.classList.remove('active');
    devlogsDot.classList.remove('active');

    // Set active class based on the current page
    if (currentPage.includes('spiraldevs.xyz') && !currentPage.includes('portfolio') && !currentPage.includes('devlogs')) {
        homeDot.classList.add('active');
    } else if (currentPage.includes('portfolio')) {
        portfolioDot.classList.add('active');
    } else if (currentPage.includes('devlogs')) {
        devlogsDot.classList.add('active');
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', setActiveDot);