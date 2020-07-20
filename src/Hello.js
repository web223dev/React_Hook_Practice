import React, { useState, useEffect, useRef } from 'react'
import { useFetch } from './useFetch'

const Hello = () => {
    const renders = useRef(0);
    //http://numbersapi.com/43/trivia
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));

    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    console.log("current render: ", renders.current++);
    return (
        <div>
            <div>{!data ? 'loading...': data}</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count => count + 1 )}>Increment</button>
        </div>
    );
}
export default Hello;