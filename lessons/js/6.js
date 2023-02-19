///1 - Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

function calcBMI(weight, height) {
    const numericWeight = Number(weight.replace(',', '.'));
    const numericHeight = Number(height.replace(',', '.'));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
  }
  
  // Було
  // console.log(calcBMI('88,3', '1.75'));
  // console.log(calcBMI('68,3', '1.65'));
  // console.log(calcBMI('118,3', '1.95'));
  
  // Очікується
  console.log(
    calcBMI({
      weight: '88,3',
      height: '1.75',
    }),
  );
  console.log(
    calcBMI({
      weight: '68,3',
      height: '1.65',
    }),
  );
  console.log(
    calcBMI({
      weight: '118,3',
      height: '1.95',
    }),
  );

  ///
  function calcBMI({ weight, height }) {
    const numericWeight = Number(weight.replace(',', '.'));
    const numericHeight = Number(height.replace(',', '.'));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
  }
  
  // Було
  // console.log(calcBMI('88,3', '1.75'));
  // console.log(calcBMI('68,3', '1.65'));
  // console.log(calcBMI('118,3', '1.95'));
  
  // Очікується
  console.log(
    calcBMI({
      weight: '88,3',
      height: '1.75',
    }),
  );
  console.log(
    calcBMI({
      weight: '68,3',
      height: '1.65',
    }),
  );
  console.log(
    calcBMI({
      weight: '118,3',
      height: '1.95',
    }),
  );


////2 - Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

function printContactsInfo(names, phones) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
  }
  
  // Було
  // printContactsInfo(
  //   'Jacob,William,Solomon,Artemis',
  //   '89001234567,89001112233,890055566377,890055566300',
  // );
  
  // Очікується
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });


  //////

  function printContactsInfo({ names, phones }) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
  }
  
  // Було
  // printContactsInfo(
  //   'Jacob,William,Solomon,Artemis',
  //   '89001234567,89001112233,890055566377,890055566300',
  // );
  
  // Очікується
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });

/// 3 - Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

function getBotReport(companyName, repairBots, defenceBots) {
    return `${companyName} has ${repairBots + defenceBots} bots in stock`;
  }
  
  // Було
  // console.log(getBotReport('Cyberdyne Systems', 150, 50));
  
  // Очікується
  console.log(
    getBotReport({
      companyName: 'Cyberdyne Systems',
      bots: {
        repair: 150,
        defence: 50,
      },
    }),
  ); // "Cyberdyne Systems has 200 bots in stock"


  /////

  function getBotReport({companyName, bots: { repair: repairBots, defence: defenceBots } }) {
    return `${companyName} has ${repairBots + defenceBots} bots in stock`;
  }
  
  // Було
  // console.log(getBotReport('Cyberdyne Systems', 150, 50));
  
  // Очікується
  console.log(
    getBotReport({
      companyName: 'Cyberdyne Systems',
      bots: {
        repair: 150,
        defence: 50,
      },
    }),
  ); // "Cyberdyne Systems has 200 bots in stock"

/// 4 - Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock 
/// та виводила репорт про кількість товарів на складі будь-якої компанії.

// Рішення
function getStockReport({ companyName, stock }) {
    let total = 0;
    for (const value of Object.values(stock)) {
      total += value;
    }
    return `${companyName} has ${total} items in stock`;
  }
  
  console.log(
    getStockReport({
      companyName: 'Cyberdyne Systems',
      stock: {
        repairBots: 150,
        defenceBots: 50,
      },
    }),
  ); // "Cyberdyne Systems has 200 items in stock"
  
  console.log(
    getStockReport({
      companyName: 'Belacci',
      stock: {
        shoes: 20,
        skirts: 10,
        hats: 5,
      },
    }),
  ); // "Belacci has 35 item in stock"

/// 5 - Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту 
/// з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// Рішення
function createContact(partialContact) {
    return {
      list: 'default',
      ...partialContact,
      id: generateId(),
      createdAt: Date.now(),
    };
  }
  
  console.log(
    createContact({
      name: 'Mango',
      email: 'mango@mail.com',
      list: 'friends',
    }),
  );
  console.log(
    createContact({
      name: 'Poly',
      email: 'poly@hotmail.com',
    }),
  );
  
  function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }


/// 6 - Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// Рішення
function transformUsername({ firstName, lastName, ...otherProps }) {
    return {
      fullName: `${firstName} ${lastName}`,
      ...otherProps,
    };
  }
  
  console.log(
    transformUsername({
      id: 1,
      firstName: 'Jacob',
      lastName: 'Mercer',
      email: 'j.mercer@mail.com',
      friendCount: 40,
    }),
  );
  
  console.log(
    transformUsername({
      id: 2,
      firstName: 'Adrian',
      lastName: 'Cross',
      email: 'a.cross@hotmail.com',
      friendCount: 20,
    }),
  );