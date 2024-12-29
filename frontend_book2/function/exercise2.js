// function fivePart(x, y) {
//     return `fivePart ${x}, ${y}, id: ${this.id}`;
// }

// const fn = once(fivePart.bind({ id: 33 }));
// console.log(fn.bind({ id: 11 })(1, 6));

function once(x, y) {
    var result;

    return function (x, y) {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 $(x), $(y)입니다.!`);

console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다.!
console.log(fn(2, 7)); // undefinded
console.log(fn(3, 8)); // undefinded

// Usage
var canOnlyFireOnce = once(function () {
    console.log("Fired!");
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada
