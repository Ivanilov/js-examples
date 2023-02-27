// 1. Створити калькурялтор вартості продукту взалежності від ціни. 
// При роботі з подіями використовувати делагування. Відрендерити всю розмітку через JS
// При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// Завжди має відображатися валюта - гривня
// Загальна сума відображається з копійками (2 знаки після коми)
// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// В інпуті №2 мін і мах поріг встановлюєте самостійно.
// При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням 
// які ви встановите в розмітці.

//html - 13.html

// css - 13.css

const form = document.querySelector('form');
const total = document.querySelector('#total');
const amount = form.querySelector('.amount');

const recalculateTotal = () => {
    const { quantity: { value: qty }, price: { value: priceValue }} = form.children;
    total.textContent = Number(priceValue * qty).toFixed(2);
    amount.textContent = qty;
};

form.addEventListener('change', recalculateTotal);

recalculateTotal();

//// 2. Створити гелерею з картинок використовуючи масив

// При кліку на картинку показувати модалку з написом що зберігіється в полі title.
// Використовувати делегування при обробці кліків

const images = [
	{
		"title": "Коник стрибунець",
		"src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg" 
	},
	{
		"title": "Фрукт",
		"src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
	},
	{
		"title": "Люди",
		"src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
	},
	{
		"title": "Годиник",
		"src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg" 
	},
	{
		"title": "Метро",
		"src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
	},
	{
		"title": "Хмари",
		"src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
	},
];

const galleryContainer = document.querySelector('.gallery-container');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const closeBtn = document.querySelector('.close');
const imageElements = [];


// Fill gallery with images from the array
images.forEach(image => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.title;
  galleryItem.appendChild(img);
  imageElements.push(galleryItem);
});

galleryContainer.append(...imageElements);

galleryContainer.addEventListener('click', (event) => {
    if (event.target.nodeName === 'IMG') {
        modalTitle.textContent = event.target.alt;
        modal.style.display = 'block';
    }
})

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal || event.target == closeBtn) {
    modal.style.display = 'none';
  }
});