import React from 'react'
import BorderCountry from './BorderCountry';
import { getNativeNameCountry, displayListFrom, displayList } from '../utils';

const CountryInfo = ({ country }) => {
  const name = getNativeNameCountry(country)
  document.title = country.name.common;

  return (
    <div className="description">
      <h1>{country.name.common}</h1>
      <ul className="info">
        <li>
          <b>Official Name: </b> {country.name.official}
        </li>
        <li>
          <b>Native Name: </b> {name}
        </li>
        <li>
          <b>Population: </b>{country.population.toLocaleString('es-VE')}
        </li>
        <li>
          <b>Region: </b>{country.region}
        </li>
        <li>
          <b>Sub Region: </b>{country.subregion}
        </li>
        <li>
          <b>Capital: </b>
          {displayListFrom(country.capital)}
        </li>
      </ul>
      <ul className="info">
        <li>
          <b>Top Level Domain: </b>{displayListFrom(country.tld)}
        </li>
        <li>
          <b>Currencies: </b>{displayList(country.currencies, "name")}
        </li>
        <li>
          <b>Languages: </b>{displayList(country.languages)}
        </li>
      </ul>
      {
        // Hay algunos países que son sólo islas por lo que no tienen fronteras,
        // De ser así el atributo "borders" no existirá.
        country.borders &&
        <div className="borders">
          <span><b>Border Countries: </b></span>
          {
            country.borders.map((name, key) => (
              <BorderCountry key={`${key}_${name}`} name={name} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default CountryInfo
