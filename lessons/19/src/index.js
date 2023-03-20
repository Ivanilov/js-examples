import './index.css';

import { getNews } from '../../19/src/modules/apiClient';
import { renderNews, createCollection } from './modules/news';

const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', e => {
    e.preventDefault();
    getNews(document.querySelector('#search-input').value)
        .then(
            response => renderNews(createCollection(response.articles, 10))
        )
        .catch(e => console.error(e));
});

console.log(process.env);