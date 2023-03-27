import './index.css';
import { addItem, onCheck, listDOM, initList } from './modules/list';
import { input } from './modules/input';

initList();
document.querySelector('.addBtn').addEventListener('click', () => addItem(input.value));
listDOM.addEventListener('click', onCheck);