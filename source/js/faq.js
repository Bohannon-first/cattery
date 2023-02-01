const faqAnswerContainer = document.querySelectorAll('.faq__answer-container');

const faqList = document.querySelector('.faq__list');

// Обработчик клика на аккордеон в блоке faq
const faqListClickHandler = (evt) => {
  if (evt.target.closest('.faq__list-item')) {
    const pressedButton = evt.target.closest('.faq__list-item').querySelector('.faq__button');
    faqAnswerContainer.forEach((answer) => {
      if (pressedButton.dataset.faq === answer.dataset.faq) {
        if (answer.classList.contains('hidden')) {
          answer.classList.remove('hidden');
          pressedButton.querySelector('.faq__button-vertical-line').style.transform = 'rotate(180deg)';
        } else {
          answer.classList.add('remove-faq-answer');
          pressedButton.querySelector('.faq__button-vertical-line').style.transform = 'rotate(90deg)';
          setTimeout(() => {
            answer.classList.add('hidden');
            answer.classList.remove('remove-faq-answer');
          }, 500);
        }
      }
    });
  }
};

faqList.addEventListener('click', faqListClickHandler);

export {faqAnswerContainer};
