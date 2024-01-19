import React from 'react';
import { useEffect, useState } from 'react';
import SubletForm from './components/SubletForm/SubletForm.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from './components/Navbar/CustomNavbar.js';
import Homepage from './components/Homepage/Homepage';
import TenantProfiles from './components/TenantProfiles/TenantProfiles.js';
import TenantForm from './components/TenantForm';
import ListingPage from './components/Homepage/Listings/ListingPage/ListingPage.js';

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const nocodeAPI = "https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Sheet1";
    fetch(nocodeAPI)
      .then(response => response.json())
      .then(data => setSheetData(data.data))
      .catch(error => {
          console.log("Error");
          setError(true);
      });
  }, []);

  const buildings = ["Alloy", "Terrapin Row", "Parkside", "Tempo",
  "The Varsity", "Commons", "Aster", "Off-campus House", "The Nine",
  "View", "Landmark", "Standard", "College Park Towers", "Aspen Heights"].sort();

  const defaultListings = [
    { id: 1, Name: "Default Listing 1", 
    LRoom:"https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg",
    Kitchen:"https://www.thespruce.com/thmb/S1aye-s9z6VRA58-V8oRLSQwKCc=/5100x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg",
    Price:"1000",
    Email:"ashrdev1@gmail.com",
    Address:"Tempo",
    Description: "Lorem ipsum dolor sit, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    },
    { id: 2, Name: "Default Listing 2", 
    LRoom:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixPdSl7.SV8A/v1/-1x-1.jpg",
    Kitchen:"https://www.thespruce.com/thmb/S1aye-s9z6VRA58-V8oRLSQwKCc=/5100x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg",
    Price:"2000",
    Email:"ashrdev2@gmail.com",
    Address:"View",
    Description: "Lorem ipsum sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    },
    { id: 3, Name: "Varsity", 
    LRoom:"https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg",
    Kitchen:"https://www.thespruce.com/thmb/S1aye-s9z6VRA58-V8oRLSQwKCc=/5100x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg",
    Price:"3000",
    Email:"ashrdev3@gmail.com",
    Address:"23 Birch Hill Rd",
    Description: "Lorem  dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    },
    { id: 4, Name: "Default Listing 4", 
    LRoom:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/383834719.jpg?k=a8ed632aeaf2eb621e6753e941d4fb2f858005614b603cdef5bfe644ce1a1906&o=&hp=1",
    Kitchen:"https://www.thespruce.com/thmb/S1aye-s9z6VRA58-V8oRLSQwKCc=/5100x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg",
    Price:"4000",
    Email:"ashrdev4@gmail.com",
    Address:"24 Birch Hill Rd",
    Description: "Lorem ipsum dolor sit amet,adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    }
  ];

  const listings = sheetData;

  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to a 32bit integer
    }
    return hash;
  }
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
          <Route path="/" element={<Homepage buildings={buildings}/>}/>
          <Route path="/add-listing" element={<SubletForm buildings = {buildings}/>}/>
          <Route path="/tenant-profiles" element={<TenantProfiles/>}/>
          <Route path="/tenant-form" element= {<TenantForm/>}/>
          {listings.map((listing) => 
            <Route path={(hashCode(listing['Description'])).toString()} element = {<ListingPage data={listing}/>}/>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;