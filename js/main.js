
// ----------------------------------------------------------------------------------------------------
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

  
  const activeLink = document.querySelector('.nav-link.active');
  setUnderline(activeLink, underline);


  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      setUnderline(link, hoverUnderline);
      hoverUnderline.style.opacity = '1';
    });
    link.addEventListener('mouseleave', () => {
      hoverUnderline.style.opacity = '0';
    });
  });
// ----------------------------------------------------------------------------------------------------


  const pricePerUnit = 2000;                                        // Цена за 1 товар
  const quantityInput = document.getElementById('gf-quantity');
  const totalPriceEl = document.getElementById('gf-total-price');
  const decreaseBtn = document.getElementById('gf-quantity-decrease');
  const increaseBtn = document.getElementById('gf-quantity-increase');

  function updatePrice() {
    let quantity = parseInt(quantityInput.value);

    // Защита от некорректных значений
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
      quantityInput.value = 1;
    }
// ----------------------
    const total = pricePerUnit * quantity;
    totalPriceEl.textContent = total.toLocaleString('ru-RU') + ' ₸';
  }

  increaseBtn.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updatePrice();
  });

  decreaseBtn.addEventListener('click', () => {
    let current = parseInt(quantityInput.value);
    if (current > 1) {
      quantityInput.value = current - 1;
      updatePrice();
    }
  });

  // Обработка ввода вручную (при потере фокуса или нажатии Enter)
  quantityInput.addEventListener('input', updatePrice);
  quantityInput.addEventListener('blur', updatePrice);

  // Инициализация
  updatePrice();





  