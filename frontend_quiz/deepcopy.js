// import "lodash";
// import _ from "lodash";

// const arr = [1, 2, 3, ["a", "b", "c"]];
// const shallowCopied = clone(arr);
// const deepCopied = cloneDeep(arr);

// console.log(arr[3] === shallowCopied[3]); // true
// console.log(arr[3] === deepCopied[3]); // false

const deepCopy = (input) => {
    const output = Array.isArray(input) ? [] : {};
    let key;
    let value;

    if (typeof input !== "object" || input === null) {
        return input;
    }

    for (key in input) {
        value = input[key];
        output[key] = deepCopy(value);
    }

    return output;
};

const arr = { x: { y: 1 } };
const deepCopied = deepCopy(arr);

deepCopied.x.y = 2;

console.log(arr.x);
console.log(deepCopied.x);
