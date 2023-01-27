export interface ToDo {
  id: number;
  toDo: string;
  isDone: boolean;
}

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; toDo: string } };

export const todoReducer = (state: ToDo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), toDo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "edit":
      const { id, toDo } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, toDo: toDo } : todo
      );
    default:
      return state;
  }
};
