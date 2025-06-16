import React, { useRef, useState } from 'react'
import './App.css'

function App() {
  // Number One
  // const [stateCount, setStateCount] = useState(0);
  // const refCount = useRef(0);
  // const increment = () => {
  //   setStateCount(stateCount + 1);
  // }
  // const incrementref = () => {
  //   refCount.current += 1; 
  //   console.log(`Ref Count: ${refCount.current}`); 
  // }

  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'green';
  }
  const resetFocus = () => {
    inputRef.current.blur();
    inputRef.current.style.backgroundColor = 'white';
  }


  return (
    <div>
      {/* <h1>State Count : {stateCount}</h1>
      <button onClick={increment}>Increment</button>
      <h1>Ref Count : {refCount.current}</h1>
      <button onClick={incrementref}>Increment</button> */}

      <input type="text" placeholder='Focus me' ref={inputRef}/>
      <br />
      <br />
      <button onClick={focusInput}>Focus</button>
      <br />
      <br />
      <button onClick={resetFocus}>Reset</button>

    </div>
  )
}

export default App
