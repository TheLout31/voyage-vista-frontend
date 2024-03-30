import "./FinalPrice.css";
import { useDate } from "../../Context";
import { DateSelector } from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";

export const FinalPrice = ({ singleHotel }) => {
  const { _id, price, rating } = singleHotel;

  const navigate = useNavigate();

  const { guests, dateDispatch, checkInDate, checkOutDate } = useDate();

  // const { setAlert } = useAlert();

  // const { accessToken, authDispatch } = useAuth();

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  // const handleReserveClick = () => {
  //   if (!checkInDate) {
  //     setAlert({
  //       open: true,
  //       message: "Select a Check-in Date",
  //       type: "info"
  //     })
  //   } else if (!checkOutDate) {
  //     setAlert({
  //       open: true,
  //       message: "Select a Check-out Date",
  //       type: "info"
  //     })
  //   } else if (guests < 1) {
  //     setAlert({
  //       open: true,
  //       message: "Add number of guests",
  //       type: "info"
  //     })
  //   } else if (accessToken) {
  //     navigate(`/confirm-booking/stay/${_id}`);
  //   } else {
  //     authDispatch({
  //       type: "SHOW_AUTH_MODAL"
  //     })
  //   }
  // };

  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating display-container align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large bellota-text-regular">
            Rs. {price}
          </span>{" "}
          night
        </p>
        <span className="rating d-flex align-center text-center">
          <span class="material-symbols-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates display-container">
          <div className="checkin loc-container">
            <label className="label bellota-text-regular">Check in</label>
            <DateSelector checkInType="in" />
          </div>
          <div className="checkin loc-container">
            <label className="label bellota-text-regular">Check Out</label>
            <DateSelector checkInType="out" />
          </div>
        </div>
        <div className="guests gutter-sm bellota-text-regular">
          <p>GUESTS</p>
          {guests <= 0 ? (
            <input
              className="guest-count-input"
              type="number"
              placeholder="Add Guests"
              value={guests}
              onChange={handleGuestChange}
            />
          ) : (
            <span>{guests} guests</span>
          )}
        </div>
      </div>
      <div>
        <button
          className="button btn-reserve btn-dark cursor text-color bellota-text-regular "
          // onClick={handleReserveClick}
        >
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="bellota-text-regular">Rs. {price} x 2 nights</span>
          <span className="bellota-text-regular">Rd. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="bellota-text-regular">Service fee</span>
          <span className="bellota-text-light">Rs. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className=" bellota-text-regular">Total</span>
          <span className="bellota-text-light">Rs. {price * 2 + 200}</span>
        </div>
      </div>
    </div>
  );
};
