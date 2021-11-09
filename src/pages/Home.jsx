import React, { useEffect } from 'react';
import { useState } from "react";

import { filter } from "../utils/filter"
import { allRegions } from '../utils/regions';

import Buscador from '../components/Buscador';
import SelectBox from '../components/SelectBox';
import CountriesList from '../components/CountriesList';
import { getCountries } from '../utils/api';

const Home = () => {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")
  const [regions] = useState(allRegions)
  
  const [countries, setCountries] = useState({ all:[], filtered:[], wereFetched: false })

  const filterCountries = (region, search) => {

    const { regionFiltered } = filter.byRegion(region, countries.all)
    const { filteredCountries } = filter.bySearch(search, regionFiltered)

    setCountries({ ...countries, filtered: filteredCountries })
  }

  useEffect(() => {
    (async()=>{
      
      const API_DATA = await getCountries()

      setCountries({ 
        ...countries, 
        all: API_DATA, 
        filtered: API_DATA,
        wereFetched: true 
      })
      
    })()
  }, [])

  useEffect(() => {
    filterCountries(region, search)
  }, [search, region])

  return (
    <>
      <div className="container-80">
        <div className="search-filters">
          <Buscador
            filterCountries={filterCountries}
            search={search}
            setSearch={setSearch}
          />
          <SelectBox
            width={200}
            regions={regions}
            region={region}
            search={search}
            setSearch={setSearch}
            setRegion={setRegion}
            filterCountries={filterCountries}
          />
        </div>
      </div>

      <CountriesList
        isFetch={false}
        countries={countries}
      />
    </>
  )
}

export default Home;