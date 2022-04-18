import React from "react";
import Container from "./accounts/container/Container";

import RecomHome from "./accounts/recommendation/RecomHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WarningHome from "./accounts/warning/WarninhHome";
import DashboardHome from "./accounts/home/DashboardHome";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/Dashboard" element={<DashboardHome />}></Route>
            <Route exact path="/" element={<Container />}></Route>
            <Route exact path="/Warning" element={<WarningHome />}></Route>
            <Route exact path="/Recommendation" element={<RecomHome />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
