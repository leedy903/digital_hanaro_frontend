const assert = require("assert");

const arr = [1, 2, 3, 4];

// function push(array, ...args) {
//     // for (value of args) {
//     //     arr.push(value);
//     // }
//     // return arr;
//     return [...array, ...args];
// }

// function pop(array, depth = 1) {
//     return array.slice(0, -depth);
// }

// function shift(array, depth = 1) {
//     return array.slice(depth);
// }

// function unshift(array, ...args) {
//     return [...args, ...array];
// }

function push(array, ...args) {
    return [...array, ...args];
}

function pop(array, count = 1) {
    return array.slice(-count);
}

function shift(array, count = 1) {
    return array.slice(count);
}

function unshift(array, ...args) {
    return [...args, ...array];
}

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
// assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr), [4]);
assert.deepStrictEqual(pop(arr, 2), [3, 4]);
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);

assert.deepStrictEqual(arr, [1, 2, 3, 4]);
