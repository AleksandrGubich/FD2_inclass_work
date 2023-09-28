const MINAGE = 0;
const MAXAGE = 150;
const PENSIONMALE = 63;
const PENSIONFEMALE = 58;
const SEX_MALE = 'М';
const SEX_FEMALE = 'Ж';

const secondName = getUserData('Введите Вашу фамилию', keepWithoutChange, isNotEmptyString);
const firstName = getUserData('Введите Ваше имя', keepWithoutChange, isNotEmptyString);
const fathersName = getUserData('Введите Ваше отчество', keepWithoutChange, isNotEmptyString);
const age = getUserData('Введите Ваш возраст', transformToNumber, isValidAge);
const sex = getUserData('Укажите Ваш пол буквой "М" или "Ж"', transformToSex, isCorrectSymbol);
const retiredAge = sex === SEX_MALE ? PENSIONMALE : PENSIONFEMALE;
const retired = age >= retiredAge ? 'Да' : 'Нет';

function getUserData(message, transformData, isValid) {
    let userData = null;
    let isCanceled = false;
    
    do {
        const rawUserData = prompt(message);
        
        isCanceled = rawUserData === null;
        userData = isCanceled ? null : transformData(rawUserData);
    } while (isCanceled || !isValid(userData));

    return userData;
}

function keepWithoutChange(data) {
    return data;
}

function isNotEmptyString(data) {
    return data;
}


function isValidAge(inputAge) {
    return Number.isFinite(inputAge) && inputAge >= MINAGE && inputAge <= MAXAGE;
}

function replaceSymbols(inputString, targetSymbol, replacementSymbol) {
    let resultString = '';

    for (const char of inputString){
        resultString += char === targetSymbol ? replacementSymbol : char;
    }

    return resultString;
}

function transformToNumber(data) {
    if (!data) {
        return NaN;
    }

    return Number(replaceSymbols(data, ',', '.'));
}

function transformToSex(sexInput) {
    switch (sexInput) {
        case 'м':
        case 'М':
        case 'm':
        case 'M':
            return SEX_MALE;
        case 'ж':
        case 'Ж':
        case 'f':
        case 'F':    
            return SEX_FEMALE;
        default:
            return '';
    }
}

function isCorrectSymbol(someSex) {
    return someSex === SEX_MALE || someSex === SEX_FEMALE;
}

alert (
`ФИО: ${secondName} ${firstName} ${fathersName}
Возраст: ${age}
Пол: ${sex}
На пенсии: ${retired}`
);