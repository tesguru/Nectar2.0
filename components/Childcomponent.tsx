import React from 'react'

const Childcomponent = () => {
  return (
    console.log("ChildComponent re-rendered!");
    return <b onClick={handleClick}>Click Me</b>;
  )
}

export default Childcomponent
