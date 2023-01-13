import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../../actions";

import "../../TodoList.css";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  // determines if edit/delete allowed (admin only)
  renderAdmin(todo) {
    if (
      todo.userId === this.props.currentUserId &&
      this.props.currentUserId !== null
    ) {
      return (
        <div className="right floated content">
          <Link
            to={`/todos/edit/${todo.id}`}
            className="tiny ui teal icon button"
          >
            <i className="edit outline icon"></i>
          </Link>
          <Link
            to={`/todos/delete/${todo.id}`}
            className="tiny ui grey icon button"
          >
            <i className="trash alternate outline icon"></i>
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          {this.renderAdmin(todo)}
          <div className="content">
            <p className="content-text">{todo.todo}</p>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "center" }}>
          <Link to="/todos/new" className="ui teal button">
            Add a task
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="ui middle aligned selection list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // gets the values from our todos state object
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
