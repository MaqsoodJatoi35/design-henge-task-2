import { createSlice } from "@reduxjs/toolkit";

const initialUpdateTodoState = {
  updatedTodo: null,
  loading: null,
};

const updatetodoSlice = createSlice({
  name: "updateTodo",
  initialState: initialUpdateTodoState,
  reducers: {
    setUpdatedTodo(state, action) {
      state.updatedTodo = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const updateTodoActions = updatetodoSlice.actions;

export default updatetodoSlice;
