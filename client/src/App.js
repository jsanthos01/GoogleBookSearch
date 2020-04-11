import React, {useState} from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SavedPage from './components/SavedList/SavedPage';
import SearchPage from './components/Search/SearchPage';

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Route exact path={["/","/search"]} component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
        </div>
      </Router>

  );
}

export default App;
