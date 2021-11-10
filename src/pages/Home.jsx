import React, { useEffect } from 'react';
import { useState } from "react";

import { filter } from "../utils/filter"
import { allRegions } from '../utils/regions';

import "./styles/Home.css"

import Searcher from '../components/Searcher';
import SelectRegion from '../components/SelectRegion';
import CountriesList from '../components/CountriesList';
import { getCountries } from '../utils/api';

const Home = () => {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")
  const [regions] = useState(allRegions)
  
  const [countries, setCountries] = useState({ all:[], filtered:[], wereFetched: false })
  const [isFetched, setIsFetched] = useState(false)

  const filterCountries = (region, search) => {

    const { regionFiltered } = filter.byRegion(region, countries.all)
    const { filteredCountries } = filter.bySearch(search, regionFiltered)

    setCountries({ ...countries, filtered: filteredCountries })
  }

  useEffect(() => {
    (async()=>{
      const data = await getCountries()
      
      setIsFetched(true)
      setCountries({ 
        ...countries, 
        all: data, 
        filtered: data,
        wereFetched: true 
      })
      
    })()
  }, [])

  useEffect(() => {
    filterCountries(region, search)
  }, [search, region])

  return (
    <div className="px-3 px-md-4 px-lg-5">
      <div className="search-filters py-4">
        <Searcher
          filterCountries={filterCountries}
          search={search}
          setSearch={setSearch}
        />
        <SelectRegion
          regions={regions}
          setSearch={setSearch}
          setRegion={setRegion}
        />
      </div>
      {
        isFetched && !!countries.filtered.length &&
        <h3 className="">
          Total: <strong>{countries.filtered.length}</strong>
        </h3>
      }
      <CountriesList countries={countries} />
    </div>
  )
}

export default Home;