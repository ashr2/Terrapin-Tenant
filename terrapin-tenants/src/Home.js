import React, { useState } from 'react';
import './SubletForm.css';
import Accordion from 'react-bootstrap/Accordion';
import Lightbox from './Lightbox';
import { useEffect } from 'react';
const Home = ({buildings}) => {

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
    const nocodeAPI = "https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Sheet1&perPage=100&page=1";
    
    fetch(nocodeAPI)
      .then(response => response.json())
      .then(data => setSheetData(data.data))
      .catch(error => {
          console.log("Error");
          setError(true);
      });
  }, []);

  return (
    <div className='container-sm mt-3 form-group-sm'>
      <form>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
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

      <div>
        <Lightbox images = {sheetData.filter(
          function(element) {
            return ((!low || element.Price >= Number(low))
              && (!high || element.Price <= Number(high))
              && (selectedBuildings.length === 0 || selectedBuildings.includes(element.Address))
            )
          }
        )}      
        />
      </div>
    </div>
  );
};

export default Home;
