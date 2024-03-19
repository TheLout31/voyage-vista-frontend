import "./HotelCard.css";
import { useNavigate } from "react-router-dom";

export const HotelCard = ({ hotels }) => {
  const { _id, name, image, address, state, price, rating } = hotels;

  const navigate = useNavigate();

  const handlehotelCardClick = () => {
    navigate(`/hotels/${_id}`);
  };

  return (
    <div
      className="card-component mainContainer"
      onClick={handlehotelCardClick}
    >
      <div className="card-comp-img">
        <img className="card-top-img" src={image} alt="loading" srcset="" />
      </div>
      <div className="card-badge">new</div>
      <div className="card-comp-contant" style={{ textAlign: "left" }}>
        <h2 className="card-h2">
          {name}, {state}
        </h2>
        <h3 className="card-h3">{address}</h3>
        <span className="price">Rs{price}</span>
        <span>/night</span>
      </div>
      <div className="card-btn-footer">
        <div className="rating-star">
          <div className="rating-box rating-box-sm">
            <div>
              {rating} <i className="bi bi-star-fill"></i>
            </div>
            <div>|</div>
            <div>5</div>
          </div>
        </div>
        <div className="card-icon-btn-right">
          <button>
            <i className="bi bi-heart-fill card-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
