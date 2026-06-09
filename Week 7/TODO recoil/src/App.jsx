import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  descriptionAtom,
  searchAtom,
  titleAtom,
  todosAtom,
} from "./store/atoms/todo";
import {   filterSelector } from "./store/selectors/filterSelector";

function App() {
  return (
    <>
      <RecoilRoot>
        <SearchBox/>
        <TodoForm />
        <TodoList/>
      </RecoilRoot>
    </>
  );
}

function SearchBox() {
  const [filtr, setFiltr] = useRecoilState(searchAtom);
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search"
          value={filtr}
          onChange={(e) => {
            setFiltr(e.target.value);
          }}
        />
      </div>
    </>
  );
}

function TodoList() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const filteredTodos = useRecoilValue(filterSelector);
  return (
    <>
      <div className="container">
        <h1>List of TODOS :-</h1>
        {filteredTodos.map((item, index) => (
          <div key={index} className="todos">
            <p>
              {" "}
              id: {index}, Title: {item.title} , Description: {item.desc}{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function TodoForm() {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [desc, setDesc] = useRecoilState(descriptionAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const addTodo = () => {
    if (title === "" || desc === "") {
      alert("Inputs are empty");
    } else {
      const newTodo = {
        title,
        desc,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button onClick={addTodo}>Add todo</button>
      </div>
    </>
  );
}

export default App;
