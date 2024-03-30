import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";

export const SearchStayWithDate = () => {
  return (
    <div className="destination-container">
      <div className="destination-potions d-flex align-center">
        <div className="location-container">
          <label>Where</label>
          <input placeholder="Search Destination" />
        </div>
        <div className="location-container">
          <label>Check In</label>
          <DateSelector />
        </div>
        <div className="location-container">
          <label>Check out</label>
          <DateSelector />
        </div>
        <div className="location-container">
          <label>NO. of Guests</label>
          <input placeholder="Search Destination" />
        </div>
        <div className="search-container d-flex align-center cursor">
          <span class="material-symbols-outlined">search</span>
        </div>
        <span class="material-symbols-outlined">search</span>
      </div>
    </div>
  );
};
