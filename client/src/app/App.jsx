import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, selectToken } from "../reducers/auth";
import { fetchData } from "../reducers/data";
import { useRoutes } from "../routes";
import { useAuth } from "../hooks/auth.hook";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import "./App.scss";

const { Content } = Layout;

function App() {
  const { ready } = useAuth();
  const isAuthenticated = useSelector(selectIsAuth);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchData(token));
    }
  }, [dispatch, isAuthenticated, token]);

  if (!ready) {
    return <Loader />;
  }

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
