import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Home from './pages/Home';

import Details from './pages/Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={`App ${""}`}>
      <Header toggleDarkMode={()=>{}} darkModeOn={false} />
      <Router>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}

          <Route exact path='/' component={Home} />

          <Route exact path='/country/:name' component={Details} />
          <Route exact path='/alpha/:name' component={Details} />

        </Switch>
      </Router>
    </div>
  )
}

export default App;