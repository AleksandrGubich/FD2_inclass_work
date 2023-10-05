// const stringToCheck = 'giwhedfedsgdfsjsbwrfgwcer'

// function symbolsCount(string) {
//     return [...string].reduce((stat, symbol) => {
//         stat[symbol] = (stat[symbol] ?? 0) + 1;

//         return stat;
//     }, {});
// }

// console.log(symbolsCount(stringToCheck))


function checkOddNumber(...numbers) {
    return numbers.filter((num) => num % 2 === 0);
}

console.log(checkOddNumber(1, 2, 3, 4, 5, 6, 7, 8, 9));