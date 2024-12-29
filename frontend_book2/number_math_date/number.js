// isNaN
console.log(Number.isNaN(NaN) && isNaN(NaN));
console.log(Number.isFinite(NaN) || Number.isSafeInteger(NaN));
console.log(Number.isNaN(undefined) === isNaN(undefined));
console.log(isNaN(undefined));

// isFinite
console.log(Number.isFinite());
console.log(Number.isFinite(0));
console.log(
    Number.isFinite(Number.MAX_VALUE) && Number.isFinite(Number.MIN_VALUE)
);
console.log(Number.isFinite() || isFinite() || Number.isFinite(Infinity));
console.log(Number.isFinite(null) === isFinite(null));

console.log(Number.isSafeInteger());
console.log(Number.isSafeInteger(1_000_000_000_000_009));
console.log(Number.isSafeInteger(9_007_199_254_740_991));
console.log(Number.isSafeInteger(9_007_199_254_740_992));
console.log(Number.isSafeInteger(0.1) || Number.isSafeInteger("1"));
console.log(Number.isSafeInteger(true) || Number.isSafeInteger(Infinity));

// toExponential
console.log((100).toExponential());
console.log((12.3).toExponential());
console.log((123.45).toExponential());

console.log((123.45).toExponential(2));
console.log((123.45).toExponential(3));
console.log((123.45).toExponential(4));

// toFixed
console.log((12.3).toFixed());
console.log((123.45).toFixed());

console.log((123.456).toFixed(1));
console.log((123.456).toFixed(2));
console.log((123.456).toFixed(3));

console.log((123.45).toPrecision());

console.log((123.456).toPrecision(3));
console.log((1.23456).toPrecision(3));
console.log((1.23456).toPrecision(4));
console.log((1.23456).toPrecision(5));
console.log((1.23456).toPrecision(6));

console.log((5).toString(2)); // '101'  (2진법)
console.log((10).toString(8)); // '12'   (8진법)
console.log((32).toString(16)); // '20'  (16진법)
console.log((32).toString(36)); // 'w'   (36진법)
console.log((100).toString()); // '100'
// console.log((32).toString(37)); // 오류는 발생하지 않지만, 예상치 못한 결과가 나타날 수 있습니다.
console.log((0b100).toString(16)); // '4'  (2진수에서 16진수로 변환)
console.log((0x100).toString(8)); // '400' (16진수에서 8진수로 변환)
console.log((0x100).toString(16)); // '100' (16진수에서 16진수로 변환)

console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(5));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));

console.log(Math.cbrt(27)); // 3 (세 제곱근)
console.log(Math.cbrt(-8)); // -2 (세 제곱근)
console.log(Math.exp(1)); // 2.718281828459045 (e^1)
console.log(Math.exp(2)); // 7.3890560989306495 (e^2)
console.log(Math.expm1(1)); // 1.718281828459045 (e^1 - 1)
console.log(Math.expm1(0)); // 0 (e^0 - 1)
console.log(Math.hypot(3, 4)); // 5 (피타고라스 정리, sqrt(3^2 + 4^2))
console.log(Math.hypot(5, 12)); // 13 (sqrt(5^2 + 12^2))
console.log(Math.log(Math.E)); // 1 (자연로그, ln(e))
console.log(Math.log(1)); // 0 (ln(1))
console.log(Math.log10(10)); // 1 (상용로그, log10(10))
console.log(Math.log10(100)); // 2 (log10(100))
console.log(Math.log2(2)); // 1 (log2(2))
console.log(Math.log2(8)); // 3 (log2(8))
console.log(Math.log1p(0)); // 0 (log(1+0))
console.log(Math.log1p(Math.E - 1)); // 1 (log(1+e-1))
console.log(Math.clz32(1)); // 31 (32비트 정수에서 왼쪽으로부터 연속된 0의 개수)
console.log(Math.clz32(0b10)); // 30 (2진수 10, 32비트 중 앞의 30개가 0)
console.log(Math.imul(2, 3)); // 6 (32비트 정수 곱셈)
console.log(Math.imul(0xfffffffe, 5)); // -10 (2^32 이하의 곱셈)
console.log(Math.fround(2.55)); // 2.549999952316284 (32비트 부동 소수점으로 변환)
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.sin(Math.PI / 2)); // 1 (sin 90도)
console.log(Math.cos(Math.PI)); // -1 (cos 180도)
console.log(Math.tan(Math.PI / 4)); // 1 (tan 45도)
console.log(Math.sinh(0)); // 0 (sinh 0)
console.log(Math.cosh(0)); // 1 (cosh 0)
console.log(Math.tanh(0)); // 0 (tanh 0)

// BigInt
console.log(100n === 100);
console.log(9007199254740992n === 9007199254740993n); // false

console.log(100n === 100); // false (자료형이 다름)
console.log(100n == 100); // true  (값은 같음)

console.log(0b100000000000000000000000000000000000000000000000000011n); // 이진수
console.log(0x20000000000003n); // 16진수

console.log(BigInt(123456789012345678901234567890));

console.log(new Date()); // 현재 날짜와 시간 출력
console.log(Date()); // 현재 날짜와 시간 문자열 출력
const epoch = new Date(0);
console.log(epoch); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
const utc = new Date(Date.UTC(1970, 0, 1));
console.log(utc); // Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)
const specificDate = new Date(2023, 6, 18, 12, 30, 0);
console.log(specificDate);
const dateFromMillis = new Date(1000); // 1970-01-01T00:00:01.000Z
console.log(dateFromMillis);
