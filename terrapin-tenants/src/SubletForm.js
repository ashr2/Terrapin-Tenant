import React, { useState } from 'react';
import './SubletForm.css';
import {storage} from './firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {v4} from 'uuid';
const SubletForm = () => {
  const [sublet, setSublet] = useState({
    name: '',
    email: '',
    address: '',
    description: '',
    price: '',
    image:null
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setSublet({ ...sublet, image: e.target.files[0] });  // handle file inputs
    } else {
      setSublet({ ...sublet, [e.target.name]: e.target.value });
    }
  };

  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = async () => {
    if (imageUpload == null) return null;
    const imageRef = ref(storage, `images/${sublet.name + imageUpload.name + v4()}`)
    await uploadBytes(imageRef,imageUpload).then(() => {
      alert("Image Uploaded")
    })

    const downloadURL = await getDownloadURL(imageRef)
    return downloadURL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageURL = await uploadImage ();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "post",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify([[sublet.name, sublet.email, sublet.address, sublet.description, sublet.price, imageURL]])
    };

    fetch("https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Sheet1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <div className='container-sm mt-3 form-group-sm'>
      <form>
        <div onSubmit={handleSubmit} className="mb-3 form-group">
          <label> Your Name: </label>
          <input type="text" class="form-control" name="name" onChange={handleChange} />
        </div>
        <div onSubmit={handleSubmit} className="mb-3 form-group">
          <label>Your Email:</label>
          <input type="email" class="form-control" name="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div onSubmit={handleSubmit} className="mb-3 form-group">
          <label> Address of the Sublet:</label>
          <input type="text" className="form-control" name="address" onChange={handleChange} />
        </div>
        <div onSubmit={handleSubmit} className="mb-3 form-group">
          <label> Description of the Sublet: </label>
            <textarea type="text" className="form-control" name="description" onChange={handleChange}/>
        </div>
        <div onSubmit={handleSubmit} className="mb-3 form-group">
          <label> Monthly Price: </label>
            <input type="number" className="mb-3 form-control" name="price" onChange={handleChange} />
        </div>
        <div onSubmit={handleSubmit} className="mb-3 form-group">
          <label className="mb-3 form-control-file">
            Upload An Image Of Your Apartment:
            <input type="file" className="form-control" name="image" onChange={(event) => {setImageUpload(event.target.files[0])}} />
          </label>
        </div>

        <button onClick={handleSubmit}type="submit" value="Submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SubletForm;