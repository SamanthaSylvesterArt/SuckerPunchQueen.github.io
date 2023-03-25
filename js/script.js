const hoverEffect = document.getElementById('hover-effect');

hoverEffect.addEventListener('mouseenter', function() {
  hoverEffect.style.backgroundColor = '#0062cc';
});

hoverEffect.addEventListener('mouseleave', function() {
  hoverEffect.style.backgroundColor = '#007bff';
});