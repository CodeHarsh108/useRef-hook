import './App.css';
import React, { useState } from 'react';
import useCounter from './useCounter';



function Appl() {
  const {counter, increment, decrement} = useCounter();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Appl;