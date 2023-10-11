const stringToCheck = 'giwhedfedsgdfsjsbwrfgwcer'

function symbolsCount(string) {

    let objectsAmount = {};

    for (const char of string) {
        const currentCounter = objectsAmount[char] ?? 0;
        objectsAmount[char] = currentCounter + 1;
    }

    return objectsAmount;
}

console.log(symbolsCount(stringToCheck))