///1 - Напиши скрипт, який для об'єкта user, послідовно:
/// додає поле mood зі значенням 'happy'
/// замінює значення hobby на 'skydiving'
/// замінює значення premium на false
/// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key} : ${user[key]}`);
}


////2 - У нас є об'єкт, де зберігаються зарплати нашої команди.
/// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
/// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for(const value of Object.values(salaries)) {
    sum += value;
}

console.log(sum);

/// 3 - Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. 
/// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
    { name: 'Смарагд', price: 1300, quantity: 4 },
    { name: 'Діамант', price: 2700, quantity: 3 },
    { name: 'Сапфір', price: 400, quantity: 7 },
    { name: 'Щебінь', price: 200, quantity: 2 },
    { name: 'Смарагд', price: 1300, quantity: 4 },
];


const calcTotalPrice = function(stones, stoneName) {
    let result = 0;
    for (const stone of stones) {
        result += stone.name === stoneName ? stone.price * stone.quantity : 0;
    }
    return result;
};

console.log(calcTotalPrice(stones, 'Смарагд'));

/// 4 - Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
/// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],

    currentId: 0,
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {
        return {
            amount,
            type,
            id: this.generateId()
        };
    },
  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.addToHistory(transaction);
        this.balance += amount;
    },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            this.displayError('Недостатньо коштів!');
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.addToHistory(transaction);
        this.balance -= amount;
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        for (const row of this.transactions) {
            if (row.id === id) {
                return row;
            }
        }
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let result = 0;
        for (const row of this.transactions) {
            result += row.type === type ? row.amount : 0;
        }
        return result;
    },

    /*
     * Метод додає транзакцію до історії
     */
    addToHistory(transaction) {
        this.transactions.push(transaction);
    },

    /*
     * Метод додає транзакцію до історії
     */
    generateId() {
        return this.currentId + 1;
    },

    displayError(message) {
        console.log(message);
    }
  };

  account.deposit(500);
  console.log(1);
  account.withdraw(250);
  console.log(2);
  account.withdraw(1000);
  console.log(3);
  console.log(account.getBalance());
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
  console.log(account.getTransactionDetails(1));