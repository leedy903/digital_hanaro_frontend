const assert = require("assert");

function keyPair(array, target) {
    var left = 0;
    var right = array.length - 1;

    const sortedArray = array.toSorted((a, b) => a - b);

    while (left <= right) {
        var sum = sortedArray[left] + sortedArray[right];
        if (sum == target) {
            return [
                array.indexOf(sortedArray[left]),
                array.indexOf(sortedArray[right]),
            ];
        } else if (sum > target) {
            right -= 1;
        } else if (sum < target) {
            left += 1;
        }
    }

    return [];
}

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 9], 9), [3, 4]);
