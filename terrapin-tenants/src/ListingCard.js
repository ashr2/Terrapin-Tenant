import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter
} from 'mdb-react-ui-kit';
import {Image} from 'react-bootstrap';

function ListingCard({ imageUrl, title, text, buttonLabel }) {
  return (
        <MDBCard
        style ={{
          backgroundColor:"#9C0203",
          color:"#F0E681"
        }}
        >

            <Image
              src={imageUrl }
              alt="First slide"
              fluid
            />

        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            {text}
          </MDBCardText>
          <MDBCardFooter 
          onClick={console.log("Hello")}
          style ={{backgroundColor:"#9C0203", color:"#F0E681", textAlign:"center"}}
          color='danger' href='#'>{buttonLabel}</MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
  );
}

export default ListingCard;
