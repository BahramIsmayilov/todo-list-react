import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h3>hello from TodoList</h3>
        <TodoItem />
      </section>
    );
  }
}
