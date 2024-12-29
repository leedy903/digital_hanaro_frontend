const randomDates = [];
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

// 1. 1970 1월 1일과 1월 2일의 차이를 초로 나타내기.
const date1 = new Date("1970-01-01");
const date2 = new Date("1970-01-02");
const diffInSeconds = (date2 - date1) / 1000; // 밀리초를 초로 변환
console.log(diffInSeconds); // 86400 (24시간 = 86400초)

// 2. 이 달의 날짜 무작위로 만들기.
for (let i = 0; i < 5; i++) {
    const randomDay = Math.floor(Math.random() * 28) + 1; // 1부터 28 사이의 무작위 날짜 생성
    randomDates.push(new Date(year, month, randomDay));
}

randomDates.sort((a, b) => b - a); // 역순으로 정렬

randomDates.forEach((date) => console.log(date.toDateString()));

// 3. 내년의 오늘의 요일을 출력하기.
const nextYearToday = new Date(2025, 5, 29); // 6월은 인덱스 5 (0부터 시작)
const dayOfWeek = nextYearToday.toLocaleString("ko-KR", { weekday: "long" });
console.log(dayOfWeek); // 예: "일요일"

// 4. 오늘로부터 100일 후
const todayDate = new Date(2024, 1, 1); // 2월 1일 (인덱스 1)
const futureDate = new Date(todayDate);
futureDate.setDate(todayDate.getDate() + 100);

console.log(futureDate.toDateString()); // 예: "Thu May 11 2024"
