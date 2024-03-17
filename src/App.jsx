import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Countary'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {


  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button clicked 2')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (

    <>    
      <h3> React core concept 2</h3>
  
    <Friends></Friends>
     <Users></Users>
     <Team></Team>
     <Counter ></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => {alert('third clicked')}}>click3</button>
      <button onClick={() => addToFive(3)}>Four</button>

     
 
    </>
  )
}

export default App
