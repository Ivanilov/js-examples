import { clearInput } from "./input";
import ApiClient from "./apiClient";

const listDOM = document.querySelector('#list');

const addItem = (text = '') => {
    if (!text) {
        return alert('You must write something!');
    }
    const element = createItemElement(text);
    clearInput();

    return ApiClient.addItem({ text, checked: false }).then(({ id }) => {
        addItemToDOM(element, id);
    });
};

const addItemToDOM = (element, id) => {
    listDOM.append(element);
    const removeBtn = createItemRemoveBtn();
    removeBtn.dataset.id = id;
    element.append(removeBtn);
    element.id = id;
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
    const target = event.currentTarget;
    return ApiClient.deleteItem(target.dataset.id).then(() => {
        target.parentNode.style.display = 'none';
    });
};

const onCheck = (event) => {
    if (event.target.nodeName === 'LI') {
        return ApiClient.updateItem(event.target.id, { checked: true }).then(() => {
            checkItem(event.target);
        });
    }
};

const checkItem = (node) => node.classList.toggle('checked');

const initList = () => {
    return ApiClient.getListItems().then(list => {
        console.log(list);
        if (list.length > 0) {
            list.forEach(element => {
                const item = addItemToDOM(createItemElement(element.text), element.id);
                if (element.checked) {
                    checkItem(item);
                }
            });
        }
    })
};

// const updateStorageList = () => {
//     //find all nodes and update local storage with objects
//     let elements = [...listDOM.children];
//     elements = elements.filter(element => element.style.display !== 'none').map(element => ({
//         text: element.firstChild.textContent,
//         checked: element.classList.contains('checked')
//     }));
//     const list = {
//         elements: elements
//     };

//     localStorage.setItem('list', JSON.stringify(list));
// };

export { addItem, onCheck, listDOM, initList };