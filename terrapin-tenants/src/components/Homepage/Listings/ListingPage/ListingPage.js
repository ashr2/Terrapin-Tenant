import React from 'react';
import { useState } from 'react';
import './ListingPage.css'; // Assuming you have a CSS file named Listing.css

const ListingPage = ({data}) => {

  const images = [
    data.Kitchen,
    data.LRoom
  ]
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  return (
    <div className="listing-container">
      <div className="image-gallery">
        <div className="selected-image">
          <img src={images[selectedImage]} alt={`Selected ${selectedImage}`} />
        </div>
          <div className="thumbnail-container">
            {images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                {index === images.length ? (
                  <div className="no-image">No image</div>
                ) : (
                  <img src={img} alt={`Thumbnail ${index}`} />
                )}
              </div>
            ))}
          </div>
      </div>
      <div className="info-container">
        <div class="listing-details">
          <div class="alert alert-primary" style={{marginRight: '3%'}} role="alert">
            {data.Address}
          </div>
          <div class="alert alert-info" style={{marginRight: '3%'}} role="alert">
            {`$${data.Price} / month`}
          </div>
        </div>
        <p>
          {data.Description}
        </p>
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            <h5 class="card-title">Contact Info</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary"> Name: {data.Name} </h6>
            <h6 class="card-subtitle mb-2 text-body-secondary"> Email: {data.Email} </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
