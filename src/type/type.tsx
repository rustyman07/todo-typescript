export interface Todo {
  id: number | null;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: { text: string } }
  | { type: "TOGGLE_TODO"; payload: { id: number } }
  | { type: "REMOVE_TODO"; payload: { id: number | null } }
  | { type: "UPDATE_TODO"; payload: { id: number | null; text: string } };

export interface TodoState {
  todos: Todo[];
}
