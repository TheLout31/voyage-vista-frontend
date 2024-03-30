import DatePicker from "react-datepicker";
import "./DateSelector.css"
export const DateSelector = () => {
  return (
    <DatePicker
    className="search-dest input"
      dataFormat="dd/MM/yyyy"
      placeholder="Check In"
      closeOnScroll={true}
    />
  );
};
