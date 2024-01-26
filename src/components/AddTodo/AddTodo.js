import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "../../store/todosRecordsSlice";
import { useNavigate } from "react-router-dom";

const AddTodo = (props) => {
  const loading = useSelector((state) => state.todos.loading);
  const todosRecords = useSelector((state) => state.todos.todosRecords);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Refs by using in form
  const todoIdRef = useRef();
  const todoNameRef = useRef();
  const todoDescRef = useRef();

  // Submit to add new todo
  const submitHanlder = (event) => {
    event.preventDefault();

    const todoId = todoIdRef.current.value;
    const todoName = todoNameRef.current.value;
    const todoDesc = todoDescRef.current.value;

    if (todoId === "" || todoName === "" || todoDesc === "") {
      return;
    }
    dispatch(todosActions.setLoading(true));
    const todo = {
      todoId,
      todoName,
      todoDesc,
    };
    const todoRecords = [...todosRecords];
    todoRecords.push(todo);
    dispatch(todosActions.settodosRecords(todoRecords));
    // setData(todo);
    dispatch(todosActions.setLoading(false));
    navigate("/");
  };

  useEffect(() => {
    if (todosRecords && todosRecords.length > 0) {
      todoIdRef.current.value =
        +todosRecords[todosRecords.length - 1].todoId + 1;
    } else {
      todoIdRef.current.value = 1;
    }
  });

  return (
    <div className="row col-12">
      <p className="text-center text-danger m-0">
        1.Todo will be added when all fields have some data
      </p>
      <p className="text-center text-danger m-0">
        2.Todo data will be added, I used ReactJs Redux to manage the state
        managements.
      </p>
      <form>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            className="form-control"
            ref={todoIdRef}
            disabled={true}
          />
        </div>

        <div className="form-group">
          <label>Todo Name:</label>
          <input type="text" className="form-control" ref={todoNameRef} />
        </div>

        <div className="form-group">
          <label>Todo Desc:</label>
          <input type="text" className="form-control" ref={todoDescRef} />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHanlder}
          disabled={loading}
        >
          {loading ? "Loading..." : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default React.memo(AddTodo);
