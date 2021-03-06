import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import { useMeasure } from './useMeasure'

export const Hello = () => {
    //http://numbersapi.com/43/trivia
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));

    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    // const divRef = useRef();
    // const rect = useMeasure(divRef, [data]);
    const [rect, divRef] = useMeasure([data]);
     
    return (
        <div>
            <div style={{ display: 'flex'}}>
                <div ref={divRef}>{!data ? 'loading...': data}</div>
            </div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1 )}>Increment</button>
        </div>
    );
}