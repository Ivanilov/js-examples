import './index.css';
import { addItem, onCheck, listDOM, initStorageList } from './modules/list';
import { input } from './modules/input';

initStorageList();
document.querySelector('.addBtn').addEventListener('click', () => addItem(input.value));
listDOM.addEventListener('click', onCheck);