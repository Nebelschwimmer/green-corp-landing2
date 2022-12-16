const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep (i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }

      i+=100;

      setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
      }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
  }

function initIncreaseNumberAnimation() {
  const element = document.querySelector('.features__clients-count');
  
  increaseNumberAnimationStep(0, element, 5000);
}








//Выбор цены на другое


document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input'); // Задание 1
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text"; // Задание 2
      
    formContainer.appendChild(input);
    document.querySelector(".form .form__submit").before(formContainer);; // Задание 3
  }
 
  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) { // Задание 5
    otherInput.remove() // Задание 4
  }
});

// Функция скролла

let animationInited = false;
function updateScroll() {
  window.addEventListener('scroll', updateScroll)
  if (window.scrollY > 0) {
  
  document.querySelector('header').classList.add('header__scrolled')}
  else {
    document.querySelector('header').classList.remove('header__scrolled')

  }
  // Запуск анимации увеличения числа 
  
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;
 
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation()}




}
<<<<<<< HEAD
updateScroll()

//Плавный скролл к ссылке на странице

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', onLinkClick);
}


function onLinkClick(event) {
  event.preventDefault()
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'})
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});
addSmoothScroll(document.querySelector('.more-button'));
=======




updateScroll()
>>>>>>> 4d6ed8294381c44565bbad8a9a1efdcbe1ad35a5
