import React from "react";
import { Todo, Actions } from "../model";
import ToDoCard from "./ToDoCard";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  dispatch: (value: Actions) => void;
}

const ToDoList: React.FC<Props> = ({ todos, dispatch }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Todos</span>
        <Droppable droppableId="active">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <ToDoCard
                  key={todo.id}
                  todo={todo}
                  dispatch={dispatch}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Todos</span>
        <Droppable droppableId="completed">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <ToDoCard
                  key={todo.id}
                  todo={todo}
                  dispatch={dispatch}
                  index={index}
                />
              ))}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default ToDoList;
