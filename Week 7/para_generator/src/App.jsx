import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [paragraph,setParagraph ] = useState("");

  function gen() {
    const words = ["Hi","There","Welcome","To","Paragraph","Generator","Using","React"];
    let output = ""; 
    for(let i=0;i<Number(count);i++){
      const randomIndx = Math.floor(Math.random() * words.length)
      output = output+words[randomIndx]+" ";
      if((i + 1) % 10 === 0){  //this is for after every 10 words line breaks.
        output += "\n";  
      }
    }
    setParagraph(output);
  }

  return (
    <>
    <center>
      <div className='container'>
        <h1>Para generator</h1>
        <input type='number' placeholder='Enter number of words' onChange={(e) => {setCount(e.target.value)}}/>
        <button onClick={gen}>Generate</button>
        <br></br><br></br>
        <pre>{paragraph}</pre>
      </div>
    </center>
    </>
  )
}

export default App
