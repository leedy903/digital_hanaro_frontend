const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

function* add() {
    const x = rl.question("첫 번째 수?", (x) => {
        console.log(x);
        rl.close();
    });

    rl.on("close", function () {
        process.exit();
    });

    const y = rl.question("두 번째 수?", (y) => {
        console.log(x);
        rl.close();
    });

    rl.on("close", function () {
        process.exit();
    });

    return x + y;
}

const itAdd = add();

console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);

function* addAnser() {
    const num1 = yield "첫 번째 수?";
    const num2 = yield "두 번째 수?";
    return `Total: ${num1 + num2}`;
}

const itAddAnswer = addAnser();

console.log(itAddAnswer.next().value);
console.log(itAddAnswer.next(1).value);
console.log(itAddAnswer.next(2).value);
