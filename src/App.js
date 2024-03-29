import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import HealthForm from "./screens/HealthForm";
import Result from "./screens/Result";
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/HealthForm" element={<HealthForm />} />
          <Route exact path="/health-score" element={<Result />} />
        </Routes>
    </Router>
  );
}

export default App;
