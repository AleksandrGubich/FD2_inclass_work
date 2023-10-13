// // ЗАДАЧА 1
// function task1() {
//     for (i = 1; i <= 50; i++){
//         console.log(i)
//     }
// }

// console.log(task1())



// // ЗАДАЧА 2
// function arrayLog(arr) {
//     for (i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }



// // ЗАДАЧА 3
// function arrMultiplier(arr) {
//     let counter = 1;

//     for (i = 0; i <arr.length; i++) {
//         counter *= arr[i];
//     }

//     return counter;
// }
// // ИЛИ
// function arrMultiplier(arr) {
//     return arr.reduce((el, index) => 
//         el*index)
// }



// // ЗАДАЧА 4
// function correctNumbers(arr) {
//     return arr.filter((num) => 
//         num >= 0 && num <= 100 && (num % 2 === 0)
//     )
// }



// // ЗАДАЧА 5
// let someNumber = 1000;
// let counter = 0;

// while (someNumber >= 50) {
//     someNumber /= 2;
//     counter++;
// }

// console.log(counter)

// ЗАДАЧА 6
function yearNumSum(from, to, counterValue) {
    const yearsArray = [];

    for (let year = from; year <= to; year++) {
        if (sumOfDigits(year) === counterValue) {
            yearsArray.push(year)
        }
    }

    function sumOfDigits(year) {
        return year.toString().split('').reduce((a, b) => {
            return Number(a) + Number(b)
        });
    }

    return yearsArray;
}

console.log(yearNumSum(0, 2023, 13));