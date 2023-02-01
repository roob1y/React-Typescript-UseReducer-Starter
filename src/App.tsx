import React, { useState, useReducer } from "react";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import "./App.css";
import { todoReducer } from "./model";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "add", payload: todo });
    setTodo("");
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <ToDoList todos={todos} dispatch={dispatch} />
      </div>
    </DragDropContext>
  );
};

export default App;
