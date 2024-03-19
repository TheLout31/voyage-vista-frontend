import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelImages, Navbar } from "../../Components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { hotelId } = useParams();
  console.log(hotelId);
  const [SingleHotel, setSingleHotel] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://rich-teal-dog-kit.cyclic.app/api/hotels/${hotelId}`
        );
        setSingleHotel(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelId]);

  const {name,country} = SingleHotel

  return (
    <Fragment>
      <Navbar />
      <main className="single-hotel-page">
        <span className="hotel-name-add">{name},{country}</span>
        <HotelImages SingleHotel={SingleHotel}/>
      </main>
    </Fragment>
  );
};
