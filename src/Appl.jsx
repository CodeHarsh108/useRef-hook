import './App.css';
import React, { useState } from 'react';
import useCounter from './useCounter';



function Appl() {
  const {counter, increment, decrement, reset} = useCounter(100);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Appl;