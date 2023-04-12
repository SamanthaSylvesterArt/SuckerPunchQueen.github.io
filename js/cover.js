const cover = document.querySelector('.cover');

window.addEventListener('scroll', function() {
  // Calculate the opacity based on the amount scrolled
  const opacity = Math.max(0, Math.min(1, window.scrollY / 200));

  // Set the opacity of the cover element
  cover.style.opacity = opacity;
});
