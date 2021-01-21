import React from "react";
import { Router } from "@reach/router";
import "./css/App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <SignUp path="/" />
        <Login path="/login" />
        <Home path="/home" />
      </Router>
    </div>
  );
}

export default App;
