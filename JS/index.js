// Add active class to the correct dot for the current page
const currentPage = window.location.pathname;

if (currentPage.includes("portfolio")) {
    document.getElementById('portfolio-dot').classList.add('active');
} else if (currentPage.includes("devlogs")) {
    document.getElementById('devlogs-dot').classList.add('active');
}
