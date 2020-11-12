import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "../routes";
import "./App.scss";

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="App">
        <header className="App-header">{routes}</header>
      </div>
    </Router>
  );
}

export default App;
