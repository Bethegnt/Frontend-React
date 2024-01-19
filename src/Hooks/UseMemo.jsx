import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [add,setAdd] = useState(0);
    const [minus,setMinus] = useState(100);
    const multiplication = useMemo(function multiply(){
      console.log('*************')
      return add*10;
    },[add])
    
  return (
    <>
    <h1>Learning useMemo</h1>
    {multiplication}
    <button onClick={()=>{setAdd(add+1)}}>Addition</button>
    <span>{add}</span>
    <button onClick={()=>{setMinus(minus-1)}}>Minus</button>
    <span>{minus}</span>
    
    </>
  )
}

export default UseMemo;