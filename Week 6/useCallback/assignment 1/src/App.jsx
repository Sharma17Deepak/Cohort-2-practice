// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

import { useCallback, useState, memo } from "react";

export default function App(){
  return <>
    <Assignment1/>
  </>
}

function Assignment1(){
  const [count,setCount] = useState(0);

  const handleIncrement = useCallback( () => {
    setCount((count) => {return count+1});
  },[])
    
  const handleDecrement = useCallback(() => {
    setCount((count) => {return count-1});
  },[])

  return(
    <div>
      <h2>Count is {count}</h2>
      <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

const CounterButtons = memo(({onIncrement,onDecrement}) => {
  return(
    <>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
});