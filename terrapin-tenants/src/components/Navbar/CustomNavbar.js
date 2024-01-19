import React from 'react';
import { Navbar, NavbarBrand, Image, Nav } from 'react-bootstrap';
import { useState } from 'react';
import './CustomNavbar.css'
const CustomNavbar = () => {
    const [color, changeColor] = useState('red');

    document.body.style.backgroundColor = color;
    return (
        <Navbar style={{ height: '60px', alignItems: 'center'}}>
            <Navbar.Brand href="/" onClick={() => changeColor("#282c34")} className='logo'>
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/leasing-app-375502.appspot.com/o/DALL%C2%B7E%202023-03-22%2010.35.56%20-%20High-end%20premium%20modern%20logo%20of%20the%20letters%20TTT%2C%20featured%20on%2099designs%2C%20red%20and%20gold%20theme.png?alt=media&token=f90b5dce-daeb-4258-af0f-746339c5ce10"
                    style={{ height: '50px', objectFit: 'contain' }}
                />
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="/add-listing">Create Listing</Nav.Link>
                <Nav.Link href="/tenant-profiles">Browse Potential Subletters</Nav.Link>
                <Nav.Link href="/tenant-form">Join Subletter List</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default CustomNavbar;
