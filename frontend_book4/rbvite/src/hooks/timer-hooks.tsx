// src/hooks/useTimer.tsx
import { useEffect, useRef } from "react";

export const useTimeout = <T extends unknown[]>(
    cb: (...args: T) => void,
    delay: number,
    ...args: T
) => {
    useEffect(() => {
        const timer = setTimeout(cb, delay, ...args);

        return () => clearTimeout(timer);
    }, []);
};
// hooks/timer-hooks.tsx
