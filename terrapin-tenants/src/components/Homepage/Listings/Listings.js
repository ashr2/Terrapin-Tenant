import React, { useEffect, useState } from 'react';
import ListingCard2 from './ListingCard/ListingCard2';
import './Listings.css'
const Listings = ({buildings}) => {
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

  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to a 32bit integer
    }
    return hash;
  }

  const listings = buildings;
  return (
    <div>
      {listings && listings.map((listing, index) => (
        <a href={(hashCode(listing['Description'])).toString()}>
          <ListingCard2 data = {listing}/>
        </a>
      ))}
    </div>
  );
};
export default Listings;
