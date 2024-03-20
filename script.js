//slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

// Show the first slide immediately
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

// Auto slide
let autoSlideInterval = setInterval(() => {
  nextSlide();
}, 2000);

// Stop auto slide on hover
document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

// Resume auto slide on mouse leave
document.querySelector('.slider').addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 2000);
});

// Add scroll effect
window.addEventListener('scroll', function() {
  var slider = document.querySelector('.slider');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) { /* adjust this value to control when the fade-out starts */
      slider.classList.add('fade-out');
  } else {
      slider.classList.remove('fade-out');
  }
});

// Overlay content
let contentIndex = 0;
const contents = document.querySelectorAll('.overlay-content');
const totalContents = contents.length;

function showContent() {
    let i;
    for (i = 0; i < totalContents; i++) {
        contents[i].style.display = "none";  
    }
    contentIndex++;
    if (contentIndex > totalContents) {contentIndex = 1}    
    contents[contentIndex-1].style.display = "block";  
}

// Show the first content immediately
showContent();

// Show content every 3 seconds
setInterval(showContent, 3000);

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