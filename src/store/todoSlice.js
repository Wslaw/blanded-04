import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;
export const getTodos = state => state.todos;
