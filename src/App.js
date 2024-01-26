import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import AddTodo from "./components/AddTodo/AddTodo";
import UpdateTodo from "./components/UpdateTodo/UpdateTodo.js";

function App() {
  return (
    <div className="App container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/update/:id" element={<UpdateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
