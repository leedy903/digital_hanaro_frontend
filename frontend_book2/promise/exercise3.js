const assert = require("assert");
const vals = [1, 2, 3];

const randTime = (val) =>
    new Promise((reslove) => setTimeout(reslove, Math.random() * 1000, val));

const promiseAll = (promises) =>
    new Promise((resolve, reject) => {
        if (!promises?.length) reject("Input Promises!!");
        const results = [];
        let leftRunCnt = promises?.length;
        for (let i = 0; i < promises.length; i += 1) {
            promises[i].then((res) => {
                results[i] = res;
                leftRunCnt -= 1;
                if (leftRunCnt == 0) resolve(results);
            });
        }
    });

promiseAll([randTime(1), randTime(2), randTime(3)])
    .then((arr) => {
        console.table(arr);
    })
    .catch(console.arr);

// promiseAll([randTime(11), Promise.reject("Reject").randTime(33)])
//     .then((array) => {
//         console.log("여긴 과연 호출될까?");
//     })
//     .catch((error) => {
//         console.log("Reject!!>>", error);
//     });
