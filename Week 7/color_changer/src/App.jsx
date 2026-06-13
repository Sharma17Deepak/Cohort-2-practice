import "./App.css";

function App() {
  return (
    <>
      <div className="buttons">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            document.body.style.backgroundColor = "red";
          }}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            document.body.style.backgroundColor = "yellow";
          }}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            document.body.style.backgroundColor = "black";
          }}
        >
          Black
        </button>
        <button
          style={{ backgroundColor: "purple" }}
          onClick={() => {
            document.body.style.backgroundColor = "purple";
          }}
        >
          Purple
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => {
            document.body.style.backgroundColor = "green";
          }}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            document.body.style.backgroundColor = "blue";
          }}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            document.body.style.backgroundColor = "orange";
          }}
        >
          {" "}
          Default
        </button>
      </div>
    </>
  );
}

export default App;


/*
Same code in react logical way:
import { useState , useEffect} from "react";
import "./App.css";

function App() {
  return (
    <>
      <Colorchanger />
    </>
  );
}
function Colorchanger() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  const colors = ["red", "yellow", "black", "purple", "green", "blue", "orange"];

  return (
    <div className="buttons">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setBgColor(color)}
          style={{
            backgroundColor: color,
            color: color === "black" ? "white" : "black",
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;

*/