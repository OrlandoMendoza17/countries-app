import "./styles/Details.css";
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import BackButton from '../components/BackButton';
import CountryInfo from '../components/CountryInfo';
import { getCountry } from '../utils/api';


const Details = () => {
  const [isFetched, setIsFetched] = useState(false)
  const [country, setCountry] = useState({
    "name": {
      common: "",
      official: "",
      nativeName: {
        spa: {
          official: "República Bolivariana de Venezuela",
          common: "Venezuela"
        }
      }
    },
    flags: {
      svg: "",
    },
    tld: [],
    region: "",
    subregion: "",
    population: 0,
    currencies: {},
    languages: {},
    capital: [],
    borders: [],
  })

  const { name } = useParams();
  const { pathname } = useLocation();
  // const history = useHistory();

  useEffect(() => {    
    (async()=>{
      const url = pathname.split("/")[1]
      const fetchedCountry = await getCountry(url, name.toLowerCase())
      setIsFetched(true)
      setCountry(fetchedCountry)
    })()
  }, [name, pathname]);

  return (
    <div className="px-3 px-md-4 px-lg-5 py-4">
      {
        isFetched ?
        <>
          <BackButton/>
          <div className="Details container-double pt-4 px-5 px-lg-0">
            <figure className="shadow-sm">
              <img className="Details__image img-fluid" src={country.flags.svg} alt={`${name}-flag`} />
            </figure>
            <CountryInfo country={country}/>
          </div>
        </>
        :
        <h3>Cargando datos del país...</h3>
      }
    </div>
  );
};
export default Details;