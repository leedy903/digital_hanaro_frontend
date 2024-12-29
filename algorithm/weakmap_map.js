const readline = require("readline");

const commands = [
    "addWeakMap 1 100",
    "addMap 1 100",
    "addWeakMap 2 200",
    "addMap 2 200",
    "modify 1 10",
    "checkWeakMap 1",
    "checkWeakMap 10",
    "checkMap 1",
    "checkMap 10",
];

let weakMap = new WeakMap();
let map = new Map();

function trackObjects(command) {
    [cmd, objId, value] = command.split(" ");

    if (cmd == "addWeakMap") {
        let obj = { objId: parseInt(objId) };
        weakMap.set(obj, parseInt(value));
    } else if (cmd == "addMap") {
        let obj = { objId: parseInt(objId) };
        map.set(parseInt(objId), parseInt(value));
    } else if (cmd == "modify") {
        let obj = { objId: parseInt(objId) };

        weakMap.set(obj, parseInt(value));
        map.set(parseInt(objId), parseInt(value));
    } else if (cmd == "checkWeakMap") {
        console.log(weakMap.has({ objId: parseInt(objId) }));
        return weakMap.has({ objId: parseInt(objId) });
    } else if (cmd == "checkMap") {
        console.log(map.has(parseInt(objId)));
        return map.has(parseInt(objId));
    }
    return;
}

for (let command of commands) {
    trackObjects(command);
    console.log(command);
    console.log(weakMap);
    console.log(map);
    console.log(" ");
}
