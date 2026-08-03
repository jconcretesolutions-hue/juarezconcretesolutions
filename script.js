const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

const closeMenu = () => {
  if (!menu || !nav) return;

  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
};

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

const estimateSection = document.querySelector('#estimate');

if (estimateSection) {
  document.querySelectorAll('a[href="#estimate"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      closeMenu();
      estimateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '#estimate');

      window.setTimeout(() => {
        estimateSection.querySelector('input:not([type="hidden"]), select, textarea')?.focus({ preventScroll: true });
      }, 500);
    });
  });
}

const dialog = document.querySelector('#lightbox');

if (dialog) {
  const image = dialog.querySelector('img');

  document.querySelectorAll('.photo').forEach((photo) => {
    photo.addEventListener('click', () => {
      image.src = photo.dataset.src;
      dialog.showModal();
    });
  });

  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
