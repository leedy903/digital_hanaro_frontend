function manageEmployees(commands) {
    const departments = new Map();
    // 결과 반환
    let results = {};

    // 명령어 처리
    for (let command of commands) {
        const [action, deptID, empID, empName] = command.split(" ");
        const departmentID = parseInt(deptID);

        if (action === "addEmployee") {
            let teams;
            if (departments.has(departmentID)) {
                teams = departments.get(departmentID);
            } else {
                teams = [];
            }
            // 직원 추가 로직
            let employee = {
                empID: empID,
                empName: empName,
            };
            teams.push(employee);
            departments.set(departmentID, teams);
        } else if (action === "removeDuplicates") {
            // 중복 제거 로직
            let teams = [...new Set(departments.get(departmentID))];
            // departments.set(departmentID, teams);
        } else if (action === "getEmployees") {
            // 직원 정보 반환 로직
            results.assign(departments.get(departmentID));
        }
    }

    for (const department of departments.keys()) {
        console.log(department);
        for (const employee of departments.get(department)) {
            console.log(employee);
        }
    }

    //구현
    return results;
}

const commands = [
    "addEmployee 1 101 'Alice'",
    "addEmployee 1 102 'Bob'",
    "addEmployee 1 103 'Alice'", // 중복 이름
    "addEmployee 2 201 'Charlie'",
    "addEmployee 2 202 'Alice'", // 다른 부서에 같은 이름
    "removeDuplicates 1",
    "getEmployees 1",
    "getEmployees 2",
];

console.log(manageEmployees(commands));
