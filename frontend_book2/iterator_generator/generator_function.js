function* gener() {
    const x = yield 1;
    const y = yield x + 10;
    console.log("x y = ", x, y);
    return x + y;
}

const it3 = gener();
console.log(it3.next()); // value: 1
console.log(it3.next(3)); // value: 13
console.log(it3.next(5)); // value: 8
