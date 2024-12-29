import React, { useState } from "react";

// function Welcome(props) {
//     return (
//         <>
//             <div>
//                 <h2>안녕하세요. {props.name} </h2>
//             </div>
//         </>
//     );
// }

// export default Welcome;

function Counter() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
            </label>
            <p>현재 상태: {isChecked ? "선택됨" : "선택안됨"}</p>
        </div>
    );
}

export default Counter;
