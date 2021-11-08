import React from 'react';
import './App.css';

import Header from './components/Header';
import Country from './pages/Country';

import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { consultarApi } from "./utils"

class App extends React.Component {
  state = {
    regiones: ["Africa", "Americas", "Antartic", "Asia", "Europe", "Oceania"],
    countries: [],
    byRegion: [],
    filtered: [],
    search: "",
    region: "",
    modo: "light",
    darkMode: false,
    isFetch: false,
  }

  //El código se ejecuta una única vez.
  componentDidMount = async () => {
    const API_DATA = await consultarApi()
    this.setState(API_DATA)

    console.log("Component did Mount");
    console.log("Se hizo una llamada a la API");
  }

  filterByRegion = (region) => {
    const { countries } = this.state

    //si no hay region entonces se asigna los countries por defecto
    const filtered = region? countries.filter(country => 
      country.region === region  
    ) : countries;
    
    this.setState({filtered, byRegion: filtered})
  }
  
  filterBySearch = (search) => {
    const { byRegion } = this.state

    const filtered = byRegion.filter(country => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })

    this.setState({filtered, search})
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
    const { modo, filtered, regiones, darkMode } = this.state
    const { isFetch, countries } = this.state

    return (
      <div className={`App ${modo}`}>
        <Header toggleDarkMode={toggleDarkMode} darkModeOn={darkMode} />
        <Router>
          <Switch> {/* The Switch decides which component to show based on the current URL.*/}

            <Route exact path='/'>
              <Country
                isFetch={isFetch}
                filtered={filtered}
                regiones={regiones}
                filterBySearch={filterBySearch}
                filterByRegion={filterByRegion}
              />
            </Route>

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