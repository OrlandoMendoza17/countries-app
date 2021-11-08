import React from 'react'
import Buscador from '../components/Buscador';
import SelectBox from '../components/SelectBox';
import Countries from '../components/Countries';

const Country = ({datosBusqueda, datosFiltro, regiones, filtered, isFetch, nombreActual}) => {
  return (
    <>
      <div className="container-80">
        <div className="search-filters">
          <Buscador datosBusqueda={datosBusqueda} />
          <SelectBox 
            width={200}
            regions={regiones} 
            datosFiltro={datosFiltro}
          />
        </div>
      </div>
    
      <Countries 
        countries={filtered}
        isFetch={isFetch}
      />
    </>
  )
}

export default Country;