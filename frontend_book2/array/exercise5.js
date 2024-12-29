const assert = require("assert");

// function range(start, end, interval = 1) {
//     const newArr = [];
//     if (arguments.length == 1) {
//         end = start;
//         start = 1;
//     }
//     for (let i = start; i <= end; i += interval) {
//         newArr.push(i);
//     }
//     return newArr;
// }
// console.log(range(-5));
// assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);

const range = (start, end, step = start > end ? -1 : 1) => {
    const newArr = [];
    if (end === undefined) {
        if (start > 0) {
            end = start;
            start = 1;
        } else if (start < 0) {
            end = -1;
        } else if (start === 0) {
            return [0];
        }
    }

    if (step === 0 || start === end) {
        return [start];
    }

    if ((start - end) * step > 0) {
        return [];
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    for (let i = start; i <= end; i += step) {
        newArr.push(i);
    }
    return newArr;
};
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
    range(50),
    Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
    range(1, 150, 3),
    Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);

assert.deepStrictEqual(
    range(1, 2, 0.1),
    [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2]
);

console.log(range(1, 2, 0.1));
