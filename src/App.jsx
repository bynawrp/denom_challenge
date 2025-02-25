import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Denomination from "./components/Denomination.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/params">Paramètres</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Denomination />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
