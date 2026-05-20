import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState(1);
  return (
    <>
      <div>
        <button onClick={()=>{setId(1)}}>1</button>
        <button onClick={()=>{setId(2)}}>2</button>
        <button onClick={()=>{setId(3)}}>3</button>
        <button onClick={()=>{setId(4)}}>5</button>
      </div>
      <Todo id={id}></Todo>
    </>
  );
}

function Todo({id}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/user/${id}`).then(async (res) => {
      setTodos(res.data.todos);
    });
  }, [id]);

  return (
    <>
      <h2>{todos.todo}</h2>
      <h4>{todos.compledted}</h4>
    </>
  );
}

export default App;
