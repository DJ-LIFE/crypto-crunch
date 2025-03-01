import { create } from "zustand";
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const countStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

interface TodoState {
  todos: string[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: string) => void;
  updateTodo: (oldTodo: string, newTodo: string) => void;
}

export const todoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((item) => item !== todo),
    })),
  updateTodo: (oldTodo, newTodo) =>
    set((state) => ({
      todos: state.todos.map((item) => (item === oldTodo ? newTodo : item)),
    })),
}));
