import React from 'react'
import {data} from '../App'

const ChildF = () => {
  return (
    <>
    <data.Consumer>
       {
        (name)=>{
            return(
              <h1>This is context API passing props :{name}</h1>
            )
        }
       } 
    </data.Consumer>
    </>
  )
}

export default ChildF;