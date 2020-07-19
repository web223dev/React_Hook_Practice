import React, { useState, useEffect, useRef } from 'react'
import { useForm } from './useForm'
import { useFetch } from './useFetch'
// import Hello from './Hello'

const App = () => {
  const [values, handleChange] = useForm({email: '', firstName: '', password: ''})
  //http://numbersapi.com/43/trivia

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));

  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

  const inputRef = useRef();
  
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count]) 

  return (
    <div>
      {/* <button onClick={()=>showHello(!hello)}>toggle</button>
      {hello && <Hello />} */}
      <div>{!data ? 'loading...': data}</div>
      <button onClick={() => setCount(count => count + 1 )}>Increment</button>
      <input
        ref={inputRef}
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange} />
      
      <input
        name="firstName"
        type="text"
        value={values.firstName}
        placeholder="firstName"
        onChange={handleChange} />
      
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange} />

      <button onClick={() => { inputRef.current.focus()}}>Focus</button>
    </div>
  )
}

export default App;