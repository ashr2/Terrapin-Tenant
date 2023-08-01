import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Lightbox from './Lightbox';

const Listings = () => {
  const [sheetData, setSheetData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const nocodeAPI = "https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Sheet1&perPage=100&page=1";
    
    fetch(nocodeAPI)
      .then(response => response.json())
      .then(data => setSheetData(data.data))
      .catch(error => {
          console.log("Error");
          setError(true);
      });
  }, []);


  const defaultListings = [
    { id: 1, Name: "Default Listing 1", 
    Link:"https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg",
    Price:"1000",
    Email:"ashrdev1@gmail.com",
    Address:"21 Birch Hill Rd",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    },
    { id: 2, Name: "Default Listing 2", 
    Link:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixPdSl7.SV8A/v1/-1x-1.jpg",
    Price:"2000",
    Email:"ashrdev2@gmail.com",
    Address:"22 Birch Hill Rd",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    },
    { id: 3, Name: "Default Listing 3", 
    Link:"https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg",
    Price:"3000",
    Email:"ashrdev3@gmail.com",
    Address:"23 Birch Hill Rd",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    },
    { id: 4, Name: "Default Listing 4", 
    Link:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/383834719.jpg?k=a8ed632aeaf2eb621e6753e941d4fb2f858005614b603cdef5bfe644ce1a1906&o=&hp=1",
    Price:"4000",
    Email:"ashrdev4@gmail.com",
    Address:"24 Birch Hill Rd",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
    }
  ];

  return (
    <div>
      <Lightbox images = {sheetData || defaultListings}/>
    </div>
  );
};
export default Listings;
