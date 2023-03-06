import { createElementWithParams } from "./modules/helpers";

const body = document.querySelector('#app');

const text = createElementWithParams('h2', { textContent: 'Hello to real world!' });

body.append(text);