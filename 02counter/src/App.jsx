import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(15)
  //let counter=5
  const addvalue=()=> {
    //counter=counter+1 
    console.log("Added",counter);
    setCounter(counter+1)
  }
  const removevalue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>add value</button>
      <br/>
      <button
      onClick={removevalue}>remove value {counter} </button>
    </>
  )
}
export default App
