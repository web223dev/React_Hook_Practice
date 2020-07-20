import React, { useState, useRef } from 'react'
import { useForm } from './useForm'
import { Hello } from './Hello'

const App = () => {
  const [values, handleChange] = useForm({email: '', firstName: '', password: ''})
  const inputRef = useRef();
  const hello = useRef(()=> console.log('hello'));
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      <button onClick={()=>setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
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

      <button 
        onClick={() => { 
          inputRef.current.focus();
          hello.current();
          }}>Focus</button>
    </div>
  )
}

export default App;