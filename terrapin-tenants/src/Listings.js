import React, { useEffect, useState } from 'react';
import { storage } from './firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

const Listings = () => {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
            getDownloadURL(item)
        .then((url) => {
            setImageList((prev) => {
            // only add the url if it's not already in the list
            if (!prev.includes(url)) {
                return [...prev, url];
            } else {
                return prev;
            }
            });
        });
        });
      })
      .catch((error) => {
        console.error("Error getting images from Firebase Storage:", error);
      });
  }, []);

  return (
    <div>
        {imageList.map((url, index) => (
        <img key={index} src={url} alt={`${index + 1}`} />
        ))}
    </div>
  );
};

export default Listings;
