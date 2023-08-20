import Card from "./Card";
import React from 'react';
import { useState, useEffect } from "react";
const TenantProfiles = () => {

    const [sheetData, setSheetData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
      const nocodeAPI = "https://v1.nocodeapi.com/ashwathrajesh/google_sheets/jZBNWUfljzRUOzov?tabId=Tenants&perPage=100&page=1";
      
      fetch(nocodeAPI)
        .then(response => response.json())
        .then(data => setSheetData(data.data))
        .catch(error => {
            console.log("Error");
            setError(true);
        });
    }, []);
    
    // Sample data
    const tenants = [
        { id: 1, name: 'John Doe', pronouns: 'he/him', term: "Spring 2024", email: 'john@example.com', year: "Junior", description: "Some quick example text to build on the card title and make up the bulk of the card's content.", instagram: "hello"},
        { id: 2, name: 'Jane Smith', pronouns: 'she/her', email: 'jane@example.com', year: "Freshman", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        // ... add more tenants as needed
    ];

    return (
        <div>
        <div>
            <ul>
                {sheetData.map(tenant => (
                    <div>
                    <h1>{tenant.name}</h1>
                    <Card key = {tenant.id} tenant={tenant}/>
                    </div>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default TenantProfiles;
