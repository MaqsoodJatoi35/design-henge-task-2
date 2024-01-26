import { createSlice } from "@reduxjs/toolkit";

const initialtodosState = {
  todosRecords: [
    {
      todoId: 1,
      todoName: "Maqsood",
      todoDesc: "This is my todo",
    },
  ],
  loading: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialtodosState,
  reducers: {
    settodosRecords(state, action) {
      state.todosRecords = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
