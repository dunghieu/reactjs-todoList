import {createSlice} from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const initialState: TodoState = {
  todos: [
    {
      id: '1',
      text: 'Use Redux',
      completed: true,
    },
  ],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = action.payload;
      state.todos.push({
        id: '_' + Math.random().toString(36).substr(2, 9),
        text: todo,
        completed: false,
      });
    },
    removeTodo(state, action) {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    removeCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    toggleTodo(state, action) {
      const todoId = action.payload;
      const todo = state.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
