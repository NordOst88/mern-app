import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { useRoutes } from "../routes";
import "./App.scss";

const { Content } = Layout;

function App() {
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
