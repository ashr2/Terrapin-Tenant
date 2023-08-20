import React from 'react';
import Navbar from './Navbar';
import SubletForm from './SubletForm';
import ReactDOM from "react-dom/client";
import Home from './Home';
import Listings from './Listings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from './components/CustomNavbar';
import Homepage from './Homepage';
import TenantProfiles from './TenantProfiles';
import TenantForm from './components/TenantForm';

const App = () => {
  const buildings = ["Alloy", "Terrapin Row", "Parkside", "Tempo",
  "The Varsity", "Commons", "Aster", "Off-campus House", "The Nine",
  "View", "Landmark", "Standard", "College Park Towers", "Aspen Heights"].sort();
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
          <Route path="/" element={<Homepage/>}/>
          <Route path="/add-listing" element={<SubletForm buildings = {buildings}/>}/>
          <Route path="/view-listings" element={<Home buildings={buildings}/>}/>
          <Route path="/tenant-profiles" element={<TenantProfiles/>}/>
          <Route path="/tenant-form" element= {<TenantForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;