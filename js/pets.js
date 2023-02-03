const petsIndicators = document.querySelector('.pets__indicators');
const petsIndicatorsButtons = petsIndicators.querySelectorAll('button');
const carouselPets = document.querySelector('#carouselPets');
const carouselInnerPets = carouselPets.querySelectorAll('.gallery-images');

// Обработчик клика на кнопки слайдера в блоке pets
const petsIndicatorsClickHandler = (evt) => {
  // Проверить имеется ли класс active на кнопках, если есть то удалить
  if (evt.target.matches('button')) {
    petsIndicatorsButtons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
    // Записываем в переменную нажатую кнопку
    const clickedButton = evt.target;
    clickedButton.classList.add('active');
  }
};

petsIndicators.addEventListener('click', petsIndicatorsClickHandler);

// Обработчик клика на кнопки слайдера (лево, право)
const carouselPetsClickHandler = (evt) => {
  // Ищем нажатие на кнопки слайдера
  if (evt.target.closest('.pets__slider-btn-prev') || evt.target.closest('.pets__slider-btn-next')) {
    setTimeout(() => {
      carouselInnerPets.forEach((item, index) => {
        // Находим активный слайд в слайдере
        if (item.classList.contains('active')) {
          petsIndicatorsButtons.forEach((button) => {
            // Удаляем со всех кнопок в слайдере класс active (белый шрифт)
            button.classList.remove('active');
          });
          // Добавляем на активную кнопку класс active с белым шрифтом
          petsIndicatorsButtons[index].classList.add('active');
        }
      });
    }, 1000);
  }
};

carouselPets.addEventListener('click', carouselPetsClickHandler);
