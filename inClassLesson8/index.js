// function* getValues(symbols, repeatCount) {
//     for (const symbol of symbols) {
//         for (let i = 1; i <= repeatCount; i++) {
//             yield symbol;
//         }
//     }
// }

// for (const symbol of getValues(['a', 'b'], 5)) {
//     console.log(symbol)
// }

// console.log(new Set(getValues(['a', 'b'], 5)))




// function* getValues(symbols, repeatCount) {
//     for (const symbol of symbols) {
//         yield* repeatTimes(symbol, repeatCount);
//     }
// }

// function* repeatTimes(value, repeatCount) {
//     for (let i = 1; i <= repeatCount; i++) {
//         yield value;
//     }
// }

// console.log(new Set(getValues(['a', 'b'], 5)))




// const iterableObject = {
//     values: [1, 2, 3],
//     *[Symbol.iterator]() {
//         yield* this.values.values();
//     }
// };

// for (const value of iterableObject) {
//     console.log(value);
// };




// class Test {
//     *[Symbol.iterator]() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }

//     [Symbol.toPrimitive](hint) {
//         switch (hint) {
//             case 'number':
//                 return 5;
//             default:
//                 'five';
//         }
//     }
// }

// const t = new Test();

// console.log([...t]);




const _disabled = new WeakMap();

class Test {
    
    constructor() {
        _disabled.set(this, false);
    }

    get disabled() {
        _disabled.get(this);
    }

    disable() {
        _disabled.set(this, false);
    }

    enable() {
        _disabled.set(this, true)
    }

    toggle(state) {
        _disabled.set(this, state ?? !_disabled.set(this));
    }

    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return 5;
            default:
                'five';
        }
    }
}

const t = new Test();

console.log([...t]);