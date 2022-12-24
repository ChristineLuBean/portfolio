let lastScrollTop = 0
// Get the navivation-bar element
const navBar = document.getElementById('navigation-bar')

window.onscroll = function () {
  // Get the current scroll position
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down - hide the navivation-bar
    navBar.classList.add('hidden')
  } else {
    // Scrolling up - show the navigation-bar
    navBar.classList.remove('hidden')
  }

  lastScrollTop = currentScrollTop

  // Get all sections with the 'fade-in' class
  const sections = document.querySelectorAll('.fade-in')
  for (section of sections) {
    // Get the bounding rectangle for each section
    const rect = section.getBoundingClientRect()
    // Calculate the top and bottom positions of the section
    const top = rect.top
    const bottom = rect.bottom
    if (top < window.innerHeight && bottom > 0) {
      // The section is in the viewport - add the 'visible' class
      section.classList.add('visible')
    }
  }
}

function toggleMenu() {
  // Toggle the 'navigation-bar-collapsed' class on the navigation-bar
  navBar.classList.toggle('navigation-menu-collapsed')
}
