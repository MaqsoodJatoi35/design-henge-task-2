import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosRecordsSlice";
import addTodoSlice from "./addTodo";
import updateTodoSlice from "./updateTodo";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    addTodo: addTodoSlice.reducer,
    updateTodo: updateTodoSlice.reducer,
  },
});

export default store;
