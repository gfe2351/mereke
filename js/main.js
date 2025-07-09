
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('.nav-link');
  const underline = document.querySelector('.nav-underline');
  const hoverUnderline = document.querySelector('.nav-hover-underline');

  function setUnderline(el, target) {
    const rect = el.getBoundingClientRect();
    const containerRect = nav.getBoundingClientRect();
    target.style.left = `${rect.left - containerRect.left}px`;
    target.style.width = `${rect.width}px`;
  }

  // Установка постоянной линии под активной ссылкой
  const activeLink = document.querySelector('.nav-link.active');
  setUnderline(activeLink, underline);

  // Наведение — отображение временной полоски
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      setUnderline(link, hoverUnderline);
      hoverUnderline.style.opacity = '1';
    });
    link.addEventListener('mouseleave', () => {
      hoverUnderline.style.opacity = '0';
    });
  });









  