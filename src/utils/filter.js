

export const filter = {
  byRegion: (region, countries) => {
  
    //si no hay region entonces se asigna los countries por defecto
    const regionFiltered = region? countries.filter(country => 
      country.region === region  
    ) : countries;
    
    return {regionFiltered}
  },
  bySearch: (search, regionFiltered) => {
    const filteredCountries = regionFiltered.filter(country => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })
  
    return {filteredCountries}
  }
}