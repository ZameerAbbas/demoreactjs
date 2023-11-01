import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";

import Cart from "./Component/Cart/Cart";
import Shop from "./Component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
          {/* <Route exact path="/HomePage" element={<HomePage />} /> */}
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Cart/Shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
