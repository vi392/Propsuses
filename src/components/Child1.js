import React from 'react'

function Child1(props) {
  return (
    <div style={props.customstyle}>
         <h2>Child Components</h2>
         <p>my name is {props.name} </p>
         <p>The Total Data is {props.Data}</p>
    </div>
  )
}

export default Child1
