///1 - 1.Створіть масив genres з елементами «Jazz» та «Blues». 
/// 2.Додайте «Рок-н-рол» до кінця.
/// 3.Виведіть у консоль перший елемент масиву.
/// 4.Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
/// 5.Видаліть перший елемент та виведіть його в консоль.
/// 6.Вставте «Country» та «Reggae» на початок масиву.

/////// 1.

const genres = ['Jazz', 'Blues'];

///// 2.

genres.push('Rock-n-roll');

///// 3.

console.log(genres[0]);

///// 4.

console.log(genres[genres.length - 1]);

///// 5.

const first = genres[0];
genres.splice(0, 1);

console.log(first);

//// or :

console.log(genres.shift());

///// 6.

genres.unshift(['Country', 'Reggae']);



////2 - Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. 
///Значення гарантовано розділені пробілом.

const values = '8 11';

const arr = values.split(' ');

const S = Number.parseInt(arr[0]) * Number.parseInt(arr[1]);

console.log(S);

/// 3 - Напиши скрипт для перебору масиву fruits циклом for.
/// Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. 
/// Нумерація елементів повинна починатися з 1 .

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

/// for

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i+1} : ${fruits[i]}`);
}

/// for of 

let i = 0;

for (const fruit of fruits) {
    i++;
    console.log(`${i} : ${fruit}`);
}

/// 4 - Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
/// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
/// Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArr = names.split(',');
const phonesArr = phones.split(',');

let i = 0;

for (const phone of phonesArr) {
    console.log(`${namesArr[i]} : ${phone}`);
    i++;
}


//// 5 - Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
//// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
//// Скрипт повинен працювати для будь-якого рядка.

const string = 'Welcome to the future';

const arr = string.split(' ');

arr.shift();
arr.pop();

for (const value of arr) {
    console.log(value);
}

//// 6 - Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

const string = 'Welcome to the future';

const arr = string.split('');

arr.reverse();

const result = arr.join('');

console.log(result);


/// 7 - Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

console.log(langs.sort());

//// or 

let result = [];

for (let i = 0; i < langs.length; i++) {
    for (let j = 0; j < i; j++) {
        if (langs[i] < langs[j]) {
            let temp = langs[i];
            langs[i] = langs[j];
            langs[j] = temp;
        }
    }
}

console.log(langs);

/// 8 - Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. 
/// Використовуй цикл для розв'язання задачі.


const numbers = [2, 17, 94, 1, 23, 37, -1, 100, -2];
let min = numbers[0];

for (const number of numbers) {
    if (min > number) {
        min = number;
    }
}

console.log(min); // -2
