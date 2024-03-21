import "./HotelImages.css";

export const HotelImages = ({ SingleHotel }) => {
  
  return (
    <div className="hotel-image-container d-flex gap-small">
      <div className="primary-image-container">
        <img className="primary-img" src={SingleHotel.image} alt="hotel" />
      </div>
      <div className="d-flex wrap gap-small">
        {SingleHotel.imageArr &&
          SingleHotel.imageArr.map((image) => (
            <img key={image} className="hotel-img " src={image} alt="hotel" />
          ))}
      </div>
    </div>
    
  );
};
