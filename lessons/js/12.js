// 1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки

//html - 12.html

// css - 12.html

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);


//// 2. Додати в модалку логіку закриття при натисканні на кнопку Escape

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


///3. Створити форму реєстрації користувача за допомогою js де буде 2 поля 
//    1. Поле логіна
//    2. Поле пароль
//    3. Захаркодити вірні логін і пароль в константах
//    4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
//        1. Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо **h2**  з написом **“Вхід успішний”**
//        2. Якщо логі і пароль не співпадають з даними з констант в пункті 3с - показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**

const DEFAULTS = {
  PASSWORD: 'password',
  LOGIN: 'login'
};

const handleSuccess = () => {
  document.querySelector(".form").remove();
  const header = document.createElement('h2');
  header.textContent = 'Вхід успішний';
  document.body.querySelector('#app').append(header)
};

const handleError = () => {
  const errorText = document.createElement('small');
  errorText.textContent = 'Логін або пароль не вірні';
  errorText.style.color = 'red';
  document.querySelector('.form').append(errorText);
}

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === DEFAULTS.LOGIN && password.value === DEFAULTS.PASSWORD) {
    handleSuccess();
    return;
  }
  handleError();
  event.currentTarget.reset();
};

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);
}