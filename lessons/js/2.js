///1 - Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". 
/// Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

const input = prompt('Яка офіційна назва JavaScript?');

if (input.toLowerCase() === 'ecmascript') {
    alert('Правильно!');
} else {
    alert('Не знаєте? ECMAScript!');
}

////2 - Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". 
///Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}
console.log(timestring);

/// 3 - Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. 
/// Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

const userInput = prompt('Введіть число');

if (Number(userInput) > 0) {
    console.log('Це позитивне числ');
} else if (Number(userInput) === 0) {
    console.log('Це нуль');
} else if (Number(userInput) < 0) {
    console.log('Це негативне число');
} else {
    console.log('Помилка!');
}

/// 4 - Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них.
/// В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
    console.log(a > b ? a : b);
} else {
    console.log(b + 512);
}


//// 5 - Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

let link = 'https://my-site.com/about';

if (!link.endsWith('/')) {
    link += '/';
}
console.log(link);

//// 6 - Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
/// Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

let link = 'https://somesite.com/about';

if (!link.endsWith('/') && link.includes('my-site')) {
    link += '/';
}
console.log(link);


/// 7 - Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

let link = 'https://somesite.com/about';

link += !link.endsWith('/') && link.includes('my-site') ? '/' : '';

console.log(link);

/// 8 - Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
/// Якщо значення змінної hours:
/// - менше 17, виводь рядок "Pending"
/// - більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
/// - більше 24 , виводь рядок "Overdue"


const hours = 10;

if (hours < 17) {
    console.log('Pending');
} else if (hours >= 17 && hours <= 24) {
    console.log('Expires');
} else {
    console.log('Overdue');
}

/// 9 - Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.
/// - Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
/// - Якщо до дедлайну 1 день - виведи рядок "Завтра"
/// - Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
/// - Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log('Сьогодні');
} else if (daysUntilDeadline === 1) {
  console.log('Завтра');
} else if (daysUntilDeadline === 2) {
  console.log('Післязавтра');
} else {
  console.log('Дата у майбутньому');
}

/// 10 - Виконай рефакторинг коду задачі номер 5 використовуючи switch.

const daysUntilDeadline = 0;

switch (daysUntilDeadline) {
    case (daysUntilDeadline < 0 ? daysUntilDeadline : null):
        console.log('Error');
        break;
    case 0:
        console.log('Сьогодні');
        break;
    case 1:
        console.log('Завтра');
        break;
    case 2:
        console.log('Післязавтра');
        break;
    default:
        console.log('Дата у майбутньому');
        break;
}

/// 11 - Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

const max = 100;
const min = 20;

for(let i = min; i <= max; i+=5) {
    console.log(i);
}

/// 12 - Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.
/// - Якщо відвідувач вводить "Адмін", то prompt запитує пароль
/// - якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
/// - В іншому випадку вивести рядок "Я вас не знаю"
/// - Пароль перевіряти так:

/// - Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
/// - Інакше виводити рядок "Невірний пароль"

const login = prompt('Ваш логін?');

if (!login) {
    console.log('Скасовано!');
} else if (login === 'Адмін') {
    const password = prompt('Пароль?');

    console.log(password === 'Я адмін' ? 'Здрастуйте!' : 'Невірний пароль');
} else {
    console.log('Я вас не знаю!');
}
