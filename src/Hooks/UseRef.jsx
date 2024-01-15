// you can create a ref and attach it to a DOM element using the ref attribute. This allows you to interact with the DOM directly without causing re-renders when the ref value changes.

//  Syntax :- const myRef = useRef()

import React, { useRef, useState } from 'react';

const UseRef = () => {
    const refElement = useRef();
    const [name,setName] = useState('')
    console.log(refElement)
    const reset=()=>{
        setName("");
        refElement.current.focus();
    }
    const handleInput=()=>{
        refElement.current.style.color="blue"
    }
  return (
    <>
    <h1>Understading UseRef</h1>
    <input ref={refElement} type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
    <button onClick={reset}>Reset</button>
    <button onClick={handleInput}>Handle Input</button>
    </>
  )
}

export default UseRef;