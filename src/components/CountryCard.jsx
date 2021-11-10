import React from "react";
import { Link } from "react-router-dom";
import "./styles/CountryCard.css"

const CountryCard = (props) => {
  const { name:{ common: name }} = props;
  const { flags, population, region, capital } = props;

  return (
    <Link className="CountryCard card" to={`/country/${name}`}>
      <figure className="CountryCard__image">
        <img src={flags.svg} alt={`${name}_flag`} />
      </figure>
      <section className="p-3 pt-2">
        <h4 className="CountryCard__title">{name}</h4>
        <ul className="">
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </section>
    </Link>
  )
}

export default CountryCard;