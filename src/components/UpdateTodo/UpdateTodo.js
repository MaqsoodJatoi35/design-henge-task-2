import React, { useCallback, useEffect, useRef } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { todosActions } from "../../store/todosRecordsSlice";
import { updateTodoActions } from "../../store/updateTodo";

const UpdateTodo = (props) => {
  const loading = useSelector((state) => state.updateTodo.loading);
  const error = useSelector((state) => state.updateTodo.error);
  const updatedTodo = useSelector((state) => state.updateTodo.updatedTodo);
  const todosRecords = useSelector((state) => state.todos.todosRecords);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  // Refs by using in form
  const todoIdRef = useRef();
  const todoNameRef = useRef();
  const todoDescRef = useRef();

  const setData = (todo) => {
    todoIdRef.current.value = todo.todoId;
    todoNameRef.current.value = todo.todoName;
    todoDescRef.current.value = todo.todoDesc;
  };

  const getTodo = useCallback(
    (id) => {
      let todo;
      if (todosRecords) {
        todo = todosRecords.find((todo) => +todo.todoId === +id);

        if (todo) {
          dispatch(updateTodoActions.setUpdatedTodo(todo));
        }
      }
    },
    [dispatch, todosRecords]
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const todoId = todoIdRef.current.value;
    const todoName = todoNameRef.current.value;
    const todoDesc = todoDescRef.current.value;

    if (todoId === "" || todoName === "" || todoDesc === "") {
      return;
    }

    dispatch(updateTodoActions.setLoading(true));
    let updated;
    const updatedtodosRecords = todosRecords.map((todo) => {
      if (+todo.todoId === +params.id) {
        updated = {
          todoId: +todoId,
          todoName: todoName,
          todoDesc: todoDesc,
        };
        return updated;
      }
      return todo;
    });
    dispatch(updateTodoActions.setUpdatedTodo(updated));
    dispatch(todosActions.settodosRecords(updatedtodosRecords));
    dispatch(updateTodoActions.setLoading(false));
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      getTodo(params.id);
    }

    if (updatedTodo) {
      setData(updatedTodo);
    }
  }, [params.id, getTodo, updatedTodo]);

  if (!updatedTodo) {
    return <p className="text-center">Loading...</p>;
  }

  if (!updatedTodo && error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  return (
    <div className="row col-12">
      <p className="text-center text-danger mt-1 mb-0">
        1.When you navigate to this page by Todo edit it gives you todo record
        by id to edit.
      </p>
      <form>
        <div className="form-group">
          <label>Todo ID:</label>
          <input
            type="text"
            className="form-control"
            disabled={true}
            ref={todoIdRef}
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
          onClick={submitHandler}
          disabled={loading}
        >
          {loading ? "Loading..." : "Update Todo"}
        </button>
      </form>
    </div>
  );
};

export default React.memo(UpdateTodo);
