// Context API allows data to be passed through a component tree without having to pass props manually at every level.
// three things we need to archieve contextapi:- create, provider, consumer

import React from 'react'
import ChildE from './ChildE';

const ChildD = () => {
  return (
    <>
    <ChildE/>
    </>
  )
}

export default ChildD;