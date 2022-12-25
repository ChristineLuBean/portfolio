let lastScrollTop = 0;

// Get the navivation-bar element
const navBar = document.getElementById('navigation-bar');

// Get all sections with the 'fade-in' class
const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', function () {
  // Get the current scroll position
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  // Toggle the 'hidden' class on the navivation-bar based on the scroll direction
  if (currentScrollTop > lastScrollTop) {
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;

  // Add the 'visible' class to sections in the viewport
  for (section of sections) {
    const rect = section.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;
    if (top < window.innerHeight && bottom > 0) {
      section.classList.add('visible');
    }
  }
});
