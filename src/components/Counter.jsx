import { useState } from 'react'
import "../css/App.css"

export function Counter(){

  const [count,setCount] = useState(0);

  function plusOne() {
    setCount((count)=>count+1);
  }

  function minusOne() {
    setCount((count)=>count-1);
  }

  return (
    <>
      <h1 className = 'Counter'>Counter:</h1> 
      <p  className = 'viewCount'>{count}</p>

      <div className = 'react-button'>        
        <button  className = "minus" onClick = {minusOne}>- Minus</button>
        <button  className = "plus"  onClick = {plusOne}>Plus +</button>
      </div>
    </>
  )
}
