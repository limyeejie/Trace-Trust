let backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) { // Check if backToTopButton exists
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) { // Show backToTopButton after 100px from the top
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}