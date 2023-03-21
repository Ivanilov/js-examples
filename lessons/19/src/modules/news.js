class News {
    constructor(title, description, date, url) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.url = url;
    };
};

const createCollection = (news, count) => {
    const collection = news.slice(0, count);
    return collection.map(({ title, description, url, publishedAt }) => (new News(title, description, publishedAt, url)));
};

const renderNews = (collection) => {
    const newsContainer = document.querySelector('.news-list');
    const news = collection.map(article => {
        const li = document.createElement('li');
        li.classList.add('news-item');

        const link = document.createElement('a');
        link.href = article.url;
        link.target = 'blank';
        li.append(link);

        const title = document.createElement('h2');
        title.classList.add('news-title');
        title.textContent = article.title;
        link.append(title);

        const desc = document.createElement('p');
        desc.classList.add('news-content');
        desc.textContent = article.description;
        li.append(desc);

        const date = document.createElement('span');
        date.classList.add('news-date');
        const dateTime = (new Date(article.date));
        date.textContent = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
        li.append(date);

        return li;
    });

    newsContainer.append(...news);
};

const updateTotal = (total) => {
    let el = document.querySelector('.total');
    if (!el) {
        el = document.createElement('label');
        el.classList.add('total');
        const container = document.querySelector('.search-form');
        container.append(el);
    }
    
    el.textContent = `Total articles: ${total}`;
};

const updateLoadButton = (currentPage) => {
    const btn = document.querySelector('.load');
    btn.style.display = 'block';
    btn.dataset.page = Number(currentPage) + 1;
};

const clearArticles = () => {
    const newsContainer = document.querySelector('.news-list');
    newsContainer.innerHTML = '';
};

export {
    renderNews,
    createCollection,
    updateTotal,
    updateLoadButton,
    clearArticles
};