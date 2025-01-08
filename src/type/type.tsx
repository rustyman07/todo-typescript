export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: { text: string } }
  | { type: "TOGGLE_TODO"; payload: { id: number } }
  | { type: "REMOVE_TODO"; payload: { id: number } }
  | { type: "UPDATE_TODO"; payload: { id: number; text: string } };

export interface TodoState {
  todos: Todo[];
}
