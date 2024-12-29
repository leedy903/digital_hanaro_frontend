import React, { useState, useEffect, useCallback } from "react";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
function TodoComponent() {
    const [todo, setTodo] = useState<Todo | null>(null);

    // 여기에 useEffect를 사용하여 컴포넌트가 마운트될 때 API를 호출하세요.
    // https://jsonplaceholder.typicode.com/todos/1
    // 위의 API에서 할일을 가져와 화면에 표시해 주세요
    // useEffect를 사용하여 API호출을 구현하고, 가져온 데이터를 화면에 출력해주세요
    useEffect(() => {
        // 컴포넌트가 마운트될 때 API 호출
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => setTodo(data));
    }, []);

    return (
        <div>
            <h3>Todo Information</h3>
            {todo ? (
                <div>
                    <h4>{todo.title}</h4>
                    <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

function ClickCounter() {
    const [clickCount, setClickCount] = useState(0);

    // 여기에 useEffect를 사용하여 상태가 변경될 때마다 콘솔에 메시지를 출력하세요.
    useEffect(() => {
        // clickCount 상태가 변경될 때마다 콘솔에 메시지 출력
        console.log(`Click count is now ${clickCount}`);
    }, [clickCount]); // 의존성 배열에 clickCount를 추가하여, clickCount가 변경될 때마다 이 effect가 실행됩니다.

    return (
        <div>
            <h3>Click Counter</h3>
            <button onClick={() => setClickCount(clickCount + 1)}>
                Click me
            </button>
            <p>You have clicked {clickCount} times</p>
        </div>
    );
}

function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    // 여기에 useEffect를 사용하여 윈도우의 크기 변경을 감지하고, 상태를 업데이트하며, 컴포넌트가 언마운트될 때 이벤트 리스너를 정리하세요.
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <h3>Current Window Width: {width}px</h3>
        </div>
    );
}

function AutoCounter() {
    const [count, setCount] = useState(0);

    // 여기에 useEffect를 사용하여 타이머를 설정하고, 매 초마다 count 상태를 1씩 증가시키세요.
    // 컴포넌트가 언마운트될 때 타이머를 정리하세요.
    useEffect(() => {
        // 매 초마다 count를 증가시키는 타이머 설정
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000); // 1000ms = 1초

        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => {
            clearInterval(intervalId);
        };
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 타이머가 설정됨을 의미합니다.

    return (
        <div>
            <h3>Auto Increment Counter</h3>
            <p>Count: {count}</p>
        </div>
    );
}

const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
];

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    // 여기에 useEffect를 사용하여 searchTerm이 변경될 때마다 items 배열을 필터링하여 filteredItems 상태를 업데이트하세요.
    useEffect(() => {
        // searchTerm이 변경될 때마다 필터링 수행
        const filtered: string[] = items.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(filtered);
    }, [searchTerm]); // 의존성 배열에 searchTerm을 넣어야 searchTerm이 변경될 때만 실행됨

    return (
        <div>
            <h3>Search Filter</h3>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}
//데이터 패치 및 조건부 렌더링
function UserToggle() {
    const [isUserVisible, setIsUserVisible] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        if (isUserVisible) {
            fetch("https://jsonplaceholder.typicode.com/users/1")
                .then((response) => response.json())
                .then((data: User) => setUser(data)); // data를 User 타입으로 지정
        } else {
            setUser(null);
        }
    }, [isUserVisible]);

    return (
        <div>
            <button onClick={() => setIsUserVisible(!isUserVisible)}>
                {isUserVisible ? "Hide User" : "Show User"}
            </button>
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
}
function CountMultiplier() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [result, setResult] = useState(1);

    // 여기에 useEffect를 사용하여 count1과 count2가 모두 변경될 때 비동기적으로 곱을 계산하고 result 상태를 업데이트하세요.
    useEffect(() => {
        async function calculateResult() {
            await new Promise((reslove) => setTimeout(reslove, 500));
            setResult(count1 * count2);
        }

        calculateResult();
    }, [count1, count2]);

    return (
        <div>
            <h3>Count Multiplier</h3>
            <button onClick={() => setCount1(count1 + 1)}>
                Increment Count1: {count1}
            </button>
            <button onClick={() => setCount2(count2 + 1)}>
                Increment Count2: {count2}
            </button>
            <p>Result (Count1 * Count2): {result}</p>
        </div>
    );
}

function ScrollTracker() {
    const [scrollY, setScrollY] = useState(0);
    // window.addEventListener('scroll', handleScroll);
    // window.removeEventListener('scroll', handleScroll);
    // 여기에 useEffect를 사용하여 스크롤 위치를 감지하고, 컴포넌트가 언마운트될 때 이벤트 리스너를 정리하세요.

    useEffect(() => {
        // 스크롤 시 호출되는 함수
        const handleScroll = () => {
            setScrollY(window.scrollY); // 현재 스크롤 위치를 상태로 업데이트
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행

    return (
        <div style={{ height: "200vh", padding: "20px" }}>
            <h3>Scroll Tracker</h3>
            <p>Current Scroll Y: {scrollY}px</p>
            <p>Scroll down to see the change...</p>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    // useCallback 사용: 의존성 배열이 비어 있으면 한 번만 생성됨
    const increment = useCallback(() => {
        console.log("Increment 함수 생성");
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("Decrement 함수 생성");
        setCount((prevCount) => prevCount - 1);
    }, []);

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

function App() {
    return (
        <div>
            {/* <TodoComponent></TodoComponent>
            <ClickCounter></ClickCounter>
            <WindowSize></WindowSize>
            <AutoCounter></AutoCounter>
            <SearchFilter></SearchFilter>
            <UserToggle></UserToggle>
            <CountMultiplier></CountMultiplier>
            <ScrollTracker></ScrollTracker> */}
            <Counter />
        </div>
    );
}

export default App;
