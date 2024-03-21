import "./HotelDetails.css";

export const HotelDetails = ({ SingleHotel }) => {
  const {
    hostName,
    hostJoinedOn,
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
  } = SingleHotel;
  return (
    <div className="hotel-details-container">
      <div className="host-details">
        <p className="font-bold">
          Hosted by {hostName}, Joined on {hostJoinedOn}
        </p>
        <div className="span hotel-room-details">
          {numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds}{" "}
          beds. {numberOfBathrooms} bathrooms.
        </div>
      </div>
      <div className="key-features host-details">
        <div className="gutter-bottom-small">
          <p className=" d-flex align-center gap font-bold">
            <span class="material-symbols-outlined">apps</span>Dedicated
            Workspace
          </p>
          <span className="span">
            A common area with wifi that is well suited for working
          </span>
        </div>
        <div className="gutter-bottom-small">
          <p className=" d-flex align-center gap font-bold">
            <span class="material-symbols-outlined ">apps</span>Great Location
          </p>
          <span className="span">
            80% of recent guests gave the location a 5-star rating
          </span>
        </div>
        <p className=" d-flex align-center gap font-bold">
          <span class="material-symbols-outlined">apps</span>Free cancellation
          before 7 days of booking
        </p>
      </div>
      <div className="amenities-container">
        <p className=" amenities font-bold">What this place offers</p>
        <div className="d-flex gap-xxl">
          <div className="d-flex direction-column">
            <span className="span d-flex align-center gap">
              <span class="material-symbols-outlined">apps</span>Kitchen
            </span>
            <span className="span d-flex align-center gap">
              <span class="material-symbols-outlined">apps</span>Free parking on
              premises
            </span>
            <span className="span d-flex align-center gap">
              <span class="material-symbols-outlined">apps</span>Dedicated
              Workspace
            </span>
          </div>
          <div className="d-flex direction-column">
            <span className="span d-flex align-center gap">
              <span class="material-symbols-outlined">apps</span>Wifi
            </span>
            <span className="span d-flex align-center gap">
              <span class="material-symbols-outlined">apps</span>Washing Machine
            </span>
            <span className="span d-flex align-center gap">
              <span class="material-symbols-outlined">apps</span>Patio or
              Balcony
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
