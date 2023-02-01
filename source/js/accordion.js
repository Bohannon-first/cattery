import {faqAnswerContainer} from './faq.js';

const btnsShowMore = document.querySelectorAll('.care-list__button');
const hiddenDescAllCare = document.querySelectorAll('.care-list__desc-show-more');
const careList = document.querySelector('.care-list');
const btnsFaqMore = document.querySelectorAll('.faq__button');

// Закрыть все аккордеоны(если открыты) в блоке care при клике на document
const closeHiddenDescAlls = (itemText) => {
  itemText.classList.add('remove-accordion', 'remove-faq-answer');
  setTimeout(() => {
    itemText.classList.add('hidden');
    itemText.classList.remove('remove-accordion', 'remove-faq-answer');
  }, 500);

  // Повернуть обратно стрелку в кнопке
  btnsShowMore.forEach((button) => {
    button.querySelector('.care-list__svg').style.transform = 'rotate(-5deg)';
  });

  // Повернуть вертикально палочку в плюсе
  btnsFaqMore.forEach((btn) => {
    btn.querySelector('.faq__button-vertical-line').style.transform = 'rotate(90deg)';
  });
};

// Обработчик клика на кнопку аккордеона в блоке care
const careListClickHandler = (evt) => {
  if (evt.target.closest('.care-list__item')) {
    const pressedButton = evt.target.closest('.care-list__item').querySelector('.care-list__button');
    hiddenDescAllCare.forEach((desc) => {
      if (pressedButton.dataset.desc === desc.dataset.desc) {
        if (desc.classList.contains('hidden')) {
          desc.classList.remove('hidden');
          pressedButton.querySelector('.care-list__svg').style.transform = 'rotate(90deg)';
        } else {
          desc.classList.add('remove-accordion');
          pressedButton.querySelector('.care-list__svg').style.transform = 'rotate(-5deg)';
          setTimeout(() => {
            desc.classList.add('hidden');
            desc.classList.remove('remove-accordion');
          }, 500);
        }
      }
    });
  }
};

careList.addEventListener('click', careListClickHandler);

// Функция закрытия всех аккордеонов при клике на document
const closeHiddenDesc = (evt) => {
  if (evt.target.closest('.care-list') || evt.target.closest('.faq__list')) {
    return false;
  }
  hiddenDescAllCare.forEach((desc) => {
    if (!desc.classList.contains('hidden')) {
      closeHiddenDescAlls(desc);
    }
  });
  faqAnswerContainer.forEach((answer) => {
    if (!answer.classList.contains('hidden')) {
      closeHiddenDescAlls(answer);
    }
  });
};

document.addEventListener('click', closeHiddenDesc);
