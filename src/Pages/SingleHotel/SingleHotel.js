import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  HotelDetails,
  HotelImages,
  Navbar,
  FinalPrice,
} from "../../Components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { hotelId } = useParams();
  const [SingleHotel, setSingleHotel] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://rich-teal-dog-kit.cyclic.app/api/hotels/${hotelId}`
        );

        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelId]);

  const { name, country } = SingleHotel;

  return (
    <Fragment>
      <Navbar />
      <main className="single-hotel-page">
        {SingleHotel ? (
          <Fragment>
            <span className="hotel-name-add bellota-text-regular">
              {name}, {country}
            </span>
            <HotelImages SingleHotel={SingleHotel} />
            <div className="below-cont">
              <HotelDetails SingleHotel={SingleHotel} />
              <FinalPrice singleHotel={SingleHotel} />
            </div>
          </Fragment>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </Fragment>
  );
};
