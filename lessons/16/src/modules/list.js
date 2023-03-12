import { clearInput } from "./input";

const listDOM = document.querySelector('#list');

const addItem = (text = '') => {
    if (!text) {
        return alert('You must write something!');
    }
    const element = createItemElement(text);
    clearInput();
    listDOM.append(element);
    const removeBtn = createItemRemoveBtn();
    element.append(removeBtn);
    updateStorageList();
    return element;
};

const createItemElement = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
};

const createItemRemoveBtn = () => {
    const span = document.createElement('span');
    span.textContent = 'X';
    span.classList.add('close');
    span.addEventListener('click', onRemove);
    return span;
};

const onRemove = (event) => {
    event.currentTarget.parentNode.style.display = 'none';
    updateStorageList();
};

const onCheck = (event) => {
    if (event.target.nodeName === 'LI') {
        checkItem(event.target);
        updateStorageList();
    }
};

const checkItem = (node) => node.classList.toggle('checked');

const initStorageList = () => {
    try {
        const list = JSON.parse(localStorage.getItem('list'));
        if (list.elements.length > 0) {
            list.elements.forEach(element => {
                const item = addItem(element.text);
                if (element.checked) {
                    checkItem(item);
                }
            });
        }
    } catch (error) {
        return;
    };
};

const updateStorageList = () => {
    //find all nodes and update local storage with objects
    let elements = [...listDOM.children];
    elements = elements.filter(element => element.style.display !== 'none').map(element => ({
        text: element.firstChild.textContent,
        checked: element.classList.contains('checked')
    }));
    const list = {
        elements: elements
    };
    // { elements: [{ text: 'Bla', checked: false }, { text: 'Test', checked: true }] }

    localStorage.setItem('list', JSON.stringify(list));
};

export { addItem, onCheck, listDOM, initStorageList };