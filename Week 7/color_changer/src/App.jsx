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
