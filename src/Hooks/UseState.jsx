import React, { useState } from 'react'

const UseState = () => {
    const [counter,setCounter] = useState(0);
    const decrease = () =>{
        if(counter>0){
            setCounter(counter-1);
        }
    }
    const increase = () =>{
        setCounter(counter+1);
    }
  return (
    <>
    <h1>Understanding UseState</h1>
    <button onClick={decrease}>-</button>
    <span>{counter}</span>
    <button onClick={increase}>+</button>
    </>
  )
}

export default UseState;