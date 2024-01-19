import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const TenantForm = () => {
  const [tenant, setTenant] = useState({
    name: '',
    pronouns: '',
    email: '',
    year: '',
    description: '',
    instagram: '',
  });

  const handleChange = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "post",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify([[tenant.name, tenant.pronouns, tenant.email, tenant.term, tenant.year, tenant.description, 
            (tenant.instagram).charAt(0) === '@' ? (tenant.instagram).substring(1) : tenant.instagram]])
    };

    fetch("https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Tenants", requestOptions)
      .then(response => response.text())
      .then(result => alert("Form Submitted"))
      .catch(error => alert("Error submitting form, try again"));
  };

  return (
    <div className='container-sm mt-3 form-group-sm'>
      <Form onSubmit={handleSubmit}>
        <div className="mb-3 form-group">
          <label>Preferred Name*:</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required/>
        </div>
        <div className="mb-3 form-group">
          <label>Pronouns:</label>
          <input type="text" className="form-control" name="pronouns" onChange={handleChange}/>
        </div>
        <div className="mb-3 form-group">
          <label>Email*:</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" required/>
        </div>
        <div className="mb-3 form-group">
          <label>Year &#40;Sophomore, Senior, Grad Student, etc.&#41;*:</label>
          <input type="text" className="form-control" name="year" onChange={handleChange} required/>
        </div>
        <div className="mb-3 form-group">
          <label>Sublet Term &#40;Spring 2024, Fall 2025, etc.&#41;*:</label>
          <input type="text" className="form-control" name="term" onChange={handleChange} required/>
        </div>
        <div className="mb-3 form-group">
          <label>Description:</label>
          <textarea className="form-control" name="description" onChange={handleChange} placeholder='Write a little about yourself'></textarea>
        </div>
        <div className="mb-3 form-group">
          <label>Instagram:</label>
          <input type="text" className="form-control" name="instagram" onChange={handleChange} placeholder="@username"/>
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
      </Form>
      <br></br>
      <h6>* indicates a field is required</h6>
    </div>
  );
};

export default TenantForm;
