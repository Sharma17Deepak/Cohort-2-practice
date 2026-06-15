// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

import {useRef, useState } from "react";

export default function App() {
  return (
    <>
      <Assignment2/>
    </>
  )
}

function Assignment2() {
  const[count,setCount] = useState(0);
  const numberofRender = useRef(0);

  const handleRender = () => {
   setCount((count) => {return count+1})
  }
  numberofRender.current = numberofRender.current + 1; 

  return(
    <>
      <h2>Component has rendered { numberofRender.current } times</h2>
      <button onClick={handleRender}>render</button>
    </>
  );
  
}