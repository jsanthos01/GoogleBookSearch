import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SavedPage from './components/SavedList/SavedPage';
import SearchPage from './components/Search/SearchPage';

// react-router-dom used to navigate through SearchPage and SavedPage components 
// exact - disables partial matching of routes, only returns the route if the path is exactly matched to the url 
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
