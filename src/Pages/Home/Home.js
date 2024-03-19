import { Fragment, useEffect, useState } from "react";
import { Navbar, HotelCard,Categories } from "../../Components";
import "./Home.css";
import axios from "axios";
import { useCategory } from "../../Context";

export const Home = () => {
  const [hotel, setHotel] = useState([]);
  const {hotelCategory} = useCategory();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://rich-teal-dog-kit.cyclic.app/api/hotels?category=${hotelCategory}`);
        setHotel(data);
        console.log(data)
      } catch (e) {
        console.log(e);
      }
    })();
  }, [hotelCategory]);
  return (
    <Fragment>
      <Navbar />
      <Categories/>
      <main className="main gap-larger">
        {hotel &&
          hotel.map((item) => <HotelCard key={item._id} hotels={item} />)}
      </main>
    </Fragment>
  );
};
