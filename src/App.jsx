import React, { useRef } from 'react'
import './App.css'

function App() {

  const myRef = useRef("Harsh");

  return (
    <div>
      <h1>Hello, {myRef.current}</h1>
    </div>
  )
}

export default App
