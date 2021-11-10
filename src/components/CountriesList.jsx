import React from "react";
import CountryCard from "./CountryCard";
import "./styles/CountriesList.css";

const CountriesList = ({ countries }) => {

  if (countries.wereFetched) {
    return (
      <>
        {
          countries.filtered.length ?
            <div className="CountriesList p-3 pb-5">
              {
                countries.filtered.map((country, index) => (
                  <CountryCard key={`card_${index}`} {...country} />
                ))
              }
            </div>
            :
            <div className="px-5 p-3 pb-5">
              <h2>No se encontraron coincidencias</h2>
            </div>
        }
      </>
    )

  } else {
    return (
      <h4 className="px-5 p-3 pb-5">
        <strong>Cargando Países...</strong>
      </h4>
    )
  }
}
export default CountriesList;