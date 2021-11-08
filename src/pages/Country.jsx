import React from 'react';
import {useState} from "react";
import Buscador from '../components/Buscador';
import SelectBox from '../components/SelectBox';
import Countries from '../components/Countries';

const Country = ({filterByRegion, filterBySearch, regiones, filtered, isFetch}) => {
  const [search, setSearch] = useState("")
  
  return (
    <>
      <div className="container-80">
        <div className="search-filters">
          <Buscador
            filterBySearch={filterBySearch} 
            search={search}
            setSearch={setSearch}
            />
          <SelectBox 
            width={200}
            regions={regiones} 
            search={search}
            setSearch={setSearch}
            filterByRegion={filterByRegion}
          />
        </div>
      </div>
    
      <Countries 
        isFetch={isFetch}
        countries={filtered}
      />
    </>
  )
}

export default Country;