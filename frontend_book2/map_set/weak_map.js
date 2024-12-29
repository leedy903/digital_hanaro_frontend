const wm = new WeakMap();
const m = new Map();
{
    let obj1 = { id: 1 };
    const obj2 = { id: 2 };

    wm.set(obj1, 1);
    wm.set(obj2, 2);
    obj1 = null;
    console.log(wm, wm.has(obj1)); // false

    m.set(obj1, 1);
    m.set(obj2, 2);
    console.log(m, m.has(obj1));
}

console.log(m.size, wm.size);
