///Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

////1 - Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів. (Метод map)

const getModels = cars => cars.map(car => car.model);

console.table(getModels(cars));

/// 2 - Нехай функція makeCarsWithDiscount повертає новий масив об'єктів
// із змінним значенням властивості price залежно від переданої знижки. (Метод map)

const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({ ...car, price:  car.price - car.price * discount }));

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));

/// 3 - Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold. (Метод filter)

const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));

/// 4 - Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true. (Метод filter)

const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

console.table(getCarsWithDiscount(cars));

/// 5 - Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type. (Метод filter)

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));

/// 6 - Метод find

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));


/// 7 - Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount. (Метод sort)

const sortByAscendingAmount = cars => [...cars].sort((prevCar, nextCar) => prevCar.amount > nextCar.amount ? 1 : -1);

console.table(sortByAscendingAmount(cars));


/// 8 - Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price. (Метод sort)

const sortByDescendingPrice = cars => [...cars].sort((prevCar, nextCar) => prevCar.price < nextCar.price ? 1 : -1);

console.table(sortByDescendingPrice(cars));


/// 9 - Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі
// в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order. (Метод sort)

const sortByModel = (cars, order) => [...cars].sort((prevCar, nextCar) => {
  if (order === 'asc') {
    return prevCar.model > nextCar.model ? 1 : -1
  } else if (order === 'desc') {
    return prevCar.model < nextCar.model ? 1 : -1
  }
  return 0;
});

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));

/// 10 - Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount). (Метод reduce)

const getTotalAmount = cars => cars.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);

console.log(getTotalAmount(cars));

/// 11 - Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
// але тільки тих, які зараз на розпродажі. (Ланцюжки методів)

const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

console.table(getModelsOnSale(cars));

/// 12 - Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни. (Ланцюжки методів)

const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).sort((prev, current) => prev.price > current.price ? 1 : -1);

console.table(getSortedCarsOnSale(cars));