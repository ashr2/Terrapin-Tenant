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

function ListingCard({ kitchenImageURL, livingRoomURL, title, text, buttonLabel }) {
  return (
        <MDBCard
        style ={{
          backgroundColor:"#9C0203",
          color:"#F0E681"
        }}
        >
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel"
          onClick={console.log(livingRoomURL)}
        >
          <div className="carousel-inner">
              <div className="carousel-item active" data-interval = "10000">
                <img src={kitchenImageURL} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item" data-interval = "10000">
                <img src={livingRoomURL} className="d-block w-100" alt="..."/>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            {text}
          </MDBCardText>
          <MDBCardFooter
          style ={{backgroundColor:"#9C0203", color:"#F0E681", textAlign:"center"}}
          color='danger' href='#'>{buttonLabel}</MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
  );
}

export default ListingCard;
