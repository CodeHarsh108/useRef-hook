import React, { useRef, useState } from 'react'
import './App.css'

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);


  const increment = () => {
    setStateCount(stateCount + 1);
  }


  const incrementref = () => {
    refCount.current += 1; 
    console.log(`Ref Count: ${refCount.current}`); 
  }


  return (
    <div>
      <h1>State Count : {stateCount}</h1>
      <button onClick={increment}>Increment</button>

      <h1>Ref Count : {refCount.current}</h1>
      <button onClick={incrementref}>Increment</button>
    </div>
  )
}

export default App
