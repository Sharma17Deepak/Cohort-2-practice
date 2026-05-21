// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

import { useEffect, useRef, useState } from "react";

export default function App() {
  return (
    <>
      <Assignment1/>
    </>
  )
}

function Assignment1() {
  const[input,setInput] = useState("");
  const inpRef = useRef();

  useEffect(() => {
    inpRef.current.focus();
  },[])

  const handleClick = () => {
    inpRef.current.focus();
  }

  return(
    <>
      <input type="text" ref={inpRef} placeholder="Enter some text"/>
      <button onClick={handleClick}>Click Me!</button>
    </>
  )
}