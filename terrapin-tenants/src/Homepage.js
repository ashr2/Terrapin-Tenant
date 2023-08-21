import React from 'react';
import Card from './Card.js';

const Homepage = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="mb-4">Subletting has never been this easy</h1>
                <p className="lead">
                    This site will help you find other UMD students to sublease to/from easily.
                    <br/>
                    There are four sections:
                </p>
            </div>

            <div className="my-4">
                <h3 className="mb-2">Browse All Listings</h3>
                <p>If you are looking for an apartment to sublease, this is where you can look to see all available postings.</p>
            </div>

            <div className="my-4">
                <h3 className="mb-2">Add Listing</h3>
                <p>If you are looking for someone to sublet to, you can fill out this form, and it will instantly appear on our Browse Listings page.</p>
            </div>

            <div className="my-4">
                <h3 className="mb-2">Browse Potential Subletters</h3>
                <p>If you are looking for someone to sublet to, you can view profiles of people who have expressed interest in subletting.</p>
            </div>

            <div className="my-4">
                <h3 className="mb-2">Join Subletter List</h3>
                <p>If you are looking to sublet from someone, you can fill out this form to appear on the Browse Subletters page.</p>
            </div>
        </div>
    );
}

export default Homepage;
