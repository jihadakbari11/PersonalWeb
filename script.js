// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-menu');

  toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show');
  });

  // Highlight active menu item based on current URL
  const links = menu.querySelectorAll('a');
  const currentPath = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
