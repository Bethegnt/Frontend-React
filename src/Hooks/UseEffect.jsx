// perform side Effects --> like function which is time taking events,fetch api, Update Dom directly
// you can also archive react class lifecycle methods{componentDidMount, componentDidUpdate, componentWillMount} from this.

// syntax :- useEffect(()=>{},[]) this contain two parameter( side effect and another is dependency for rendering.)

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCounter] = useState(0);
    const [data,setData] = useState('Ram')
    useEffect(()=>{
        console.log('component mounted')
    },[data])
    function updateCount(){
        setCounter(count+1);
    }
    function updateData(){
        setData('seeta');
    }
  return (
    <>
    <h1>button clicked {count} times - Understanding useEffect</h1>
    <button onClick={updateCount}>Click Me</button>
    <button onClick={updateData}>Change Data</button>
    </>
  )
}

export default UseEffect;