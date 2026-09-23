const btn = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });