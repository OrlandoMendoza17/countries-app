import React from 'react'
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link className="light-button back-button" to="/">
      <ion-icon name="arrow-back-outline"></ion-icon>
      <span>Back</span>
    </Link>
  )
}

export default BackButton;
