// setTimeout(function () {
//     console.log("depth1", new Date());
//     setTimeout(function () {
//         console.log("depth2", new Date());
//         setTimeout(function () {
//             console.log("depth3", new Date());
//             throw new Error("Already 3-depth!");
//         }, 3000);
//     }, 2000);
// }, 1000);

console.log("Start!, ", new Date());

function promiseTimer(depth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`depth${depth}`, new Date());
            if (depth == 3) {
                reject(new Error("Already 3-depth!"));
            } else {
                resolve(depth + 1);
            }
        }, depth * 1000);
    });
}

promiseTimer(1).then(promiseTimer);

promiseTimer(1)
    .then(promiseTimer)
    .then(promiseTimer)
    .catch((err) => console.log("Error: ", err));
