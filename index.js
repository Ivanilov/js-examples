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

images.forEach(imageElement => {
    const container = document.createElement('div');
    container.classList.add('gallery-item');

    const image = document.createElement('img');
    image.src = imageElement.src;
    image.alt = imageElement.title;
    image.dataset.title = imageElement.title;
    container.appendChild(image);

    imageElements.push(container);
});

galleryContainer.append(...imageElements);

galleryContainer.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    modal.style.display = 'block';
    modalTitle.textContent = event.target.dataset.title;
});

window.addEventListener('click', event => {
    if (event.target == closeBtn || event.target == modal) {
        modal.style.display = 'none';
    }
});