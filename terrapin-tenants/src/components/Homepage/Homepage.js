import './Homepage.css'
import './Filter/FilterButton.css'
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from 'react';
import Listings from './Listings/Listings'
const Homepage = ({buildings}) => {

  const apartmentBuildings = buildings;
  const [sheetData, setSheetData] = useState([]);
  const [error, setError] = useState(false);
  const [selectedBuildings, setSelectedBuildings] = useState([]);

  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "low") {
      setLow(value);
    } else if (name === "high") {
      setHigh(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
  
    if (e.target.checked) {
      setSelectedBuildings(prevState => [...prevState, value]);
    } else {
      setSelectedBuildings(prevState => prevState.filter(item => item !== value));
    }
  };

  useEffect(() => {
    const nocodeAPI = "https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Sheet1";
    
    fetch(nocodeAPI)
      .then(response => response.json())
      .then(data => setSheetData(data))
      .catch(error => {
          console.error("Error fetching data:", error);
          setError(true);
      });
  }, []);

  useEffect(() => {
    // Logic to update filtered listings based on filters
  }, [sheetData, low, high, selectedBuildings]);
      const defaultListings = [
        { id: 1, Name: "Default Listing 1", 
        LRoom:"https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg",
        Price:"1000",
        Email:"ashrdev1@gmail.com",
        Address:"Tempo",
        Description: "Lorem ipsum dolor sit, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi.",
        Date: '2024-01-15'
        },
        { id: 2, Name: "Default Listing 2", 
        LRoom:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixPdSl7.SV8A/v1/-1x-1.jpg",
        Price:"2000",
        Email:"ashrdev2@gmail.com",
        Address:"View",
        Description: "Lorem ipsum sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
        ,Date: '2024-01-15'  
        },
        { id: 3, Name: "Varsity", 
        LRoom:"https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg",
        Price:"3000",
        Email:"ashrdev3@gmail.com",
        Address:"23 Birch Hill Rd",
        Description: "Lorem  dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
        , Date: '2024-01-12'  
        },
        { id: 4, Name: "Default Listing 4", 
        LRoom:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/383834719.jpg?k=a8ed632aeaf2eb621e6753e941d4fb2f858005614b603cdef5bfe644ce1a1906&o=&hp=1",
        Price:"4000",
        Email:"ashrdev4@gmail.com",
        Address:"24 Birch Hill Rd",
        Description: "Lorem ipsum dolor sit amet,adipiscing elit. Vestibulum sollicitudin massa non convallis vulputate. Ut fermentum nibh aliquam arcu euismod placerat vel ut enim. Sed mattis tempor eros nec imperdiet. Vivamus bibendum tincidunt nulla et sollicitudin. Suspendisse non nisl vitae urna maximus maximus suscipit ac eros. Donec rhoncus sem diam, in placerat quam fringilla nec. Proin at augue vel neque tempus vulputate vitae porttitor est. Suspendisse a eros luctus, auctor ante ut, viverra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ipsum turpis, ullamcorper in orci a, dapibus rutrum mauris. Maecenas et porttitor mi."
        , Date:'2024-01-14'
        }
    ];
  return (
    <div className='container-sm mt-3 form-group-sm'>
        <div className='filter-container'>
        <form>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="accordion-item-fixed">
            <Accordion.Header>Price Range</Accordion.Header>
            <Accordion.Body>
                <div onSubmit={handleSubmit} className="mb-3 form-group d-flex align-items-center">
                    <span className="me-2"><b>Low</b></span>
                    <input type="number" className="form-control" name="low" onChange={handleChange} />
                </div>
                <div onSubmit={handleSubmit} className="mb-3 form-group d-flex align-items-center">
                    <span className="me-2"><b>High</b></span>
                    <input type="number" className="form-control" name="high" onChange={handleChange} />
                </div>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>Building</Accordion.Header>
            <Accordion.Body>
                {apartmentBuildings.map((building, index) => (
                <div class="form-check">
                    <input 
                    class = "form-check-input" 
                    type="checkbox" 
                    value={building}
                    id={`defaultCheck${index}`}
                    onChange = {handleCheckboxChange}
                    checked = {selectedBuildings.includes(building)}
                    />
                    <label class="form-check-label" for="defaultCheck1">
                    {building}
                    </label>
                </div>
                ))}
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </form>
        </div>
      <div className='listings-container'>
        {Array.isArray(sheetData['data']) &&
        <Listings buildings = {(sheetData['data']).filter(
          function(element) {
            return ((!low || element.Price >= Number(low))
              && (!high || element.Price <= Number(high))
              && (selectedBuildings.length === 0 || selectedBuildings.includes(element.Address))
            )
          }
        )}      
        />}
      </div>
    </div>
  );
};

export default Homepage;