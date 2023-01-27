import React from "react";
import { ToDo } from "../model";
import ToDoCard from "./ToDoCard";
import { Actions } from "../model";

interface Props {
  toDos: ToDo[];
  dispatch: (value: Actions) => void;
}

const ToDoList: React.FC<Props> = ({ toDos, dispatch }) => {
  return (
    <div className="todos">
      {toDos.map((todo) => (
        <ToDoCard toDo={todo} toDos={toDos} dispatch={dispatch} key={todo.id} />
      ))}
    </div>
  );
};

export default ToDoList;
