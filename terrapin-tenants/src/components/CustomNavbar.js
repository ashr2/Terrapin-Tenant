import React from 'react';
import { NavItem, Navbar, NavbarBrand, Image} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar style={{ height: '60px', alignItems: 'center' }}>
      <Nav>
        <Image
        src = "https://firebasestorage.googleapis.com/v0/b/leasing-app-375502.appspot.com/o/DALL%C2%B7E%202023-03-22%2010.35.56%20-%20High-end%20premium%20modern%20logo%20of%20the%20letters%20TTT%2C%20featured%20on%2099designs%2C%20red%20and%20gold%20theme.png?alt=media&token=f90b5dce-daeb-4258-af0f-746339c5ce10"
        style={{ height: '50px', objectFit: 'contain' }}
        />
        <NavItem>
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </a>
        </NavItem>
        <li><a href="/view-listings">Browse All Listings</a></li>
        <li><a href="/add-listing">Add Listing</a></li>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;