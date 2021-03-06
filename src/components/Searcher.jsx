import React, { useRef } from "react";
import "./styles/Searcher.css"
// import debounce from 'lodash.debounce';

const Searcher = ({ search, setSearch}) => {

  const searchInput = useRef(null)
  
  const handleChange = (event) => {
    event.preventDefault();
    const { target } = event;

    console.log(target.value);

    //Tomamos el valor del input
    const newSearch = searchInput.current.value;
    
    //Y lo enviamos al componente principal
    setSearch(newSearch)
  }


  return (
    <form className="search">
      <ion-icon name="search-outline"></ion-icon>
      <input
        type="text"
        ref={searchInput}
        value={search}
        className="search-input"
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </form>
  )
}

export default Searcher;