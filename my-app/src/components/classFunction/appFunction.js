import React, { useState, useEffect } from 'react';
import "./appClass.css";

const CounterWidget = (props) => {
  const [evenOdd, setEvenOdd] = useState(props.count % 2 === 0 ? "even" : "odd");
  useEffect(() => {
    setEvenOdd(props.count % 2 === 0 ? "even" : "odd")
  }, [props.count])
  return (
    <>
    <span>
      {props.count}
    </span>
    <span>
      {evenOdd}
    </span>
  </>
    )
}

export const CounterFunction = () => {
  const [count, setCount] = useState(3);
  const handleIncrement = () => {
  setCount(count + 1);
  }
  const handleDecrement = () => {
  setCount(count - 1);
  }
  return (
      <div className='wrapper'>
        <CounterWidget count={count}/>
          <div className='btn-wrapper'> 
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
      </div>
  
  )
}