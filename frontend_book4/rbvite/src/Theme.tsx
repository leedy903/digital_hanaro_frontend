import React, { useState } from "react";

function Theme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeStyles = {
        backgroundColor: isDarkMode ? "#333" : "#FFF", // 다크 모드면 어두운 배경, 아니면 밝은 배경
        color: isDarkMode ? "#FFF" : "#000", // 다크 모드면 밝은 글자색, 아니면 어두운 글자색
        padding: "20px",
        textalign: "center",
        height: "100vh",
    };

    return (
        <div style={themeStyles}>
            <h1>{isDarkMode ? "다크 모드" : "라이트 모드"}</h1>
            <button onClick={toggleTheme}>모드 전환</button>
        </div>
    );
}

export default Theme;
