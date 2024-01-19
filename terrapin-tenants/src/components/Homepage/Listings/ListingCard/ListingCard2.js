import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import './ListingCard2.css'
import {Image} from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
const ListingCard2 = ({data}) => {
  function daysAgo(dateString) {
      const givenDate = new Date(dateString);
      const today = new Date();

      // Set hours, minutes, seconds, and milliseconds to 0 for both dates
      today.setHours(0, 0, 0, 0);
      givenDate.setHours(0, 0, 0, 0);

      const timeDifference = today - givenDate;
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference - 1 === 0) {
          return "Updated today";
      } else {
          return `Updated ${Math.abs(daysDifference - 1)} day${(daysDifference - 1) > 1 ? 's' : ''} ago`;
      }
  }

  return (
    <div className="room-card">
      <div className="room-image">
        <img src = {data.LRoom} alt = {data.Address}/>
      </div>
      <div className="room-details">
        <div className="location-time">
          <span className="location">{data.Address}</span>
          {/* <span className="time"> • 4 mins from campus</span> */}
        </div>
        <div className="room-description">
          <p>
          {(data.Description).split(' ').slice(0,25).join(' ') + '...'}
          </p>
        </div>
        {/* <div className="room-info">
          1 room in a 1-BR Apt
        </div>
        <div className="date-range">
          2024/01/08 - 2024/05/31
        </div>
        <div className="updated-time">
          Updated 14 minutes ago
        </div> */}
        <div className="price">
          <span>
            <h6> {daysAgo(data.Date)} </h6>
            <h6>${data.Price} / month</h6>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ListingCard2;
