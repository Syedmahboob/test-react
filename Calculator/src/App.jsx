import { useState } from 'react'

import './App.css'

function App() {

  const [num , setNum] = useState(10)


  function adder() {
    let n = num + 1;

    setNum(n);

  }

  function sub() {
    let n = num - 1;

    setNum(n);

  }

  function mul() {
    let n = num * 2;

    setNum(n);

  }

  function mul() {
    let n = num * 2;

    setNum(n);

  }

  function div() {
    let n = num / 2;

    setNum(n);

  }

  return (
    <div id='box' className="App">
      <div><h1>{num}</h1> </div>
      <button onClick={adder}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>X</button>
      <button onClick={div}>/</button>
    </div>
  )
}

export default App
