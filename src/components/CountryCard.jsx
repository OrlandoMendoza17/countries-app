import React from "react";
import { Link } from "react-router-dom";
import "./styles/CountryCard.css"

const CountryCard = (props) => {
  const { name:{ common: name }} = props;
  const { flags, population, region, capital } = props;

  return (
    <Link className="CountryCard card p-2" to={`/country/${name}`}>
      <figure className="CountryCard__image">
        <img src={flags.svg} alt={`${name}_flag`} />
      </figure>
      <h4 className="CountryCard__title pt-2 px-2">{name}</h4>
      <ul className="px-2">
        <li>Population: {population}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
    </Link>
  )
}

export default CountryCard;