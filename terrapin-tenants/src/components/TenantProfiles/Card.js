import React from "react";

export default function Card({tenant}) {
  const ten = tenant;
  return (
        <div className="card my-3" style={{width: '18rem'}}>
            {console.log(ten)}
            <div className="card-body">
                <h5 className="card-title"> {ten.Name} ({ten.Pronouns}), {ten.Year}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ten.Email}</h6>
                <p className="card-text">{ten.Description}</p>
                {
                    ten.Instagram &&
                    <a href={`https://instagram.com/${ten.Instagram}/`} className="card-link">Instagram: @{ten.Instagram}</a>
                }   
            </div>
        </div>
  );
}
