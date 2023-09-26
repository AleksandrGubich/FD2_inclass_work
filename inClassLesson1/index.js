let secondName, firstName, fathersName, personalData;
let age, yourAge;
const MIN_AGE = 1;
const MAX_AGE = 150

do {
    secondName = prompt('Введите вашу фамилию:');
} while (!secondName);

do {
    firstName = prompt('Введите ваше имя:');
} while (!firstName);

do {
    fathersName = prompt('Введите ваше отчество:');
} while (!fathersName);

personalData = `Вас зовут ${secondName} ${firstName} ${fathersName}`;

alert(personalData);

do {
    let userInput;
    
    do {
        userInput = prompt('Введите ваш возраст')
    } while (!userInput)

    age = Number(userInput)
} while (!isFinite(age) || age < MIN_AGE || age > MAX_AGE);

yourAge = `Ваш возраст равен ${age}`;

alert(yourAge)