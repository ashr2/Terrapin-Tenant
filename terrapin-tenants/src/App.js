import React from 'react';
import Navbar from './Navbar';
import SubletForm from './SubletForm';
import ReactDOM from "react-dom/client";
import Home from './Home';
import Listings from './Listings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-listing" element={<SubletForm/>}/>
          <Route path="/view-listings" element={<Listings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
