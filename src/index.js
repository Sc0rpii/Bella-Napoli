const toggle = document.getElementById('menu-toggle');
const menu   = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('is-open');

  menu.classList.toggle('opacity-0',    !isOpen);
  menu.classList.toggle('-translate-y-2', !isOpen);
  menu.classList.toggle('pointer-events-none', !isOpen);
  menu.classList.toggle('opacity-100',  isOpen);
  menu.classList.toggle('translate-y-0', isOpen);

  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');

  // Rimuovi il blocco scroll: non serve più con il dropdown
  // document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Chiudi cliccando su un link
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    menu.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
    menu.classList.remove('opacity-100', 'translate-y-0');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri menu');
  });
});