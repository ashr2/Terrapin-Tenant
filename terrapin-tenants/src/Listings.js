import React, { useEffect, useState } from 'react';

const Listings = () => {
  const [sheetData, setSheetData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const nocodeAPI = "https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Sheet1&perPage=100&page=1";
    
    fetch(nocodeAPI)
      .then(response => response.json())
      .then(data => setSheetData(data.data))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className="container m">
        <div className="row">
          {sheetData.map((row, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className="card mb-4">
                <img src={row.Link} alt={index} className="img-thumbnail card-img-top" onClick={() => setSelectedItem(row)}/>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999
          }} onClick={() => setSelectedItem(null)}>
            <img src={selectedItem.Link} style={{ height: '80%', objectFit: 'contain' }} alt={"Unable to render"} />
            <div>
              <h1>{selectedItem.Name}</h1>
              <h1>{selectedItem.Email}</h1>
              <h1>{selectedItem.Address}</h1>
              <h1>{selectedItem.Price}</h1>
              <h3>{selectedItem.Description}</h3>
            </div>
          </div>
        )}
    </div>
  );
};
export default Listings;
