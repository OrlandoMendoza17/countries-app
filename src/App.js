import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';

import Details from './pages/Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    modo: "light",
    darkMode: false,
  }
  
  toggleDarkMode = () => {
    const { modo } = this.state
    const { setState } = this

    setState({
      modo: modo === "light" ? "dark" : "light",
      darkMode: modo === "light" ? true : false
    });
  }

  render() {
    const { toggleDarkMode } = this
    const { modo, darkMode } = this.state

    return (
      <div className={`App ${modo}`}>
        <Header toggleDarkMode={toggleDarkMode} darkModeOn={darkMode} />
        <Router>
          <Switch> {/* The Switch decides which component to show based on the current URL.*/}

            <Route exact path='/' component={Home} />

            <Route exact path='/country/:name' component={Details}/>
            <Route exact path='/alpha/:name' component={Details}/>

          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;