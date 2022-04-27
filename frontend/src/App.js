import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./accounts/container/Container";
import DashboardHome from "./accounts/home/DashboardHome";
import WarningHome from "./accounts/warning/WarninhHome";
import RecomHome from "./accounts/recommendation/RecomHome";
import UsersHome from "./accounts/clientsmanagement/UsersHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Dashboard" element={<DashboardHome />}></Route>
          <Route exact path="/" element={<Container />}></Route>
          <Route exact path="/Warning" element={<WarningHome />}></Route>
          <Route exact path="/Recommendation" element={<RecomHome />}></Route>
          <Route exact path="/Users" element={<UsersHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
