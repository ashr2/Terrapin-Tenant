import React, { useState } from 'react';
import './FilterButton.css'; // Ensure this CSS file exists and is properly linked
import { Form } from 'react-bootstrap';

const Filter = ({buildings, onPriceChange, onAddressChange}) => {
  const [checkedAddresses, setCheckedAddresses] = useState(new Set());
  const [priceRange, setPriceRange] = useState({ low: '', high: '' });

  return (
    <div className="container">
      <Form>
        <div className="price-container">
          <Form.Label className="label">Low</Form.Label>
          <Form.Control 
            className="form-control"
            type="text"
            name="low"
            value={priceRange.low}
            onChange={(e) => onPriceChange(e.target.name, e.target.value)}
          />
          <Form.Label className="label">High</Form.Label>
          <Form.Control 
            className="form-control"
            type="text"
            name="high"
            onChange={(e) => onPriceChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="apartment-options-container">
          <div className="mb-3 apartment-options">
            {buildings.map((building, index) => (
              <div className="apartment-option" key={index}>
                <Form.Check 
                  type="checkbox"
                  onChange={(e) => onAddressChange(building.Address, e.target.checked)}
                  id={`building-${index}`}
                />
                <Form.Label className="apartment-label" htmlFor={`building-${index}`}>
                  {building}
                </Form.Label>
              </div>
            ))}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Filter;

