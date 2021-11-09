import React from 'react';
import './App.css';

import Header from './components/Header';
import Country from './pages/Country';

import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    modo: "light",
    darkMode: false,
    isFetch: false,
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
    const { toggleDarkMode, filterByRegion, filterBySearch } = this
    const { modo, filtered, regions, darkMode } = this.state
    const { isFetch, countries } = this.state

    return (
      <div className={`App ${modo}`}>
        <Header toggleDarkMode={toggleDarkMode} darkModeOn={darkMode} />
        <Router>
          <Switch> {/* The Switch decides which component to show based on the current URL.*/}

            <Route exact path='/' component={Country} />

            <Route exact path='/country/:name'>
              <Details isFetch={isFetch} countries={countries} />
            </Route>

          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;