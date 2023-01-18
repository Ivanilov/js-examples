///1 - Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
/// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
/// Вага та висота будуть спеціально передані як рядки.
/// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
/// Індекс маси тіла необхідно округлити до однієї цифри після коми;

function calcBMI(weight, height) {
    const weightNum = Number(weight.replace(',', '.'));
    const heightNum = Number(height.replace(',', '.'));
    const result = weightNum / (heightNum * heightNum);
    return result.toFixed(1);
};

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8


////2 - Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

function min (a, b) {
    return a < b ? a : b;
}


console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

/// 3 - Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
/// значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
    const arr = dimensions.split(' ');
    return Number.parseInt(arr[0]) * Number.parseInt(arr[1]);
}

console.log(getRectArea('8 11'));

/// 4 - Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
/// який для кожного елемента масиву буде виводити в консоль повідомлення
/// у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.
/// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

function logItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(`${i+1} : ${items[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


//// 5 - Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. 
/// У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. 
/// Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

function printContactsInfo(names, phones) {
    const namesArr = names.split(',');
    const phonesArr = phones.split(',');

    for (let i = 0; i < namesArr.length; i++) {
        console.log(`${namesArr[i]} : ${phonesArr[i]}`);
    }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);

//// 6 - Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

function findLargestNumber(numbers) {
    let max = numbers[0];
    for(const number of numbers) {
        max = number > max ? number : max;
    }
    return max;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83


/// 7 - Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
/// Усі аргументи будуть лише числами.

function calAverage(...args) {
    let avr = 0;
    for(const arg of args) {
        avr += arg;
    }
    return avr / args.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


//// or

function calAverage() {
    let avr = 0;
    for(const arg of arguments) {
        avr += arg;
    }
    return avr / arguments.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

/// 8 - Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minutes).padStart(2, 0);
    return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"


/// 9 - Напишіть функції для роботи з колекцією навчальних курсів courses:
/// addCourse(name) - додає курс до кінця колекції
/// removeCourse(name) - видаляє курс із колекції
/// updateCourse(oldName, newName) - змінює ім'я на нове

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {
    if (!courses.includes(name)) {
        courses.push(name);
    } else {
        console.log('Ви вже маєте такий курс');
    }
};

const removeCourse = function(name) {
    const index = courses.indexOf(name);
    if (index === -1) {
        console.log('Курс із таким ім\'ям не знайдено');
        return;
    }
    courses.splice(index, 1);
};

const updateCourse = function(oldName, newName) {
    const index = courses.indexOf(oldName);
    if (index === -1) {
        console.log('Курс із таким ім\'ям не знайдено');
        return;
    }
    courses[index] = newName;
};

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
updateCourse('Express', 'NestJS');
