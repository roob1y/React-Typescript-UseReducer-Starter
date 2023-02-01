import React, { useEffect, useRef, useState } from "react";
import { Todo, Actions } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  dispatch: (value: Actions) => void;
  index: number;
};

const ToDoCard: React.FC<Props> = ({ todo, dispatch, index }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = () => {
    dispatch({ type: "done", payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "remove", payload: todo.id });
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id: todo.id, todo: editTodo } });
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
      {(droppableProvided) => (
        <form
          className="todos__single"
          onSubmit={(e) => handleEdit(e)}
          {...droppableProvided.draggableProps}
          {...droppableProvided.dragHandleProps}
          ref={droppableProvided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon">
              <AiFillDelete onClick={() => handleDelete()} />
            </span>
            <span className="icon">
              <MdDone onClick={() => handleDone()} />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default ToDoCard;
