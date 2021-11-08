import React from "react";
import Card from "./Card";

const Countries = ({ countries, isFetch }) => {

  if (isFetch) {
    return(
      <>
        {
          countries.length?
            <div className="container-80">
              <div className="container-grid">
                {
                  countries.map((country, index) => (
                    isFetch && 
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
export default Countries;