import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css';
import Home from "./pages/Home"
import Details from "./pages/Details"

const App = () => {
  return (
    <div className={`App ${""}`}>
      {/* <Header toggleDarkMode={()=>{}} darkModeOn={false} /> */}
      <BrowserRouter>
        <Routes> 
          The Routes decides which component to show based on the current URL.

          <Route exact path='/' element={<Home/>} />

          <Route exact path='/country/:name' element={<Details/>} />
          <Route exact path='/alpha/:name' element={<Details/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;