const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

function intersect(arr1, arr2) {
    return [...new Set(arr1)].filter((elem) => new Set(arr2).has(elem));
}

function diff(arr1, arr2) {
    return [...new Set(arr1)].filter((elem) => !new Set(arr2).has(elem));
}

function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(intersect(A, B));
console.log(intersect(A, C));

console.log(diff(A, B));
console.log(diff(B, A));
console.log(diff(A, C));
console.log(diff(B, C));

console.log(union(A, B));
console.log(union(A, C));
