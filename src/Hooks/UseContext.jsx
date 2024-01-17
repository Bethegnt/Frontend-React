import React, { useContext } from 'react';
import { data } from '../App';

const UseContext = () => {
    const firstname = useContext(data);
  return (
    <>
    <h1>This is useContext hook my FirstName is : {firstname}  </h1>
    </>
  )
}

export default UseContext; 