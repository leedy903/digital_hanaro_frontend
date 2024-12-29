const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.question("What do you think of Node.js", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});

rl.on("close", function () {
    process.exit();
});

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on("line", (answer) => {
//     console.log(`line: ${answer}`);

//     rl.close();
// });

// rl.on("close", () => {
//     process.exit();
// });
