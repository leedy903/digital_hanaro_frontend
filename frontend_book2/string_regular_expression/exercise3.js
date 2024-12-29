const INITIAL = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
];

const INITIAL_RANGE = [
    "가-깋",
    "까-낗",
    "나-닣",
    "다-딯",
    "따-띻",
    "라-맇",
    "마-밓",
    "바-빟",
    "빠-삫",
    "사-싷",
    "싸-앃",
    "아-잏",
    "자-짛",
    "짜-찧",
    "차-칳",
    "카-킿",
    "타-팋",
    "파-핗",
    "하-힣",
];

const initialToInitialRange = new Map();
for (let i = 0; i < INITIAL.length; i++) {
    initialToInitialRange.set(INITIAL[i], INITIAL_RANGE[i]);
}

function getInitialRegExp(initials) {
    let initial_list = initials.split("");
    return initial_list
        .map(
            (initial) =>
                "[" +
                (initialToInitialRange.has(initial)
                    ? initialToInitialRange.get(initial)
                    : initial) +
                "]"
        )
        .join("");
}

function searchByKoreanInitialSound(str_list, initials) {
    return str_list.filter((str) => str.match(getInitialRegExp(initials)));
}

const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];
console.log(searchByKoreanInitialSound(s, "ㄱㅇ"));
console.log(searchByKoreanInitialSound(s, "ㄱㅅㄱ"));
console.log(searchByKoreanInitialSound(s, "ㅌㅅㅁ"));
console.log(searchByKoreanInitialSound(s, "ㅂㅁ"));
console.log(searchByKoreanInitialSound(s, "ㅍㅁ"));
console.log(searchByKoreanInitialSound(s, "ㄱ1ㅅ"));
