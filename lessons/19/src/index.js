import './index.css';

import { getNews } from '../../19/src/modules/apiClient';
import {
    renderNews,
    createCollection,
    updateTotal,
    updateLoadButton,
    clearArticles
} from './modules/news';

const searchBtn = document.querySelector('#searchBtn');
let searchState = '';
let pageState = 1;

const fetchNews = (search, page) => getNews(search, page)
    .then(
        response => {
            renderNews(createCollection(response.articles));
            updateLoadButton(page);
            updateTotal(response.totalResults);
        }
    )
    .catch(e => console.log(e));

searchBtn.addEventListener('click', e => {
    e.preventDefault();
    const search = document.querySelector('#search-input').value;
    if (search !== searchState) {
        searchState = search;
        pageState = 1;
        clearArticles();
        fetchNews(search, 1);
    }
});

document.querySelector('.load').addEventListener('click', () => {
    const page = document.querySelector('.load').dataset.page;
    const search = document.querySelector('#search-input').value;
    fetchNews(search, page);
});