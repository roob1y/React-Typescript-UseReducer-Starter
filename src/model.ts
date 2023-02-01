export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; todo: string } }

export const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "edit":
      const { id, todo: updatedTodo } = action.payload;
      return state.map((toDo) =>
        toDo.id === id ? { ...toDo, todo: updatedTodo } : toDo
      );
    default:
      return state;
  }
};
