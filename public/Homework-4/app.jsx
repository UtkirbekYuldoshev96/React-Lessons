import React from 'react'
import Maps from './Components/Maps';

export default function App() {
  
  let userName = "Muhammad"
  let age = 34;
  let obj = {
    color: "red",
    price: 600_000,
    devName: "React"
  }

  return (
    <>
      <h3>lorem2</h3>
      <p>lorem</p>
      <button>Click me</button>
      <Maps name={userName} age={age} card={obj}/>    
    </>
  )
}
