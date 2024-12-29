const before = () => console.log("before...");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
    console.log(`${id}/${nickname}/${email}/${level}`);

const template = (fn) => {
    return (...args) => {
        before();
        fn(...args);
        after();
    };
}; // 코드를 완성하세요

const temp = template(someFn); // before -> someFn -> after 실행
const temp2 = template(someFn2); // before -> someFn2 -> after 실행

temp("sico", "hello");
temp2(1, "sico", "sico@gmail.com", 5);
