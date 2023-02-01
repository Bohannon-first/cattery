const petsIndicators = document.querySelector('.pets__indicators');
const petsIndicatorsButtons = petsIndicators.querySelectorAll('button');

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
