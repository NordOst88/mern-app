import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../reducers/auth";
import { useRoutes } from "../routes";
import Navbar from "../components/Navbar";
import "./App.scss";

const { Content } = Layout;

function App() {
  const isAuthenticated = useSelector(selectIsAuth);
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <Layout>
        {isAuthenticated && <Navbar />}
        <Content>{routes}</Content>
      </Layout>
    </Router>
  );
}

export default App;
