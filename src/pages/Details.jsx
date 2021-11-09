import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import BackButton from '../components/BackButton';
import CountryInfo from '../components/CountryInfo';
import { getCountry } from '../utils/api';


const Details = () => {
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
      setCountry(fetchedCountry)
    })()
  }, [name, pathname]);

  // const redirect = (route) => {
  //   document.title = "Countries App";
  //   history.push(route);
  // }

  // if (isFetch) {
  return (
    <div>
      <BackButton/>
      <div className="container-80">
        <div className="container-double">
          <div className="image">
            <img src={country.flags.svg} alt={name + " flag"} />
          </div>
          <CountryInfo country={country}/>
        </div>
      </div>
    </div>
  );
  // } else {
  // redirect("/");
  // return (
  //   <div className="container-80">
  //     <h1>Cargando datos del país...</h1>
  //   </div>
  // )
  // }
};
export default Details;