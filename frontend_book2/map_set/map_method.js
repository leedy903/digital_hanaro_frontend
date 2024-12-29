const hong = { id: 1, name: "Hong" };
const map = new Map([
    [1, 11],
    [2, 22],
]);

map.set("three", 333);
map.set("four", [1, 2, 3, 4]);
map.set(hong.name, hong);
map.set(hong, hong.name);
console.log(map);
console.log(map.get(hong));
map.delete(hong);
console.log(map.has(hong));
console.log(map.has(hong.name));
map.clear();
console.log(map);

map.set(1, 11).set(2, 22).set(3, 33);
map.entries();
map.keys();
map.values();
const map2 = new Map([...map]);
const map3 = new Map([...map, ...map2]);
