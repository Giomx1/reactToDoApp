import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import { fetchTodo, deleteTodo } from "../../actions";

import Modal from "../Modal";

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      // We use React.Fragment to avoid styling issues when using a div
      <>
        {/* onClick will only call action at a certain time -- when we have the todo id */}
        <button
          onClick={() => this.props.deleteTodo(id)}
          className="ui black button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.todo) {
      return "Are you sure you want to delete this task?";
    }

    return `Are you sure you want to delete the task \u2014 "${this.props.todo.todo}" ?`;
  }

  render() {
    return (
      <Modal
        title="Delete a task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(TodoDelete);
