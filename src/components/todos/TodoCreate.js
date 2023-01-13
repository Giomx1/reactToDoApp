import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../../actions";
import TodoForm from "./TodoForm";

import "../../TodoList.css";

class TodoCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add a task</h3>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createTodo })(TodoCreate);
