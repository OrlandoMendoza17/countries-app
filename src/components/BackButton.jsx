import React from 'react'
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="container-80">
      <Link className="App-link" to="/">
        <button className="light-button back-button">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <p>Back</p>
        </button>
      </Link>
    </div>
  )
}

export default BackButton;
