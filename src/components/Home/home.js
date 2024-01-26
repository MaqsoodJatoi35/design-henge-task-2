import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "../../store/todosRecordsSlice";
import { NavLink } from "react-router-dom";

// Style CSS
import "./style.css";

const Home = (props) => {
  const todosRecords = useSelector((state) => state.todos.todosRecords);
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  const handleNavLinkClick = (event) => {
    event.preventDefault();

    const confirm = window.confirm("Confirm to delete");

    if (!confirm) {
      return;
    }

    const id = +event.currentTarget.getAttribute("data-ref");
    console.log(id);

    const todoRecords = todosRecords.filter(function (todo) {
      console.log(+todo.todoId !== +1);
      return +todo.todoId !== +id;
    });

    dispatch(todosActions.settodosRecords(todoRecords));
  };

  return (
    <div className="row my-2">
      <div className="col-12">
        {loading && <p className="text-center">Loading...</p>}
        {!loading && (
          <>
            <p className="text-center text-danger m-0">
              Hello Team Design Henge currently i am doing remote job at
              software house reason of skiping is it's startup <br />
              and remote base job very hard to manage time and do your task!I
              hope you select me
              <br /> for last round i am hardworker and pationate with my work
              Thanks.
            </p>
            <table className="table  my-2">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Todo Name</th>
                  <th scope="col">Todo Description</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {todosRecords &&
                  todosRecords.length > 0 &&
                  todosRecords.map((todo, index) => {
                    return (
                      <tr key={index}>
                        <td>{todo.todoId}</td>
                        <td>{todo.todoName}</td>
                        <td>{todo.todoDesc}</td>
                        <td>
                          <NavLink
                            activeClassName="active"
                            to={`/update/${todo.todoId}`}
                            end={true}
                          >
                            <span>Edit</span>
                          </NavLink>
                        </td>
                        <td>
                          <NavLink
                            activeClassName="active"
                            onClick={handleNavLinkClick}
                            data-ref={todo.todoId}
                            end={true}
                          >
                            <span>Delete</span>
                          </NavLink>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Home);
