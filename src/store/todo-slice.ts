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
  todos: [],
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
    toggleAll(state, action) {
      const isToggleAll = action.payload;
      if (isToggleAll) {
        state.todos = state.todos.map((todo) => {
          todo.completed = false;
          return todo;
        });
      } else {
        state.todos = state.todos.map((todo) => {
          todo.completed = true;
          return todo;
        });
      }
    },
    editTodo(state, action) {
      const {todoId, text} = action.payload;
      const todo = state.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const toggleAll = (state: boolean) => {
  return (dispatch: any) => {
    dispatch(todoSlice.actions.toggleAll(state));
  };
};

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
