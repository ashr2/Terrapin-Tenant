import React, { useState } from 'react';
import './SubletForm.css';
import {storage} from './firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {v4} from 'uuid';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
const Home = () => {
  const [isShown, setIsShown] = useState(false);

  const [sublet, setSublet] = useState({
    name: '',
    email: '',
    address: '',
    description: '',
    price: '',
    kitchen_image:null,
    living_room_image: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'living_room_image' || e.target.name === 'kitchen_image') {
      setSublet({ ...sublet, image: e.target.files[0] });  // handle file inputs
    } else {
      setSublet({ ...sublet, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='container-sm mt-3 form-group-sm'>
      <form>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price Range</Accordion.Header>
          <Accordion.Body>
            <div onSubmit={handleSubmit} className="mb-3 form-group">
              <input type="number" className="mb-3 form-control" name="price" onChange={handleChange} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        <button onClick={handleSubmit}type="submit" value="Submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Home;
