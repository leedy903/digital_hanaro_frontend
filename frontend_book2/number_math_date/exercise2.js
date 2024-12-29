const readline = require("readline");
const WEEKS = "일월화수목금토".split("");

const calendar = (dateStr) => {
    const [year, month] = dateStr.split("-");
    const d = new Date(year, Number(month) - 1, 1);
    let outStr = "   ".repeat(d.getDay());
    for (let i = 0; i < 30; i += 1) {
        outStr += d.getDate().toString().padStart(3);
        if (d.getDay() === 6) outStr += "\n";
        d.setDate(d.getDate() + 1);
    }

    return outStr;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputDate = "";
let year;
let month;

rl.on("line", (line) => {
    inputDate = line;
    rl.close();
});

rl.on("close", () => {
    [year, month] = inputDate.split(" ");
    console.log(inputDate);
    process.exit();
});

console.log(year, month);
const todayDate = new Date(2024, 1);

console.log(Math.round(-1.5));
console.log(Math.abs("d"));
console.log(Math.abs(null));
console.log(Math.abs(true));
