document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.main-menu');
  const menuLinks = menu.querySelectorAll('a');

  // Mostrar/Ocultar el menú al hacer clic en el ícono de menú hamburguesa
  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });

  // Cerrar el menú al hacer clic en un enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.style.display = 'none';
      menuToggle.checked = false; // Desmarca el checkbox
    });
  });
});