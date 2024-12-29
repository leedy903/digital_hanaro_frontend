let userFn;
{
    const privateUser = {id: 1, name: 'Hong'};
    userFn = () => privateUser;
}
userFn().age = 30;
console.log(userFn());


// 1. reset 메소드를 추가해서 0으로 초기화하는 것을 추가해보세요.
// 2. 음수가 되지 않도록 check하는 로직을 추가하세요.
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            if (count > 0) {
                count -= 1;
            }
            return count;
        },
        getCount: function() {
            return count;
        },
        setCount: function() {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();
// const counter = (function() {...})(); // 즉시 함수 표현
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));

function withLogging(fn) {
    return function(...args) {
        console.log(`Calling fucntion with arguments: ${args.join(',')}`);
        const result = fn(...args);
        console.log(`Function returned: ${result}`);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const addWithLogging = withLogging(add);

console.log(addWithLogging(2, 3));


// 할인금액 구하기
function discount() {
    const dcRate = 0.1;
    return function(price) {
        return price * dcRate;
    };
}

const items = [
    {item:'상품 A', price:32000}, {item:'상품 B', price:45000},
];

const dc = discount();
for (const{item, price:orgPrice} of items) {
    const salePrice = orgPrice - dc(orgPrice);
    console.log(`${item}:${orgPrice}원-->${salePrice.toLocaleString()}원`);
}

function curry(fn) {
    return function curried(...args) {
        console.log(args)
        if (args.legnth >= fn.legnth) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4));
console.log(curriedMultiply(2, 3)(4));
console.log(curriedMultiply(2)(3, 4));

// using recursion
// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(3));
// console.log(factorial(5));

const memoizedTable = {};
function factorial(n) {
    if (n === 1) return 1;
    return memoizedTable[n] || (memoizedTable[n] = n * factorial(n - 1));
}

let runCnt = 0;
const f3 = factorial(3);
console.log('f3:', f3, runCnt);

runCnt = 0;
const f5 = factorial(5);
console.log('f5:', f5, runCnt);

// 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오
// (단, array 메소드를 사용하지 말고, destructuring을 사용하시오)

function makeArray(n, array) {
    if (n === 0) return array;
    return makeArray(n - 1, [n, ...array])
}

// function makeReverseArray() {

// }
// makeArray(10, {});

let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;
console.log('sum:', sum);

function factoria2(n) {
    let f = [0, 1];
    for (let i = 1; i < n; i++) {
        f.push(f[i] + f[i-1]);
    }
    return f[n];
}

console.log(factoria2(1));
console.log(factoria2(2));
console.log(factoria2(3));
console.log(factoria2(4));
console.log(factoria2(100));

