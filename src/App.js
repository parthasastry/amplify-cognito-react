import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PremiumContent from "./pages/PremiumContent";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/premium">Premium Content</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<PremiumContent />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
