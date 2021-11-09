import React from "react";
import Card from "./Card";

const CountriesList = ({ countries }) => {

  if (countries.wereFetched) {
    return(
      <>
        {
          countries.filtered.length?
            <div className="container-80">
              <div className="container-grid">
                {
                  countries.filtered.map((country, index) => (
                    <Card key={`card_${index}`} {...country} />
                  ))
                }
              </div>
            </div>
          :
            <div className="container-80">
              <h2>No se encontraron coincidencias</h2>
            </div>
        }
      </>
    )
    
  } else {
    return (
      <div className="container-80">
        <h2>Cargando Países...</h2>
      </div>
    )
  }
}
export default CountriesList;