import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import uuid from "uuid";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
