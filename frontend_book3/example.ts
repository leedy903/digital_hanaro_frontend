/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function add(a: number, b: number) {
    return a + b;
}
console.log(add(1, 2));

type Direction = "North" | "South" | "East" | "West";
let myDirection: Direction;

myDirection = "North";
// myDirection = "Up" // 에러
