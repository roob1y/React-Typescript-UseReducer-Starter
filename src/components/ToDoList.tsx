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

const ToDoList: React.FC<Props> = ({
  todos,
  dispatch,
  completedTodos,
}) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Todos</span>
        <Droppable droppableId={"TodosList"}>
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
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
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Todos</span>
        <Droppable droppableId="TodosRemove">
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
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
    </div>
  );
};

export default ToDoList;
