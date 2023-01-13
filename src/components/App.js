import React from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import TodoCreate from "./todos/TodoCreate.js";
import TodoEdit from "./todos/TodoEdit";
import TodoDelete from "./todos/TodoDelete";
import TodoList from "./todos/TodoList";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={withRouter(TodoList)} />
            <Route path="/todos/new" exact component={withRouter(TodoCreate)} />
            <Route
              path="/todos/edit/:id"
              exact
              component={withRouter(TodoEdit)}
            />
            <Route
              path="/todos/delete/:id"
              exact
              component={withRouter(TodoDelete)}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
