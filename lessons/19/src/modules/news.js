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
    newsContainer.innerHTML = '';
    const news = collection.map(article => {
        const li = document.createElement('li');
        li.classList.add('news-item');

        const title = document.createElement('h2');
        title.classList.add('news-title');
        title.textContent = article.title;
        li.append(title);

        const desc = document.createElement('p');
        desc.classList.add('news-content');
        desc.textContent = article.description;
        li.append(desc);

        const date = document.createElement('span');
        date.classList.add('news-date');
        date.textContent = article.date;
        li.append(date);

        return li;
    });

    newsContainer.append(...news);
};

const updateTotal = (total) => {

};

export { renderNews, createCollection };