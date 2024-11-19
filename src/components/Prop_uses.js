
import React from 'react'
import Child1 from './Child1'

function Prop_uses() {

    const message = "Hello rahul";

    const result = 24;

    const parentStyle = {
         
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius : '5px',

    };

  return (
    <>    
    <div className='container'>
    
     <h2>Parents Class</h2>
     <p>{message} {result} </p>
     <Child1 name= {message} Data= {result} customstyle= {parentStyle}/> 
    
    </div>
    </>
  )
}

export default Prop_uses
