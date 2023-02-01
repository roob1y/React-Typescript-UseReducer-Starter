import React from "react";
import { Todo, Actions } from "../model";
import ToDoCard from "./ToDoCard";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  dispatch: (value: Actions) => void;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, dispatch, completedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId={"TodosList"}>
        {(droppableProvided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            <span className="todos__heading">Active Todos</span>
            {todos.map((todo, index) => (
              <ToDoCard
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
                index={index}
              />
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosComplete">
        {(droppableProvided, snapshot) => (
          <div
            className={`todos complete ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            <span className="todos__heading">Completed Todos</span>
            {completedTodos.map((todo, index) => (
              <ToDoCard
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
                index={index}
              />
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
