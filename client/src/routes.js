import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TasksListPage from "./pages/TasksListPage";
import TaskPage from "./pages/TaskPage";
import AuthPage from "./pages/AuthPage";
import CreateTaskPage from "./pages/CreateTaskPage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/tasks" exact>
          <TasksListPage />
        </Route>
        <Route path="/create" exact>
          <CreateTaskPage />
        </Route>
        <Route path="/task/:id">
          <TaskPage />
        </Route>
        <Redirect to="/tasks" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
