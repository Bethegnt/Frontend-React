// its a prcoess of passing the data or state from parent component to child but its also become a problem when hierarchy components.
import React from 'react'
import ChildB from './ChildB';

const ChildA = ({name}) => {
  return (
    <>
    <ChildB name={name}/>
    </>
  )
}

export default ChildA;