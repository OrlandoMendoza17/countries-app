import React from "react";

import debounce from 'lodash.debounce';

class Buscador extends React.Component {

  state = {
    busqueda: "",
    emitChangeDebounced: debounce((value) => {
      this.props.datosBusqueda(value);
    }, 10)
  }

  componentWillUnmount() {
    this.state.emitChangeDebounced.cancel();
  }

  handleChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { datosBusqueda } = this.props;

    this.state.emitChangeDebounced(target.value);
    console.log(target.value);

    //Tomamos el valor del input
    const termino = this.busquedaRef.value;

    //Y lo enviamos al componente principal
    datosBusqueda(termino);
  }

  setRef = (element) => {
    this.busquedaRef = element
  }

  render() {
    const { setRef } = this
    const { busqueda } = this.state

    return (
      <form className="search">
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          ref={setRef}
          value={busqueda}
          className="search-input"
          onChange={this.handleChange}
          placeholder="Search for a country..."
        />
      </form>
    )
  }
}

export default Buscador;