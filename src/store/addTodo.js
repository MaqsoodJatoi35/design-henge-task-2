import { createSlice } from "@reduxjs/toolkit";

const initialAddTodoState = {
  todo: null,
  loading: null,
  error: null,
};

const addTodoSlice = createSlice({
  name: "addTodo",
  initialState: initialAddTodoState,
  reducers: {
    setTodo(state, action) {
      state.todo = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const addTodoActions = addTodoSlice.actions;

export default addTodoSlice;
