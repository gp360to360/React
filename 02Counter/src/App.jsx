import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter] = useState(15)
  // let counter = 15;
const addValue = () =>{
if(counter+1>20)
{
  alert("Limit exceed")
}
else
{
  setCounter(counter+1)
  console.log(counter);
}
console.log(counter);
}
const removeValue = () =>{
if(counter-1<0)
{
  alert("Value cannot be negative")
}
else
{
  setCounter(counter-1);
  console.log(counter)
}
}
  return (
    <>
      <h1>Gyanendra Prajapati</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>
        add value {counter}</button>
        <br />
      <button onClick={removeValue}>
        remove Value {counter}
      </button>
    </>
  )
}

export default App
