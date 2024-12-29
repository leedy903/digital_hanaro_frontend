const wm = new WeakMap();
const m = new Map();
let obj1 = { id: 1 };
let x = { id: 10 };
let obj3;
{
    const obj2 = { id: 2 };

    wm.set(obj1, 1);
    m.set(obj1, 1);

    console.log("=== obj1 ===");
    console.log(wm, wm.has(obj1)); // true
    console.log(m, m.has(obj1)); // true
    console.log("");

    wm.set(obj2, x);
    m.set(obj2, x);
    obj3 = obj1;
    console.log("=== obj2 ===");
    console.log(wm, wm.has(obj2)); // true
    console.log(m, m.has(obj2)); // true
    console.log("");

    obj1 = null;
    obj2.id = 3;
    x = { id: 100 };

    console.log("=== obj1 = null, obj2.id = 3, x = { id: 100 }===");
    console.log("obj1: ", obj1);
    console.log(
        "wm: ",
        wm,
        "\n\twm has obj1?: " + wm.has(obj1),
        m.has(obj3),
        "\n\twm has obj2?: " + wm.has(obj2)
    );
    console.log(
        "m: ",
        m,
        "\n\tm has obj1?: " + m.has(obj1),
        "\n\tm has obj2?: " + m.has(obj2)
    );
    console.log("");
}

console.log(m.size, wm.size);
console.log(wm, wm.has(obj1));
console.log(m, m.has(obj1));
console.log("m.keys>>", [...m.keys()]);
console.log("m.values>>", [...m.values(), obj1, x]);
console.log(m.has(obj3));
