import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      id: uuid(),
      item: "",
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const deleteItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: deleteItem
    });
  };
  handleEdit = id => {
    const deleteItem = this.state.items.filter(item => item.id !== id);
    const selectItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: deleteItem,
      item: selectItem.title,
      id: id,
      editItem: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
