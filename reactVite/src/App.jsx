import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div
        style={{ border: "10px solid red", height: "300px", width: "300px" }}
      >
        <h2>ABES Engineering College</h2>
        <br />
        <h3>Siddhartha Singh</h3>
        <h4>2400320101098</h4>
        <h4>CSE</h4>
        <h4>28</h4>
      </div>
    </>
  );
 
  
}

export default App
