const arr = [1, 2, 3, 4, 5];

ans1 = arr.filter((key) => 1 < key && key < 4);
console.log(ans1);

ans2 = arr.filter((key) => 2 < key);
console.log(ans2);

ans3 = arr.splice(1, 3);
console.log(arr);

ans4 = arr.splice(1, 0, 2, 3, 4);
console.log(arr);

ans5 = arr.splice(2);
console.log(arr);

ans6 = arr.splice(2, 0, 3, 4, 5);
console.log(arr);

ans7 = arr.splice(2, 1, "X", "Y", "Z");
console.log(arr);

arr.splice(2, 3, 3);
ans8 = [...arr.slice(0, 2), "X", "Y", "Z", ...arr.slice(3)];
console.log(ans8);

console.log([1, 2, [3]].flat());
console.log([1, [2, [3, [4]]]].flat(Infinity));
console.log([1, 4, 9].map((a) => [a ** 2, Math.sqrt(a)]));
