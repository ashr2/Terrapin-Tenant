import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ListingCard from './ListingCard';
import Image from 'react-bootstrap';
import './App.css'
const Lightbox = ({ images }) => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="image-grid">
      {console.log(images)}
      {images && images.map((image, index) => (
        <img
            className = "m-2 rounded"
            key={index}
            src={image.Kitchen}
            alt={""}
            onClick={() => handleImageClick(image)}
            style={{ cursor: 'pointer', maxWidth: '30%', height: 'auto' }}
        />
      ))}
      
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          {selectedImage && (
            <ListingCard
                data = {selectedImage}
                title = {selectedImage.Name}
                kitchenImageURL={selectedImage.Kitchen}
                livingRoomURL = {selectedImage.LRoom}
                text = {selectedImage.Description}
                buttonLabel={'$'+selectedImage.Price}
                rounded
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Lightbox;
