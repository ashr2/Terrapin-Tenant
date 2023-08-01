import React from 'react';
import Navbar from './Navbar';
import SubletForm from './SubletForm';
import ReactDOM from "react-dom/client";
import Home from './Home';
import Listings from './Listings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from './components/CustomNavbar';
const App = () => {
  return (
    <div
    style = {{
      backgroundColor: 'white',
      color: "#BF0101"
    }}
    >
      <CustomNavbar />
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