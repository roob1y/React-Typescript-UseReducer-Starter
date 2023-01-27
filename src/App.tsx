import React, { useState, useReducer } from "react";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import "./App.css";
import { todoReducer } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({ type: "add", payload: toDo });
    setToDo("")
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <ToDoList toDos={todos} dispatch={dispatch}/>
    </div>
  );
};

export default App;
