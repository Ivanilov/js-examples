///1 - Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.
// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  };

  getInfo = () => `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;

  updatePostCount = value => this.numberOfPosts += value;
};

const mango = new Blogger({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

////2 - Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.
// Додай методи класу:
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

class Storage {
  constructor(items) {
    this.items = items;
  };

  getItems = () => this.items;

  addItem = item => !this.items.includes(item) ? this.items.push(item) : null;

  removeItem = item => {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

/// 3 - Напиши клас User який створює об'єкт із властивостями login та email. 
// Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#email = email;
    this.#login = login;
  }

  get login () {
    return this.#login;
  };

  set login (value) {
    this.#login = value;
  };

  get email () {
    return this.#email;
  };

  set email (value) {
    this.#email = value;
  };
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie

// 4 - Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  };

  constructor(items) {
    this.items = items;
  };

  addNote = (note) => this.items.push(note);

  removeNote = (text) => {
    this.items = this.items.filter(note => note.text !== text);
  }

  updatePriority = (text, newPriority) => {
    this.items = this.items.map(note => ({...note, priority: note.text === text ? newPriority: note.priority }));
  }
}


const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя друга замітка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя перша замітка');
console.log(myNotes.items);

myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
console.log(myNotes.items);

// 5 - Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean}
// і оголошує одну властивість on - стан вкл/викл (true/false).
// За замовчуванням значення властивості on повинно бути false.

class Toggle {
  constructor({ isOpen } = false) {
    this.on = isOpen || false;
  };

  toggle = () => this.on = !this.on;
};

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');