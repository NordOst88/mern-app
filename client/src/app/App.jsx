import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch } from "react-redux";
import { setAuth } from "../reducers/auth";
import { useRoutes } from "../routes";
import { useAuth } from "../hooks/auth.hook";
import "./App.scss";

const { Content } = Layout;

function App() {
  const { token, userId } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth({ token, userId }));
  }, [token, userId, dispatch]);
  const routes = useRoutes(false);
  return (
    <Router>
      <Layout>
        <Content>{routes}</Content>
      </Layout>
    </Router>
  );
}

export default App;
