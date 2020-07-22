import { useState, useLayoutEffect, useRef} from 'react'

export const useMeasure = (ref, deps) => {
    const [rect, setRect] = useState({});

    const myRef = useRef();

    useLayoutEffect(() => {
        setRect(ref.current.getBoundingClientRect());
    }, deps) 

    // return rect;
    return [rect, myRef];
}