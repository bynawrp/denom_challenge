import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Denomination from "./components/Denomination.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/denom_challenge/">
        <div className="app-container">
          <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/params">Paramètres</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Denomination />} />
            <Route path="/params" element={<div>Paramètres</div>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
