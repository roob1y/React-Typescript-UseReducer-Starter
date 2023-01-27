import React, { useEffect, useRef, useState } from "react";
import { ToDo, Actions } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  dispatch: (value: Actions) => void;
};

const ToDoCard: React.FC<Props> = ({ toDo, toDos, dispatch }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

  const handleDone = () => {
    dispatch({ type: "done", payload: toDo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "remove", payload: toDo.id });
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type: "edit", payload: {id: toDo.id, toDo: editToDo}});
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form className="todos__single" onSubmit={(e) => handleEdit(e)}>
        {edit ? (
          <input
            ref={inputRef}
            value={editToDo}
            onChange={(e) => setEditToDo(e.target.value)}
            className="todos__single--text"
          />
        ) : toDo.isDone ? (
          <s className="todos__single--text">{toDo.toDo}</s>
        ) : (
          <span className="todos__single--text">{toDo.toDo}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !toDo.isDone) {
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
    </>
  );
};

export default ToDoCard;
