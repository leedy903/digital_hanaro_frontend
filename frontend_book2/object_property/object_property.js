const user = {
    '': 1,
    ' ': 1,
    123: 1,
    [12345n]: 2,
    true: 1,
    id: 2,
    [`name`]: 'Hong',
    [Symbol()]: 'Hong',
    [`${new Date()}`]: 365,
    'my-friends':['Han', 'Kim'],
    getInfo: () => `${this.id} - ${this.name}`,
    getInfo(){return `${this.id} - ${this.name}`},
}

console.log(Object.keys(user), Object.keys(user).length);
console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);

user.addr = 'Seoul';
console.log('addr' in user, user.hasOwnProperty('addr'));
console.log('Ref.has>', Reflect.has(user, 'addr'));

function a(obj) {
    const rets = [];
    if (!obj || typeof obj != 'object') return [];
    // for(const k of Reflect)
}



const arr = [100, 200, 300, 400, 500];

for (let index in arr) {
    console.log(index);
}

for (let value of arr) {
    console.log(value);
}



const exercise2array = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]; 

console.log('array original');
for (let elem of exercise2array) {
    console.log(elem);
}

let exercise2obj = {};
// exercise2array.forEach((element) => {
//     exercise2obj[element[0]] = element.slice(1);
// });

for (const [key, ...value] of exercise2array) {
    exercise2obj[key] = value;
}

console.log('array to object');
for (const key in exercise2obj) {
    console.log(exercise2obj[key]);
}

console.log('object to array');
let exercise2array2 = [];

for (const key in exercise2obj) {
    let temp_array = [key];
    for (const value of exercise2obj[key]) {
        temp_array.push(value);
    }
    exercise2array2.push(temp_array);
}

for (const elem of exercise2array2) {
    console.log(elem);
}
