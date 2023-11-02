function replaceLongColors(text) {
    return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3\b/ig, (_, r, g, b) => {
        return `#${r}${g}${b}`;
    });
}




function lowerSnakeCase(argument) {
    return argument.replace(/_+([a-z])/g, (_, l) => {
        return `${l.toUpperCase()}`;
    });
}

console.log(lowerSnakeCase('one_two_three'))