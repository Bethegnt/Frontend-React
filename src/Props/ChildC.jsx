import React from 'react'

const ChildC = ({name}) => {
  return (
    <>
    <h1>Prop drilling name pass from parent component to child C is : {name}</h1>
    </>
  )
}

export default ChildC;