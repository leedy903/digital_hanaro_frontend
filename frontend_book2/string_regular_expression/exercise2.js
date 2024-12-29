const ALPHANUMS = [108, 76, 109, 77, 110, 78, 114, 82, 49, 51, 54, 55, 56, 48];
const ㄱ = "ㄱ".charCodeAt(0);
const ㅎ = "ㅎ".charCodeAt(0);
const 가 = "가".charCodeAt(0); // 44032
const 힣 = "힣".charCodeAt(0);

const isEndJaum = (str) => {
    const s = str.charCodeAt(str.length - 1); // str.at(-1)
    // console.log('🚀  s:', str, s, (s - 가) % 28);

    return (
        ALPHANUMS.includes(s) ||
        (s >= ㄱ && s <= ㅎ) ||
        (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0)
    );
};

const josa = (str, ja_mo) => {
    const [ja, mo] = ja_mo.split("/");
    return `${str}${isEndJaum(str) ? ja : mo}`;
};

const iga = (str) => josa(str, "이/가");
const ennun = (str) => josa(str, "은/는");
const eulul = (str) => josa(str, "을/를");

console.log(isEndJaum("강원도"));
console.log(isEndJaum("바라당"));
console.log(isEndJaum("ㅜㅜ"));
console.log(isEndJaum("케 "));
console.log(isEndJaum("점수 A"));
console.log(isEndJaum("24"));
