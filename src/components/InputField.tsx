import React, { useRef } from "react";
import "./styles.css";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        placeholder="Enter Your Task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
