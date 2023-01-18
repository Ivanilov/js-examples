function calAverage() {
    let result = 0;
    for (const arg of arguments) {
        result += arg;
    }
    return result / arguments.length;
}

///or

function calAverage(...params) {
    let result = 0;
    for (const arg of params) {
        result += arg;
    }
    return result / params.length;
}

console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2