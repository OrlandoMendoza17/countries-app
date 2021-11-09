import React from 'react'
import BorderCountry from './BorderCountry';
import { getNativeNameCountry, displayListFrom, displayList } from '../utils';
import "./styles/CountryInfo.css"

const CountryInfo = ({ country }) => {
  const name = getNativeNameCountry(country)
  document.title = country.name.common;

  return (
    <div className="CountryInfo">
      <h1>{country.name.common}</h1>
      <ul className="info">
        <li>
          <strong>Official Name: </strong> {country.name.official}
        </li>
        <li>
          <strong>Native Name: </strong> {name}
        </li>
        <li>
          <strong>Population: </strong>{country.population.toLocaleString('es-VE')}
        </li>
        <li>
          <strong>Region: </strong>{country.region}
        </li>
        <li>
          <strong>Sub Region: </strong>{country.subregion}
        </li>
        <li>
          <strong>Capital: </strong>
          {displayListFrom(country.capital)}
        </li>
      </ul>
      <ul className="info">
        <li>
          <strong>Top Level Domain: </strong>{displayListFrom(country.tld)}
        </li>
        <li>
          <strong>Currencies: </strong>{displayList(country.currencies, "name")}
        </li>
        <li>
          <strong>Languages: </strong>{displayList(country.languages)}
        </li>
      </ul>
      {
        // Hay algunos países que son sólo islas por lo que no tienen fronteras,
        // De ser así el atributo "borders" no existirá.
        country.borders &&
        <div className="CountryInfo__borders pt-2">
          <span>
            <strong>Border Countries:</strong>
          </span>
          <ul className="pt-3">
            {
              country.borders.map((name, key) => (
                <li className="d-inline">
                  <BorderCountry key={`${key}_${name}`} name={name} />
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default CountryInfo
