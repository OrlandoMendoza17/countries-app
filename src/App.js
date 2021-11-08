import React from 'react';
import './App.css';

import Header from './components/Header';
import Country from './pages/Country';

import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {consultarApi} from "./utils"

class App extends React.Component {
  state = {
    regiones: ["Africa", "Americas", "Antartic", "Asia", "Europe", "Oceania"],
    paises: [],
    filtered: [],
    busqueda: "",
    region: "",
    modo: "light",
    darkMode: false,
    isFetch: false,
  }
  
  //El código se ejecuta una única vez.
  componentDidMount = async () =>{
    const API_DATA = await consultarApi()
    this.setState(API_DATA)
    
    console.log("Component did Mount");
    console.log("Se hizo una llamada a la API");
  }

  datosBusqueda = (busqueda) => {
    this.setState({ busqueda }, () => {
      //this.getCountryName(this.state.nombres);
      this.filterCountries(this.state.paises);
    })
  }

  datosFiltro = (region) => {
    this.setState({ region },
      () => this.filterCountries(this.state.paises));
  }

  filterCountries = (countries) => {
    //Convert Objects into a [key, value] array pairs;
    //Filter our countries Object list
    
    const {busqueda, region} = this.state
    
    const filtered = countries.filter((country) => {
      //Check if official name or common name start with our search
      const matchName = country.name.common.toLowerCase().includes(busqueda)
      const condition = (matchName && (country.region === region)) || (matchName && region === "");
      return condition;
    });
    
    //Update State
    this.setState({ filtered });
    
    //Return filtered countries
    return filtered;
  }

  toggleDarkMode = () => {
    const {modo} = this.state
    const {setState} = this
    
    setState({
      modo: modo === "light" ? "dark" : "light",
      darkMode: modo === "light" ? true : false
    });
  }
  
  
  render() {
    const { toggleDarkMode, datosBusqueda, datosFiltro } = this
    const {modo, filtered, regiones, darkMode } = this.state
    const {isFetch, nombreActual, paises } = this.state
    
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
                nombreActual={nombreActual}
                datosFiltro={datosFiltro}
                datosBusqueda={datosBusqueda}
              />
            </Route>
            
            <Route exact path='/country/:name'>
              <Details isFetch={isFetch} countries={paises} />
            </Route>
            
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;