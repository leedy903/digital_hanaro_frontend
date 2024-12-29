const set = new Set([1, 11, 2, 22]);
for (const v of set) {
    console.log(v);
}

const arr = [1, 2, 2, 3, 4, 5, 5, 6];
const uniqArr = [...new Set(arr)];
console.log(arr);
console.log(uniqArr);
