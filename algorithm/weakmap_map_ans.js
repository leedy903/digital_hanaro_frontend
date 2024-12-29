function trackObjects(commands) {
    const wm = new WeakMap();
    const m = new Map();
    let objMap = new Map(); // objID와 객체를 매핑하는 내부 Map

    const weakMapResults = [];
    const mapResults = [];

    for (let command of commands) {
        const [action, objID, value] = command.split(" ");
        const id = parseInt(objID);

        if (action === "addWeakMap") {
            const obj = { id };
            wm.set(obj, parseInt(value));
            objMap.set(id, obj); // 객체를 objID로 매핑하여 저장
        } else if (action === "addMap") {
            const obj = { id };
            m.set(obj, parseInt(value));
            objMap.set(id, obj); // 객체를 objID로 매핑하여 저장
        } else if (action === "modify") {
            const newID = parseInt(value);
            if (objMap.has(id)) {
                const obj = objMap.get(id);
                obj.id = newID;
                objMap.set(newID, obj); // 새 ID로 객체를 갱신
                objMap.delete(id); // 이전 ID로 매핑된 객체 삭제
            }
        } else if (action === "checkWeakMap") {
            const obj = objMap.get(id);
            weakMapResults.push(wm.has(obj));
        } else if (action === "checkMap") {
            const obj = objMap.get(id);
            mapResults.push(m.has(obj));
        }
    }

    return { weakMapResults, mapResults };
}
